---
---
# Class "ActivityIndicator"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`ActivityIndicator`](ActivityIndicator.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\ActivityIndicator.png 2x" src="img\android\ActivityIndicator.png" alt="ActivityIndicator on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\ActivityIndicator.png 2x" src="img\ios\ActivityIndicator.png" alt="ActivityIndicator on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<ActivityIndicator/>`
  * Parent element: [`<Composite/>`](Composite.md) and any widget extending <span style="white-space:nowrap;">[`Composite`](Composite.md)</span>
  * Child elements: *None*
  * Text content: *Not supported*
* Direct subclasses: *None*
--------
A widget representing a spinning indicator for indeterminate loading / processing time.


Example:
```js
import {ActivityIndicator, Button, contentView} from 'tabris';

// Create the activity indicator centered in the page
const activityIndicator = new ActivityIndicator({
  centerX: 0,
  centerY: 0
}).appendTo(contentView);

// Create reload button
const reloadButton = new Button({
  centerX: 0, centerY: 0,
  text: 'Run Task'
}).on('select', () => executeLongRunningTask())
  .appendTo(contentView);

function executeLongRunningTask() {
  // Toggle visibility of elements
  activityIndicator.visible = true;
  reloadButton.visible = false;

  setTimeout(() => {
    // Async action is done
    activityIndicator.visible = false;
    reloadButton.visible = true;
  }, 2500);
}

executeLongRunningTask();
```
See also:

- [Simple ActivityIndicator snippet](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/activityindicator.js)

## Constructor

### new ActivityIndicator(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof ActivityIndicator>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### tintColor


* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



The color of the indicator.


## Change Events

### tintColorChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*tintColor*](#tintColor).

Fired when the [*tintColor*](#tintColor) property has changed.

