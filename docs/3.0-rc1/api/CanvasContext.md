---
---
# Class "CanvasContext"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`CanvasContext`](CanvasContext.md)</span>

The CanvasContext is used for drawing onto the [canvas](./Canvas.md). It is a subset of the HTML5 [CanvasRenderingContext2D](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D).


Constructor | *private*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | *No*


## Example
```js
import {Canvas, contentView} from 'tabris';

new Canvas({layoutData: 'fill'})
  .onResize(({target: canvas, width, height}) => {
    let context = canvas.getContext("2d", width, height);
    context.moveTo(0, 0);
    // ...
  }).appendTo(contentView);
```

## Methods

### arc(x, y, radius, startAngle, endAngle, anticlockwise?)



Adds an arc to the path which is centered at *(x, y)* position with radius *r* starting at *startAngle* and ending at *endAngle* going in the given direction by *anticlockwise* (defaulting to clockwise).


Parameter|Type|Optional|Description
-|-|-|-
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x coordinate of the arc's center.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y coordinate of the arc's center.
radius | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The arc's radius.
startAngle | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The angle in radians at which the arc starts, measured clockwise from the positive x axis.
endAngle | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The angle in radians at which the arc ends, measured clockwise from the positive x axis.
anticlockwise | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | Yes | if true, causes the arc to be drawn counter-clockwise between the two angles.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### beginPath()



Starts a new path by emptying the list of sub-paths.

Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)



Adds a cubic Bézier curve to the path. The starting point is the last point in the current path.


Parameter|Type|Optional|Description
-|-|-|-
cp1x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the coordinate for the first control point.
cp1y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the coordinate for the first control point.
cp2x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the coordinate for the second control point.
cp2y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the coordinate for the second control point.
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the coordinate for the end point.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the coordinate for the end point.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### clearRect(x, y, width, height)



Sets all pixels in the rectangle defined by starting point *(x, y)* and size *(width, height)* to transparent, erasing any previously drawn content.


Parameter|Type|Optional|Description
-|-|-|-
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the rectangle's upper-left corner.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the rectangle's upper-left corner.
width | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The rectangle's width.
height | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The rectangles height.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### closePath()



Adds a straight line from the current point to the start of the current sub-path.

Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### createImageData(width, height)



creates a new, blank ImageData object with the specified dimensions. All of the pixels in the new object are transparent black.


Parameter|Type|Optional|Description
-|-|-|-
width | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The width of the new ImageData object.
height | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The height of the new ImageData object.


