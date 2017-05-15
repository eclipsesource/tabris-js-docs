---
---
# TextInput
A widget that allows to enter text.
Includes [Widget API](Widget.md)

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
### editable
Type: *boolean*

### keyboard
Type: *string*, supported values: `ascii`, `decimal`, `email`, `number`, `numbersAndPunctuation`, `phone`, `url`, `default`, default: `default`

Selects the keyboard type to use for editing this widget.
### message
Type: *string*

A hint text that is displayed when the input field is empty.
### text
Type: *string*

The text in the input field.
### type
Type: *string*, supported values: `default`, `password`, `search`, `multiline`, default: `default`

The type of the text widget.<br/>This property can only be set in the `tabris.create` method. It cannot be changed after widget creation.

## Events
### "accept" (widget, text, options)

**Parameters:**

- widget: *[TextInput](TextInput.md)*
- text: *string*, the current value of *[text](#text)*.
- options: *Object*

Fired when a text input has been finished by pressing the keyboard's Enter key. The label of this key may vary depending on the platform and locale.

### "blur" (widget)

**Parameters:**

- widget: *[TextInput](TextInput.md)*

Fired when the widget lost focus.

### "change:text" (widget, text, options)

**Parameters:**

- widget: *[TextInput](TextInput.md)*
- text: *string*, the new value of *[text](#text)*.
- options: *Object*

Fired when the text property changes.

### "focus" (widget)

**Parameters:**

- widget: *[TextInput](TextInput.md)*

Fired when the widget gains focus.

### "input" (widget, text, options)

**Parameters:**

- widget: *[TextInput](TextInput.md)*
- text: *string*, the new value of *[text](#text)*.
- options: *Object*

Fired when the text was changed by the user.


## See also
- [Simple TextInput snippet](https://github.com/eclipsesource/tabris-js/blob/v1.3.0/snippets/textinput/textinput.js)
- [Example with Text and other input controls](https://github.com/eclipsesource/tabris-js/blob/v1.3.0/examples/input/input.js)
