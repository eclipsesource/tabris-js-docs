---
---
# Widget "Drawer"

Extends [Composite](Composite.md)

A drawer that can be swiped in from the left edge of the screen. There's only a single instance that can be accessed via `tabris.ui.drawer`. The drawer is locked by default. To use it in an application, set the property `enabled` to `true`. The drawer can contain any kind of widgets.

You can import this type like this:
```js
import {Drawer} from 'tabris';
```
Or reference it directly form anywhere as "`tabris.Drawer`".
## Methods

### close()


**Returns:** *this*

Closes the drawer.

### open()


**Returns:** *this*

Opens the drawer. It may be useful to call this method on first startup, so that users notice the drawer and its contents.


## Properties

### enabled


Type: *boolean*, default: `false`

Controls whether the drawer can be opened and closed. When set to `false`, the drawer cannot be opened and calls to `drawer.open()` will be ignored.


## Events

### close

Fired when the drawer is closed and has reached its resting position.
### enabledChanged

Fired when the [*enabled*](#enabled) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*enabled*](#enabled).


### open

Fired when the drawer is opened and has reached its resting position.



## Example
```js
import {TextView, ui} from 'tabris';

// Enable the drawer and append a widget to it

let drawer = ui.drawer;

drawer.enabled = true;

drawer.on('open', () => console.log('drawer opened'))
  .on('close', () => console.log('drawer closed'));

let arrow = String.fromCharCode(8592);
createLabel(arrow + ' Swipe from left or tap here')
  .on('tap', () => drawer.open())
  .appendTo(ui.contentView);

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
## See also

- [Snippet for creating a Drawer](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta1/snippets/drawer.js)
- [Example for Drawer-based navigation](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta1/snippets/drawer-pages.js)
