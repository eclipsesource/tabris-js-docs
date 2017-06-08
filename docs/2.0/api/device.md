---
---
# device

Provides information about the device that executes the application.

Example:

```js
let lang = device.language;

device.on("orientationChanged", ({value: orientation}) => console.log("new orientation: ", orientation));
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

The name of the platform. Currently either `"Android"`, `"iOS"`, or `"windows"`. This property is also available globally as `device.platform`.

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

The platform version. On iOS it looks like this: `"8.1.1"`. On Android, the [version code](https://developer.android.com/reference/android/os/Build.VERSION_CODES.html) is returned. This property is also available globally as `device.version`.

### win_keyboardPresent

**read-only**<br/>
Type: *boolean*

Returns `true` if a hardware keyboard is present. The developer may choose to handle some user input differently in that case. Available only on windows.

### win_primaryInput

**read-only**<br/>
Type: *boolean*, supported values: `touch`, `mouse`

On a PC this returns `"touch"` when in tablet mode, otherwise `"mouse"`. On phones this this returns `"mouse"` when displayed on an external display ("Continuum"), otherwise `"touch"`. Available only on windows


## Events

### change:language

Fired when the [*language*](#language) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*language*](#language).


### change:model

Fired when the [*model*](#model) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*model*](#model).


### change:orientation

Fired when the [*orientation*](#orientation) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*orientation*](#orientation).


### change:platform

Fired when the [*platform*](#platform) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*platform*](#platform).


### change:scaleFactor

Fired when the [*scaleFactor*](#scaleFactor) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *number*
    The new value of [*scaleFactor*](#scaleFactor).


### change:screenHeight

Fired when the [*screenHeight*](#screenHeight) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *number*
    The new value of [*screenHeight*](#screenHeight).


### change:screenWidth

Fired when the [*screenWidth*](#screenWidth) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *number*
    The new value of [*screenWidth*](#screenWidth).


### change:version

Fired when the [*version*](#version) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*version*](#version).


### change:win_keyboardPresent

Fired when the [*win_keyboardPresent*](#win_keyboardPresent) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*win_keyboardPresent*](#win_keyboardPresent).


### change:win_primaryInput

Fired when the [*win_primaryInput*](#win_primaryInput) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*win_primaryInput*](#win_primaryInput).


### orientationChanged

Fired when the `orientation` property has changed and the rotation animation has finished.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of the `orientation` property.





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