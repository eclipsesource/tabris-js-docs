---
---
# Button

A push button. Can contain a text or an image.

Android | iOS
--- | ---
![Button on Android](img/android/Button.png) | ![Button on iOS](img/ios/Button.png)

Extends [Widget](Widget.md)

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

### change:alignment

Fired when the [*alignment*](#alignment) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*alignment*](#alignment).


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


### select

Fired when the button is pressed.



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

- [Simple Button snippet](https://github.com/eclipsesource/tabris-js/tree/v2.0.0-rc2/snippets/button.js)
