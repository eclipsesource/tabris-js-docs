---
---
# Switch
A switch widget that can be toggled.
Includes [Widget](Widget.md)

## Properties
### selection
Type: *boolean*, default: `false`

The checked state of the switch.
### thumbOffColor
Type: *[Color](../types.md#color)*

The color of the movable thumb, when switched *off*.
### thumbOnColor
Type: *[Color](../types.md#color)*

The color of the movable thumb, when switched *on*.
### trackOffColor
Type: *[Color](../types.md#color)*

The color of the track that holds the thumb, when switched *off*.
### trackOnColor
Type: *[Color](../types.md#color)*

The color of the track that holds the thumb, when switched *on*.

## Events
### "change:selection" (widget, selection, options)

**Parameters:** 

- widget: *[Switch](Switch.md)*
- selection: *boolean*, the current value of *[selection](#selection)*.
- options: *Object*

Fired when the selection property changes.

### "select" (widget, selection, options)

**Parameters:** 

- widget: *[Switch](Switch.md)*
- selection: *boolean*, the current value of *[selection](#selection)*.
- options: *Object*

Fired when the switch is toggled by the user.

