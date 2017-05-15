---
---
# Slider

A widget representing a numeric value as an movable indicator on a horizontal line.
Includes [Widget](Widget.md)

## Properties

### maximum
Type: *number*, default: `100`

The maximum value.
### minimum

Type: *number*, default: `0`

The minimum value.
### selection

Type: *number*, default: `0`

The actual value.

## Events

### "change:selection" (widget, selection, options)

**Parameters:**

- widget: *this*
- selection: *number*, the new value of *[selection](#selection)*.
- options: *any*

Fired when the selection property changes.

### "select" (widget, selection, options)

**Parameters:**

- widget: *[SearchAction](SearchAction.md)*
- selection: *number*, the new value of *[selection](#selection)*.
- options: *any*

Fired when the selection property is changed by the user.


## See also

- [Simple Slider snippet](https://github.com/eclipsesource/tabris-js/blob/v1.8.0/snippets/slider/slider.js)
