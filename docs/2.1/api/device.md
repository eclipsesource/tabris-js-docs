---
---
# device

Extends [NativeObject](NativeObject.md)

Provides information about the device that executes the application.

Import this object with "`const {device} = require('tabris');`"

Example:

```js
let lang = device.language;

device.on("orientationChanged", ({value: orientation}) => console.log("new orientation: ", orientation));
```

## Properties

### language


**read-only**<br/>
Type: *string*

The user language configured on the device as an [RFC 4646](http://tools.ietf.org/html/rfc4646) compliant string. For example `"de"`, `"es-ES"`, etc. This property is also available globally as `navigator.language`.<br/>This property can only be set on widget creation. Once set, it cannot be changed anymore.

### model


**read-only**<br/>
Type: *string*

The name of the device model. For example `"iPad4,1"` or `"Nexus 7"`. This property is also available globally as `device.model`.<br/>This property can only be set on widget creation. Once set, it cannot be changed anymore.

### orientation


**read-only**<br/>
Type: *string*, supported values: `portrait-primary`, `portrait-secondary`, `landscape-primary`, `landscape-secondary`

The device orientation. One of `portrait-primary`, `portrait-secondary`, `landscape-primary`, and `landscape-secondary`.

### platform


Type: *string*, supported values: `Android`, `iOS`, `windows`

The name of the platform. Currently either `"Android"`, `"iOS"`, or `"windows"`. This property is also available globally as `device.platform`.<br/>This property can only be set on widget creation. Once set, it cannot be changed anymore.

### scaleFactor


**read-only**<br/>
Type: *number*

The ratio between physical pixels and device independent pixels. This property is also available globally as [`window.devicePixelRatio`](https://developer.mozilla.org/en-US/docs/Web/API/Window.devicePixelRatio).<br/>This property can only be set on widget creation. Once set, it cannot be changed anymore.

### screenHeight


**read-only**<br/>
Type: *number*

The entire height of the device's screen in device independent pixel. Depends on the current device orientation. This property is also available globally as [screen.height](https://developer.mozilla.org/en-US/docs/Web/API/Screen.height).<br/>This property can only be set on widget creation. Once set, it cannot be changed anymore.

### screenWidth


**read-only**<br/>
Type: *number*

The entire width of the device's screen in device independent pixel. Depends on the current device orientation. This property is also available as globally as [screen.width](https://developer.mozilla.org/en-US/docs/Web/API/Screen.width).<br/>This property can only be set on widget creation. Once set, it cannot be changed anymore.

### version


**read-only**<br/>
Type: *string*

The platform version. On iOS it looks like this: `"8.1.1"`. On Android, the [version code](https://developer.android.com/reference/android/os/Build.VERSION_CODES.html) is returned. This property is also available globally as `device.version`.<br/>This property can only be set on widget creation. Once set, it cannot be changed anymore.

### win_keyboardPresent
<p class="platforms"><span class="windows-tag" title="supported on Windows 10">Windows 10</span></p>

**read-only**<br/>
Type: *boolean*

Returns `true` if a hardware keyboard is present. The developer may choose to handle some user input differently in that case. Available only on windows.

### win_primaryInput
<p class="platforms"><span class="windows-tag" title="supported on Windows 10">Windows 10</span></p>

**read-only**<br/>
Type: *boolean*, supported values: `touch`, `mouse`

On a PC this returns `"touch"` when in tablet mode, otherwise `"mouse"`. On phones this this returns `"mouse"` when displayed on an external display ("Continuum"), otherwise `"touch"`. Available only on windows


## Events

### orientationChanged

Fired when the `orientation` property has changed and the rotation animation has finished.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*orientation*](#orientation).


### win_keyboardPresentChanged

Fired when the [*win_keyboardPresent*](#win_keyboardPresent) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*win_keyboardPresent*](#win_keyboardPresent).


### win_primaryInputChanged

Fired when the [*win_primaryInput*](#win_primaryInput) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*win_primaryInput*](#win_primaryInput).





## Example
```js
const {TextView, device, ui} = require('tabris');

// Display available device information

['platform', 'version', 'model', 'language', 'orientation'].forEach((property) => {
  new TextView({
    id: property,
    left: 10, right: 10, top: 'prev() 10',
    text: property + ': ' + device[property]
  }).appendTo(ui.contentView);
});

device.on('orientationChanged', ({value: orientation}) => {
  ui.contentView.find('#orientation').set('text', 'orientation: ' + orientation);
});
```