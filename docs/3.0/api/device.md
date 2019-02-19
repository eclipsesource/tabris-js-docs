---
---
# Object "device"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Device`](Device.md)</span>

* Constructor: *private*
* Singleton: `device`
* Namespace: `tabris`
* JSX support: *No*
* Direct subclasses: *None*
--------
Provides information about the device that executes the application.


Example:

```js
let lang = device.language;

device.on("orientationChanged", ({value: orientation}) => console.log("new orientation: ", orientation));
```

Example:
```js
import {TextView, device, contentView} from 'tabris';

// Display available device information

['platform', 'version', 'model', 'vendor', 'name', 'language',
  'orientation', 'screenWidth', 'screenHeight', 'scaleFactor']
  .forEach((property) => {
    new TextView({
      id: property,
      left: 10, right: 10, top: 'prev() 10',
      text: property + ': ' + device[property]
    }).appendTo(contentView);
  });

device.on('orientationChanged', ({value: orientation}) => {
  contentView.find('#orientation').set({text: 'orientation: ' + orientation});
});
```
## Properties

### language


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *No*



The user language configured on the device as an [RFC 4646](http://tools.ietf.org/html/rfc4646) compliant string. For example `"de"`, `"es-ES"`, etc. This property is also available globally as `navigator.language`.

This property can only be set via constructor. Once set, it cannot change anymore.

### model


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *No*



The name of the device model. For example `"iPad4,1"` or `"Nexus 7"`. This property is also available globally as `device.model`.

This property can only be set via constructor. Once set, it cannot change anymore.

### name
<p class="platforms"> < span class = 'ios-tag' title = 'supported on iOS' > iOS < /span></p>

* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *No*



The name of the device set by owner. For example `"John's iPhone"`. This property is also available globally as `device.name`.

This property can only be set via constructor. Once set, it cannot change anymore.

### orientation


* Type: `'portrait-primary'` | `'portrait-secondary'` | `'landscape-primary'` | `'landscape-secondary'`
* Settable: *No*



The device orientation. One of `portrait-primary`, `portrait-secondary`, `landscape-primary`, and `landscape-secondary`.

### platform


* Type: `'Android'` | `'iOS'`
* Settable: *On creation*



The name of the platform. Either `"Android"` or `"iOS"`. This property is also available globally as `device.platform`.

This property can only be set via constructor. Once set, it cannot change anymore.

### scaleFactor


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *No*



The ratio between physical pixels and device independent pixels. This property is also available globally as [`window.devicePixelRatio`](https://developer.mozilla.org/en-US/docs/Web/API/Window.devicePixelRatio).

This property can only be set via constructor. Once set, it cannot change anymore.

### screenHeight


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *No*



The entire height of the device's screen in device independent pixel. Depends on the current device orientation. This property is also available globally as [screen.height](https://developer.mozilla.org/en-US/docs/Web/API/Screen.height).

This property can only be set via constructor. Once set, it cannot change anymore.

### screenWidth


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *No*



The entire width of the device's screen in device independent pixel. Depends on the current device orientation. This property is also available globally as [screen.width](https://developer.mozilla.org/en-US/docs/Web/API/Screen.width).

This property can only be set via constructor. Once set, it cannot change anymore.

### vendor


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *No*



The name of the device manufacture. For example `"Samsung"` or `"Apple"`. This property is also available globally as `device.vendor`.

This property can only be set via constructor. Once set, it cannot change anymore.

### version


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *No*



The platform version. On iOS it looks like this: `"8.1.1"`. On Android, the [version code](https://developer.android.com/reference/android/os/Build.VERSION_CODES.html) is returned. This property is also available globally as `device.version`.

This property can only be set via constructor. Once set, it cannot change anymore.


## Change Events

### orientationChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*orientation*](#orientation).

Fired when the `orientation` property has changed and the rotation animation has finished.

