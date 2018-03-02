---
---
# Drawer

Extends [Composite](Composite.md)

A drawer that can be swiped in from the left edge of the screen. There's only a single instance that can be accessed via `tabris.ui.drawer`. The drawer is locked by default. To use it in an application, set the property `locked` to `false`. The drawer can contain any kind of widgets.

Import this type with "`const {Drawer} = require('tabris');`"

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

### win_displayMode
<p class="platforms"><span class="windows-tag" title="supported on Windows 10">Windows 10</span></p>

Type: *string*, supported values: `overlay`, `compactOverlay`, `inline`, `compactInline`, default: `overlay`

Controls how the drawer integrates into its targetView. 

- `overlay` completely hides the drawer when closed and overlays other content when opened.
- `compactOverlay` makes the drawer partially visible when closed so a 48px wide bar remains side-by-side with the targetViews other content. If a drawer-action controls the drawer it is placed inside this bar. When the drawer is opened its remaining width overlays the targetViews other content.
- `inline` completely hides the drawer when closed, but shows it side-by-side with the targetView when opened. The drawer does not close automatically in this mode.
- `compactInline` makes the drawer partially visible when closed (like `compactOverlay`), but shows it side-by-side with the targetView when opened (like `inline`).

Available only on windows.

### win_targetView
<p class="platforms"><span class="windows-tag" title="supported on Windows 10">Windows 10</span></p>

Type: *[Widget](Widget.md)*, default: ``tabris.ui``

This property may be set to an instance of NavigationView to make its drawer-action open/close the drawer. It also integrates the drawer into the NavigationView layout. When not set to NavigationView instance the property defaults to `tabris.ui`. Other widgets are not supported. Available only on Windows.


## Events

### close
<p class="platforms"><span class="ios-tag" title="supported on iOS">iOS</span><span class="android-tag" title="supported on Android">Android</span></p>
Fired when the drawer is closed and has reached its resting position.
### enabledChanged

Fired when the [*enabled*](#enabled) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*enabled*](#enabled).


### open
<p class="platforms"><span class="ios-tag" title="supported on iOS">iOS</span><span class="android-tag" title="supported on Android">Android</span></p>
Fired when the drawer is opened and has reached its resting position.
### win_displayModeChanged

Fired when the [*win_displayMode*](#win_displayMode) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*win_displayMode*](#win_displayMode).


### win_targetViewChanged

Fired when the [*win_targetView*](#win_targetView) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Widget](Widget.md)*
    The new value of [*win_targetView*](#win_targetView).





## Example
```js
const {TextView, ui} = require('tabris');

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
    text: text,
    font: '22px Arial'
  });
}
```
## See also

- [Snippet for creating a Drawer](https://github.com/eclipsesource/tabris-js/tree/v2.4.0/snippets/drawer.js)
- [Example for Drawer-based navigation](https://github.com/eclipsesource/tabris-js/tree/v2.4.0/snippets/drawer-pages.js)
