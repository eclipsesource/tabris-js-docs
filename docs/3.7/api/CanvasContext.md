---
---
# Class "CanvasContext"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >CanvasContext</a>

The CanvasContext is used for drawing onto the [canvas](./Canvas.md). It is a subset of the HTML5 [CanvasRenderingContext2D](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D).


Type: | <code style="white-space: nowrap">CanvasContext extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a></code>
Constructor: | private
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


## Examples
### JavaScript


```js
import {Canvas, contentView} from 'tabris';

new Canvas({layoutData: 'stretch'})
  .onResize(({target: canvas, width, height}) => {
    const context = canvas.getContext('2d', width, height);
    context.moveTo(0, 0);
    // ...
  }).appendTo(contentView);
```


## Methods

### arc(x, y, radius, startAngle, endAngle, anticlockwise?)



Adds an arc to the path which is centered at *(x, y)* position with radius *r* starting at *startAngle* and ending at *endAngle* going in the given direction by *anticlockwise* (defaulting to clockwise).


Parameter|Type|Description
-|-|-
x | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The x coordinate of the arc's center.
y | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The y coordinate of the arc's center.
radius | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The arc's radius.
startAngle | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The angle in radians at which the arc starts, measured clockwise from the positive x axis.
endAngle | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The angle in radians at which the arc ends, measured clockwise from the positive x axis.
anticlockwise | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | if true, causes the arc to be drawn counter-clockwise between the two angles. *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### beginPath()



Starts a new path by emptying the list of sub-paths.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)



Adds a cubic Bézier curve to the path. The starting point is the last point in the current path.


Parameter|Type|Description
-|-|-
cp1x | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The x axis of the coordinate for the first control point.
cp1y | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The y axis of the coordinate for the first control point.
cp2x | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The x axis of the coordinate for the second control point.
cp2y | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The y axis of the coordinate for the second control point.
x | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The x axis of the coordinate for the end point.
y | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The y axis of the coordinate for the end point.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### clearRect(x, y, width, height)



Sets all pixels in the rectangle defined by starting point *(x, y)* and size *(width, height)* to transparent, erasing any previously drawn content.


Parameter|Type|Description
-|-|-
x | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The x axis of the rectangle's upper-left corner.
y | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The y axis of the rectangle's upper-left corner.
width | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The rectangle's width.
height | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The rectangles height.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### closePath()



Adds a straight line from the current point to the start of the current sub-path.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### createImageData(width, height)



creates a new, blank ImageData object with the specified dimensions. All of the pixels in the new object are transparent black.


Parameter|Type|Description
-|-|-
width | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The width of the new ImageData object.
height | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The height of the new ImageData object.


Returns: <code style="white-space: nowrap"><a href="CanvasContext.html#imagedata" title="CanvasContext Class Type">ImageData</a></code>

### createImageData(imageData)



creates a new, blank ImageData object with the same dimensions as the specified existing ImageData object. All of the pixels in the new object are transparent black.


Parameter|Type|Description
-|-|-
imageData | <code style="white-space: nowrap"><a href="CanvasContext.html#imagedata" title="CanvasContext Class Type">ImageData</a></code> | An existing ImageData object from which to copy the width and height.


Returns: <code style="white-space: nowrap"><a href="CanvasContext.html#imagedata" title="CanvasContext Class Type">ImageData</a></code>

### drawImage(image, dx, dy)



Draws the entire given ImageBitmap at the given coordinates (dx, dy) in its natural size.


Parameter|Type|Description
-|-|-
image | <code style="white-space: nowrap"><a href="ImageBitmap.html" title="ImageBitmap Class Reference">ImageBitmap</a></code> | An ImageBitmap object that has not been closed yet.
dx | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Destination x-coordinate of the upper-left corner of the image
dy | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Destination y-coordinate of the upper-left corner of the image


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### drawImage(image, dx, dy, dWidth, dHeight)



Draws the entire given ImageBitmap at the given coordinates (dx, dy) in the given dimension (dWidth, dHeight).


