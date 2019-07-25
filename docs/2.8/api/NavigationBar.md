---
---
# NavigationBar

Extends [Widget](Widget.md)

The navigation bar is the onscreen area where *Back*, *Home* and similar buttons are displayed. The singleton instance can be accessed via `ui.navigationBar` and is only supported on Android.

Import this type with "`const {NavigationBar} = require('tabris');`"

## Properties

### background
<p class="platforms"><span class="android-tag" title="supported on Android">Android</span></p>

Type: *[Color](../types.md#color)*

Background color of the navigation bar.

### displayMode
<p class="platforms"><span class="android-tag" title="supported on Android">Android</span></p>

Type: *string*, supported values: `default`, `hide`, `float`, default: `default`

Controls how the navigation bar is positioned relative to the `ui.contentView`. The value `default` places the content above the navigation bar. The `hide` option lets the navigation bar disappear, making room for the content. The `float` option lets the content flow underneath the navigation bar.

### height
<p class="platforms"><span class="android-tag" title="supported on Android">Android</span></p>

**read-only**<br/>
Type: *number*

The height of the navigation bar in device independent pixel. Can be used in conjunction with the `displayMode` `float` to offset the content as to not have it covered by the navigation bar.<br/>This property can only be set on widget creation. Once set, it cannot be changed anymore.

### theme
<p class="platforms"><span class="android-tag" title="supported on Android">Android</span></p>

Type: *string*, supported values: `default`, `light`, `dark`, default: `default`

Defines the appearance used on the navigation bar. A `dark` theme sets the foreground navigation icons to be of a light color, whereas `light` sets the icons to a dark color. The theme should be set in conjunction with the `background` property for contrast. The value `default` selects the default theme that depends on the device and on the app. Available on Android 8+.


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
const BACKGROUNDS = [ui.navigationBar.background, 'rgba(0, 0, 0, 0.25)', 'red', 'green', 'blue'];

createTextView('Theme', 'theme');
createTextView('Display mode', 'displayMode');
createTextView('Background', 'background');
createTextView('Height', 'height');

new Picker({
  left: '#displayMode 16', baseline: '#theme', right: 16,
  itemCount: THEMES.length,
  itemText: index => THEMES[index]
}).on('select', ({index}) => ui.navigationBar.theme = THEMES[index])
  .appendTo(ui.contentView);

new Picker({
  left: '#displayMode 16', baseline: '#displayMode', right: 16,
  itemCount: DISPLAY_MODES.length,
  itemText: index => DISPLAY_MODES[index]
}).on('select', ({index}) => ui.navigationBar.displayMode = DISPLAY_MODES[index])
  .appendTo(ui.contentView);

new Picker({
  left: '#displayMode 16', baseline: '#background', right: 16,
  itemCount: BACKGROUNDS.length,
  itemText: index => BACKGROUNDS[index]
}).on('select', ({index}) => ui.navigationBar.background = BACKGROUNDS[index])
  .appendTo(ui.contentView);

new TextView({
  left: '#displayMode 16', baseline: '#height', right: 16,
  text: ui.navigationBar.height
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

- [Snippet demonstrating various properties of the `NavigationBar`](https://github.com/eclipsesource/tabris-js/tree/v2.8.0/snippets/navigationbar.js)
