---
---
# Picker

Extends [Widget](Widget.md)

A widget with a drop-down list of items to choose from.

Import this type with "`const {Picker} = require('tabris');`"

Android | iOS
--- | ---
![Picker on Android](img/android/Picker.png) | ![Picker on iOS](img/ios/Picker.png)

## Properties

### borderColor

Type: *[Color](../types.md#color)*

The color of the border of the Picker. On iOS this is a rectangular border around the Picker, on Android it is a single line below the Picker.

### fillColor

Type: *[Color](../types.md#color)*

The color of the background of the Picker - applies only to iOS.

### itemCount

Type: *number*

The number of items to display.

### itemText

Type: *(index: number) => string*

A function that returns the string to display for a given index.

### selectionIndex

Type: *number*

The index of the currently selected item.

### textColor

Type: *[Color](../types.md#color)*

The color of the text.


## Events

### borderColorChanged

Fired when the [*borderColor*](#borderColor) property has changed.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*borderColor*](#borderColor).


### fillColorChanged

Fired when the [*fillColor*](#fillColor) property has changed.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*fillColor*](#fillColor).


### itemCountChanged

Fired when the [*itemCount*](#itemCount) property has changed.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *number*
    The new value of [*itemCount*](#itemCount).


### itemTextChanged

Fired when the [*itemText*](#itemText) property has changed.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *(index: number) => string*
    The new value of [*itemText*](#itemText).


### select

Fired when an item was selected by the user.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **index**: *number*
    Contains the index of the selected item.


### selectionIndexChanged

Fired when the selectionIndex property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *number*
    The new value of the `selectionIndex` property.


### textColorChanged

Fired when the [*textColor*](#textColor) property has changed.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*textColor*](#textColor).





## Example

```js
const {Picker, ui} = require('tabris');

// Create a picker widget to select a string from a list

const AIRPORTS = [
  {
    id: 'SFO',
    name: 'San Francisco'
  },
  {
    id: 'TXL',
    name: 'Berlin Tegel'
  },
  {
    id: 'FRA',
    name: 'Frankfurt'
  }
];

let picker = new Picker({
  left: 20, top: 20, right: 20,
  itemCount: AIRPORTS.length,
  itemText: (index) => AIRPORTS[index].name,
  selectionIndex: 1
}).appendTo(ui.contentView);

picker.on('select', ({index}) => console.log('Selected ' + AIRPORTS[index].id));
```
## See also

- [Simple Picker snippet](https://github.com/eclipsesource/tabris-js/tree/v2.0.0-rc2-dev.20170710+0912/snippets/picker.js)
