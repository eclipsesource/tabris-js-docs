---
---
# StatusBar

Extends [Widget](Widget.md)

The status bar is the area where notifications, status icons and device time are displayed. The singleton instance can be accessed via `ui.statusBar`.

Import this type with "`const {StatusBar} = require('tabris');`"

## Properties

### background


Type: *[Color](../types.md#color)*

Background color of the status bar. Should be used in conjunction with the `theme` property to keep the status bar icons legible.

### displayMode


Type: *string*, supported values: `default`, `hide`, `float`, default: `default`

Controls how the status bar is positioned relative to the `ui.contentView`. The value `default` places the content below the status bar. The `hide` option lets the status bar disappear, making more room for the content. The `float` option lets the content flow underneath the status bar. *On Windows `float` is currently not supported and treated as `hide`.*

### height


**read-only**<br/>
Type: *number*

The height of the status bar in device independent pixel. Can be used in conjunction with the `displayMode` `'float'` to offset the content as to not have it covered by the status bar.<br/>This property can only be set on widget creation. Once set, it cannot be changed anymore.

### theme
<p class="platforms"><span class="ios-tag" title="supported on iOS">iOS</span><span class="android-tag" title="supported on Android">Android</span></p>

Type: *string*, supported values: `default`, `light`, `dark`, default: `default`

Defines the shade used on the status bar. A `dark` theme sets the foreground icons to be of a light color, whereas `light` sets the icons to a dark color. The theme should be set in conjunction with the `background` property for contrast. The value `default` selects the default theme that depends on the device and on the app. Available on iOS and Android 6+.


## Events

### backgroundChanged

Fired when the [*background*](#background) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*background*](#background).


### displayModeChanged

Fired when the [*displayMode*](#displayMode) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*displayMode*](#displayMode).


### tap
<p class="platforms"><span class="ios-tag" title="supported on iOS">iOS</span></p>
Fired when status bar is tapped.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **touches**: *{x: number, y: number}[]*
    Touch coordinates relative to the origin coordinates of the widget.


### themeChanged

Fired when the [*theme*](#theme) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*theme*](#theme).





## Example
```js
const {Picker, TextView, ui} = require('tabris');

const THEMES = ['default', 'light', 'dark'];
const DISPLAY_MODES = ['default', 'float', 'hide'];
const BACKGROUNDS = [ui.statusBar.background, 'rgba(0, 0, 0, 0.25)', 'red', 'green', 'blue'];

createTextView('Theme', 'theme');
createTextView('Display mode', 'displayMode');
createTextView('Background', 'background');
createTextView('Height', 'height');

new Picker({
  left: '#displayMode 16', baseline: '#theme', right: 16,
  itemCount: THEMES.length,
  itemText: index => THEMES[index]
}).on('select', ({index}) => ui.statusBar.theme = THEMES[index])
  .appendTo(ui.contentView);

new Picker({
  left: '#displayMode 16', baseline: '#displayMode', right: 16,
  itemCount: DISPLAY_MODES.length,
  itemText: index => DISPLAY_MODES[index]
}).on('select', ({index}) => ui.statusBar.displayMode = DISPLAY_MODES[index])
  .appendTo(ui.contentView);

new Picker({
  left: '#displayMode 16', baseline: '#background', right: 16,
  itemCount: BACKGROUNDS.length,
  itemText: index => BACKGROUNDS[index]
}).on('select', ({index}) => ui.statusBar.background = BACKGROUNDS[index])
  .appendTo(ui.contentView);

new TextView({
  left: '#displayMode 16', baseline: '#height', right: 16,
  text: ui.statusBar.height
}).appendTo(ui.contentView);

function createTextView(text, id) {
  new TextView({
    id: id,
    left: 16, top: 'prev() 16',
    text: text
  }).appendTo(ui.contentView);
}

ui.statusBar.on('tap', () => console.log('Status bar tapped'));
```
## See also

- [Snippet demonstrating various properties on the `StatusBar`](https://github.com/eclipsesource/tabris-js/tree/v2.5.0/snippets/statusbar.js)