Parameter|Type|Description
-|-|-
image | <code style="white-space: nowrap"><a href="ImageBitmap.html" title="ImageBitmap Class Reference">ImageBitmap</a></code> | An ImageBitmap object that has not been closed yet.
dx | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Destination x-coordinate of the upper-left corner of the image
dy | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Destination y-coordinate of the upper-left corner of the image
dWidth | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Destination width of the image
dHeight | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Destination height of the image


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)



Draws a section (sx, sy, sWidth, sHeight) of the given ImageBitmap at the given coordinates (dx, dy) in the given dimension (dWidth, dHeight).


Parameter|Type|Description
-|-|-
image | <code style="white-space: nowrap"><a href="ImageBitmap.html" title="ImageBitmap Class Reference">ImageBitmap</a></code> | An ImageBitmap object that has not been closed yet.
sx | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Source x-coordinate of the upper-left corner of the image
sy | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Source y-coordinate of the upper-left corner of the image
sWidth | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Source width of the image
sHeight | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Source height of the image
dx | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Destination x-coordinate of the upper-left corner of the image
dy | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Destination y-coordinate of the upper-left corner of the image
dWidth | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Destination width of the image
dHeight | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Destination height of the image


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### fill()



Fills the current or path with the current fill style.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### fillRect(x, y, width, height)



draws a filled rectangle at *(x, y)* position whose size is determined by *width* and *height*. and whose color is determined by the fillStyle attribute.


Parameter|Type|Description
-|-|-
x | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The x axis of the rectangle's upper-left corner.
y | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The y axis of the rectangle's upper-left corner.
width | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The rectangle's width.
height | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The rectangles height.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### fillText(text, x, y)



Fills a given text at the given *(x, y)* position using the current *textAlign* and *textBaseline* values.


Parameter|Type|Description
-|-|-
text | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | The text to render.
x | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The x axis of the coordinate for the text starting point.
y | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The y axis of the coordinate for the text starting point.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### getImageData(x, y, width, height)



Returns an ImageData object representing the underlying pixel data for the area of the canvas denoted by the given rectangle.


Parameter|Type|Description
-|-|-
x | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The x axis of the rectangle's upper-left corner.
y | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The y axis of the rectangle's upper-left corner.
width | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The rectangle's width.
height | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The rectangle's height.


Returns: <code style="white-space: nowrap"><a href="CanvasContext.html#imagedata" title="CanvasContext Class Type">ImageData</a></code>

### lineTo(x, y)



Connects the last point in the sub-path to the *(x, y)* coordinates with a straight line.


Parameter|Type|Description
-|-|-
x | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The x axis of the coordinate for the end of the line.
y | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The y axis of the coordinate for the end of the line.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### moveTo(x, y)



Moves the starting point of a new sub-path to the *(x, y)* coordinates.


Parameter|Type|Description
-|-|-
x | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The x axis of the point.
y | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The y axis of the point.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### putImageData(imageData, x, y)



Paints data from the given ImageData object onto the bitmap at coordinates (x, y).


Parameter|Type|Description
-|-|-
imageData | <code style="white-space: nowrap"><a href="CanvasContext.html#imagedata" title="CanvasContext Class Type">ImageData</a></code> | An ImageData object containing the array of pixel values.
x | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | x-coordinate of the upper-left corner of the image data rectangle
y | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | y-coordinate of the upper-left corner of the image data rectangle


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### quadraticCurveTo(cpx, cpy, x, y)



Adds a quadratic Bézier curve to the path. The starting point is the last point in the current path.


Parameter|Type|Description
-|-|-
cpx | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The x axis of the coordinate for the control point.
cpy | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The y axis of the coordinate for the control point.
x | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The x axis of the coordinate for the end point.
y | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The y axis of the coordinate for the end point.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### rect(x, y, width, height)



Creates a path for a rectangle with the top-left corner at *(x, y)*


Parameter|Type|Description
-|-|-
x | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The x axis of the rectangle's upper-left corner.
y | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The y axis of the rectangle's upper-left corner.
width | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The rectangle's width.
height | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The rectangles height.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### restore()



Restores the most recently saved canvas state by popping the top entry in the drawing state stack.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### rotate(angle)



Adds a rotation to the transformation matrix.


Parameter|Type|Description
-|-|-
angle | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> |  The angle to rotate clockwise in radians.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### save()



Saves the entire state of the canvas by pushing the current state onto a stack.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### scale(x, y)



