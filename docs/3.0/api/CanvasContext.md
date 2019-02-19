---
---
# Class "CanvasContext"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`CanvasContext`](CanvasContext.md)</span>

* Constructor: *private*
* Singleton: *No*
* Namespace: `tabris`
* JSX support: *No*
* Direct subclasses: *None*
--------
The CanvasContext is used for drawing onto the [canvas](./Canvas.md). It is a subset of the HTML5 [CanvasRenderingContext2D](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D).


## Methods

### arc(x, y, radius, startAngle, endAngle, anticlockwise?)



Parameter|Type|Optional|Description
-|-|-|-
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x coordinate of the arc's center.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y coordinate of the arc's center.
radius | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The arc's radius.
startAngle | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The angle in radians at which the arc starts, measured clockwise from the positive x axis.
endAngle | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The angle in radians at which the arc ends, measured clockwise from the positive x axis.
anticlockwise | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | Yes | if true, causes the arc to be drawn counter-clockwise between the two angles.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Adds an arc to the path which is centered at *(x, y)* position with radius *r* starting at *startAngle* and ending at *endAngle* going in the given direction by *anticlockwise* (defaulting to clockwise).

### beginPath()

* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Starts a new path by emptying the list of sub-paths.

### bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)



Parameter|Type|Optional|Description
-|-|-|-
cp1x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the coordinate for the first control point.
cp1y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the coordinate for the first control point.
cp2x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the coordinate for the second control point.
cp2y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the coordinate for the second control point.
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the coordinate for the end point.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the coordinate for the end point.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Adds a cubic Bézier curve to the path. The starting point is the last point in the current path.

### clearRect(x, y, width, height)



Parameter|Type|Optional|Description
-|-|-|-
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the rectangle's upper-left corner.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the rectangle's upper-left corner.
width | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The rectangle's width.
height | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The rectangles height.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Sets all pixels in the rectangle defined by starting point *(x, y)* and size *(width, height)* to transparent, erasing any previously drawn content.

### closePath()

* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Adds a straight line from the current point to the start of the current sub-path.

### createImageData(width, height)



