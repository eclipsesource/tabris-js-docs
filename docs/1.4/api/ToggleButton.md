---
---
# ToggleButton
A push button that "snaps in", i.e. it is selected when pressed and deselected when pressed again.
Includes [Widget API](Widget.md)

## Properties
### alignment
Type: *string*, supported values: `left`, `right`, `center`, default: `center`

The horizontal alignment of the button text.
### image
Type: *[Image](../types.md#image)*

An image to be displayed on the button.
### selection
Type: *boolean*, default: `false`

The selection state of the toggle button.
### text
Type: *string*

The button's label text.

## Events
### "change:selection" (widget, selection, options)

**Parameters:**

- widget: *[ToggleButton](ToggleButton.md)*
- selection: *boolean*, the current value of *[selection](#selection)*.
- options: *Object*

Fired when the selection property changes.

### "select" (widget, selection, options)

**Parameters:**

- widget: *[ToggleButton](ToggleButton.md)*
- selection: *boolean*, the current value of *[selection](#selection)*.
- options: *Object*

Fired when the toggle button is selected or deselected by the user.


## See also
- [Simple ToggleButton snippet](https://github.com/eclipsesource/tabris-js/blob/v1.4.0/snippets/togglebutton/togglebutton.js)
