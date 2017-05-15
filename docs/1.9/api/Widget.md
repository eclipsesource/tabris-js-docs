---
---
# Widget

Base class for all widgets
Includes [Events API](Events.md), [Properties API](Properties.md)

## Methods

### animate(properties, options)



**Parameters:** 

- properties: *Object*, the properties and target values to animate.
- options: *Object*, configures the animation itself.

**Returns:** *Promise<any>*

Starts an animation that transforms the given properties from their current values to the given ones. Supported properties are *transform* and *opacity*. Supported options are:

- *delay* - time until the animation starts in ms, defaults to `0`
- *duration* - in ms,
- *easing* - one of `linear`, `ease-in`, `ease-out`, `ease-in-out`
- *repeat* - number of times to repeat the animation, defaults to `0`
- *reverse* - `true` to alternate the direction of the animation on every repeat.
- *name* - no effect, but will be given in animation events.
Returns a promise that is resolved once the animation is completed and is rejected if the animation is aborted.


### appendTo(parent)



**Parameters:** 

- parent: *[Composite](Composite.md)*

**Returns:** *this*

Appends this widget to the given parent. The parent widget must support children (extending *Composite*). If the widget already has a parent, it is removed from the old parent.


### apply(properties)



**Parameters:** 

- properties: *Object*, an object in the format `{Selector: {property: value, property: value, ... }, Selector: ...}`

**Returns:** *this*

Applies the given properties to all descendants that match the associated selector(s).


### children()



**Parameters:** 



**Returns:** *[WidgetCollection](WidgetCollection.md)*

Returns a (possibly empty) collection of all children of this widget.


### children(selector)



**Parameters:** 

