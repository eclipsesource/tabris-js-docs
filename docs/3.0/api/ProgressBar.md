---
---
# Class "ProgressBar"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`ProgressBar`](ProgressBar.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\ProgressBar.png 2x" src="img\android\ProgressBar.png" alt="ProgressBar on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\ProgressBar.png 2x" src="img\ios\ProgressBar.png" alt="ProgressBar on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<ProgressBar/>`
  * Parent element: [`<Composite/>`](Composite.md) and any widget extending <span style="white-space:nowrap;">[`Composite`](Composite.md)</span>
  * Child elements: *None*
  * Text content: *Not supported*
* Direct subclasses: *None*
--------
A widget representing a numeric value as a horizontal bar with a growing indicator.


Example:
```js
import {ProgressBar, contentView} from 'tabris';

// A progress bar that is animated using a timer

const progressBar = new ProgressBar({
  left: 15, right: 15, centerY: 0,
  maximum: 300,
  selection: 100
}).appendTo(contentView);

setInterval(() => {
  const selection = progressBar.selection + 1;
  progressBar.selection = selection > 300 ? 0 : selection;
}, 20);
```
See also:

- [Simple ProgressBar snippet](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/progressbar.js)

## Constructor

### new ProgressBar(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof ProgressBar>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### maximum


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Default `100`
* Settable: *Yes*



The value that represents a progress of 100%.

### minimum


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Default `0`
* Settable: *Yes*



The value that represents a progress of 0%.

### selection


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Default `0`
* Settable: *Yes*



The actual progress to be displayed.

### state
<p class="platforms"> < span class = 'android-tag' title = 'supported on Android' > Android < /span></p>

* Type: `'normal'` | `'paused'` | `'error'`
* Default `'normal'`
* Settable: *Yes*



This property affects the color of the progress indicator. Not supported on iOS.

### tintColor


* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



The color used to display the current progress.


## Change Events

### minimumChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*minimum*](#minimum).

Fired when the [*minimum*](#minimum) property has changed.

### maximumChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*maximum*](#maximum).

Fired when the [*maximum*](#maximum) property has changed.

### tintColorChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*tintColor*](#tintColor).

Fired when the [*tintColor*](#tintColor) property has changed.

### selectionChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*selection*](#selection).

Fired when the [*selection*](#selection) property has changed.

### stateChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*state*](#state).

Fired when the [*state*](#state) property has changed.

