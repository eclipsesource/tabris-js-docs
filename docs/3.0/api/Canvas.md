---
---
# Class "Canvas"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`Composite`](Composite.md)</span> > <span style="white-space:nowrap;">[`Canvas`](Canvas.md)</span>

Canvas is a widget that can be used to draw graphics using a [canvas context](./CanvasContext.md).


<div class="tabris-image"><figure><div><img srcset="img/android/Canvas.png 2x" src="img/android/Canvas.png" alt="Canvas on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/Canvas.png 2x" src="img/ios/Canvas.png" alt="Canvas on iOS"/></div><figcaption>iOS</figcaption></figure></div>

Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | Element: `<Canvas/>`<br/>Parent element: [`<Composite/>`](Composite.md) *and any widget extending* <span style="white-space:nowrap;">[`Composite`](Composite.md)</span><br/>Child elements: *Widgets*<br/>Text content: *Not supported*<br/>

## Example
```js
import {Canvas, contentView} from 'tabris';

new Canvas({layoutData: 'stretch'})
  .onResize(({target: canvas, width, height}) => {
    let context = canvas.getContext("2d", width, height);
    context.moveTo(0, 0);
    // ...
  }).appendTo(contentView);
```

See also:
  
[<span class='language jsx'>JSX</span> Creating a `Canvas` with simple shapes](https://playground.tabris.com/?gitref=v3.0.0&snippet=canvas-shapes.jsx)  
[<span class='language jsx'>JSX</span> Creating a `Canvas` and working with `ImageData`](https://playground.tabris.com/?gitref=v3.0.0&snippet=canvas-imagedata.jsx)  
[<span class='language jsx'>JSX</span> How to show text on a `Canvas`](https://playground.tabris.com/?gitref=v3.0.0&snippet=canvas-text.jsx)  
[<span class='language jsx'>JSX</span> How to use animations on a `Canvas`](https://playground.tabris.com/?gitref=v3.0.0&snippet=canvas-animation.jsx)  
[<span class='language jsx'>JSX</span> canvas-arc.jsx](https://playground.tabris.com/?gitref=v3.0.0&snippet=canvas-arc.jsx)

## Constructor

### new Canvas(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<Canvas>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Methods

### getContext(contextType, width, height)



Returns the drawing context with the given size.


Parameter|Type|Optional|Description
-|-|-|-
contextType | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The context identifier. Only `"2d"` is supported.
width | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | the width of the canvas context to create
height | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | the height of the canvas context to create


Returns <span style="white-space:nowrap;">[`CanvasContext`](CanvasContext.md)</span>

