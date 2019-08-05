---
---
# Class "Widget"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span>

Base class for all widgets


Constructor | *protected*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | <span style="white-space:nowrap;">[`Action`](Action.md)</span>, <span style="white-space:nowrap;">[`ActivityIndicator`](ActivityIndicator.md)</span>, <span style="white-space:nowrap;">[`Button`](Button.md)</span>, <span style="white-space:nowrap;">[`CheckBox`](CheckBox.md)</span>, <span style="white-space:nowrap;">[`Composite`](Composite.md)</span>, <span style="white-space:nowrap;">[`ImageView`](ImageView.md)</span>, <span style="white-space:nowrap;">[`Picker`](Picker.md)</span>, <span style="white-space:nowrap;">[`ProgressBar`](ProgressBar.md)</span>, <span style="white-space:nowrap;">[`RadioButton`](RadioButton.md)</span>, <span style="white-space:nowrap;">[`Slider`](Slider.md)</span>, <span style="white-space:nowrap;">[`Switch`](Switch.md)</span>, <span style="white-space:nowrap;">[`TextInput`](TextInput.md)</span>, <span style="white-space:nowrap;">[`TextView`](TextView.md)</span>, <span style="white-space:nowrap;">[`ToggleButton`](ToggleButton.md)</span>, <span style="white-space:nowrap;">[`Video`](Video.md)</span>, <span style="white-space:nowrap;">[`WebView`](WebView.md)</span>
JSX support | *No*


See also:
  
