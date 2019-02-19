---
---
# Class "Widget"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span>

* Constructor: *protected*
* Singleton: *No*
* Namespace: `tabris`
* JSX support: *No*
* Direct subclasses: <span style="white-space:nowrap;">[`Action`](Action.md)</span>, <span style="white-space:nowrap;">[`ActivityIndicator`](ActivityIndicator.md)</span>, <span style="white-space:nowrap;">[`Button`](Button.md)</span>, <span style="white-space:nowrap;">[`CheckBox`](CheckBox.md)</span>, <span style="white-space:nowrap;">[`CollectionView`](CollectionView.md)</span>, <span style="white-space:nowrap;">[`Composite`](Composite.md)</span>, <span style="white-space:nowrap;">[`ImageView`](ImageView.md)</span>, <span style="white-space:nowrap;">[`Picker`](Picker.md)</span>, <span style="white-space:nowrap;">[`ProgressBar`](ProgressBar.md)</span>, <span style="white-space:nowrap;">[`RadioButton`](RadioButton.md)</span>, <span style="white-space:nowrap;">[`Slider`](Slider.md)</span>, <span style="white-space:nowrap;">[`Switch`](Switch.md)</span>, <span style="white-space:nowrap;">[`TextInput`](TextInput.md)</span>, <span style="white-space:nowrap;">[`TextView`](TextView.md)</span>, <span style="white-space:nowrap;">[`ToggleButton`](ToggleButton.md)</span>, <span style="white-space:nowrap;">[`Video`](Video.md)</span>, <span style="white-space:nowrap;">[`WebView`](WebView.md)</span>
--------
Base class for all widgets


See also:

- [Understanding layouts in Tabris.js](../layout.md)
- [Understanding gesture events in Tabris.js](../touch.md)

## Methods

