---
---
# CheckBox

Extends [Widget](Widget.md)

A check box widget.

Import this type with "`const {CheckBox} = require('tabris');`"

Android | iOS
--- | ---
![CheckBox on Android](img/android/CheckBox.png) | ![CheckBox on iOS](img/ios/CheckBox.png)

## Properties

### checked


Type: *boolean*, default: `false`

The checked state of the check box.

### checkedTintColor
<p class="platforms"><span class="ios-tag" title="supported on iOS">iOS</span><span class="android-tag" title="supported on Android">Android</span></p>

Type: *[Color](../types.md#color)*

The color of the selectable area in checked state. Will fall back to `tintColor` if not set.

### text


Type: *string*

The label text of the check box.

### textColor


Type: *[Color](../types.md#color)*

The color of the text.

### tintColor
<p class="platforms"><span class="ios-tag" title="supported on iOS">iOS</span><span class="android-tag" title="supported on Android">Android</span></p>

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


### select

Fired when the check box is checked or unchecked by the user.

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
const {CheckBox, ui} = require('tabris');

// Create a check box with a checked handler

new CheckBox({
  left: 10, top: 10,
  checked: true,
  text: 'checked'
}).on('checkedChanged', event => event.target.text = event.value ? 'checked' : 'unchecked')
  .appendTo(ui.contentView);
```
## See also

- [Simple Checkbox snippet](https://github.com/eclipsesource/tabris-js/tree/v2.3.0/snippets/checkbox.js)
