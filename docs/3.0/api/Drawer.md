---
---
# Object "drawer"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`Composite`](Composite.md)</span> > <span style="white-space:nowrap;">[`ContentView`](ContentView.md)</span> > <span style="white-space:nowrap;">[`Drawer`](Drawer.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\Drawer.png 2x" src="img\android\Drawer.png" alt="Drawer on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\Drawer.png 2x" src="img\ios\Drawer.png" alt="Drawer on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *private*
* Singleton: `drawer`
* Namespace: `tabris`
* JSX support: *No*
* Direct subclasses: *None*
--------
A drawer that can be swiped in from the left edge of the screen. There's only a single instance that can be accessed via `tabris.drawer`. The drawer is locked by default. To use it in an application, set the property `enabled` to `true`. The drawer can contain any kind of widgets.


Example:
```js
import {TextView, contentView, drawer} from 'tabris';

// Enable the drawer and append a widget to it

drawer.enabled = true;

drawer.on('open', () => console.log('drawer opened'))
  .on('close', () => console.log('drawer closed'));

const arrow = String.fromCharCode(8592);
createLabel(arrow + ' Swipe from left or tap here')
  .on('tap', () => drawer.open())
  .appendTo(contentView);

createLabel('Thank you!')
  .on('tap', () => drawer.close())
  .appendTo(drawer);

function createLabel(text) {
  return new TextView({
    left: 10, centerY: 0,
    text,
    font: '22px Arial'
  });
}
```
See also:

- [Snippet for creating a Drawer](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/drawer.js)
- [Example for Drawer-based navigation](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/drawer-pages.js)

## Methods

### close()

* Returns: <span style="white-space:nowrap;">[`this`](#)</span>

Closes the drawer.

### open()

* Returns: <span style="white-space:nowrap;">[`this`](#)</span>

Opens the drawer. It may be useful to call this method on first startup, so that users notice the drawer and its contents.


## Properties

### enabled


* Type: <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
* Default `false`
* Settable: *Yes*



Controls whether the drawer can be opened and closed. When set to `false`, the drawer cannot be opened and calls to `drawer.open()` will be ignored.


## Events

### open

Fired when the drawer is opened and has reached its resting position.

### close

Fired when the drawer is closed and has reached its resting position.

## Change Events

### enabledChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*enabled*](#enabled).

Fired when the [*enabled*](#enabled) property has changed.

