---
---
# ToggleButton

A push button that "snaps in", i.e. it is selected when pressed and deselected when pressed again.

Android | iOS
--- | ---
![ToggleButton on Android](img/android/ToggleButton.png) | ![ToggleButton on iOS](img/ios/ToggleButton.png)

Extends [Widget](Widget.md)

## Properties

### alignment

Type: *string*, supported values: `left`, `right`, `center`, default: `center`

The horizontal alignment of the button text.

### checked

Type: *boolean*, default: `false`

The checked state of the toggle button.

### image

Type: *[Image](../types.md#image)*

An image to be displayed on the button.

### text

Type: *string*

The button's label text.

### textColor

Type: *[Color](../types.md#color)*

The color of the text.


## Events

### change:alignment

Fired when the [*alignment*](#alignment) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*alignment*](#alignment).


### change:checked

Fired when the [*checked*](#checked) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*checked*](#checked).


### change:image

Fired when the [*image*](#image) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *[Image](../types.md#image)*
    The new value of [*image*](#image).


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


### checkedChanged

Fired when the checked property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of the `checked` property.


### select

Fired when the toggle button is selected or deselected by the user.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **checked**: *boolean*
    The current value of *[checked](#checked)*.





## Example

```js
const {ToggleButton, ui} = require('tabris');

// Create a toggle button with a checked handler

new ToggleButton({
  left: 10, top: 10,
  text: 'checked',
  checked: true
}).on('checkedChanged', event => event.target.text = event.value ? 'checked' : 'not checked')
  .appendTo(ui.contentView);
```
## See also

- [Simple ToggleButton snippet](https://github.com/eclipsesource/tabris-js/tree/v2.0.0-rc2/snippets/togglebutton.js)