### animate(properties, options)



Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`{transform?: Transformation, opacity?: number}`</span> | No | The properties and target values to animate.
options | <span style="white-space:nowrap;">[`AnimationOptions`](../types.md#animationoptions)</span> | No | Configures the animation itself.
* Returns: <span style="white-space:nowrap;">`Promise<any>`</span>

Starts an animation that transforms the given properties from their current values to the given ones. Supported properties are *transform* and *opacity*. Returns a promise that is resolved once the animation is completed and is rejected if the animation is aborted.

### appendTo(parent)



Parameter|Type|Optional|Description
-|-|-|-
parent | <span style="white-space:nowrap;">[`Composite`](Composite.md)</span> | No | 
* Returns: <span style="white-space:nowrap;">[`this`](#)</span>

Appends this widget to the given parent. The parent widget must support children (extending *Composite*). If the widget already has a parent, it is removed from the old parent.

### detach()

* Returns: <span style="white-space:nowrap;">[`this`](#)</span>

Removes this widget from its parent.

### dispose()

* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Removes this widget from its parent and destroys it. Also disposes of all its children. Triggers a `remove` event on the parent and a `dispose` event on itself. The widget can no longer be used.

### insertAfter(widget)



Parameter|Type|Optional|Description
-|-|-|-
widget | <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> | No | 
* Returns: <span style="white-space:nowrap;">[`this`](#)</span>

Inserts this widget directly after the given widget. If the widget already has a parent, it is removed from the old parent.

### insertBefore(widget)



Parameter|Type|Optional|Description
-|-|-|-
widget | <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> | No | 
* Returns: <span style="white-space:nowrap;">[`this`](#)</span>

Inserts this widget directly before the given widget. If the widget already has a parent, it is removed from the old parent.

### isDisposed()

* Returns: <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>

Returns `true` if the widget has been disposed, otherwise `false`.

### parent()

* Returns: <span style="white-space:nowrap;">[`Composite`](Composite.md)</span>

Returns the parent of this widget or `null` if this widget is not appended to a parent.

### siblings(selector?)



Parameter|Type|Optional|Description
-|-|-|-
selector | <span style="white-space:nowrap;">[`Selector`](../types.md#selector)</span> | Yes | A selector expression or a predicate function to filter the results.
* Returns: <span style="white-space:nowrap;">[`WidgetCollection`](WidgetCollection.md)</span>

Returns a (possibly empty) collection of all siblings of this widget that match the given selector.

### siblings(constructor)



Parameter|Type|Optional|Description
-|-|-|-
constructor | <span style="white-space:nowrap;">`{ new (...args: any[]): U }`</span> | No | A class to filter the results.
* Returns: <span style="white-space:nowrap;">`WidgetCollection<U>`</span>

Returns a (possibly empty) collection of all siblings of this widget that are instances of the given class.


## Properties

### [JSX.jsxFactory]


* Type: <span style="white-space:nowrap;">`JSX.JsxFactory`</span>
* Settable: *No*



This function is called to create JSX widget elements. You may override it in your own subclass to create custom JSX behavior. **The function is not called with any context, i.e. `this` is not available.**

This property can only be set via constructor or JSX. Once set, it cannot change anymore.

### background


* Type: <span style="white-space:nowrap;">[`LinearGradientValue`](../types.md#lineargradientvalue) \| [`ColorValue`](../types.md#colorvalue) \| [`ImageValue`](../types.md#imagevalue)</span>
* Settable: *Yes*



The background of the widget. If given a plain string it is interpreted first as a gradient, then as a color, and finally as an image path, whichever passes first. Use object literals or instances of `LinearGradient`, `Color` or `Image` to avoid any ambiguity.

### baseline


* Type: <span style="white-space:nowrap;">[`SiblingReferenceValue`](../types.md#siblingreferencevalue) \| `'auto'`</span>
* Default `'auto'`
* Settable: *Yes*



The vertical position of the widget's baseline relative to a sibling widget.

### bottom


* Type: <span style="white-space:nowrap;">[`ConstraintValue`](../types.md#constraintvalue)</span>
* Default `'auto'`
* Settable: *Yes*



The position of the widget's bottom edge relative to the parent or a sibling widget.

### bounds


* Type: <span style="white-space:nowrap;">[`Bounds`](../types.md#bounds)</span>
* Settable: *No*



The actual location and size of the widget, relative to its parent.

### centerX


* Type: <span style="white-space:nowrap;">[`Offset`](../types.md#offset) \| `'auto'`</span>
* Default `'auto'`
* Settable: *Yes*



The horizontal position of the widget's center relative to the parent's center.

### centerY


* Type: <span style="white-space:nowrap;">[`Offset`](../types.md#offset) \| `'auto'`</span>
* Default `'auto'`
* Settable: *Yes*



The vertical position of the widget's center relative to the parent's center.

### class


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *Yes*



A class name or a whitespace separated list of class names to identify the widget. Class names are arbitrary strings that describe a state or a category and help to select widgets using a selector expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also be added or removed using the field `classList`.

### classList


* Type: <span style="white-space:nowrap;">[`string[]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *Yes*



Provides convenient access to the list of class names set to this widget. Class names can either be set using the `class` property or by modifying the `classList` directly.

### cornerRadius


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *Yes*



Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and Android 5.0+.

### data


* Type: <span style="white-space:nowrap;">[`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span>
* Settable: *No*



A general-purpose object that allows the application to attach arbitrary data to the widget. Manipulations on this object have no effect on the widget itself in any way. Example: `widget.data.myData = myData;`

This property can only be set via constructor or JSX. Once set, it cannot change anymore.

### elevation


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *Yes*



The position of the widget on the z-axis. Supported on iOS and Android 5.0+.

### enabled


* Type: <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
* Default `true`
* Settable: *Yes*



Whether the widget can be operated.

### height


* Type: <span style="white-space:nowrap;">[`Dimension`](../types.md#dimension) \| `'auto'`</span>
* Default `'auto'`
* Settable: *Yes*



The height of the widget.

### highlightOnTouch


* Type: <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
* Default `false`
* Settable: *Yes*



Whether the widget should show visual feedback while touched. Enabling `highlightOnTouch` will not prevent the touch event from being propagated to the parent widget.

### id


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *Yes*



A string to identify the widget by using selectors. IDs are optional. It is strongly recommended that they are unique within a page.

### layoutData


* Type: <span style="white-space:nowrap;">[`LayoutDataValue`](../types.md#layoutdatavalue)</span>
* Default `LayoutData`
* Settable: *Yes*



Provides information for a widget to be used by the parent when determining its size and position. While this property accepts any valid LayoutData expression (see [LayoutDataValue](./types.md#LayoutDataValue), it will always return an instance of the class [LayoutData](./LayoutData.md).

 Widget provides an alias property for each property of LayoutData. Setting these properties will change the value of the `layoutData` property, while getting them is the same as accessing them via the `layoutData` property. I.e. `widget.left === widget.layoutData.left`.

### left


* Type: <span style="white-space:nowrap;">[`ConstraintValue`](../types.md#constraintvalue)</span>
* Default `'auto'`
* Settable: *Yes*



The position of the widget's left edge relative to the parent or a sibling widget.

### opacity


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Default `1`
* Settable: *Yes*



Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.

### right


* Type: <span style="white-space:nowrap;">[`ConstraintValue`](../types.md#constraintvalue)</span>
* Default `'auto'`
* Settable: *Yes*



The position of the widget's right edge relative to the parent or a sibling widget.

### top


* Type: <span style="white-space:nowrap;">[`ConstraintValue`](../types.md#constraintvalue)</span>
* Default `'auto'`
* Settable: *Yes*



The position of the widget's top edge relative to the parent or a sibling widget.

### transform


* Type: <span style="white-space:nowrap;">[`Transformation`](../types.md#transformation)</span>
* Settable: *Yes*



Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In Android the *transform* property does not affect the *bounds* property, while it does so in iOS.

### visible


* Type: <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
* Default `true`
* Settable: *Yes*



Whether the widget is visible.

### width


* Type: <span style="white-space:nowrap;">[`Dimension`](../types.md#dimension) \| `'auto'`</span>
* Default `'auto'`
* Settable: *Yes*



The width of the widget.


## Events

### tap

Parameter|Type|Description
-|-|-
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.

Fired once when a finger briefly touched the widget.

### longPress

Parameter|Type|Description
-|-|-
state | <span style="white-space:nowrap;">`'start'` \| `'end'` \| `'cancel'`</span> | 'start' when the widget has been hold down long enough, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.

Fired after pressing a widget for a specific amount of time (about a second), and again on lifting the finger.

### pan

Parameter|Type|Description
-|-|-
state | <span style="white-space:nowrap;">`'start'` \| `'change'` \| `'end'` \| `'cancel'`</span> | 'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.
translationX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal touch offset relative to the first touch.
translationY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical touch offset relative to the first touch.
velocityX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal velocity in pixels per second.
velocityY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical velocity in pixels per second.

Fired continuously after a finger touching the widget moved for a certain distance.

### panUp

Parameter|Type|Description
-|-|-
state | <span style="white-space:nowrap;">`'start'` \| `'change'` \| `'end'` \| `'cancel'`</span> | 'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.
translationX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal touch offset relative to the first touch.
translationY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical touch offset relative to the first touch.
velocityX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal velocity in pixels per second.
velocityY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical velocity in pixels per second.

Fired when a finger starts moving up.

### panDown

Parameter|Type|Description
-|-|-
state | <span style="white-space:nowrap;">`'start'` \| `'change'` \| `'end'` \| `'cancel'`</span> | 'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.
translationX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal touch offset relative to the first touch.
translationY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical touch offset relative to the first touch.
velocityX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal velocity in pixels per second.
velocityY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical velocity in pixels per second.

Fired when a finger starts moving down.

### panLeft

Parameter|Type|Description
-|-|-
state | <span style="white-space:nowrap;">`'start'` \| `'change'` \| `'end'` \| `'cancel'`</span> | 'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.
translationX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal touch offset relative to the first touch.
translationY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical touch offset relative to the first touch.
velocityX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal velocity in pixels per second.
velocityY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical velocity in pixels per second.

Fired when a finger starts moving left.

### panRight

Parameter|Type|Description
-|-|-
state | <span style="white-space:nowrap;">`'start'` \| `'change'` \| `'end'` \| `'cancel'`</span> | 'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.
translationX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal touch offset relative to the first touch.
translationY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical touch offset relative to the first touch.
velocityX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal velocity in pixels per second.
velocityY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical velocity in pixels per second.

Fired when a finger starts moving right.

### panHorizontal

Parameter|Type|Description
-|-|-
state | <span style="white-space:nowrap;">`'start'` \| `'change'` \| `'end'` \| `'cancel'`</span> | 'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.
translationX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal touch offset relative to the first touch.
translationY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical touch offset relative to the first touch.
velocityX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal velocity in pixels per second.
velocityY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical velocity in pixels per second.

Fired when a finger starts moving left or right.

### panVertical

Parameter|Type|Description
-|-|-
state | <span style="white-space:nowrap;">`'start'` \| `'change'` \| `'end'` \| `'cancel'`</span> | 'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.
translationX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal touch offset relative to the first touch.
translationY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical touch offset relative to the first touch.
velocityX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current horizontal velocity in pixels per second.
velocityY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Current vertical velocity in pixels per second.

Fired when a finger starts moving up or down.

### swipeUp

Parameter|Type|Description
-|-|-
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.

Fired when a finger moves up quickly.

### swipeDown

Parameter|Type|Description
-|-|-
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.

Fired when a finger moves down quickly.

### swipeLeft

Parameter|Type|Description
-|-|-
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.

Fired when a finger moves left quickly.

### swipeRight

Parameter|Type|Description
-|-|-
touches | <span style="white-space:nowrap;">`{x: number, y: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.

Fired when a finger moves right quickly.

### touchStart

Parameter|Type|Description
-|-|-
touches | <span style="white-space:nowrap;">`{x: number, y: number, absoluteX: number, absoluteY: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.

Fired when a widget is touched. See [Touch Events](../touch.md).

### touchMove

Parameter|Type|Description
-|-|-
touches | <span style="white-space:nowrap;">`{x: number, y: number, absoluteX: number, absoluteY: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.

Fired repeatedly while swiping across the screen.

### touchEnd

Parameter|Type|Description
-|-|-
touches | <span style="white-space:nowrap;">`{x: number, y: number, absoluteX: number, absoluteY: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.

Fired when a touch ends on the same widget than it started on.

### touchCancel

Parameter|Type|Description
-|-|-
touches | <span style="white-space:nowrap;">`{x: number, y: number, absoluteX: number, absoluteY: number}[]`</span> | Touch coordinates relative to the origin coordinates of the widget.

Fired instead of touchEnd when the touch ends on another widget than it started on.

### resize

Parameter|Type|Description
-|-|-
height | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The height of the widget in dip.
left | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The horizontal offset from the parent's left edge in dip.
top | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The vertical offset from the parent's top edge in dip.
width | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The width of the widget in dip.

Fired when the widget's size has changed. You can use this event to apply new [*layoutData*](#layoutdata).

### dispose

Fired when the widget is about to be disposed. At this point the widget and its children are still accessible.

## Change Events

### idChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*id*](#id).

Fired when the [*id*](#id) property has changed.

### classChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*class*](#class).

Fired when the [*class*](#class) property has changed.

### classListChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string[]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*classList*](#classList).

Fired when the [*classList*](#classList) property has changed.

### enabledChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*enabled*](#enabled).

Fired when the [*enabled*](#enabled) property has changed.

### visibleChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*visible*](#visible).

Fired when the [*visible*](#visible) property has changed.

### layoutDataChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`LayoutDataValue`](../types.md#layoutdatavalue)</span> | The new value of [*layoutData*](#layoutData).

Fired when the [*layoutData*](#layoutData) property has changed.

### leftChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ConstraintValue`](../types.md#constraintvalue)</span> | The new value of [*left*](#left).

Fired when the [*left*](#left) property has changed.

### rightChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ConstraintValue`](../types.md#constraintvalue)</span> | The new value of [*right*](#right).

Fired when the [*right*](#right) property has changed.

### topChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ConstraintValue`](../types.md#constraintvalue)</span> | The new value of [*top*](#top).

Fired when the [*top*](#top) property has changed.

### bottomChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ConstraintValue`](../types.md#constraintvalue)</span> | The new value of [*bottom*](#bottom).

Fired when the [*bottom*](#bottom) property has changed.

### widthChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`Dimension`](../types.md#dimension) \| `'auto'`</span> | The new value of [*width*](#width).

Fired when the [*width*](#width) property has changed.

### heightChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`Dimension`](../types.md#dimension) \| `'auto'`</span> | The new value of [*height*](#height).

Fired when the [*height*](#height) property has changed.

### centerXChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`Offset`](../types.md#offset) \| `'auto'`</span> | The new value of [*centerX*](#centerX).

Fired when the [*centerX*](#centerX) property has changed.

### centerYChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`Offset`](../types.md#offset) \| `'auto'`</span> | The new value of [*centerY*](#centerY).

Fired when the [*centerY*](#centerY) property has changed.

### baselineChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`SiblingReferenceValue`](../types.md#siblingreferencevalue) \| `'auto'`</span> | The new value of [*baseline*](#baseline).

Fired when the [*baseline*](#baseline) property has changed.

### elevationChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*elevation*](#elevation).

Fired when the [*elevation*](#elevation) property has changed.

### cornerRadiusChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*cornerRadius*](#cornerRadius).

Fired when the [*cornerRadius*](#cornerRadius) property has changed.

### boundsChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`Bounds`](../types.md#bounds)</span> | The new value of [*bounds*](#bounds).

Fired when the [*bounds*](#bounds) property has changed.

### backgroundChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`LinearGradientValue`](../types.md#lineargradientvalue) \| [`ColorValue`](../types.md#colorvalue) \| [`ImageValue`](../types.md#imagevalue)</span> | The new value of [*background*](#background).

Fired when the [*background*](#background) property has changed.

### opacityChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*opacity*](#opacity).

Fired when the [*opacity*](#opacity) property has changed.

### transformChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`Transformation`](../types.md#transformation)</span> | The new value of [*transform*](#transform).

Fired when the [*transform*](#transform) property has changed.

### highlightOnTouchChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*highlightOnTouch*](#highlightOnTouch).

Fired when the [*highlightOnTouch*](#highlightOnTouch) property has changed.

