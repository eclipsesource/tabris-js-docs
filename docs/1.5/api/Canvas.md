---
---
# Canvas

Canvas is a widget that can be used to draw graphics using a canvas context. Canvas context is a subset of the HTML5 [CanvasRenderingContext2D](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D).
Includes [Composite](Composite.md)

Example:

```javascript
tabris.create("Canvas", {
  layoutData: {left: 0, top: 0, right: 0, bottom: 0}
}).on("resize", function(canvas, bounds) {
  var ctx = canvas.getContext("2d", bounds.width, bounds.height);
  ctx.moveTo(0, 0);
  // ...
}).appendTo(page);
```

The following `CanvasRenderingContext2D` methods are supported:

* save
* restore
* beginPath
* closePath
* lineTo
* moveTo
* bezierCurveTo
* quadraticCurveTo
* rect
* arc
* scale
* rotate
* translate
* transform
* setTransform
* clearRect
* fillRect
* strokeRect
* fillText
* strokeText
* fill
* stroke
* measureText

The following `CanvasRenderingContext2D` properties are supported:

* lineWidth
* lineCap
* lineJoin
* fillStyle
* strokeStyle
* textAlign
* textBaseline

## Methods

### getContext(contextType, width, height)


**Parameters:**

- contextType: *string*, the context identifier. Only `"2d"` is currently supported.
- width: *number*, the width of the canvas context to create
- height: *number*, the height of the canvas context to create

**Returns:** *CanvasContext*

Returns the drawing context with the given size.


## See also

- [Example that shows animations and different shapes on a canvas](https://github.com/eclipsesource/tabris-js/tree/v1.5.0/examples/canvas)
