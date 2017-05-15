---
---
# Switch

A switch widget that can be toggled.
Includes [Widget API](Widget.md)

## Properties

### selection
Type: *boolean*, default: `false`

The checked state of the switch.

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

