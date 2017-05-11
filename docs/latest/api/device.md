# device

The object `tabris.device` provides information about the device that executes the application.

Example:

```js
var lang = tabris.device.get("language");

tabris.device.on("change:orientation", function(event) {
  console.log("new orientation:", event.value);
});
```

Extends [NativeObject](NativeObject.md)

## Properties

### language

**read-only**<br/>
Type: *string*

The user language configured on the device as an [RFC 4646](http://tools.ietf.org/html/rfc4646) compliant string. For example `"de"`, `"es-ES"`, etc. This property is also available globally as `navigator.language`.

### model

**read-only**<br/>
Type: *string*

The name of the device model. For example `"iPad4,1"` or `"Nexus 7"`. This property is also available globally as `device.model`.

### orientation

**read-only**<br/>
Type: *string*, supported values: `portrait-primary`, `portrait-secondary`, `landscape-primary`, `landscape-secondary`

The device orientation. One of `portrait-primary`, `portrait-secondary`, `landscape-primary`, and `landscape-secondary`.

### platform

Type: *string*, supported values: `Android`, `iOS`, `windows`

The name of the platform. Currently either `"Android"` or `"iOS"`. This property is also available globally as `device.platform`.

### scaleFactor

**read-only**<br/>
Type: *number*

The ratio between physical pixels and device independent pixels. This property is also available globally as [`window.devicePixelRatio`](https://developer.mozilla.org/en-US/docs/Web/API/Window.devicePixelRatio).

### screenHeight

**read-only**<br/>
Type: *number*

The entire height of the device's screen in device independent pixel. Depends on the current device orientation. This property is also available globally as [screen.height](https://developer.mozilla.org/en-US/docs/Web/API/Screen.height).

### screenWidth

**read-only**<br/>
Type: *number*

The entire width of the device's screen in device independent pixel. Depends on the current device orientation. This property is also available as globally as [screen.width](https://developer.mozilla.org/en-US/docs/Web/API/Screen.width).

### version

**read-only**<br/>
Type: *string*

The platform version. On iOS it lools like this: `"8.1.1"`. On Android, the [version code](https://developer.android.com/reference/android/os/Build.VERSION_CODES.html) is returned. This property is also available globally as `device.version`.

### win_keyboardPresent

**read-only**<br/>
Type: *boolean*

Returns `true` if a hardware keyboard is present. The developer may choose to handle some user input differently in that case. Available only on windows.

### win_primaryInput

**read-only**<br/>
Type: *boolean*, supported values: `touch`, `mouse`

On a PC this returns `"touch"` when in tablet mode, otherwise `"mouse"`. On phones this this returns `"mouse"` when displayed on an external display ("Continuum"), otherwise `"touch"`. Available only on windows


## Events

### change:orientation
Fired when the `orientation` property has changed and the rotation animation has finished.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of the `orientation` property.





## Example
```js
// Display available device information

['platform', 'version', 'model', 'language', 'orientation'].forEach(function(property) {
  new tabris.TextView({
    id: property,
    left: 10, right: 10, top: 'prev() 10',
    text: property + ': ' + tabris.device[property]
  }).appendTo(tabris.ui.contentView);
});

tabris.device.on('change:orientation', function({value: orientation}) {
  tabris.ui.contentView.find('#orientation').set('text', 'orientation: ' + orientation);
});
```