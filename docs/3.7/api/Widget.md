---
---
# Class "Widget"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a> > <a href="#" >Widget</a>

Base class for all widgets


Type: | <code style="white-space: nowrap">Widget extends <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a></code>
Constructor: | protected
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | <code style="white-space: nowrap"><a href="Action.html" title="Action Class Reference">Action</a></code>, <code style="white-space: nowrap"><a href="ActivityIndicator.html" title="ActivityIndicator Class Reference">ActivityIndicator</a></code>, <code style="white-space: nowrap"><a href="Button.html" title="Button Class Reference">Button</a></code>, <code style="white-space: nowrap"><a href="CameraView.html" title="CameraView Class Reference">CameraView</a></code>, <code style="white-space: nowrap"><a href="CheckBox.html" title="CheckBox Class Reference">CheckBox</a></code>, <code style="white-space: nowrap"><a href="Composite.html" title="Composite Class Reference">Composite</a></code>, <code style="white-space: nowrap"><a href="ImageView.html" title="ImageView Class Reference">ImageView</a></code>, <code style="white-space: nowrap"><a href="PdfView.html" title="PdfView Class Reference">PdfView</a></code>, <code style="white-space: nowrap"><a href="Picker.html" title="Picker Class Reference">Picker</a></code>, <code style="white-space: nowrap"><a href="ProgressBar.html" title="ProgressBar Class Reference">ProgressBar</a></code>, <code style="white-space: nowrap"><a href="RadioButton.html" title="RadioButton Class Reference">RadioButton</a></code>, <code style="white-space: nowrap"><a href="Slider.html" title="Slider Class Reference">Slider</a></code>, <code style="white-space: nowrap"><a href="Switch.html" title="Switch Class Reference">Switch</a></code>, <code style="white-space: nowrap"><a href="TextInput.html" title="TextInput Class Reference">TextInput</a></code>, <code style="white-space: nowrap"><a href="TextView.html" title="TextView Class Reference">TextView</a></code>, <code style="white-space: nowrap"><a href="ToggleButton.html" title="ToggleButton Class Reference">ToggleButton</a></code>, <code style="white-space: nowrap"><a href="Video.html" title="Video Class Reference">Video</a></code>, <code style="white-space: nowrap"><a href="WebView.html" title="WebView Class Reference">WebView</a></code>
JSX Support: | No



See also:
  
