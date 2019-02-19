---
---
# Class "Canvas"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`Composite`](Composite.md)</span> > <span style="white-space:nowrap;">[`Canvas`](Canvas.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\Canvas.png 2x" src="img\android\Canvas.png" alt="Canvas on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\Canvas.png 2x" src="img\ios\Canvas.png" alt="Canvas on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<Canvas/>`
  * Parent element: [`<Composite/>`](Composite.md) and any widget extending <span style="white-space:nowrap;">[`Composite`](Composite.md)</span>
  * Child elements: *Widgets*
  * Text content: *Not supported*
* Direct subclasses: *None*
--------
Canvas is a widget that can be used to draw graphics using a [canvas context](./CanvasContext.md).


Example:

```js
new Canvas({
  left: 0, top: 0, right: 0, bottom: 0
}).on("resize", ({target: canvas, width, height}) => {
  let ctx = canvas.getContext("2d", width, height);
  ctx.moveTo(0, 0);
  // ...
}).appendTo(page);
```

Example:
```js
import {Canvas, contentView, device} from 'tabris';

// Draw shapes on a canvas using HTML5 Canvas API

new Canvas({
  left: 10, top: 10, right: 10, bottom: 10
}).on('resize', ({target: canvas, width, height}) => {
  const scaleFactor = device.scaleFactor;
  const ctx = canvas.getContext('2d', width * scaleFactor, height * scaleFactor);
  ctx.scale(scaleFactor, scaleFactor);
  ctx.strokeStyle = 'rgb(78, 154, 217)';
  ctx.lineWidth = 10;
  ctx.moveTo(20, 20);
  ctx.lineTo(width - 40, height - 40);
  ctx.stroke();

  // draw image
  ctx.putImageData(createImageData(80, 40), 100, 100);

  // copy region
  const data = ctx.getImageData(0, 0, 100, 100);
  ctx.putImageData(data, 180, 100);

}).appendTo(contentView);

function createImageData(width, height) {
  const array = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const alpha = x % 20 > y % 20 ? 255 : 0;
      array.push(200, 0, 0, alpha);
    }
  }
  return new ImageData(new Uint8ClampedArray(array), width, height);
}
```
See also:

- [Example that shows animations and different shapes on a canvas](https://github.com/eclipsesource/tabris-js/tree/master/examples/canvas)

## Constructor

### new Canvas(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof Canvas>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Methods

### getContext(contextType, width, height)



Parameter|Type|Optional|Description
-|-|-|-
contextType | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The context identifier. Only `"2d"` is supported.
width | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | the width of the canvas context to create
height | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | the height of the canvas context to create
* Returns: <span style="white-space:nowrap;">[`CanvasContext`](CanvasContext.md)</span>

Returns the drawing context with the given size.

