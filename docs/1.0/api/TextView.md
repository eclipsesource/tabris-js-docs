---
---
# TextView

A widget to display a text. For images, use ImageView.
Includes [Widget API](Widget.md)

## Properties

### alignment
Type: *string*, supported values: `left`, `right`, `center`, default: `left`

The horizontal alignment of the text.
### markupEnabled

Type: *boolean*

Allows for a subset of HTML tags in the text. Supported tags are: `a`, `del`, `ins`, `b`, `i`, `strong`, `em`, `big`, `small`, `br`. All tags must be closed (e.g. use `<br/>` instead of `<br>`). Nesting tags is currently not supported.<br/>This property can only be set in the `tabris.create` method. It cannot be changed after widget creation.
### maxLines

Type: *number|null*, default: `null`

Limit the number of lines to be displayed to the given maximum. `null` disables this limit.
### text

Type: *string*

The text to display.

## See also

- [Simple Label snippet](https://github.com/eclipsesource/tabris-js/blob/v1.0.0/snippets/textview/textview.js)
- [Snippet for Label with markup](https://github.com/eclipsesource/tabris-js/blob/v1.0.0/snippets/textview-markup/textview-markup.js)
