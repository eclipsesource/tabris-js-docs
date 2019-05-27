---
---
# Object "navigationBar"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`NavigationBar`](NavigationBar.md)</span>

The navigation bar is the onscreen area where *Back*, *Home* and similar buttons are displayed. The singleton instance can be accessed via `navigationBar` and is only supported on Android.


<div class="tabris-image"><figure><div><img srcset="img/android/NavigationBar.png 2x" src="img/android/NavigationBar.png" alt="NavigationBar on Android"/></div><figcaption>Android</figcaption></figure></div>

Constructor | *private*
Singleton | `navigationBar`
Namespace |`tabris`
Direct subclasses | *None*
JSX support | *No*


## Example
```js
import {navigationBar} from 'tabris';

navigationBar.background = 'red';
navigationBar.displayMode = 'float';
```

See also:

- [Demo JavaScript/JSX Snippet: Demonstrating various properties of the `NavigationBar`](https://playground.tabris.com/?gitref=v3.0.0&snippet=navigationbar.jsx)

## Properties

### background
<p class="platforms"><span class='android-tag' title='supported on Android'>Android</span></p>

Background color of the navigation bar.

Type | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
Settable | *Yes*
Change events | *Yes*




### displayMode
<p class="platforms"><span class='android-tag' title='supported on Android'>Android</span></p>

Controls how the navigation bar is positioned relative to the `contentView`. The value `default` places the content above the navigation bar. The `hide` option lets the navigation bar disappear, making room for the content. The `float` option lets the content flow underneath the navigation bar.

Type | `'default'` \| `'hide'` \| `'float'`
Default | `'default'`
Settable | *Yes*
Change events | *Yes*




### height
<p class="platforms"><span class='android-tag' title='supported on Android'>Android</span></p>

The height of the navigation bar in device independent pixel. Can be used in conjunction with the `displayMode` `float` to offset the content as to not have it covered by the navigation bar.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### theme
<p class="platforms"><span class='android-tag' title='supported on Android'>Android</span></p>

Defines the appearance used on the navigation bar. A `dark` theme sets the foreground navigation icons to be of a light color, whereas `light` sets the icons to a dark color. The theme should be set in conjunction with the `background` property for contrast. The value `default` selects the default theme that depends on the device and on the app. Available on Android 8+.

Type | `'default'` \| `'light'` \| `'dark'`
Default | `'default'`
Settable | *Yes*
Change events | *Yes*





## Change Events

### themeChanged

Fired when the [*theme*](#theme) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*theme*](#theme).

### displayModeChanged

Fired when the [*displayMode*](#displaymode) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*displayMode*](#displaymode).

### backgroundChanged

Fired when the [*background*](#background) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*background*](#background).

