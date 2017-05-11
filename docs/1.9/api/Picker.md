# Picker

A widget with a drop-down list of items to choose from.
Includes [Widget](Widget.md)

## Properties

### itemText

Type: *Function*

A function that returns the string to display for a given data item. Defaults to mapping items to their default string representation.

### items

Type: *any[]*

An array of data items to be displayed by the picker. If the items aren't strings, the `itemText` property must be set to a function to extract item texts.

### selection

Type: *any*

The currently selected data item.

### selectionIndex

Type: *number*

The index of the currently selected item.


## Events

### "change:selection" (widget, selection, options)

**Parameters:** 

- widget: *this*
- selection: *string*, the new value of *[selection](#selection)*.
- options: *any*

Fired when the selection property changes.


### "change:selectionIndex" (widget, selectionIndex, options)

**Parameters:** 

- widget: *this*
- selectionIndex: *number*, the new value of *[selectionIndex](#selectionindex)*.
- options: *any*

Fired when the selectionIndex property changes.


### "select" (widget, selection, options)

**Parameters:** 

- widget: *this*
- selection: *string*, the new value of *[selection](#selection)*.
- options: *{index: number}*, contains the index of the selected item, e.g. `{index: number}`

Fired when an item was selected by the user.



## See also

- [Simple Picker snippet](https://github.com/eclipsesource/tabris-js/blob/master/snippets/picker/picker.js)
