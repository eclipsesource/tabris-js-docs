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

### "scroll" (scrollView, offset)

**Parameters:**

- :
- :

Fired on scrolling. The *offset* object indicates the current scrolling position: `{x: number, y: number}`.


## See also

- [Simple ScrollView snippet](https://github.com/eclipsesource/tabris-js/blob/v1.0.0/snippets/scrollview/scrollview.js)
- [Example using a ScrollView](https://github.com/eclipsesource/tabris-js/blob/v1.0.0/examples/parallax/parallax.js)
