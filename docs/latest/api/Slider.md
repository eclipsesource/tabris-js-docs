---
---
# Slider

A widget representing a numeric value as an movable indicator on a horizontal line.

Android | iOS
--- | ---
![Slider on Android](img/android/Slider.png) | ![Slider on iOS](img/ios/Slider.png)

Extends [Widget](Widget.md)

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

### change:selection
Fired when the selection property changes.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *number*
    The new value of the `selection` property.




### select
Fired when the selection property is changed by the user.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **selection**: *number*
    The new value of *[selection](#selection)*.





## Example
```js
// Create a slider with a selection handler

var textView = new tabris.TextView({
  left: 10, right: 10, top: '30%',
  alignment: 'center',
  font: '22px sans-serif',
  text: '50'
}).appendTo(tabris.ui.contentView);

new tabris.Slider({
  left: 50, top: [textView, 20], right: 50,
  minimum: -50,
  selection: 50,
  maximum: 150
}).on('change:selection', function({value}) {
  textView.text = value;
}).appendTo(tabris.ui.contentView);
```
## See also

- [Simple Slider snippet](https://github.com/eclipsesource/tabris-js/tree/v2.0.0-beta2/snippets/slider.js)
