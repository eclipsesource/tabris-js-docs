---
---
# Object "navigationBar"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`NavigationBar`](NavigationBar.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\NavigationBar.png 2x" src="img\android\NavigationBar.png" alt="NavigationBar on Android"/></div><figcaption>Android</figcaption></figure></div>

* Constructor: *private*
* Singleton: `navigationBar`
* Namespace: `tabris`
* JSX support: *No*
* Direct subclasses: *None*
--------
The navigation bar is the onscreen area where *Back*, *Home* and similar buttons are displayed. The singleton instance can be accessed via `navigationBar` and is only supported on Android.


Example:
```js
import {Picker, TextView, contentView, navigationBar} from 'tabris';

const THEMES = ['default', 'light', 'dark'];
const DISPLAY_MODES = ['default', 'float', 'hide'];
const BACKGROUNDS = [navigationBar.background, 'rgba(0, 0, 0, 0.25)', 'red', 'green', 'blue'];

createTextView('Theme', 'theme');
createTextView('Display mode', 'displayMode');
createTextView('Background', 'background');
createTextView('Height', 'height');

new Picker({
  left: '#displayMode 16', baseline: '#theme', right: 16,
  itemCount: THEMES.length,
  itemText: index => THEMES[index]
}).on('select', ({index}) => navigationBar.theme = THEMES[index])
  .appendTo(contentView);

new Picker({
  left: '#displayMode 16', baseline: '#displayMode', right: 16,
  itemCount: DISPLAY_MODES.length,
  itemText: index => DISPLAY_MODES[index]
}).on('select', ({index}) => navigationBar.displayMode = DISPLAY_MODES[index])
  .appendTo(contentView);

new Picker({
  left: '#displayMode 16', baseline: '#background', right: 16,
  itemCount: BACKGROUNDS.length,
  itemText: index => BACKGROUNDS[index]
}).on('select', ({index}) => navigationBar.background = BACKGROUNDS[index])
  .appendTo(contentView);

new TextView({
  left: '#displayMode 16', baseline: '#height', right: 16,
  text: navigationBar.height
}).appendTo(contentView);

function createTextView(text, id) {
  new TextView({
    id,
    left: 16, top: 'prev() 16',
    text
  }).appendTo(contentView);
}
```
See also:

- [Snippet demonstrating various properties of the `NavigationBar`](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/navigationbar.js)

## Properties

### background
<p class="platforms"> < span class = 'android-tag' title = 'supported on Android' > Android < /span></p>

* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



Background color of the navigation bar.

### displayMode
<p class="platforms"> < span class = 'android-tag' title = 'supported on Android' > Android < /span></p>

* Type: `'default'` | `'hide'` | `'float'`
* Default `'default'`
* Settable: *Yes*



Controls how the navigation bar is positioned relative to the `contentView`. The value `default` places the content above the navigation bar. The `hide` option lets the navigation bar disappear, making room for the content. The `float` option lets the content flow underneath the navigation bar.

### height
<p class="platforms"> < span class = 'android-tag' title = 'supported on Android' > Android < /span></p>

* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *No*



The height of the navigation bar in device independent pixel. Can be used in conjunction with the `displayMode` `float` to offset the content as to not have it covered by the navigation bar.

This property can only be set via constructor or JSX. Once set, it cannot change anymore.

### theme
<p class="platforms"> < span class = 'android-tag' title = 'supported on Android' > Android < /span></p>

* Type: `'default'` | `'light'` | `'dark'`
* Default `'default'`
* Settable: *Yes*



Defines the appearance used on the navigation bar. A `dark` theme sets the foreground navigation icons to be of a light color, whereas `light` sets the icons to a dark color. The theme should be set in conjunction with the `background` property for contrast. The value `default` selects the default theme that depends on the device and on the app. Available on Android 8+.


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

