---
---
# StatusBar

The status bar is the area where notifications, status icons and device time are displayed. The singleton instance can be accessed via `ui.statusBar`.

Extends [Widget](Widget.md)

## Properties

### background

Type: *[Color](../types.md#color)*

Background color of the status bar. Should be used in conjunction with the `theme` property to keep the status bar icons legible.

### displayMode

Type: *string*, supported values: `default`, `hide`, `float`, default: `default`

Controls how the status bar is positioned relative to the `ui.contentView`. The value `default` places the content below the status bar. The `hide` option lets the status bar disappear, making more room for the content. The `float` option lets the content flow underneath the status bar.

### height

**read-only**<br/>
Type: *number*

The height of the status bar in device independent pixel. Can be used in conjunction with the `displayMode` `'float'` to offset the content as to not have it covered by the status bar.

### theme

Type: *string*, supported values: `default`, `light`, `dark`, default: `default`

Defines the shade used on the status bar. A `dark` theme sets the foreground icons to be of a light color, whereas `light` sets the icons to a dark color. The theme should be set in conjunction with the `background` property for contrast. The value `default` selects the default theme that depends on the device and on the app. Available on iOS and Android 6+.


## Example

```js
const {Picker, TextView, ui} = require('tabris');

const THEMES = ['default', 'light', 'dark'];
const DISPLAY_MODES = ['default', 'float', 'hide'];
const BACKGROUNDS = [ui.statusBar.background, 'rgba(0, 0, 0, 0.25)', 'red', 'green', 'blue'];

createTextView('Theme');

new Picker({
  left: '#displayMode 16', baseline: 'prev()', right: 16,
  itemCount: THEMES.length,
  itemText: index => THEMES[index]
}).on('select', ({index}) => ui.statusBar.theme = THEMES[index])
  .appendTo(ui.contentView);

createTextView('Display mode', 'displayMode');

new Picker({
  left: '#displayMode 16', baseline: 'prev()', right: 16,
  itemCount: DISPLAY_MODES.length,
  itemText: index => DISPLAY_MODES[index]
}).on('select', ({index}) => ui.statusBar.displayMode = DISPLAY_MODES[index])
  .appendTo(ui.contentView);

createTextView('Background');

new Picker({
  left: '#displayMode 16', baseline: 'prev()', right: 16,
  itemCount: BACKGROUNDS.length,
  itemText: index => BACKGROUNDS[index]
}).on('select', ({index}) => ui.statusBar.background = BACKGROUNDS[index])
  .appendTo(ui.contentView);

createTextView('Height');

new TextView({
  left: '#displayMode 16', baseline: 'prev()', right: 16,
  text: ui.statusBar.height
}).appendTo(ui.contentView);

function createTextView(text, id) {
  new TextView({
    id: id,
    left: 16, top: 'prev() 16',
    text: text
  }).appendTo(ui.contentView);
}
```
## See also

- [Snippet demonstrating various properties on the `StatusBar`](https://github.com/eclipsesource/tabris-js/tree/v2.0.0-rc2/snippets/statusbar.js)