Parameter|Type|Optional|Description
-|-|-|-
width | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The width of the new ImageData object.
height | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The height of the new ImageData object.
* Returns: <span style="white-space:nowrap;">[`ImageData`](../types.md#imagedata)</span>

creates a new, blank ImageData object with the specified dimensions. All of the pixels in the new object are transparent black.

### createImageData(imageData)



Parameter|Type|Optional|Description
-|-|-|-
imageData | <span style="white-space:nowrap;">[`ImageData`](../types.md#imagedata)</span> | No | An existing ImageData object from which to copy the width and height.
* Returns: <span style="white-space:nowrap;">[`ImageData`](../types.md#imagedata)</span>

creates a new, blank ImageData object with the same dimensions as the specified existing ImageData object. All of the pixels in the new object are transparent black.

### fill()

* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Fills the current or path with the current fill style.

### fillRect(x, y, width, height)



Parameter|Type|Optional|Description
-|-|-|-
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the rectangle's upper-left corner.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the rectangle's upper-left corner.
width | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The rectangle's width.
height | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The rectangles height.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

draws a filled rectangle at *(x, y)* position whose size is determined by *width* and *height*. and whose color is determined by the fillStyle attribute.

### fillText(text, x, y)



Parameter|Type|Optional|Description
-|-|-|-
text | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The text to render.
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the coordinate for the text starting point.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the coordinate for the text starting point.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Fills a given text at the given *(x, y)* position using the current *textAlign* and *textBaseline* values.

### getImageData(x, y, width, height)



Parameter|Type|Optional|Description
-|-|-|-
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the rectangle's upper-left corner.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the rectangle's upper-left corner.
width | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The rectangle's width.
height | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The rectangle's height.
* Returns: <span style="white-space:nowrap;">[`ImageData`](../types.md#imagedata)</span>

Returns an ImageData object representing the underlying pixel data for the area of the canvas denoted by the given rectangle.

### lineTo(x, y)



Parameter|Type|Optional|Description
-|-|-|-
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the coordinate for the end of the line.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the coordinate for the end of the line.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Connects the last point in the sub-path to the *(x, y)* coordinates with a straight line.

### moveTo(x, y)



Parameter|Type|Optional|Description
-|-|-|-
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the point.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the point.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Moves the starting point of a new sub-path to the *(x, y)* coordinates.

### putImageData(imageData, x, y)



Parameter|Type|Optional|Description
-|-|-|-
imageData | <span style="white-space:nowrap;">[`ImageData`](../types.md#imagedata)</span> | No | An ImageData object containing the array of pixel values.
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | x-coordinate of the upper-left corner of the image data rectangle
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | y-coordinate of the upper-left corner of the image data rectangle
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Paints data from the given ImageData object onto the bitmap at coordinates (x, y).

### quadraticCurveTo(cpx, cpy, x, y)



Parameter|Type|Optional|Description
-|-|-|-
cpx | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the coordinate for the control point.
cpy | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the coordinate for the control point.
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the coordinate for the end point.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the coordinate for the end point.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Adds a quadratic Bézier curve to the path. The starting point is the last point in the current path.

### rect(x, y, width, height)



Parameter|Type|Optional|Description
-|-|-|-
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the rectangle's upper-left corner.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the rectangle's upper-left corner.
width | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The rectangle's width.
height | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The rectangles height.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Creates a path for a rectangle with the top-left corner at *(x, y)*

### restore()

* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Restores the most recently saved canvas state by popping the top entry in the drawing state stack.

### rotate(angle)



Parameter|Type|Optional|Description
-|-|-|-
angle | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No |  The angle to rotate clockwise in radians.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Adds a rotation to the transformation matrix.

### save()

* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Saves the entire state of the canvas by pushing the current state onto a stack.

### scale(x, y)



Parameter|Type|Optional|Description
-|-|-|-
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Scaling factor in the horizontal direction.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Scaling factor in the vertical direction.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Adds a scaling transformation to the canvas units by x horizontally and by y vertically.

### setTransform(a, b, c, d, e, f)



Parameter|Type|Optional|Description
-|-|-|-
a | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Horizontal scaling.
b | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Horizontal skewing.
c | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Vertical skewing.
d | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Vertical scaling.
e | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Horizontal moving.
f | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Vertical moving.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

resets (overrides) the current transformation to the identity matrix and then invokes a transformation described by the arguments of this method. The matrix has the following format:
[[a, c, e],
 [b, d, f],
 [0, 0, 1]]

### stroke()

* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Strokes the current path with the current stroke style.

### strokeRect(x, y, width, height)



Parameter|Type|Optional|Description
-|-|-|-
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the rectangle's upper-left corner.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the rectangle's upper-left corner.
width | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The rectangle's width.
height | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The rectangles height.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

draws the outline of a rectangle at *(x, y)* position whose size is determined by *width* and *height* using the current stroke style.

### strokeText(text, x, y)



Parameter|Type|Optional|Description
-|-|-|-
text | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The text to render.
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the coordinate for the text starting point.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the coordinate for the text starting point.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Strokes a given text at the given *(x, y)* position using the current *textAlign* and *textBaseline* values.

### transform(a, b, c, d, e, f)



Parameter|Type|Optional|Description
-|-|-|-
a | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Horizontal scaling.
b | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Horizontal skewing.
c | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Vertical skewing.
d | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Vertical scaling.
e | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Horizontal moving.
f | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Vertical moving.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Multiplies the current transformation with the matrix described by the arguments of this method. The matrix has the following format:
[[a, c, e],
 [b, d, f],
 [0, 0, 1]]

### translate(x, y)



Parameter|Type|Optional|Description
-|-|-|-
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The distance to move in the horizontal direction.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The distance to move in the vertical direction.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Adds a translation transformation by moving the canvas and its origin *x* horizontally and *y* vertically on the grid.


## Properties

### fillStyle


* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



Specifies the color to use inside shapes.

### font


* Type: <span style="white-space:nowrap;">[`FontValue`](../types.md#fontvalue)</span>
* Settable: *Yes*



Specifies the current text style being used when drawing text.

### lineCap


* Type: `'butt'` | `'round'` | `'square'`
* Settable: *Yes*



Determines how the end points of every line are drawn.

### lineJoin


* Type: `'bevel'` | `'round'` | `'miter'`
* Settable: *Yes*



Determines how two connecting segments in a shape are joined together.

### lineWidth


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *Yes*



The thickness of lines in space units.

### strokeStyle


* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



Specifies the color to use for the lines around shapes.

### textAlign


* Type: `'left'` | `'right'` | `'center'` | `'start'` | `'end'`
* Settable: *Yes*



Specifies the current text alignment being used when drawing text.

### textBaseline


* Type: `'top'` | `'hanging'` | `'middle'` | `'alphabetic'` | `'ideographic'` | `'bottom'`
* Settable: *Yes*



Specifies the current text baseline being used when drawing text.


## Change Events

### lineWidthChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*lineWidth*](#lineWidth).

Fired when the [*lineWidth*](#lineWidth) property has changed.

### lineCapChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*lineCap*](#lineCap).

Fired when the [*lineCap*](#lineCap) property has changed.

### lineJoinChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*lineJoin*](#lineJoin).

Fired when the [*lineJoin*](#lineJoin) property has changed.

### fillStyleChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*fillStyle*](#fillStyle).

Fired when the [*fillStyle*](#fillStyle) property has changed.

### fontChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`FontValue`](../types.md#fontvalue)</span> | The new value of [*font*](#font).

Fired when the [*font*](#font) property has changed.

### strokeStyleChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*strokeStyle*](#strokeStyle).

Fired when the [*strokeStyle*](#strokeStyle) property has changed.

### textAlignChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*textAlign*](#textAlign).

Fired when the [*textAlign*](#textAlign) property has changed.

### textBaselineChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*textBaseline*](#textBaseline).

Fired when the [*textBaseline*](#textBaseline) property has changed.

