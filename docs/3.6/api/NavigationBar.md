---
---
# Object "navigationBar"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a> > <a href="#" >NavigationBar</a>

The navigation bar is the onscreen area where *Back*, *Home* and similar buttons are displayed. The singleton instance can be accessed via `navigationBar` and is only supported on Android.


<div class="tabris-image"><figure><div><img srcset="img/android/NavigationBar.png 2x" src="img/android/NavigationBar.png" alt="NavigationBar on Android"/></div><figcaption>Android</figcaption></figure></div>

Type: | <code style="white-space: nowrap">NavigationBar extends <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a></code>
Constructor: | private
Singleton: | `navigationBar`
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


## Examples
### JavaScript


```js
import {navigationBar} from 'tabris';

navigationBar.background = 'red';
navigationBar.displayMode = 'float';
```


See also:
  
[<span class='language jsx'>JSX</span> Demonstrating various properties of the `NavigationBar`](https://playground.tabris.com/?gitref=v3.6.1&snippet=navigationbar.jsx)

## Properties

### background
<p class="platforms"><span class='android-tag' title='supported on Android'>Android</span></p>

Background color of the navigation bar.

Type: |<code style="white-space: nowrap"><a href="../types.html#colorvalue" title="ColorValue Type Reference">ColorValue</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`backgroundChanged`](#backgroundchanged)




### displayMode
<p class="platforms"><span class='android-tag' title='supported on Android'>Android</span></p>

Controls how the navigation bar is positioned relative to the `contentView`. The value `default` places the content above the navigation bar. The `hide` option lets the navigation bar disappear, making room for the content. The `float` option lets the content flow underneath the navigation bar.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'default'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'hide'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'float'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'default'</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`displayModeChanged`](#displaymodechanged)




### height
<p class="platforms"><span class='android-tag' title='supported on Android'>Android</span></p>

The height of the navigation bar in device independent pixel. Can be used in conjunction with the `displayMode` `float` to offset the content as to not have it covered by the navigation bar.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | Not supported




### theme
<p class="platforms"><span class='android-tag' title='supported on Android'>Android</span></p>

Defines the appearance used on the navigation bar. A `dark` theme sets the foreground navigation icons to be of a light color, whereas `light` sets the icons to a dark color. The theme should be set in conjunction with the `background` property for contrast. The value `default` selects the default theme that depends on the device and on the app. Available on Android 8+.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'default'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'light'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'dark'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'default'</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`themeChanged`](#themechanged)





## Change Events

### themeChanged

Fired when the [theme](#theme) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >NavigationBar</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The new value of [theme](#theme).

### displayModeChanged

Fired when the [displayMode](#displaymode) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >NavigationBar</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The new value of [displayMode](#displaymode).

### backgroundChanged

Fired when the [background](#background) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >NavigationBar</a>, <a href="../types.html#colorvalue" title="ColorValue Type Reference">ColorValue</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="../types.html#colorvalue" title="ColorValue Type Reference">ColorValue</a></code> | The new value of [background](#background).

