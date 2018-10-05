---
---
# Widget "RadioButton"

Extends [Widget](Widget.md)

A radio button. Selecting a radio button de-selects all its siblings (i.e. all radio buttons within the same parent).

You can import this type like this:
```js
import {RadioButton} from 'tabris';
```
Or reference it directly form anywhere as "`tabris.RadioButton`".
Android | iOS
--- | ---
![RadioButton on Android](img/android/RadioButton.png) | ![RadioButton on iOS](img/ios/RadioButton.png)

## Properties

### checked


Type: *boolean*, default: `false`

The checked state of the radio button.

### checkedTintColor


Type: *[Color](../types.md#color)*

The color of the selectable area in checked state. Will fall back to `tintColor` if not set.

### font


Type: *[Font](../types.md#font)*

The font used for the text.

### text


Type: *string*

The label text of the radio button.

In JSX the text content of the *RadioButton* element is mapped to this property. Therefore `<RadioButton>Hello World</RadioButton>` would be the same as `<RadioButton text='Hello World' />`.

### textColor


Type: *[Color](../types.md#color)*

The color of the text.

### tintColor


Type: *[Color](../types.md#color)*

The color of the selectable area.


## Events

### checkedChanged

Fired when the [*checked*](#checked) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*checked*](#checked).


### checkedTintColorChanged

Fired when the [*checkedTintColor*](#checkedTintColor) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*checkedTintColor*](#checkedTintColor).


### fontChanged

Fired when the [*font*](#font) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Font](../types.md#font)*
    The new value of [*font*](#font).


### select

Fired when the radio button is selected or deselected by the user.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **checked**: *boolean*
    The new value of *[checked](#checked)*.


### textChanged

Fired when the [*text*](#text) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*text*](#text).


### textColorChanged

Fired when the [*textColor*](#textColor) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*textColor*](#textColor).


### tintColorChanged

Fired when the [*tintColor*](#tintColor) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*tintColor*](#tintColor).





## Example
```js
import {RadioButton, ui} from 'tabris';

// Create radio buttons with checked handlers

['One', 'Two', 'Three'].forEach((title) => {
  new RadioButton({
    left: 10, top: 'prev() 10',
    text: title
  }).on('checkedChanged', ({target, value: checked}) => {
    if (checked) {
      console.log(target.text + ' checked');
    }
  }).appendTo(ui.contentView);
});
```
## See also

- [Simple RadioButton snippet](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta1/snippets/radiobutton.js)
