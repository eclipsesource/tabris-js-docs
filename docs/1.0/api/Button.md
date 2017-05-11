---
---
# Button
A push button. Can contain a text or an image.
Includes [Widget API](Widget.md)

## Properties
### alignment
Type: *string*, supported values: `left`, `right`, `center`, default: `center`

The horizontal alignment of the button text.
### image
Type: *[Image](../types.md#Image)*

An image to be displayed on the button.
### text
Type: *string*

The button's label text.

## Events
### "select" (widget)

**Parameters:** 

- widget: *[Button](Button.md)*

Fired when the button is pressed.


## See also
- [Simple Button snippet](https://github.com/eclipsesource/tabris-js/blob/master/snippets/button/button.js)
