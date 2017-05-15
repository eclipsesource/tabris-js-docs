---
---
# CheckBox

A check box widget.
Includes [Widget API](Widget.md)

## Properties

### selection
Type: *boolean*, default: `false`

The checked state of the check box.
### text

Type: *string*

The label text of the check box.

## Events

### "change:selection" (widget, selection, options)

**Parameters:**

- widget: *[CheckBox](CheckBox.md)*
- selection: *boolean*, the new value of *[selection](#selection)*.
- options: *Object*

Fired when the check box is checked or unchecked.

### "select" (widget, selection, options)

**Parameters:**

- widget: *[CheckBox](CheckBox.md)*
- selection: *boolean*, the new value of *[selection](#selection)*.
- options: *Object*

Fired when the check box is checked or unchecked by the user.


## See also

- [Simple Checkbox snippet](https://github.com/eclipsesource/tabris-js/blob/v1.3.0/snippets/checkbox/checkbox.js)
