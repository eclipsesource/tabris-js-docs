---
---
# Slider
A widget representing a numeric value as an movable indicator on a horizontal line.
Includes [Widget API](Widget.md)

## Properties
### maximum
Type: *number*, default: `100`

### minimum
Type: *number*, default: `0`

### selection
Type: *number*, default: `0`


## Events
### "change:selection" (widget, selection, options)

**Parameters:**

- widget: *[SearchAction](SearchAction.md)*
- selection: *number*, the new value of *[selection](#selection)*.
- options: *Object*

Fired when the selection property changes.

### "select" (widget, selection, options)

**Parameters:**

- widget: *[SearchAction](SearchAction.md)*
- selection: *number*, the new value of *[selection](#selection)*.
- options: *Object*

Fired when the selection property is changed by the user.


## See also
- [Simple Slider snippet](https://github.com/eclipsesource/tabris-js/blob/v1.1.0/snippets/slider/slider.js)
