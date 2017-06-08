---
---
# TextInput

A widget that allows to enter text.

Android | iOS
--- | ---
![TextInput on Android](img/android/TextInput.png) | ![TextInput on iOS](img/ios/TextInput.png)

Extends [Widget](Widget.md)

## Properties

### alignment

Type: *string*, supported values: `left`, `right`, `center`, default: `left`

The horizontal alignment of the text.

### autoCapitalize

Type: *boolean*, default: `false`

Automatically switch to capital letters after every key pressed.

### autoCorrect

Type: *boolean*, default: `false`

Enables the spell checker and auto-correction feature.

### borderColor

Type: *[Color](../types.md#color)*

The color of the border of the TextInput. On iOS this is a rectangular border around the TextInput, on Android it is a single line below the TextInput.

### editable

Type: *boolean*, default: `true`

Whether the text can be edited or not.

### enterKeyType

Type: *string*, supported values: `default`, `done`, `next`, `send`, `search`, `go`, default: `default`

Label or icon to display on the keyboard 'confirmation' key. The key press can be captured via the `accept` event. Setting an `enterKeyType` other than `default` will change the key behavior to not close the keyboard automatically. The developer is able close the keyboard by removing the focus from the `TextInput`.

### fillColor

Type: *[Color](../types.md#color)*

The color of the background of the TextInput - applies only to iOS.

### focused

Type: *boolean*, default: `false`

Reflects whether this widget has the keyboard focus. Setting this property to `true` will focus the widget and open the virtual keyboard, setting it to `false` will remove the focus and hide the virtual keyboard.

### keepFocus

Type: *boolean*, default: `false`

When `true` the `TextInput` will keep its focus, even when tapped outside of the widget bounds.

### keyboard

Type: *string*, supported values: `ascii`, `decimal`, `email`, `number`, `numbersAndPunctuation`, `phone`, `url`, `default`, default: `default`

Selects the keyboard type to use for editing this widget. Has no effect when `type` is set to `multiline`.

### message

Type: *string*

A hint text that is displayed when the input field is empty. Does not apply on iOS when `type` is set to `multiline`.

### text

Type: *string*

The text in the input field.

### textColor

Type: *[Color](../types.md#color)*

The color of the text.

### type

Type: *string*, supported values: `default`, `password`, `search`, `multiline`, default: `default`

The type of the text widget.<br/>This property can only be set on widget creation. Once set, it cannot be changed anymore.


## Events

### accept

Fired when a text input has been finished by pressing the keyboard's Enter key. The label of this key may vary depending on the platform and locale.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **text**: *string*
    The current value of *[text](#text)*.


### blur

Fired when the widget lost focus.
### change:alignment

Fired when the [*alignment*](#alignment) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*alignment*](#alignment).


### change:autoCapitalize

Fired when the [*autoCapitalize*](#autoCapitalize) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*autoCapitalize*](#autoCapitalize).


### change:autoCorrect

Fired when the [*autoCorrect*](#autoCorrect) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*autoCorrect*](#autoCorrect).


### change:borderColor

Fired when the [*borderColor*](#borderColor) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*borderColor*](#borderColor).


### change:editable

Fired when the [*editable*](#editable) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*editable*](#editable).


### change:enterKeyType

Fired when the [*enterKeyType*](#enterKeyType) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*enterKeyType*](#enterKeyType).


### change:fillColor

Fired when the [*fillColor*](#fillColor) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*fillColor*](#fillColor).


### change:focused

Fired when the [*focused*](#focused) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*focused*](#focused).


### change:keepFocus

Fired when the [*keepFocus*](#keepFocus) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*keepFocus*](#keepFocus).


### change:keyboard

Fired when the [*keyboard*](#keyboard) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*keyboard*](#keyboard).


### change:message

Fired when the [*message*](#message) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*message*](#message).


### change:text

Fired when the [*text*](#text) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*text*](#text).


### change:textColor

Fired when the [*textColor*](#textColor) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*textColor*](#textColor).


### focus

Fired when the widget gains focus.
### input

Fired when the text was changed by the user.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **text**: *string*
    The new value of *[text](#text)*.


### textChanged

Fired when the text property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of the `text` property.





## Example

```js
const {TextInput, TextView, ui} = require('tabris');

// Create a text input field with input finished listener

new TextInput({
  top: 20, left: '20%', right: '20%',
  message: 'Type here, then confirm'
}).on('accept', ({text}) => {
  new TextView({
    top: 'prev() 20', left: '20%',
    text: text
  }).appendTo(ui.contentView);
}).appendTo(ui.contentView);
```
## See also

- [Simple TextInput snippet](https://github.com/eclipsesource/tabris-js/tree/v2.0.0-rc2/snippets/textinput.js)
- [Example with Text and other input controls](https://github.com/eclipsesource/tabris-js/tree/v2.0.0-rc2/examples/input/input.js)