[Understanding layouts in Tabris.js](../layout.md)  
[Understanding gesture events in Tabris.js](../touch.md)  
[<span class='language jsx'>JSX</span> A `Widget` with padding](https://playground.tabris.com/?gitref=v3.1.0&snippet=widget-padding.jsx)  
[<span class='language jsx'>JSX</span> A card style `Widget` with corner radius and elevation](https://playground.tabris.com/?gitref=v3.1.0&snippet=widget-cornerradius.jsx)  
[<span class='language js'>JS</span> A `Widget` with a linear-gradient background](https://playground.tabris.com/?gitref=v3.1.0&snippet=widget-lineargradient.js)  
[<span class='language js'>JS</span> Using touch events on a `Widget`](https://playground.tabris.com/?gitref=v3.1.0&snippet=widget-longpress-to-drag.js)  
[<span class='language jsx'>JSX</span> widget-elevation.jsx](https://playground.tabris.com/?gitref=v3.1.0&snippet=widget-elevation.jsx)  
[<span class='language jsx'>JSX</span> widget-exclude-from-layout.jsx](https://playground.tabris.com/?gitref=v3.1.0&snippet=widget-exclude-from-layout.jsx)  
[<span class='language jsx'>JSX</span> widget-highlightontouch.jsx](https://playground.tabris.com/?gitref=v3.1.0&snippet=widget-highlightontouch.jsx)  
[<span class='language js'>JS</span> widget-touch.js](https://playground.tabris.com/?gitref=v3.1.0&snippet=widget-touch.js)

## Methods

### animate(properties, options)



Starts an animation that transforms the given properties from their current values to the given ones. Supported properties are *transform* and *opacity*. Returns a promise that is resolved once the animation is completed and is rejected if the animation is aborted.


Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`{transform?: Transformation, opacity?: number}`</span> | No | The properties and target values to animate.
options | <span style="white-space:nowrap;">[`AnimationOptions`](../types.md#animationoptions)</span> | No | Configures the animation itself.


Returns <span style="white-space:nowrap;">`Promise<any>`</span>

### appendTo(parent)



Appends this widget to the given parent. The parent widget must support children (extending *Composite*). If the widget already has a parent, it is removed from the old parent.


Parameter|Type|Optional|Description
-|-|-|-
parent | <span style="white-space:nowrap;">[`Composite`](Composite.md)</span> | No | 


Returns <span style="white-space:nowrap;">[`this`](#)</span>

### detach()



Removes this widget from its parent.

Returns <span style="white-space:nowrap;">[`this`](#)</span>

### dispose()



Removes this widget from its parent and destroys it. Also disposes of all its children. Triggers a `remove` event on the parent and a `dispose` event on itself. The widget can no longer be used.

Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### insertAfter(widget)



Inserts this widget directly after the given widget. If the widget already has a parent, it is removed from the old parent.


Parameter|Type|Optional|Description
-|-|-|-
widget | <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> | No | 


Returns <span style="white-space:nowrap;">[`this`](#)</span>

### insertBefore(widget)



Inserts this widget directly before the given widget. If the widget already has a parent, it is removed from the old parent.


Parameter|Type|Optional|Description
-|-|-|-
widget | <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> | No | 


Returns <span style="white-space:nowrap;">[`this`](#)</span>

### isDisposed()



Returns `true` if the widget has been disposed, otherwise `false`.

Returns <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>

### parent()



Returns the parent of this widget or `null` if this widget is not appended to a parent.

Returns <span style="white-space:nowrap;">[`Composite`](Composite.md)</span>

### parent(selector)



Returns the first (nearest) parent of this widget that matches the given selector, or `null` if no parent matches.


Parameter|Type|Optional|Description
-|-|-|-
selector | <span style="white-space:nowrap;">[`Selector`](../types.md#selector)</span> | No | A selector expression or a predicate function to filter the results.


Returns <span style="white-space:nowrap;">`Result`</span>

### siblings(selector?)



Returns a (possibly empty) collection of all siblings of this widget that match the given selector.


Parameter|Type|Optional|Description
-|-|-|-
selector | <span style="white-space:nowrap;">[`Selector`](../types.md#selector)</span> | Yes | A selector expression or a predicate function to filter the results.


Returns <span style="white-space:nowrap;">[`WidgetCollection`](WidgetCollection.md)</span>

## Protected Methods

These methods are accessible only in classes extending *Widget*.

### _setParent(parent, index?)



Sets the parent of the widget. If an index is given the widget will be inserted at that position.


Parameter|Type|Optional|Description
-|-|-|-
parent | <span style="white-space:nowrap;">[`Composite`](Composite.md)</span> | No | 
index | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Yes | 


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>


## Properties

### [JSX.jsxFactory]


This function is called to create JSX widget elements. You may override it in your own subclass to create custom JSX behavior. **The function is not called with any context, i.e. `this` is not available.**

Type | <span style="white-space:nowrap;">`JSX.JsxFactory`</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor or JSX. Once set, it cannot change anymore.



### absoluteBounds


The actual location and size of the widget, relative to contentView.

Type | <span style="white-space:nowrap;">[`Bounds`](../types.md#bounds)</span>
Settable | *No*
Change events | *No*




### background


The background of the widget. If given a plain string it is interpreted first as a gradient, then as a color, and finally as an image path, whichever passes first. Use object literals or instances of `LinearGradient`, `Color` or `Image` to avoid any ambiguity.

Type | <span style="white-space:nowrap;">[`LinearGradientValue`](../types.md#lineargradientvalue) \| [`ColorValue`](../types.md#colorvalue) \| [`ImageValue`](../types.md#imagevalue)</span>
Settable | *Yes*
Change events | *Yes*




### baseline


The vertical position of the widget's baseline relative to a sibling widget. Value `true` is treated like `'prev()'` and aligns it with the previous sibling.

Type | <span style="white-space:nowrap;">[`SiblingReferenceValue`](../types.md#siblingreferencevalue) \| `'auto'` \| `true`</span>
Default | `'auto'`
Settable | *Yes*
Change events | *Yes*




### bottom


The position of the widget's bottom edge relative to the parent or a sibling widget.

Type | <span style="white-space:nowrap;">[`ConstraintValue`](../types.md#constraintvalue)</span>
Default | `'auto'`
Settable | *Yes*
Change events | *Yes*




### bounds


The actual location and size of the widget, relative to its parent.

Type | <span style="white-space:nowrap;">[`Bounds`](../types.md#bounds)</span>
Settable | *No*
Change events | *Yes*




### centerX


The horizontal position of the widget's center relative to the parent's center. Value `true` is treated like `0` and puts it at the exact center without offset.

Type | <span style="white-space:nowrap;">[`Offset`](../types.md#offset) \| `'auto'` \| `true`</span>
Default | `'auto'`
Settable | *Yes*
Change events | *Yes*




### centerY


The vertical position of the widget's center relative to the parent's center. Value `true` is treated like `0` and puts it at the exact center without offset.

Type | <span style="white-space:nowrap;">[`Offset`](../types.md#offset) \| `'auto'` \| `true`</span>
Default | `'auto'`
Settable | *Yes*
Change events | *Yes*




### class


A class name or a whitespace separated list of class names to identify the widget. Class names are arbitrary strings that describe a state or a category and help to select widgets using a selector expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also be added or removed using the field `classList`.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *Yes*
Change events | *Yes*




### classList


Provides convenient access to the list of class names set to this widget. Class names can either be set using the `class` property or by modifying the `classList` directly.

Type | <span style="white-space:nowrap;">[`string[]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *Yes*
Change events | *Yes*




### cornerRadius


Configure a widget to have equally rounded corners. The widget content is clipped by the rounded corners.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *Yes*
Change events | *Yes*


See also:
  
[<span class='language jsx'>JSX</span> widget-cornerradius.jsx](https://playground.tabris.com/?gitref=v3.1.0&snippet=widget-cornerradius.jsx)


### data


A general-purpose object that allows the application to attach arbitrary data to the widget. Manipulations on this object have no effect on the widget itself in any way. Example: `widget.data.myData = myData;`

Type | <span style="white-space:nowrap;">[`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor or JSX. Once set, it cannot change anymore.



### elevation


The position of the widget on the z-axis. Setting an `elevation` casts a shadow in the shape of the widget.

To have the shadow properly applied on Android it is required to set the `background` on the widget as well.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *Yes*
Change events | *Yes*


See also:
  
[<span class='language jsx'>JSX</span> widget-elevation.jsx](https://playground.tabris.com/?gitref=v3.1.0&snippet=widget-elevation.jsx)


### enabled


Whether the widget can be interacted with.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Default | `true`
Settable | *Yes*
Change events | *Yes*




### excludeFromLayout


If set to true the widget will be invisible and ignored in the layout of the parent. Visually it is treated like it was not attached to its parent, but it will still included in the return value of `children()`.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Default | `false`
Settable | *Yes*
Change events | *Yes*




### height


The height of the widget.

Type | <span style="white-space:nowrap;">[`Dimension`](../types.md#dimension) \| `'auto'`</span>
Default | `'auto'`
Settable | *Yes*
Change events | *Yes*




### highlightOnTouch


Whether the widget should show visual feedback while touched. Enabling `highlightOnTouch` will not prevent the touch event from being propagated to the parent widget.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Default | `false`
Settable | *Yes*
Change events | *Yes*


See also:
  
[<span class='language jsx'>JSX</span> widget-highlightontouch.jsx](https://playground.tabris.com/?gitref=v3.1.0&snippet=widget-highlightontouch.jsx)


### id


A string to identify the widget by using selectors. IDs are optional. It is strongly recommended that they are unique within a page.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *Yes*
Change events | *Yes*




### layoutData


Provides information for a widget to be used by the parent when determining its size and position. While this property accepts any valid LayoutData expression (see [LayoutDataValue](../types.md#layoutdatavalue), it will always return an instance of the class [LayoutData](./LayoutData.md).

 Widget provides an alias property for each property of LayoutData. Setting these properties will change the value of the `layoutData` property, while getting them is the same as accessing them via the `layoutData` property. I.e. `widget.left === widget.layoutData.left`.

There are multiple presets for layoutData available as static properties on the `LayoutData` class: [center](./LayoutData.md#center)`, [stretch](./LayoutData.md#stretch)`, [stretchX](./LayoutData.md#stretchx)` and [stretchY](./LayoutData.md#stretchy)`. They may be set directly (`new TextView({layoutData: LayoutData.stretch});`), via string (e.g. `new TextView({layoutData: 'stretch'});`), or in JSX via a special shorthand syntax: `<TextView stretch/>`. The presets can be merged with widget properties, e.g. `<TextView stretch left={10}/>` or `<TextView stretchX centerY/>`

Type | <span style="white-space:nowrap;">[`LayoutDataValue`](../types.md#layoutdatavalue)</span>
Default | `LayoutData`
Settable | *Yes*
Change events | *Yes*




### left


The position of the widget's left edge relative to the parent or a sibling widget.

Type | <span style="white-space:nowrap;">[`ConstraintValue`](../types.md#constraintvalue)</span>
Default | `'auto'`
Settable | *Yes*
Change events | *Yes*




### opacity


Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Default | `1`
Settable | *Yes*
Change events | *Yes*




### padding


Additional space to add inside the widgets bounds.

Type | <span style="white-space:nowrap;">[`BoxDimensions`](../types.md#boxdimensions) \| [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)</span>
Settable | *On creation*
Change events | *No*




This property can only be set via constructor or JSX. Once set, it cannot change anymore.

See also:
  
[<span class='language jsx'>JSX</span> widget-padding.jsx](https://playground.tabris.com/?gitref=v3.1.0&snippet=widget-padding.jsx)


### right


The position of the widget's right edge relative to the parent or a sibling widget.

Type | <span style="white-space:nowrap;">[`ConstraintValue`](../types.md#constraintvalue)</span>
Default | `'auto'`
Settable | *Yes*
Change events | *Yes*




### top


The position of the widget's top edge relative to the parent or a sibling widget.

Type | <span style="white-space:nowrap;">[`ConstraintValue`](../types.md#constraintvalue)</span>
Default | `'auto'`
Settable | *Yes*
Change events | *Yes*




### transform


Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In Android the *transform* property does not affect the *bounds* property, while it does so in iOS.

Type | <span style="white-space:nowrap;">[`Transformation`](../types.md#transformation)</span>
Settable | *Yes*
Change events | *Yes*




### visible


If set to false the widget will be invisible, but still occupy space in the parents layout. Visually it is treated like a widget with an `opacity` of `0`, but in addition the widget can also not be interacted with anymore.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Default | `true`
Settable | *Yes*
Change events | *Yes*




### width


The width of the widget.

Type | <span style="white-space:nowrap;">[`Dimension`](../types.md#dimension) \| `'auto'`</span>
Default | `'auto'`
Settable | *Yes*
Change events | *Yes*





## Events

### tap

Fired once when a finger briefly touched the widget.

Parameter|Type|Description
-|-|-
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.

### longPress

Fired after pressing a widget for a specific amount of time (about a second), and again on lifting the finger.

Parameter|Type|Description
-|-|-
state | <span style="white-space:nowrap;">`'start'` \| `'end'` \| `'cancel'`</span> | 'start' when the widget has been hold down long enough, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.

See also:
  
[<span class='language js'>JS</span> widget-longpress-to-drag.js](https://playground.tabris.com/?gitref=v3.1.0&snippet=widget-longpress-to-drag.js)
### pan

Fired continuously after a finger touching the widget moved for a certain distance.

Parameter|Type|Description
-|-|-
state | <span style="white-space:nowrap;">`'start'` \| `'change'` \| `'end'` \| `'cancel'`</span> | 'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.
translationX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal touch offset relative to the first touch.
translationY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical touch offset relative to the first touch.
velocityX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal velocity in pixels per second.
velocityY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical velocity in pixels per second.

### panUp

Fired when a finger starts moving up.

Parameter|Type|Description
-|-|-
state | <span style="white-space:nowrap;">`'start'` \| `'change'` \| `'end'` \| `'cancel'`</span> | 'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.
translationX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal touch offset relative to the first touch.
translationY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical touch offset relative to the first touch.
velocityX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal velocity in pixels per second.
velocityY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical velocity in pixels per second.

### panDown

Fired when a finger starts moving down.

Parameter|Type|Description
-|-|-
state | <span style="white-space:nowrap;">`'start'` \| `'change'` \| `'end'` \| `'cancel'`</span> | 'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.
translationX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal touch offset relative to the first touch.
translationY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical touch offset relative to the first touch.
velocityX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal velocity in pixels per second.
velocityY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical velocity in pixels per second.

### panLeft

Fired when a finger starts moving left.

Parameter|Type|Description
-|-|-
state | <span style="white-space:nowrap;">`'start'` \| `'change'` \| `'end'` \| `'cancel'`</span> | 'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.
translationX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal touch offset relative to the first touch.
translationY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical touch offset relative to the first touch.
velocityX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal velocity in pixels per second.
velocityY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical velocity in pixels per second.

### panRight

Fired when a finger starts moving right.

Parameter|Type|Description
-|-|-
state | <span style="white-space:nowrap;">`'start'` \| `'change'` \| `'end'` \| `'cancel'`</span> | 'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.
translationX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal touch offset relative to the first touch.
translationY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical touch offset relative to the first touch.
velocityX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal velocity in pixels per second.
velocityY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical velocity in pixels per second.

### panHorizontal

Fired when a finger starts moving left or right.

Parameter|Type|Description
-|-|-
state | <span style="white-space:nowrap;">`'start'` \| `'change'` \| `'end'` \| `'cancel'`</span> | 'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.
translationX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal touch offset relative to the first touch.
translationY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical touch offset relative to the first touch.
velocityX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal velocity in pixels per second.
velocityY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical velocity in pixels per second.

### panVertical

Fired when a finger starts moving up or down.

Parameter|Type|Description
-|-|-
state | <span style="white-space:nowrap;">`'start'` \| `'change'` \| `'end'` \| `'cancel'`</span> | 'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.
translationX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal touch offset relative to the first touch.
translationY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical touch offset relative to the first touch.
velocityX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal velocity in pixels per second.
velocityY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical velocity in pixels per second.

### swipeUp

Fired when a finger moves up quickly.

Parameter|Type|Description
-|-|-
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.

### swipeDown

Fired when a finger moves down quickly.

Parameter|Type|Description
-|-|-
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.

### swipeLeft

Fired when a finger moves left quickly.

Parameter|Type|Description
-|-|-
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.

### swipeRight

Fired when a finger moves right quickly.

Parameter|Type|Description
-|-|-
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.

### touchStart

Fired when a widget is touched. See [Touch Events](../touch.md).

Parameter|Type|Description
-|-|-
touches | <span style="white-space:nowrap;">`{x: number, y: number, absoluteX: number, absoluteY: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.

### touchMove

Fired repeatedly while swiping across the screen.

Parameter|Type|Description
-|-|-
touches | <span style="white-space:nowrap;">`{x: number, y: number, absoluteX: number, absoluteY: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.

### touchEnd

Fired when a touch ends on the same widget than it started on.

Parameter|Type|Description
-|-|-
touches | <span style="white-space:nowrap;">`{x: number, y: number, absoluteX: number, absoluteY: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.

### touchCancel

Fired instead of touchEnd when the touch ends on another widget than it started on.

Parameter|Type|Description
-|-|-
touches | <span style="white-space:nowrap;">`{x: number, y: number, absoluteX: number, absoluteY: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.

### resize

Fired when the widget's size has changed.

Parameter|Type|Description
-|-|-
height | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The height of the widget in dip.
left | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The horizontal offset from the parent's left edge in dip.
top | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The vertical offset from the parent's top edge in dip.
width | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The width of the widget in dip.

### dispose

Fired when the widget is about to be disposed. At this point the widget and its children are still accessible.

## Change Events

### idChanged

Fired when the [*id*](#id) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*id*](#id).

### classChanged

Fired when the [*class*](#class) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*class*](#class).

### classListChanged

Fired when the [*classList*](#classlist) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string[]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*classList*](#classlist).

### enabledChanged

Fired when the [*enabled*](#enabled) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*enabled*](#enabled).

### excludeFromLayoutChanged

Fired when the [*excludeFromLayout*](#excludefromlayout) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*excludeFromLayout*](#excludefromlayout).

### visibleChanged

Fired when the [*visible*](#visible) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*visible*](#visible).

### layoutDataChanged

Fired when the [*layoutData*](#layoutdata) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`LayoutDataValue`](../types.md#layoutdatavalue)</span> | The new value of [*layoutData*](#layoutdata).

### leftChanged

Fired when the [*left*](#left) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ConstraintValue`](../types.md#constraintvalue)</span> | The new value of [*left*](#left).

### rightChanged

Fired when the [*right*](#right) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ConstraintValue`](../types.md#constraintvalue)</span> | The new value of [*right*](#right).

### topChanged

Fired when the [*top*](#top) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ConstraintValue`](../types.md#constraintvalue)</span> | The new value of [*top*](#top).

### bottomChanged

Fired when the [*bottom*](#bottom) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ConstraintValue`](../types.md#constraintvalue)</span> | The new value of [*bottom*](#bottom).

### widthChanged

Fired when the [*width*](#width) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`Dimension`](../types.md#dimension) \| `'auto'`</span> | The new value of [*width*](#width).

### heightChanged

Fired when the [*height*](#height) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`Dimension`](../types.md#dimension) \| `'auto'`</span> | The new value of [*height*](#height).

### centerXChanged

Fired when the [*centerX*](#centerx) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`Offset`](../types.md#offset) \| `'auto'` \| `true`</span> | The new value of [*centerX*](#centerx).

### centerYChanged

Fired when the [*centerY*](#centery) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`Offset`](../types.md#offset) \| `'auto'` \| `true`</span> | The new value of [*centerY*](#centery).

### baselineChanged

Fired when the [*baseline*](#baseline) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`SiblingReferenceValue`](../types.md#siblingreferencevalue) \| `'auto'` \| `true`</span> | The new value of [*baseline*](#baseline).

### elevationChanged

Fired when the [*elevation*](#elevation) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*elevation*](#elevation).

### cornerRadiusChanged

Fired when the [*cornerRadius*](#cornerradius) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*cornerRadius*](#cornerradius).

### boundsChanged

Fired when the [*bounds*](#bounds) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`Bounds`](../types.md#bounds)</span> | The new value of [*bounds*](#bounds).

### backgroundChanged

Fired when the [*background*](#background) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`LinearGradientValue`](../types.md#lineargradientvalue) \| [`ColorValue`](../types.md#colorvalue) \| [`ImageValue`](../types.md#imagevalue)</span> | The new value of [*background*](#background).

### opacityChanged

Fired when the [*opacity*](#opacity) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*opacity*](#opacity).

### transformChanged

Fired when the [*transform*](#transform) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`Transformation`](../types.md#transformation)</span> | The new value of [*transform*](#transform).

### highlightOnTouchChanged

Fired when the [*highlightOnTouch*](#highlightontouch) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*highlightOnTouch*](#highlightontouch).