[Understanding layouts in Tabris.js](../layout.md)  
[Understanding gesture events in Tabris.js](../touch.md)  
[<span class='language jsx'>JSX</span> A `Widget` with padding](https://github.com/eclipsesource/tabris-js/tree/v3.7.2/snippets/widget-padding.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.7.2&snippet=widget-padding.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>  
[<span class='language jsx'>JSX</span> A card style `Widget` with corner radius and elevation](https://github.com/eclipsesource/tabris-js/tree/v3.7.2/snippets/widget-cornerradius.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.7.2&snippet=widget-cornerradius.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>  
[<span class='language js'>JS</span> A `Widget` with a linear-gradient background](https://github.com/eclipsesource/tabris-js/tree/v3.7.2/snippets/widget-lineargradient.js) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.7.2&snippet=widget-lineargradient.js" style="color: cadetblue;">► Run in Playground</a>]</span>  
[<span class='language js'>JS</span> Using touch events on a `Widget`](https://github.com/eclipsesource/tabris-js/tree/v3.7.2/snippets/widget-longpress-to-drag.js) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.7.2&snippet=widget-longpress-to-drag.js" style="color: cadetblue;">► Run in Playground</a>]</span>  
[<span class='language jsx'>JSX</span> widget-elevation.jsx](https://github.com/eclipsesource/tabris-js/tree/v3.7.2/snippets/widget-elevation.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.7.2&snippet=widget-elevation.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>  
[<span class='language jsx'>JSX</span> widget-exclude-from-layout.jsx](https://github.com/eclipsesource/tabris-js/tree/v3.7.2/snippets/widget-exclude-from-layout.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.7.2&snippet=widget-exclude-from-layout.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>  
[<span class='language jsx'>JSX</span> widget-highlightontouch.jsx](https://github.com/eclipsesource/tabris-js/tree/v3.7.2/snippets/widget-highlightontouch.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.7.2&snippet=widget-highlightontouch.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>  
[<span class='language js'>JS</span> widget-touch.js](https://github.com/eclipsesource/tabris-js/tree/v3.7.2/snippets/widget-touch.js) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.7.2&snippet=widget-touch.js" style="color: cadetblue;">► Run in Playground</a>]</span>

## Methods

### animate(properties, options)



Starts an animation that transforms the given properties from their current values to the given ones. Supported properties are *transform* and *opacity*. Returns a promise that is resolved once the animation is completed and is rejected if the animation is aborted.


Parameter|Type|Description
-|-|-
properties | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;transform: <a href="Widget.html#transformation" title="Widget Class Type">Transformation</a>, // optional<br/>&nbsp;&nbsp;opacity: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a> // optional<br/>}</code> | The properties and target values to animate.
options | <code style="white-space: nowrap"><a href="Widget.html#animationoptions" title="Widget Class Type">AnimationOptions</a></code> | Configures the animation itself.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a></code>

### appendTo(parent)



Appends this widget to the given parent. The parent widget must support children (extending *Composite*). If the widget already has a parent, it is removed from the old parent.


Parameter|Type|Description
-|-|-
parent | <code style="white-space: nowrap"><a href="Composite.html" title="Composite Class Reference">Composite</a></code> | 


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### detach()



Removes this widget from its parent.

Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### dispose()



Removes this widget from its parent and destroys it. Also disposes of all its children. Triggers a `remove` event on the parent and a `dispose` event on itself. The widget can no longer be used.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### insertAfter(widget)



Inserts this widget directly after the given widget. If the widget already has a parent, it is removed from the old parent.


Parameter|Type|Description
-|-|-
widget | <code style="white-space: nowrap"><a href="#" >Widget</a></code> | 


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### insertBefore(widget)



Inserts this widget directly before the given widget. If the widget already has a parent, it is removed from the old parent.


Parameter|Type|Description
-|-|-
widget | <code style="white-space: nowrap"><a href="#" >Widget</a></code> | 


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### isDisposed()



Returns `true` if the widget has been disposed, otherwise `false`.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

### parent()



Returns the parent of this widget or `null` if this widget is not appended to a parent.

Returns: <code style="white-space: nowrap"><a href="Composite.html" title="Composite Class Reference">Composite</a></code>

### parent(selector)



Returns the first (nearest) parent of this widget that matches the given selector, or `null` if no parent matches.


Parameter|Type|Description
-|-|-
selector | <code style="white-space: nowrap"><a href="../selector.html" title="More about selectors">Selector</a></code> | A selector expression or a predicate function to filter the results.


Returns: <code style="white-space: nowrap">Result</code>

### siblings(selector?)



Returns a (possibly empty) collection of all siblings of this widget that match the given selector.


Parameter|Type|Description
-|-|-
selector | <code style="white-space: nowrap"><a href="../selector.html" title="More about selectors">Selector</a></code> | A selector expression or a predicate function to filter the results. *Optional.*


Returns: <code style="white-space: nowrap"><a href="WidgetCollection.html" title="WidgetCollection Class Reference">WidgetCollection</a></code>

## Protected Methods

These methods are accessible only in classes extending <code style="white-space: nowrap">Widget</code>.

### _setParent(parent, index?)



Sets the parent of the widget. If an index is given the widget will be inserted at that position.


Parameter|Type|Description
-|-|-
parent | <code style="white-space: nowrap"><a href="Composite.html" title="Composite Class Reference">Composite</a></code> | 
index | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>


## Properties

### absoluteBounds


The actual location and size of the widget, relative to contentView.

Type: |<code style="white-space: nowrap"><a href="Widget.html#bounds" title="Widget Class Type">Bounds</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | Not supported




### background


The background of the widget. If given a plain string it is interpreted first as a gradient, then as a color, and finally as an image path, whichever passes first. Use object literals or instances of `LinearGradient`, `Color` or `Image` to avoid any ambiguity.

Type: |<code style="white-space: nowrap"><a href="LinearGradient.html#lineargradientvalue" title="LinearGradient Class Type">LinearGradientValue</a><br/>&#124; <a href="Color.html#colorvalue" title="Color Class Type">ColorValue</a><br/>&#124; <a href="Image.html#imagevalue" title="Image Class Type">ImageValue</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`backgroundChanged`](#backgroundchanged)




### baseline


The vertical position of the widget's baseline relative to a sibling widget. Value `true` is treated like `'prev()'` and aligns it with the previous sibling.

Type: |<code style="white-space: nowrap"><a href="Constraint.html#siblingreferencevalue" title="Constraint Class Type">SiblingReferenceValue</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a><br/>&#124; true</code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`baselineChanged`](#baselinechanged)




### bottom


The position of the widget's bottom edge relative to the parent or a sibling widget.

Type: |<code style="white-space: nowrap"><a href="Constraint.html#constraintvalue" title="Constraint Class Type">ConstraintValue</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`bottomChanged`](#bottomchanged)




### bounds


The actual location and size of the widget, relative to its parent.

Type: |<code style="white-space: nowrap"><a href="Widget.html#bounds" title="Widget Class Type">Bounds</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | [`boundsChanged`](#boundschanged)




### centerX


The horizontal position of the widget's center relative to the parent's center. Value `true` is treated like `0` and puts it at the exact center without offset.

Type: |<code style="white-space: nowrap"><a href="Constraint.html#offset" title="Constraint Class Type">Offset</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a><br/>&#124; true</code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`centerXChanged`](#centerxchanged)




### centerY


The vertical position of the widget's center relative to the parent's center. Value `true` is treated like `0` and puts it at the exact center without offset.

Type: |<code style="white-space: nowrap"><a href="Constraint.html#offset" title="Constraint Class Type">Offset</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a><br/>&#124; true</code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`centerYChanged`](#centerychanged)




### class


A class name or a whitespace separated list of class names to identify the widget. Class names are arbitrary strings that describe a state or a category and help to select widgets using a selector expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also be added or removed using the field `classList`.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`classChanged`](#classchanged)




### classList


Provides convenient access to the list of class names set to this widget. Class names can either be set using the `class` property or by modifying the `classList` directly.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>[]</code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`classListChanged`](#classlistchanged)




### cornerRadius


Configure a widget to have equally rounded corners. The widget content is clipped by the rounded corners.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`cornerRadiusChanged`](#cornerradiuschanged)



See also:
  
[<span class='language jsx'>JSX</span> widget-cornerradius.jsx](https://github.com/eclipsesource/tabris-js/tree/v3.7.2/snippets/widget-cornerradius.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.7.2&snippet=widget-cornerradius.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>


### data


A general-purpose property that may be set to any object. It is initialized with an empty object for historical reasons (backwards compatibility).

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`dataChanged`](#datachanged)




### elevation


The position of the widget on the z-axis. Setting an `elevation` casts a shadow in the shape of the widget.

To have the shadow properly applied on Android it is required to set the `background` on the widget as well.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`elevationChanged`](#elevationchanged)



See also:
  
[<span class='language jsx'>JSX</span> widget-elevation.jsx](https://github.com/eclipsesource/tabris-js/tree/v3.7.2/snippets/widget-elevation.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.7.2&snippet=widget-elevation.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>


### enabled


Whether the widget can be interacted with.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">true</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`enabledChanged`](#enabledchanged)




### excludeFromLayout


If set to true the widget will be invisible and ignored in the layout of the parent. Visually it is treated like it was not attached to its parent, but it will still included in the return value of `children()`.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">false</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`excludeFromLayoutChanged`](#excludefromlayoutchanged)




### height


The height of the widget.

Type: |<code style="white-space: nowrap"><a href="Widget.html#dimension" title="Widget Class Type">Dimension</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`heightChanged`](#heightchanged)




### highlightOnTouch


Whether the widget should show visual feedback while touched. Enabling `highlightOnTouch` will not prevent the touch event from being propagated to the parent widget.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">false</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`highlightOnTouchChanged`](#highlightontouchchanged)



See also:
  
[<span class='language jsx'>JSX</span> widget-highlightontouch.jsx](https://github.com/eclipsesource/tabris-js/tree/v3.7.2/snippets/widget-highlightontouch.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.7.2&snippet=widget-highlightontouch.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>


### id


A string to identify the widget by using selectors. IDs are optional. It is strongly recommended that they are unique within any component.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`idChanged`](#idchanged)




### layoutData


Provides information for a widget to be used by the parent when determining its size and position. While this property accepts any valid LayoutData expression (see [`LayoutDataValue`](./LayoutData.md#layoutdatavalue)), it will always return an instance of the class [LayoutData](./LayoutData.md).

 Widget provides an alias property for each property of LayoutData. Setting these properties will change the value of the `layoutData` property, while getting them is the same as accessing them via the `layoutData` property. I.e. `widget.left === widget.layoutData.left`.

There are multiple presets for layoutData available as static properties on the `LayoutData` class: [center](./LayoutData.md#center)`, [stretch](./LayoutData.md#stretch)`, [stretchX](./LayoutData.md#stretchx)` and [stretchY](./LayoutData.md#stretchy)`. They may be set directly (`new TextView({layoutData: LayoutData.stretch});`), via string (e.g. `new TextView({layoutData: 'stretch'});`), or in JSX via a special shorthand syntax: `<TextView stretch/>`. The presets can be merged with widget properties, e.g. `<TextView stretch left={10}/>` or `<TextView stretchX centerY/>`

Type: |<code style="white-space: nowrap"><a href="LayoutData.html#layoutdatavalue" title="LayoutData Class Type">LayoutDataValue</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">LayoutData</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`layoutDataChanged`](#layoutdatachanged)




### left


The position of the widget's left edge relative to the parent or a sibling widget.

Type: |<code style="white-space: nowrap"><a href="Constraint.html#constraintvalue" title="Constraint Class Type">ConstraintValue</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`leftChanged`](#leftchanged)




### opacity


Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">1</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`opacityChanged`](#opacitychanged)




### padding


Additional space to add inside the widgets bounds.

Type: |<code style="white-space: nowrap"><a href="Widget.html#boxdimensions" title="Widget Class Type">BoxDimensions</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null_type" title="View &quot;null&quot; on MDN">null</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >By Constructor or JSX</a>
Change Event: | Not supported



See also:
  
[<span class='language jsx'>JSX</span> widget-padding.jsx](https://github.com/eclipsesource/tabris-js/tree/v3.7.2/snippets/widget-padding.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.7.2&snippet=widget-padding.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>


### right


The position of the widget's right edge relative to the parent or a sibling widget.

Type: |<code style="white-space: nowrap"><a href="Constraint.html#constraintvalue" title="Constraint Class Type">ConstraintValue</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`rightChanged`](#rightchanged)




### top


The position of the widget's top edge relative to the parent or a sibling widget.

Type: |<code style="white-space: nowrap"><a href="Constraint.html#constraintvalue" title="Constraint Class Type">ConstraintValue</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`topChanged`](#topchanged)




### transform


Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In Android the *transform* property does not affect the *bounds* property, while it does so in iOS.

Type: |<code style="white-space: nowrap"><a href="Widget.html#transformation" title="Widget Class Type">Transformation</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`transformChanged`](#transformchanged)




### visible


If set to false the widget will be invisible, but still occupy space in the parents layout. Visually it is treated like a widget with an `opacity` of `0`, but in addition the widget can also not be interacted with anymore.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">true</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`visibleChanged`](#visiblechanged)




### width


The width of the widget.

Type: |<code style="white-space: nowrap"><a href="Widget.html#dimension" title="Widget Class Type">Dimension</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`widthChanged`](#widthchanged)





## Events

### tap

Fired once when a finger briefly touched the widget.

EventObject Type: <code style="white-space: nowrap">WidgetTapEvent&lt;<a href="#" >Widget</a>&gt;</code>

Property|Type|Description
-|-|-
touches | <code style="white-space: nowrap">[{x: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, y: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}]</code> | Touch coordinates relative to the origin coordinates of the widget.

### longPress

Fired after pressing a widget for a specific amount of time (about a second), and again on lifting the finger.

EventObject Type: <code style="white-space: nowrap">WidgetLongPressEvent&lt;<a href="#" >Widget</a>&gt;</code>

Property|Type|Description
-|-|-
state | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'start'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'end'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'cancel'</a></code> | 'start' when the widget has been hold down long enough, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <code style="white-space: nowrap">[{x: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, y: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}]</code> | Touch coordinates relative to the origin coordinates of the widget.


See also:
  
[<span class='language js'>JS</span> widget-longpress-to-drag.js](https://github.com/eclipsesource/tabris-js/tree/v3.7.2/snippets/widget-longpress-to-drag.js) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.7.2&snippet=widget-longpress-to-drag.js" style="color: cadetblue;">► Run in Playground</a>]</span>
### pan

Fired continuously after a finger touching the widget moved for a certain distance.

EventObject Type: <code style="white-space: nowrap">WidgetPanEvent&lt;<a href="#" >Widget</a>&gt;</code>

Property|Type|Description
-|-|-
state | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'start'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'change'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'end'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'cancel'</a></code> | 'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <code style="white-space: nowrap">[{x: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, y: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}]</code> | Touch coordinates relative to the origin coordinates of the widget.
translationX | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current horizontal touch offset relative to the first touch.
translationY | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current vertical touch offset relative to the first touch.
velocityX | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current horizontal velocity in pixels per second.
velocityY | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current vertical velocity in pixels per second.

### panUp

Fired when a finger starts moving up.

EventObject Type: <code style="white-space: nowrap">WidgetPanEvent&lt;<a href="#" >Widget</a>&gt;</code>

Property|Type|Description
-|-|-
state | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'start'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'change'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'end'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'cancel'</a></code> | 'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <code style="white-space: nowrap">[{x: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, y: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}]</code> | Touch coordinates relative to the origin coordinates of the widget.
translationX | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current horizontal touch offset relative to the first touch.
translationY | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current vertical touch offset relative to the first touch.
velocityX | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current horizontal velocity in pixels per second.
velocityY | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current vertical velocity in pixels per second.

### panDown

Fired when a finger starts moving down.

EventObject Type: <code style="white-space: nowrap">WidgetPanEvent&lt;<a href="#" >Widget</a>&gt;</code>

Property|Type|Description
-|-|-
state | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'start'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'change'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'end'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'cancel'</a></code> | 'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <code style="white-space: nowrap">[{x: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, y: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}]</code> | Touch coordinates relative to the origin coordinates of the widget.
translationX | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current horizontal touch offset relative to the first touch.
translationY | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current vertical touch offset relative to the first touch.
velocityX | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current horizontal velocity in pixels per second.
velocityY | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current vertical velocity in pixels per second.

### panLeft

Fired when a finger starts moving left.

EventObject Type: <code style="white-space: nowrap">WidgetPanEvent&lt;<a href="#" >Widget</a>&gt;</code>

Property|Type|Description
-|-|-
state | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'start'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'change'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'end'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'cancel'</a></code> | 'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <code style="white-space: nowrap">[{x: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, y: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}]</code> | Touch coordinates relative to the origin coordinates of the widget.
translationX | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current horizontal touch offset relative to the first touch.
translationY | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current vertical touch offset relative to the first touch.
velocityX | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current horizontal velocity in pixels per second.
velocityY | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current vertical velocity in pixels per second.

### panRight

Fired when a finger starts moving right.

EventObject Type: <code style="white-space: nowrap">WidgetPanEvent&lt;<a href="#" >Widget</a>&gt;</code>

Property|Type|Description
-|-|-
state | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'start'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'change'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'end'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'cancel'</a></code> | 'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <code style="white-space: nowrap">[{x: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, y: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}]</code> | Touch coordinates relative to the origin coordinates of the widget.
translationX | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current horizontal touch offset relative to the first touch.
translationY | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current vertical touch offset relative to the first touch.
velocityX | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current horizontal velocity in pixels per second.
velocityY | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current vertical velocity in pixels per second.

### panHorizontal

Fired when a finger starts moving left or right.

EventObject Type: <code style="white-space: nowrap">WidgetPanEvent&lt;<a href="#" >Widget</a>&gt;</code>

Property|Type|Description
-|-|-
state | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'start'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'change'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'end'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'cancel'</a></code> | 'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <code style="white-space: nowrap">[{x: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, y: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}]</code> | Touch coordinates relative to the origin coordinates of the widget.
translationX | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current horizontal touch offset relative to the first touch.
translationY | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current vertical touch offset relative to the first touch.
velocityX | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current horizontal velocity in pixels per second.
velocityY | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current vertical velocity in pixels per second.

### panVertical

Fired when a finger starts moving up or down.

EventObject Type: <code style="white-space: nowrap">WidgetPanEvent&lt;<a href="#" >Widget</a>&gt;</code>

Property|Type|Description
-|-|-
state | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'start'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'change'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'end'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'cancel'</a></code> | 'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <code style="white-space: nowrap">[{x: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, y: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}]</code> | Touch coordinates relative to the origin coordinates of the widget.
translationX | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current horizontal touch offset relative to the first touch.
translationY | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current vertical touch offset relative to the first touch.
velocityX | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current horizontal velocity in pixels per second.
velocityY | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Current vertical velocity in pixels per second.

### swipeUp

Fired when a finger moves up quickly.

EventObject Type: <code style="white-space: nowrap">WidgetSwipeEvent&lt;<a href="#" >Widget</a>&gt;</code>

Property|Type|Description
-|-|-
touches | <code style="white-space: nowrap">[{x: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, y: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}]</code> | Touch coordinates relative to the origin coordinates of the widget.

### swipeDown

Fired when a finger moves down quickly.

EventObject Type: <code style="white-space: nowrap">WidgetSwipeEvent&lt;<a href="#" >Widget</a>&gt;</code>

Property|Type|Description
-|-|-
touches | <code style="white-space: nowrap">[{x: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, y: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}]</code> | Touch coordinates relative to the origin coordinates of the widget.

### swipeLeft

Fired when a finger moves left quickly.

EventObject Type: <code style="white-space: nowrap">WidgetSwipeEvent&lt;<a href="#" >Widget</a>&gt;</code>

Property|Type|Description
-|-|-
touches | <code style="white-space: nowrap">[{x: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, y: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}]</code> | Touch coordinates relative to the origin coordinates of the widget.

### swipeRight

Fired when a finger moves right quickly.

EventObject Type: <code style="white-space: nowrap">WidgetSwipeEvent&lt;<a href="#" >Widget</a>&gt;</code>

Property|Type|Description
-|-|-
touches | <code style="white-space: nowrap">[{x: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, y: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}]</code> | Touch coordinates relative to the origin coordinates of the widget.

### touchStart

Fired when a widget is touched. See [Touch Events](../touch.md).

EventObject Type: <code style="white-space: nowrap">WidgetTouchEvent&lt;<a href="#" >Widget</a>&gt;</code>

Property|Type|Description
-|-|-
touches | <code style="white-space: nowrap">[{x: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, y: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, absoluteX: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, absoluteY: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}]</code> | Touch coordinates relative to the origin coordinates of the widget.

### touchMove

Fired repeatedly while swiping across the screen.

EventObject Type: <code style="white-space: nowrap">WidgetTouchEvent&lt;<a href="#" >Widget</a>&gt;</code>

Property|Type|Description
-|-|-
touches | <code style="white-space: nowrap">[{x: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, y: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, absoluteX: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, absoluteY: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}]</code> | Touch coordinates relative to the origin coordinates of the widget.

### touchEnd

Fired when a touch ends on the same widget than it started on.

EventObject Type: <code style="white-space: nowrap">WidgetTouchEvent&lt;<a href="#" >Widget</a>&gt;</code>

Property|Type|Description
-|-|-
touches | <code style="white-space: nowrap">[{x: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, y: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, absoluteX: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, absoluteY: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}]</code> | Touch coordinates relative to the origin coordinates of the widget.

### touchCancel

Fired instead of touchEnd when the touch ends on another widget than it started on.

EventObject Type: <code style="white-space: nowrap">WidgetTouchEvent&lt;<a href="#" >Widget</a>&gt;</code>

Property|Type|Description
-|-|-
touches | <code style="white-space: nowrap">[{x: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, y: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, absoluteX: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, absoluteY: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}]</code> | Touch coordinates relative to the origin coordinates of the widget.

### resize

Fired when the widget's size has changed.

EventObject Type: <code style="white-space: nowrap">WidgetResizeEvent&lt;<a href="#" >Widget</a>&gt;</code>

Property|Type|Description
-|-|-
height | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The height of the widget in dip.
left | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The horizontal offset from the parent's left edge in dip.
top | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The vertical offset from the parent's top edge in dip.
width | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The width of the widget in dip.

### dispose

Fired when the widget is about to be disposed. At this point the widget and its children are still accessible.

EventObject Type: <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a>&lt;<a href="#" >Widget</a>&gt;</code>

This event has no additional parameter.
## Change Events

### idChanged

Fired when the [id](#id) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | The new value of [id](#id).

### classChanged

Fired when the [class](#class) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | The new value of [class](#class).

### classListChanged

Fired when the [classList](#classlist) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="View &quot;Array&quot; on MDN">Array</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>[]</code> | The new value of [classList](#classlist).

### enabledChanged

Fired when the [enabled](#enabled) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | The new value of [enabled](#enabled).

### excludeFromLayoutChanged

Fired when the [excludeFromLayout](#excludefromlayout) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | The new value of [excludeFromLayout](#excludefromlayout).

### visibleChanged

Fired when the [visible](#visible) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | The new value of [visible](#visible).

### layoutDataChanged

Fired when the [layoutData](#layoutdata) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="LayoutData.html#layoutdatavalue" title="LayoutData Class Type">LayoutDataValue</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="LayoutData.html#layoutdatavalue" title="LayoutData Class Type">LayoutDataValue</a></code> | The new value of [layoutData](#layoutdata).

### leftChanged

Fired when the [left](#left) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="Constraint.html#constraintvalue" title="Constraint Class Type">ConstraintValue</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="Constraint.html#constraintvalue" title="Constraint Class Type">ConstraintValue</a></code> | The new value of [left](#left).

### rightChanged

Fired when the [right](#right) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="Constraint.html#constraintvalue" title="Constraint Class Type">ConstraintValue</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="Constraint.html#constraintvalue" title="Constraint Class Type">ConstraintValue</a></code> | The new value of [right](#right).

### topChanged

Fired when the [top](#top) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="Constraint.html#constraintvalue" title="Constraint Class Type">ConstraintValue</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="Constraint.html#constraintvalue" title="Constraint Class Type">ConstraintValue</a></code> | The new value of [top](#top).

### bottomChanged

Fired when the [bottom](#bottom) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="Constraint.html#constraintvalue" title="Constraint Class Type">ConstraintValue</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="Constraint.html#constraintvalue" title="Constraint Class Type">ConstraintValue</a></code> | The new value of [bottom](#bottom).

### widthChanged

Fired when the [width](#width) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="Widget.html#dimension" title="Widget Class Type">Dimension</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="Widget.html#dimension" title="Widget Class Type">Dimension</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code> | The new value of [width](#width).

### heightChanged

Fired when the [height](#height) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="Widget.html#dimension" title="Widget Class Type">Dimension</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="Widget.html#dimension" title="Widget Class Type">Dimension</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code> | The new value of [height](#height).

### centerXChanged

Fired when the [centerX](#centerx) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="Constraint.html#offset" title="Constraint Class Type">Offset</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a><br/>&#124; true&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="Constraint.html#offset" title="Constraint Class Type">Offset</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a><br/>&#124; true</code> | The new value of [centerX](#centerx).

### centerYChanged

Fired when the [centerY](#centery) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="Constraint.html#offset" title="Constraint Class Type">Offset</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a><br/>&#124; true&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="Constraint.html#offset" title="Constraint Class Type">Offset</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a><br/>&#124; true</code> | The new value of [centerY](#centery).

### baselineChanged

Fired when the [baseline](#baseline) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="Constraint.html#siblingreferencevalue" title="Constraint Class Type">SiblingReferenceValue</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a><br/>&#124; true&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="Constraint.html#siblingreferencevalue" title="Constraint Class Type">SiblingReferenceValue</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a><br/>&#124; true</code> | The new value of [baseline](#baseline).

### elevationChanged

Fired when the [elevation](#elevation) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The new value of [elevation](#elevation).

### cornerRadiusChanged

Fired when the [cornerRadius](#cornerradius) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The new value of [cornerRadius](#cornerradius).

### boundsChanged

Fired when the [bounds](#bounds) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="Widget.html#bounds" title="Widget Class Type">Bounds</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="Widget.html#bounds" title="Widget Class Type">Bounds</a></code> | The new value of [bounds](#bounds).

### backgroundChanged

Fired when the [background](#background) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="LinearGradient.html#lineargradientvalue" title="LinearGradient Class Type">LinearGradientValue</a><br/>&#124; <a href="Color.html#colorvalue" title="Color Class Type">ColorValue</a><br/>&#124; <a href="Image.html#imagevalue" title="Image Class Type">ImageValue</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="LinearGradient.html#lineargradientvalue" title="LinearGradient Class Type">LinearGradientValue</a><br/>&#124; <a href="Color.html#colorvalue" title="Color Class Type">ColorValue</a><br/>&#124; <a href="Image.html#imagevalue" title="Image Class Type">ImageValue</a></code> | The new value of [background](#background).

### opacityChanged

Fired when the [opacity](#opacity) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The new value of [opacity](#opacity).

### transformChanged

Fired when the [transform](#transform) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="Widget.html#transformation" title="Widget Class Type">Transformation</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="Widget.html#transformation" title="Widget Class Type">Transformation</a></code> | The new value of [transform](#transform).

### highlightOnTouchChanged

Fired when the [highlightOnTouch](#highlightontouch) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | The new value of [highlightOnTouch](#highlightontouch).

### dataChanged

Fired when the [data](#data) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Widget</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code> | The new value of [data](#data).



## Related Types

### Dimension

* JavaScript Type: `number`
* TypeScript Type: `tabris.Dimension`, an alias for `number`

A positive float, or 0, representing device independent pixels (DIP).

### BoxDimensions

* JavaScript Type: `Object` or `string` or `Array`.
* TypeScript Type: `tabris.BoxDimensions`

The bounds of a rectangle in relation to the four edges of a containing element in DIP (device independent pixel). By default it is a plain object implementing the following interface:

```ts
interface BoxDimensions {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}
```

All properties are [`dimension`](#dimension) and optional. Omitted properties are treated as `0`.

As a shorthand a list of four dimensions is also accepted. This follow the order of `[top, right, bottom, left]`, with missing entries being filled in by the entry of the opposing dimension. If only one entry is given it is used for all dimensions:

```js
[1, 2, 3, 4] // {top: 1, right: 2, bottom: 3, left: 4};
[1, 2, 3] // {top: 1, right: 2, bottom: 3, left: 2};
[1, 2] // {top: 1, right: 2, bottom: 1, left: 2};
[1] // {top: 1, right: 1, bottom: 1, left: 1};
```

A space separated string list is also accepted instead of an array, with or without `px` as a unit.

Examples:

```js
widget.padding = {left: 8, right: 8, top: 0, bottom: 0};
widget.padding = {left: 10, right: 10};
widget.padding = [0, 8];
widget.padding = [1, 10, 2, 10];
widget.padding = '10px 11px 12px 13px';
widget.padding = '10 11 12 13';
widget.padding = '0 8';
```

### Bounds

* JavaScript Type: `Object`
* TypeScript Type: `tabris.Bounds`

The bounds of a rectangle in relation to the top-left corner of a containing element in DIP (device independent pixel). This is a plain object implementing the following interface:

```ts
interface Bounds {
  left: number;
  top: number;
  width: number;
  height: number;
}
```

Explanation:

Property | Description
---------|--------------------------------------------------
left     | The horizontal offset from the parent's left edge
top      | The vertical offset from the parent's top edge
width    | The width of the widget
height   | The height of the widget

Example:

```js
const buttonRight = button.bounds.left + button.bounds.width;
```

### AnimationOptions

Options of the [`animate()`](#animateproperties-options) method. They have to implement the following interface:

```ts
interface AnimationOptions {
  delay?: number;
  duration?: number;
  easing?: "linear" | "ease-in" | "ease-out" | "ease-in-out";
  repeat?: number;
  reverse?: boolean;
  name?: string;
}
```

Each property has a default value if omitted:

Property   | Default            | Description
-----------|--------------------|------------
`delay`    | `0`                | Time until the animation starts in ms.
`duration` | (platform default) | Animation duration in ms.
`easing`   | `linear`           | Acceleration/deceleration curve
`repeat`   | `0`                | Number of times to repeat the animation. Use `Infinity` to repeat indefinitely.
`reverse`  | `true`             | Should the direction of the animation alternative on every repeat.
`name`     | `undefined`        | No effect, but will be given in animation events.

### Transformation

A Transformation is any object implementing the following interface:

```ts
interface Transformation {
  rotation?: number;
  scaleX?: number;
  scaleY?: number;
  translationX?: number;
  translationY?: number;
  translationZ?: number;
}
```

On iOS `translationZ` is not supported and will be ignored.

Each property has a default value if omitted:

Property       | Default | Description
---------------|---------|------------
`rotation`     | `0`     |  Clock-wise rotation in radians.
`scaleX`       | `1`     |  Horizontal scale factor.
`scaleY`       | `1`     |  Vertical scale factor.
`translationX` | `0`     |  Horizontal translation (shift) in DIP (device independent pixels).
`translationY` | `0`     |  Vertical translation (shift) in DIP.
`translationZ` | `0`     |  Z-axis translation (shift) in DIP.

Example:

```js
{scaleX: 2, scaleY: 2, rotation: Math.PI * 0.75}
```
This transformation will make the widget twice as big and rotate it by 135&deg;.

### Properties&lt;Widget&gt;

The generic `Properties` type describes an object containing any number of key-value pairs corresponding to the settable properties of a given widget class. Such objects can be givin to a widget constructor or [`set`](./NativeObject.md#setproperties) method so set multiple widget properties simultaneously.

```ts
// Valid:
video.set({autoPlay: true, url: './myvideo.mp4'});
// Invalid: duration is read-only and can not be set!
video.set({duration: 1000});
```

The TypeScript interface always requires the widget class type parameter:

```ts
// Correct:
let props: Properties<Video> = {autoPlay: true, url: './myvideo.mp4'};
// Compiler Error: duration is read-only and can not be set!
props = {duration: 1000};
```

This interface is especially relevant when writing custom components in TypeScript, where it is needed to define the constructor:

```tsx
class CustomComponent extends Composite {

  constructor(properties: Properties<CustomComponent>) {
    super(properties);
  }

}
```


```ts
interface PropertyChangedEvent<TargetType, ValueType> extends EventObject<TargetType> {
  readonly value: ValueType
}
```

