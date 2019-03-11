---
---
# Object "device"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Device`](Device.md)</span>

Provides information about the device that executes the application.


Constructor | *private*
Singleton | `device`
Namespace |`tabris`
Direct subclasses | *None*
JSX support | *No*


## Properties

### language


The user language configured on the device as an [RFC 4646](http://tools.ietf.org/html/rfc4646) compliant string. For example `"de"`, `"es-ES"`, etc. This property is also available globally as `navigator.language`.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### model


The name of the device model. For example `"iPad4,1"` or `"Nexus 7"`. This property is also available globally as `device.model`.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### name
<p class="platforms"><span class='ios-tag' title='supported on iOS'>iOS</span></p>

The name of the device set by owner. For example `"John's iPhone"`. This property is also available globally as `device.name`.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### orientation


The device orientation. One of `portrait-primary`, `portrait-secondary`, `landscape-primary`, and `landscape-secondary`.

Type | `'portrait-primary'` \| `'portrait-secondary'` \| `'landscape-primary'` \| `'landscape-secondary'`
Settable | *No*




### platform


The name of the platform. Currently either `"Android"` or `"iOS"`. This property is also available globally as `device.platform`.

Type | `'Android'` \| `'iOS'`
Settable | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### scaleFactor


The ratio between physical pixels and device independent pixels. This property is also available globally as [`window.devicePixelRatio`](https://developer.mozilla.org/en-US/docs/Web/API/Window.devicePixelRatio).

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### screenHeight


The entire height of the device's screen in device independent pixel. Depends on the current device orientation. This property is also available globally as [screen.height](https://developer.mozilla.org/en-US/docs/Web/API/Screen.height).

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### screenWidth


The entire width of the device's screen in device independent pixel. Depends on the current device orientation. This property is also available globally as [screen.width](https://developer.mozilla.org/en-US/docs/Web/API/Screen.width).

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### vendor


The name of the device manufacture. For example `"Samsung"` or `"Apple"`. This property is also available globally as `device.vendor`.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### version


The platform version. On iOS it looks like this: `"8.1.1"`. On Android, the [version code](https://developer.android.com/reference/android/os/Build.VERSION_CODES.html) is returned. This property is also available globally as `device.version`.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *No*




This property can only be set via constructor. Once set, it cannot change anymore.


## Change Events

### orientationChanged

Fired when the `orientation` property has changed and the rotation animation has finished.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*orientation*](#orientation).

