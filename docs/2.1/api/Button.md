---
---
# Button

Extends [Widget](Widget.md)

A push button. Can contain a text or an image.

Import this type with "`const {Button} = require('tabris');`"

Android | iOS
--- | ---
![Button on Android](img\android\Button.png) | ![Button on iOS](img\ios\Button.png)

## Properties

### alignment


Type: *string*, supported values: `left`, `right`, `center`, default: `center`

The horizontal alignment of the button text.

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

### alignmentChanged

Fired when the [*alignment*](#alignment) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*alignment*](#alignment).


### imageChanged

Fired when the [*image*](#image) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Image](../types.md#image)*
    The new value of [*image*](#image).


### select

Fired when the button is pressed.
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
const {Button, ui} = require('tabris');

// Create a push button that counts up on selection

let count = 0;

new Button({
  left: 10, top: 10,
  text: 'Button'
}).on('select', ({target}) => target.text = 'Pressed ' + (++count) + ' times')
  .appendTo(ui.contentView);
```
## See also

- [Simple Button snippet](https://github.com/eclipsesource/tabris-js/tree/v2.1.0/snippets/button.js)
