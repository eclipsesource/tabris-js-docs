---
---
# RadioButton

A radio button. Selecting a radio button de-selects all its siblings (i.e. all radio buttons within the same parent).
Includes [Widget API](Widget.md)

## Properties

### selection
Type: *boolean*, default: `false`

The checked state of the radio button.
### text

Type: *string*

The label text of the radio button.

## Events

### "change:selection" (widget, selection, options)

**Parameters:**

- widget: *[RadioButton](RadioButton.md)*
- selection: *boolean*, the new value of *[selection](#selection)*.
- options: *Object*

Fired when the selection property changes.

### "select" (widget, selection, options)

**Parameters:**

- widget: *[RadioButton](RadioButton.md)*
- selection: *boolean*, the new value of *[selection](#selection)*.
- options: *Object*

Fired when the radio button is selected or deselected by the user.


## See also

- [Simple RadioButton snippet](https://github.com/eclipsesource/tabris-js/blob/v1.2.0/snippets/radiobutton/radiobutton.js)