Returns <span style="white-space:nowrap;">[`ImageData`](../types.md#imagedata)</span>

### createImageData(imageData)



creates a new, blank ImageData object with the same dimensions as the specified existing ImageData object. All of the pixels in the new object are transparent black.


Parameter|Type|Optional|Description
-|-|-|-
imageData | <span style="white-space:nowrap;">[`ImageData`](../types.md#imagedata)</span> | No | An existing ImageData object from which to copy the width and height.


Returns <span style="white-space:nowrap;">[`ImageData`](../types.md#imagedata)</span>

### fill()



Fills the current or path with the current fill style.

Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### fillRect(x, y, width, height)



draws a filled rectangle at *(x, y)* position whose size is determined by *width* and *height*. and whose color is determined by the fillStyle attribute.


Parameter|Type|Optional|Description
-|-|-|-
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the rectangle's upper-left corner.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the rectangle's upper-left corner.
width | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The rectangle's width.
height | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The rectangles height.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### fillText(text, x, y)



Fills a given text at the given *(x, y)* position using the current *textAlign* and *textBaseline* values.


Parameter|Type|Optional|Description
-|-|-|-
text | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The text to render.
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the coordinate for the text starting point.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the coordinate for the text starting point.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### getImageData(x, y, width, height)



Returns an ImageData object representing the underlying pixel data for the area of the canvas denoted by the given rectangle.


Parameter|Type|Optional|Description
-|-|-|-
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the rectangle's upper-left corner.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the rectangle's upper-left corner.
width | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The rectangle's width.
height | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The rectangle's height.


Returns <span style="white-space:nowrap;">[`ImageData`](../types.md#imagedata)</span>

### lineTo(x, y)



Connects the last point in the sub-path to the *(x, y)* coordinates with a straight line.


Parameter|Type|Optional|Description
-|-|-|-
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the coordinate for the end of the line.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the coordinate for the end of the line.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### moveTo(x, y)



Moves the starting point of a new sub-path to the *(x, y)* coordinates.


Parameter|Type|Optional|Description
-|-|-|-
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the point.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the point.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### putImageData(imageData, x, y)



Paints data from the given ImageData object onto the bitmap at coordinates (x, y).


Parameter|Type|Optional|Description
-|-|-|-
imageData | <span style="white-space:nowrap;">[`ImageData`](../types.md#imagedata)</span> | No | An ImageData object containing the array of pixel values.
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | x-coordinate of the upper-left corner of the image data rectangle
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | y-coordinate of the upper-left corner of the image data rectangle


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### quadraticCurveTo(cpx, cpy, x, y)



Adds a quadratic Bézier curve to the path. The starting point is the last point in the current path.


Parameter|Type|Optional|Description
-|-|-|-
cpx | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the coordinate for the control point.
cpy | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the coordinate for the control point.
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the coordinate for the end point.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the coordinate for the end point.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### rect(x, y, width, height)



Creates a path for a rectangle with the top-left corner at *(x, y)*


Parameter|Type|Optional|Description
-|-|-|-
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the rectangle's upper-left corner.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the rectangle's upper-left corner.
width | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The rectangle's width.
height | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The rectangles height.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### restore()



Restores the most recently saved canvas state by popping the top entry in the drawing state stack.

Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### rotate(angle)



Adds a rotation to the transformation matrix.


Parameter|Type|Optional|Description
-|-|-|-
angle | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No |  The angle to rotate clockwise in radians.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### save()



Saves the entire state of the canvas by pushing the current state onto a stack.

Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### scale(x, y)



Adds a scaling transformation to the canvas units by x horizontally and by y vertically.


Parameter|Type|Optional|Description
-|-|-|-
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Scaling factor in the horizontal direction.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Scaling factor in the vertical direction.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### setTransform(a, b, c, d, e, f)



resets (overrides) the current transformation to the identity matrix and then invokes a transformation described by the arguments of this method. The matrix has the following format:
[[a, c, e],
 [b, d, f],
 [0, 0, 1]]


Parameter|Type|Optional|Description
-|-|-|-
a | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Horizontal scaling.
b | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Horizontal skewing.
c | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Vertical skewing.
d | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Vertical scaling.
e | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Horizontal moving.
f | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Vertical moving.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### stroke()



Strokes the current path with the current stroke style.

Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### strokeRect(x, y, width, height)



draws the outline of a rectangle at *(x, y)* position whose size is determined by *width* and *height* using the current stroke style.


Parameter|Type|Optional|Description
-|-|-|-
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the rectangle's upper-left corner.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the rectangle's upper-left corner.
width | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The rectangle's width.
height | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The rectangles height.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### strokeText(text, x, y)



Strokes a given text at the given *(x, y)* position using the current *textAlign* and *textBaseline* values.


Parameter|Type|Optional|Description
-|-|-|-
text | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The text to render.
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The x axis of the coordinate for the text starting point.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The y axis of the coordinate for the text starting point.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### transform(a, b, c, d, e, f)



Multiplies the current transformation with the matrix described by the arguments of this method. The matrix has the following format:
[[a, c, e],
 [b, d, f],
 [0, 0, 1]]


Parameter|Type|Optional|Description
-|-|-|-
a | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Horizontal scaling.
b | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Horizontal skewing.
c | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Vertical skewing.
d | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Vertical scaling.
e | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Horizontal moving.
f | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Vertical moving.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### translate(x, y)



Adds a translation transformation by moving the canvas and its origin *x* horizontally and *y* vertically on the grid.


Parameter|Type|Optional|Description
-|-|-|-
x | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The distance to move in the horizontal direction.
y | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The distance to move in the vertical direction.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>


## Properties

### fillStyle


Specifies the color to use inside shapes.

Type | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
Settable | *Yes*
Change events | *Yes*




### font


Specifies the current text style being used when drawing text.

Type | <span style="white-space:nowrap;">[`FontValue`](../types.md#fontvalue)</span>
Settable | *Yes*
Change events | *Yes*




### lineCap


Determines how the end points of every line are drawn.

Type | `'butt'` \| `'round'` \| `'square'`
Settable | *Yes*
Change events | *Yes*




### lineJoin


Determines how two connecting segments in a shape are joined together.

Type | `'bevel'` \| `'round'` \| `'miter'`
Settable | *Yes*
Change events | *Yes*




### lineWidth


The thickness of lines in space units.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *Yes*
Change events | *Yes*




### strokeStyle


Specifies the color to use for the lines around shapes.

Type | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
Settable | *Yes*
Change events | *Yes*




### textAlign


Specifies the current text alignment being used when drawing text.

Type | `'left'` \| `'right'` \| `'center'` \| `'start'` \| `'end'`
Settable | *Yes*
Change events | *Yes*




### textBaseline


Specifies the current text baseline being used when drawing text.

Type | `'top'` \| `'hanging'` \| `'middle'` \| `'alphabetic'` \| `'ideographic'` \| `'bottom'`
Settable | *Yes*
Change events | *Yes*





## Change Events

### lineWidthChanged

Fired when the [*lineWidth*](#linewidth) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*lineWidth*](#linewidth).

### lineCapChanged

Fired when the [*lineCap*](#linecap) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*lineCap*](#linecap).

### lineJoinChanged

Fired when the [*lineJoin*](#linejoin) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*lineJoin*](#linejoin).

### fillStyleChanged

Fired when the [*fillStyle*](#fillstyle) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*fillStyle*](#fillstyle).

### fontChanged

Fired when the [*font*](#font) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`FontValue`](../types.md#fontvalue)</span> | The new value of [*font*](#font).

### strokeStyleChanged

Fired when the [*strokeStyle*](#strokestyle) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*strokeStyle*](#strokestyle).

### textAlignChanged

Fired when the [*textAlign*](#textalign) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*textAlign*](#textalign).

### textBaselineChanged

Fired when the [*textBaseline*](#textbaseline) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*textBaseline*](#textbaseline).

