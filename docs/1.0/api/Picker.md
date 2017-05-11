---
---
# Picker
A widget with a drop-down list of items to choose from.
Includes [Widget API](Widget.md)

## Properties
### items
Type: *string[]*

### selection
Type: *string*

### selectionIndex
Type: *number*


## Events
### "change:selection" (widget, selection, options)

**Parameters:** 

- widget: *[Picker](Picker.md)*
- selection: *string*, the new value of *[selection](#selection)*.
- options: *Object*

Fired when the selection property changes.

### "change:selectionIndex" (widget, selectionIndex, options)

**Parameters:** 

- widget: *[Picker](Picker.md)*
- selectionIndex: *number*, the new value of *[selectionIndex](#selectionIndex)*.
- options: *Object*

Fired when the selectionIndex property changes.

### "select" (widget, selection, options)

**Parameters:** 

- widget: *[Picker](Picker.md)*
- selection: *string*, the new value of *[selection](#selection)*.
- options: *Object*, contains the index of the selected item: `{index: number}`

Fired an item was selected by the user.


## See also
- [Simple Picker snippet](https://github.com/eclipsesource/tabris-js/blob/master/snippets/picker/picker.js)
