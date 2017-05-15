---
---
# tabris.device

The object `tabris.device` provides information about the device that executes the application. All properties are read-only.
Includes [Events API](Events.md), [Properties API](Properties.md)

Example:

```js
var lang = tabris.device.get("language");

tabris.device.on("change:orientation", function(device, orientation) {
  console.log("new orientation:", orientation);
});
```

## Properties

### language
Type: *string*

The user language configured on the device as an [RFC 4646](http://tools.ietf.org/html/rfc4646) compliant string. For example `"de"`, `"es-ES"`, etc. This property is also available globally as `navigator.language`.
### model

Type: *string*

The name of the device model. For example `"iPad4,1"` or `"Nexus 7"`. This property is also available globally as `device.model`.
### orientation

Type: *string*

The device orientation. One of `portrait-primary`, `portrait-secondary`, `landscape-primary`, and `landscape-secondary`.
### platform

Type: *string*

The name of the platform. Currently either `"Android"` or `"iOS"`. This property is also available globally as `device.platform`.
### scaleFactor

Type: *number*

The ratio between physical pixels and device independent pixels. This property is also available globally as [`window.devicePixelRatio`](https://developer.mozilla.org/en-US/docs/Web/API/Window.devicePixelRatio).
### screenHeight

Type: *number*

The entire height of the device's screen in device independent pixel. Depends on the current device orientation. This property is also available globally as [screen.height](https://developer.mozilla.org/en-US/docs/Web/API/Screen.height).
### screenWidth

Type: *number*

The entire width of the device's screen in device independent pixel. Depends on the current device orientation. This property is also available as globally as [screen.width](https://developer.mozilla.org/en-US/docs/Web/API/Screen.width).
### version

Type: *string*

The platform version. On iOS it lools like this: `"8.1.1"`. On Android, the [version code](https://developer.android.com/reference/android/os/Build.VERSION_CODES.html) is returned. This property is also available globally as `device.version`.

## Events

### "change:orientation" (device, orientation, options)

**Parameters:** 

- device: `tabris.device`
- orientation: *string*
- options: *Object*

Fired when the `orientation` property has changed and the rotation animation has finished.

