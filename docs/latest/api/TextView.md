---
---
# TextView

A widget to display a text. For images, use ImageView.

Android | iOS
--- | ---
![TextView on Android](img/android/TextView.png) | ![TextView on iOS](img/ios/TextView.png)

Extends [Widget](Widget.md)

## Properties

### alignment

Type: *string*, supported values: `left`, `right`, `center`, default: `left`

The horizontal alignment of the text.

### lineSpacing

Type: *number*, default: `1.0`

The amount of space between each line of text. The `lineSpacing` property is a factor with a default value of `1.0`.

### markupEnabled

Type: *boolean*

Allows for a subset of HTML tags in the text. Supported tags are: `a`, `del`, `ins`, `b`, `i`, `strong`, `em`, `big`, `small`, `br`. All tags must be closed (e.g. use `<br/>` instead of `<br>`). Nesting tags is currently not supported.<br/>This property can only be set on widget creation. Once set, it cannot be changed anymore.

### maxLines

Type: *number|null*, default: `null`

Limit the number of lines to be displayed to the given maximum. `null` disables this limit.

### selectable

Type: *boolean*

Whether the text can be selected or not. Currently only support on Android.

### text

Type: *string*

The text to display.


## Example
```js
// Create text views with different alignments

new tabris.TextView({
  left: 10, top: 10, right: 10,
  text: 'Left',
  alignment: 'left'
}).appendTo(tabris.ui.contentView);

new tabris.TextView({
  left: 10, top: 'prev() 10', right: 10,
  text: 'Center',
  alignment: 'center'
}).appendTo(tabris.ui.contentView);

new tabris.TextView({
  left: 10, top: 'prev() 10', right: 10,
  text: 'Right',
  alignment: 'right'
}).appendTo(tabris.ui.contentView);
```
## See also

- [Simple TextView snippet](https://github.com/eclipsesource/tabris-js/tree/v2.0.0-beta2/snippets/textview.js)
- [Snippet for TextView with markup](https://github.com/eclipsesource/tabris-js/tree/v2.0.0-beta2/snippets/textview-markup.js)
