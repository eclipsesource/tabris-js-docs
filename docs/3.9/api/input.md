---
---
# Object "input"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a> > <a href="#" >Input</a>

The `input` object is supposed to fire global touch events with coordinates relative to the app window.


Type: | <code style="white-space: nowrap">Input extends <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a></code>
Constructor: | private
Singleton: | `input`
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No



See also:
  
[<span class='language jsx'>JSX</span> input.jsx](https://github.com/eclipsesource/tabris-js/tree/v3.9.0/snippets/input.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.9.0&snippet=input.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>

## Events

### pointerDown

Fired when the app window is touched.

EventObject Type: <code style="white-space: nowrap">PointerEvent&lt;<a href="#" >Input</a>&gt;</code>

Property|Type|Description
-|-|-
touches | <code style="white-space: nowrap">[{x: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, y: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}]</code> | Touch coordinates relative to the origin coordinates of the app window.

### pointerMove

Fired repeatedly while swiping across the app window.

EventObject Type: <code style="white-space: nowrap">PointerEvent&lt;<a href="#" >Input</a>&gt;</code>

Property|Type|Description
-|-|-
touches | <code style="white-space: nowrap">[{x: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, y: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}]</code> | Touch coordinates relative to the origin coordinates of the app window.

### pointerUp

Fired when a touch ends on the app window than it started on.

EventObject Type: <code style="white-space: nowrap">PointerEvent&lt;<a href="#" >Input</a>&gt;</code>

Property|Type|Description
-|-|-
touches | <code style="white-space: nowrap">[{x: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, y: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}]</code> | Touch coordinates relative to the origin coordinates of the app window.

### pointerCancel

Fired instead of 'pointerUp' when the touch ends on another app window than it started on.

EventObject Type: <code style="white-space: nowrap">PointerEvent&lt;<a href="#" >Input</a>&gt;</code>

Property|Type|Description
-|-|-
touches | <code style="white-space: nowrap">[{x: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, y: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}]</code> | Touch coordinates relative to the origin coordinates of the app window.

### resize

Fired when the app window size has changed.

EventObject Type: <code style="white-space: nowrap">InputResizeEvent&lt;<a href="#" >Input</a>&gt;</code>

Property|Type|Description
-|-|-
height | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The height of the app window in dip.
left | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The horizontal offset from the left edge of the app window in dip.
top | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The vertical offset from the top edge of the app window in dip.
width | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The width of the app window in dip.