Adds a scaling transformation to the canvas units by x horizontally and by y vertically.


Parameter|Type|Description
-|-|-
x | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Scaling factor in the horizontal direction.
y | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Scaling factor in the vertical direction.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### setTransform(a, b, c, d, e, f)



resets (overrides) the current transformation to the identity matrix and then invokes a transformation described by the arguments of this method. The matrix has the following format:
[[a, c, e],
 [b, d, f],
 [0, 0, 1]]


Parameter|Type|Description
-|-|-
a | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Horizontal scaling.
b | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Horizontal skewing.
c | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Vertical skewing.
d | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Vertical scaling.
e | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Horizontal moving.
f | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Vertical moving.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### stroke()



Strokes the current path with the current stroke style.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### strokeRect(x, y, width, height)



draws the outline of a rectangle at *(x, y)* position whose size is determined by *width* and *height* using the current stroke style.


Parameter|Type|Description
-|-|-
x | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The x axis of the rectangle's upper-left corner.
y | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The y axis of the rectangle's upper-left corner.
width | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The rectangle's width.
height | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The rectangles height.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### strokeText(text, x, y)



Strokes a given text at the given *(x, y)* position using the current *textAlign* and *textBaseline* values.


Parameter|Type|Description
-|-|-
text | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | The text to render.
x | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The x axis of the coordinate for the text starting point.
y | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The y axis of the coordinate for the text starting point.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### transform(a, b, c, d, e, f)



Multiplies the current transformation with the matrix described by the arguments of this method. The matrix has the following format:
[[a, c, e],
 [b, d, f],
 [0, 0, 1]]


Parameter|Type|Description
-|-|-
a | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Horizontal scaling.
b | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Horizontal skewing.
c | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Vertical skewing.
d | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Vertical scaling.
e | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Horizontal moving.
f | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Vertical moving.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### translate(x, y)



Adds a translation transformation by moving the canvas and its origin *x* horizontally and *y* vertically on the grid.


Parameter|Type|Description
-|-|-
x | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The distance to move in the horizontal direction.
y | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The distance to move in the vertical direction.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>


## Properties

### fillStyle


Specifies the color to use inside shapes.

Type: |<code style="white-space: nowrap"><a href="Color.html#colorvalue" title="Color Class Type">ColorValue</a></code>
Settable: | Yes




### font


Specifies the current text style being used when drawing text.

Type: |<code style="white-space: nowrap"><a href="Font.html#fontvalue" title="Font Class Type">FontValue</a></code>
Settable: | Yes




### lineCap


Determines how the end points of every line are drawn.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'butt'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'round'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'square'</a></code>
Settable: | Yes




### lineJoin


Determines how two connecting segments in a shape are joined together.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'bevel'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'round'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'miter'</a></code>
Settable: | Yes




### lineWidth


The thickness of lines in space units.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | Yes




### strokeStyle


Specifies the color to use for the lines around shapes.

Type: |<code style="white-space: nowrap"><a href="Color.html#colorvalue" title="Color Class Type">ColorValue</a></code>
Settable: | Yes




### textAlign


Specifies the current text alignment being used when drawing text.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'left'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'right'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'center'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'start'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'end'</a></code>
Settable: | Yes




### textBaseline


Specifies the current text baseline being used when drawing text.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'top'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'hanging'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'middle'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'alphabetic'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'ideographic'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'bottom'</a></code>
Settable: | Yes






## Related Types

### ImageData

* JavaScript Type: `tabris.ImageData`
* TypeScript Type: `tabris.ImageData`

```ts
declare class ImageData {
  constructor(data: Uint8ClampedArray, width: number, height?: number);
  constructor(width: number, height: number);
  readonly data: Uint8ClampedArray;
  readonly width: number;
  readonly height: number;
}
```

Represents the underlying pixel data of an area of a `Canvas` widget. It is created using the methods `createImageData()` and `getImageData()`. It can also be used to set a part of the canvas by using `putImageData()`.


Explanation:

Property | Description
---------|-------------
`data`   | One-dimensional array containing the data in the RGBA order, with integer values between `0` and `255`.
`width`  | Width in pixels of the ImageData.
`height` | Height in pixels of the ImageData.