- selector: *[Selector](../types.md#selector)*

**Returns:** *[WidgetCollection](WidgetCollection.md)*

Returns a (possibly empty) collection of all children of this widget that match the selector.


### dispose()



**Parameters:** 



Removes this widget from its parent and destroys it. Also disposes of all its children. Triggers a `remove` event on the parent and a `dispose` event on itself. The widget can no longer be used.


### find()



**Parameters:** 



**Returns:** *[WidgetCollection](WidgetCollection.md)*

Returns a (possibly empty) collection of all descendants of this widget.


### find(selector)



**Parameters:** 

- selector: *[Selector](../types.md#selector)*

**Returns:** *[WidgetCollection](WidgetCollection.md)*

Returns a (possibly empty) collection of all descendants of this widget that match the selector.


### insertAfter(widget)



**Parameters:** 

- widget: *[Widget](Widget.md)*

**Returns:** *this*

Inserts this widget directly after the given widget. If the widget already has a parent, it is removed from the old parent.


### insertBefore(widget)



**Parameters:** 

- widget: *[Widget](Widget.md)*

**Returns:** *this*

Inserts this widget directly before the given widget. If the widget already has a parent, it is removed from the old parent.


### isDisposed()



**Parameters:** 



**Returns:** *boolean*

Returns `true` if the widget has been disposed, otherwise `false`.


### parent()



**Parameters:** 



**Returns:** *[Widget](Widget.md)*

Returns the parent of this widget.


### siblings()



**Parameters:** 



**Returns:** *[WidgetCollection](WidgetCollection.md)*

Returns a (possibly empty) collection of all siblings of this widget.


### siblings(selector)



**Parameters:** 

- selector: *[Selector](../types.md#selector)*

**Returns:** *[WidgetCollection](WidgetCollection.md)*

Returns a (possibly empty) collection of all siblings of this widget that match the selector.



## Fields

### cid

Type: *string*

An application-wide unique identifier automatically assigned to all widgets on creation. Do not change it.

### classList

Type: *string[]*

Provides convenient access to the list of class names set to this widget. Class names can either be set using the `class` property or by modifying the `classList` directly.

### id

Type: *string*

Direct access to the value of the property of the same name. May be used instead of `widget.get("id");` Do not use this field to change the value, instead use `widget.set("id", id);`.

### type

Type: *string*

The widget type without the 'tabris' namespace.


## Properties

### background

Type: *[Color](../types.md#color)*

Background color of the widget.

### backgroundImage

Type: *[Image](../types.md#image)*

An image to be displayed on the widget's background. If the image is smaller than the widget, it will be tiled.

### baseline

Type: *[Widget](Widget.md)*

The vertical position of the widget's baseline relative to a sibling widget.

### bottom

Type: *[margin](../types.md#margin)*

The position of the widget's bottom edge relative to the parent or a sibling widget.

### bounds

Type: *[Bounds](../types.md#bounds)*

The actual location and size of the widget, relative to its parent. This property is read-only.

### centerX

Type: *[offset](../types.md#offset)*

The horizontal position of the widget's center relative to the parent's center.

### centerY

Type: *[offset](../types.md#offset)*

The vertical position of the widget's center relative to the parent's center.

### class

Type: *string*

A class name or a whitespace separated list of class names to identify the widget. Class names are arbitrary strings that describe a state or a category and help to select widgets using a selector expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also be added or removed using the field `classList`.

### cornerRadius

Type: *number*

Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and Android 5.0+.

### elevation

Type: *number*

The position of the widget on the z-axis. Currently only supported on Android 5.0+.

### enabled

Type: *boolean*, default: `true`

Whether the widget can be operated.

### font

Type: *[Font](../types.md#font)*

The font used for the widget.

### height

Type: *[dimension](../types.md#dimension)*

The height of the widget.

### highlightOnTouch

Type: *boolean*, default: `false`

Whether the entire widget should be highlighted while touched.

### id

Type: *string*

A string to identify the widget by using selectors. Id's are optional. It is strongly recommended that they are unique within a page.

### layoutData

Type: *[LayoutData](../types.md#layoutdata)*

Shorthand for all layout properties. See [Layout](../layout.md).

### left

Type: *[margin](../types.md#margin)*

The position of the widget's left edge relative to the parent or a sibling widget.

### opacity

Type: *number*, default: `1`

Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.

### right

Type: *[margin](../types.md#margin)*

The position of the widget's right edge relative to the parent or a sibling widget.

### textColor

Type: *[Color](../types.md#color)*

Text color of the widget.

### top

Type: *[margin](../types.md#margin)*

The position of the widget's top edge relative to the parent or a sibling widget.

### transform

Type: *[Transformation](../types.md#transformation)*

Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In Android the *transform* property does not affect the *bounds* property, while it does so in iOS.

### visible

Type: *boolean*, default: `true`

Whether the widget is visible.

### width

Type: *[dimension](../types.md#dimension)*

The width of the widget.


## Events

### "animationend" (widget, options)

**Parameters:** 

- widget: *this*
- options: *Object*, the *options* object given [when `animate` was called](#animateproperties-options).

Fired when an animation has completed.


### "animationstart" (widget, options)

**Parameters:** 

- widget: *this*
- options: *Object*, the *options* object given [when `animate` was called](#animateproperties-options).

Fired when an animation starts playing.


### "change:{property}" (widget, value, options)

**Parameters:** 

- widget: *this*
- value: *any*, the new value of this given property.
- options: *Object*, this is the options object given to the [`set`](#set) method.

Fired when the given property has changed. Change events for specific properties will only be documented separately if they may be triggered without calling `set`. 


### "dispose" (widget)

**Parameters:** 

- widget: *this*

Fired when the widget is about to be disposed. At this point the widget and its children are still accessible.


### "longpress" (widget, gesture)

**Parameters:** 

- widget: *this*
- gesture: *[GestureObject](../types.md#gestureobject)*

Fired after pressing a widget for a specific amount of time (about a second), and again on lifting the finger.


### "pan" (widget, gesture)

**Parameters:** 

- widget: *this*
- gesture: *[GestureObject](../types.md#gestureobject)*

Fired continuously after a finger touching the widget moved for a certain distance.


### "pan:down" (widget, gesture)

**Parameters:** 

- widget: *this*
- gesture: *[GestureObject](../types.md#gestureobject)*

Fired when a finger starts moving down.


### "pan:left" (widget, gesture)

**Parameters:** 

- widget: *this*
- gesture: *[GestureObject](../types.md#gestureobject)*

Fired when a finger starts moving left.


### "pan:right" (widget, gesture)

**Parameters:** 

- widget: *this*
- gesture: *[GestureObject](../types.md#gestureobject)*

Fired when a finger starts moving right.


### "pan:up" (widget, gesture)

**Parameters:** 

- widget: *this*
- gesture: *[GestureObject](../types.md#gestureobject)*

Fired when a finger starts moving up.


### "resize" (widget, bounds, options)

**Parameters:** 

- widget: *this*
- bounds: *[Bounds](../types.md#bounds)*, the new value of the [*bounds*](#bounds) property.
- options: *Object*

Fired when the widget's size has changed. You can use this event to apply new [*layoutData*](#layoutdata).


### "swipe:down" (widget, gesture)

**Parameters:** 

- widget: *this*
- gesture: *[GestureObject](../types.md#gestureobject)*

Fired when a finger moves down quickly.


### "swipe:left" (widget, gesture)

**Parameters:** 

- widget: *this*
- gesture: *[GestureObject](../types.md#gestureobject)*

Fired when a finger moves left quickly.


### "swipe:right" (widget, gesture)

**Parameters:** 

- widget: *this*
- gesture: *[GestureObject](../types.md#gestureobject)*

Fired when a finger moves right quickly.


### "swipe:up" (widget, gesture)

**Parameters:** 

- widget: *this*
- gesture: *[GestureObject](../types.md#gestureobject)*

Fired when a finger moves up quickly.


### "tap" (widget, gesture)

**Parameters:** 

- widget: *this*
- gesture: *[GestureObject](../types.md#gestureobject)*

Fired once when a finger briefly touched the widget.


### "touchcancel" (widget, gesture)

**Parameters:** 

- widget: *this*
- gesture: *[TouchEvent](../types.md#touchevent)*

Fired instead of touchend when the touch ends on another widget than it started on.


### "touchend" (widget, gesture)

**Parameters:** 

- widget: *this*
- gesture: *[TouchEvent](../types.md#touchevent)*

Fired when a touch ends on the same widget than it started on.


### "touchmove" (widget, gesture)

**Parameters:** 

- widget: *this*
- gesture: *[TouchEvent](../types.md#touchevent)*

Fired repeatedly while swiping across the screen.


### "touchstart" (widget, gesture)

**Parameters:** 

- widget: *this*
- gesture: *[TouchEvent](../types.md#touchevent)*

Fired when a widget is touched. See [Touch Events](../touch.md).



## See also

- [Understanding layouts in Tabris.js](../layout.md)
- [Understanding gesture events in Tabris.js](../touch.md)
