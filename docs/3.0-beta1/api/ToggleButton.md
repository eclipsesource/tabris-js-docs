---
---
# Widget "ToggleButton"

Extends [Widget](Widget.md)

A push button that "snaps in", i.e. it is selected when pressed and deselected when pressed again.

You can import this type like this:
```js
import {ToggleButton} from 'tabris';
```
Or reference it directly form anywhere as "`tabris.ToggleButton`".
Android | iOS
--- | ---
![ToggleButton on Android](img/android/ToggleButton.png) | ![ToggleButton on iOS](img/ios/ToggleButton.png)

## Properties

### alignment


Type: *string*, supported values: `left`, `right`, `center`, default: `center`

The horizontal alignment of the button text.

### checked


Type: *boolean*, default: `false`

The checked state of the toggle button.

### font


Type: *[Font](../types.md#font)*

The font used for the text.

### image


Type: *[Image](../types.md#image)*

An image to be displayed on the button.

### text


Type: *string*

The button's label text.

In JSX the text content of the *ToggleButton* element is mapped to this property. Therefore `<ToggleButton>Hello World</ToggleButton>` would be the same as `<ToggleButton text='Hello World' />`.

### textColor


Type: *[Color](../types.md#color)*

The color of the text.


## Events

### alignmentChanged

Fired when the [*alignment*](#alignment) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*alignment*](#alignment).


### checkedChanged

Fired when the [*checked*](#checked) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*checked*](#checked).


### fontChanged

Fired when the [*font*](#font) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Font](../types.md#font)*
    The new value of [*font*](#font).


### imageChanged

Fired when the [*image*](#image) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Image](../types.md#image)*
    The new value of [*image*](#image).


### select

Fired when the toggle button is selected or deselected by the user.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **checked**: *boolean*
    The current value of *[checked](#checked)*.


### textChanged

Fired when the [*text*](#text) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*text*](#text).


### textColorChanged

Fired when the [*textColor*](#textColor) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*textColor*](#textColor).





## Example
```js
import {ToggleButton, ui} from 'tabris';

// Create a toggle button with a checked handler

new ToggleButton({
  left: 10, top: 10,
  text: 'checked',
  checked: true
}).on('checkedChanged', event => event.target.text = event.value ? 'checked' : 'not checked')
  .appendTo(ui.contentView);
```
## See also

- [Simple ToggleButton snippet](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta1/snippets/togglebutton.js)
