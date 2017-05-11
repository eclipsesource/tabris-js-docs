---
---
# ScrollView
A composite that allows its content to overflow either vertically (default) or horizontally. Since the ScrollView does not compute its own size, the width and height must be defined by the respective layout properties (e.g. either `width` or `left` and `right` must be specified).
Includes [Composite](Composite.md)

## Properties
### direction
Type: *string*, supported values: `vertical`, `horizontal`, default: `vertical`

Specifies the scrolling direction of the scroll composite.<br/>This property can only be set on widget creation. Once set, it cannot be changed anymore.
### scrollX
Type: *number*

The horizontal scrolling position.
### scrollY
Type: *number*

The vertical scrolling position.

## Events
### "scroll" (widget, offset)

**Parameters:** 

- widget: *this*
- offset: *{x: number, y: number}*, indicates the current scrolling position, e.g. `{x: number, y: number}`

Fired on scrolling.


## See also
- [Simple ScrollView snippet](https://github.com/eclipsesource/tabris-js/blob/master/snippets/scrollview/scrollview.js)
- [Example using a ScrollView](https://github.com/eclipsesource/tabris-js/blob/master/examples/parallax/parallax.js)
