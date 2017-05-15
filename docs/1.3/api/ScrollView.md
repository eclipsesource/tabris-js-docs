---
---
# ScrollView
A composite that allows its content to overflow either vertically (default) or horizontally. Children of a ScrollView may not be attached to its edge in scrolling direction (to the bottom for vertical scrolling, to the right for horizontal scrolling).
Includes [Composite](Composite.md)

## Properties
### direction
Type: *string*, supported values: `vertical`, `horizontal`, default: `vertical`

Specifies the scrolling direction of the scroll composite.<br/>This property can only be set in the `tabris.create` method. It cannot be changed after widget creation.

## Events
### "scroll" (widget, offset)

**Parameters:**

- widget: *[ScrollView](ScrollView.md)*
- offset: *Object*, indicates the current scrolling position, e.g. `{x: number, y: number}`

Fired on scrolling.


## See also
- [Simple ScrollView snippet](https://github.com/eclipsesource/tabris-js/blob/v1.3.0/snippets/scrollview/scrollview.js)
- [Example using a ScrollView](https://github.com/eclipsesource/tabris-js/blob/v1.3.0/examples/parallax/parallax.js)
