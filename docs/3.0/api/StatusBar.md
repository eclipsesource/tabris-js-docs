---
---
# Object "statusBar"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`StatusBar`](StatusBar.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\StatusBar.png 2x" src="img\android\StatusBar.png" alt="StatusBar on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\StatusBar.png 2x" src="img\ios\StatusBar.png" alt="StatusBar on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *private*
* Singleton: `statusBar`
* Namespace: `tabris`
* JSX support: *No*
* Direct subclasses: *None*
--------
The status bar is the area where notifications, status icons and device time are displayed. The singleton instance can be accessed via `statusBar`.


Example:
```js
import {Picker, TextView, contentView, statusBar} from 'tabris';

const THEMES = ['default', 'light', 'dark'];
const DISPLAY_MODES = ['default', 'float', 'hide'];
const BACKGROUNDS = [statusBar.background, 'rgba(0, 0, 0, 0.25)', 'red', 'green', 'blue'];

createTextView('Theme', 'theme');
createTextView('Display mode', 'displayMode');
createTextView('Background', 'background');
createTextView('Height', 'height');

new Picker({
  left: '#displayMode 16', baseline: '#theme', right: 16,
  itemCount: THEMES.length,
  itemText: index => THEMES[index]
}).on('select', ({index}) => statusBar.theme = THEMES[index])
  .appendTo(contentView);

new Picker({
  left: '#displayMode 16', baseline: '#displayMode', right: 16,
  itemCount: DISPLAY_MODES.length,
  itemText: index => DISPLAY_MODES[index]
}).on('select', ({index}) => statusBar.displayMode = DISPLAY_MODES[index])
  .appendTo(contentView);

new Picker({
  left: '#displayMode 16', baseline: '#background', right: 16,
  itemCount: BACKGROUNDS.length,
  itemText: index => BACKGROUNDS[index]
}).on('select', ({index}) => statusBar.background = BACKGROUNDS[index])
  .appendTo(contentView);

new TextView({
  left: '#displayMode 16', baseline: '#height', right: 16,
  text: statusBar.height
}).appendTo(contentView);

function createTextView(text, id) {
  new TextView({
    id,
    left: 16, top: 'prev() 16',
    text
  }).appendTo(contentView);
}

statusBar.on('tap', () => console.log('Status bar tapped'));
```
See also:

- [Snippet demonstrating various properties on the `StatusBar`](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/statusbar.js)

## Properties

### background


* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



Background color of the status bar. Should be used in conjunction with the `theme` property to keep the status bar icons legible.

### displayMode


* Type: `'default'` | `'hide'` | `'float'`
* Default `'default'`
* Settable: *Yes*



Controls how the status bar is positioned relative to the `contentView`. The value `default` places the content below the status bar. The `hide` option lets the status bar disappear, making more room for the content. The `float` option lets the content flow underneath the status bar.

### height


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *No*



The height of the status bar in device independent pixel. Can be used in conjunction with the `displayMode` `'float'` to offset the content as to not have it covered by the status bar.

This property can only be set via constructor or JSX. Once set, it cannot change anymore.

### theme


* Type: `'default'` | `'light'` | `'dark'`
* Default `'default'`
* Settable: *Yes*



Defines the shade used on the status bar. A `dark` theme sets the foreground icons to be of a light color, whereas `light` sets the icons to a dark color. The theme should be set in conjunction with the `background` property for contrast. The value `default` selects the default theme that depends on the device and on the app. Available on iOS and Android 6+.


## Events

### tap

<p class="platforms"> < span class = 'ios-tag' title = 'supported on iOS' > iOS < /span></p>Parameter|Type|Description
-|-|-
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.

Fired when status bar is tapped.

## Change Events

### themeChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*theme*](#theme).

Fired when the [*theme*](#theme) property has changed.

### displayModeChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*displayMode*](#displayMode).

Fired when the [*displayMode*](#displayMode) property has changed.

### backgroundChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*background*](#background).

Fired when the [*background*](#background) property has changed.

