---
---
# Widget API

API supported by all widgets.
Includes [Events API](Events.md), [Properties API](Properties.md)

## Methods

### animate(properties, options)


**Parameters:**

- properties: *Object*, the properties and target values to animate.
- options: *Object*, configures the animation itself.

Starts an animation that transforms the given properties from their current values to the given ones. Supported properties are *transform* and *opacity*. Supported options are:

- *delay* - time until the animation starts in ms, defaults to `0`
- *duration* - in ms,
- *easing* - one of `linear`, `ease-in`, `ease-out`, `ease-in-out`
- *repeat* - number of times to repeat the animation, defaults to `0`
- *reverse* - `true` to alternate the direction of the animation on every repeat.
- *name* - no effect, but will be given in animation events

### appendTo(parent)


**Parameters:**

- parent: *[Composite](Composite.md)*

**Returns:** *[Widget](Widget.md)*

Appends this widget to the given parent. The parent widget must support children (extending *Composite*).

### apply(properties)


**Parameters:**

- properties: *Object*, an object in the format `{Selector: {property: value, property: value, ... }, Selector: ...}`

**Returns:** *[Widget](Widget.md)*

Applies the given properties to all descendants that match the associated selector(s).

### children()


**Parameters:**



**Returns:** *[WidgetCollection](WidgetCollection.md)*

Returns a (possibly empty) collection of all children of this widget.

### children(selector)


**Parameters:**

- selector: *[Selector](../types.md#Selector)*

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

- selector: *[Selector](../types.md#Selector)*

**Returns:** *[WidgetCollection](WidgetCollection.md)*

Returns a (possibly empty) collection of all descendants of this widget that match the selector.

### isDisposed()


**Parameters:**



**Returns:** *boolean*

Returns `true` if the widget has been disposed, otherwise `false`.

### parent()


**Parameters:**



**Returns:** *[Widget](Widget.md)*

Returns the parent of this widget.


## Fields

### cid
Type: *string*

An application-wide unique identifier automatically assigned to all widgets on creation. Do not change it.
### id

Type: *string*

Direct access to the value of the property of the same name. May be used instead of `widget.get("id");` Do not use this field to change the value, instead use `widget.set("id", id);`.
### type

Type: *string*

The exact string that was used to create this widget using the `tabris.create` method.

## Properties

### background
Type: *[Color](../types.md#Color)*

Background color of the widget.
### backgroundImage

Type: *[Image](../types.md#Image)*

An image to be displayed on the widget's background. If the image is smaller than the widget, it will be tiled.
### bounds

Type: *[Bounds](../types.md#Bounds)*

The actual location and size of the widget, relative to its parent. This property is read-only.
### enabled

Type: *boolean*, default: `true`

Whether the widget can be operated.
### font

Type: *[Font](../types.md#Font)*

The font used for the widget.
### highlightOnTouch

Type: *boolean*, default: `false`

Whether the entire widget should be highlighted while touched.
### id

Type: *string*

A string to identify the widget by using selectors. Id's are optional. It is strongly recommended that they are unique within a page.
### layoutData

Type: *[LayoutData](../types.md#LayoutData)*

Specifies how the widget should be arranged in a layout. See [Layout](../layout.md).
### opacity

Type: *number*, supported values: `0..1`, default: `1`

Opacity of the entire widget. Can be used for fade animations.
### textColor

Type: *[Color](../types.md#Color)*

Text color of the widget.
### transform

Type: *[Transformation](../types.md#Transformation)*

Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In Android the *transform* property does not affect the *bounds* property, while it does so in iOS.
### visible

Type: *boolean*, default: `true`

Whether the widget is visible.

## Events

### "animationend" (widget, options)

**Parameters:**

- widget: *[Widget](Widget.md)*
- options: *Object*, the *options* object given when `animate` was called.

### "animationstart" (widget, options)

**Parameters:**

- widget: *[Widget](Widget.md)*
- options: *Object*, the *options* object given when `animate` was called.

### "change:{property}" (widget, value, options)

**Parameters:**

- widget: *[Widget](Widget.md)*
- value: *mixed*, the new value of this given property.
- options: *Object*, this is the options object given to the [`set`](#set) method.

Fired when the given property has changed. Change events for specific properties will only be documented separately if they may be triggered without calling `set`.

### "dispose" (widget)

**Parameters:**

- widget: *[Widget](Widget.md)*

Fired when the widget is about to be disposed. At this point the widget and its children are still accessible.

### "longpress" (widget, gesture)

**Parameters:**

- widget: *[Widget](Widget.md)*
- gesture: *[GestureObject](../types.md#GestureObject)*

Fired after pressing a widget for a specific amount of time (about a second), and again on lifting the finger.

### "pan" (widget, gesture)

**Parameters:**

- widget: *[Widget](Widget.md)*
- gesture: *[GestureObject](../types.md#GestureObject)*

Fired continuously after a finger touching the widget moved for a certain distance.

### "pan:{direction}" (widget, gesture)

**Parameters:**

- widget: *[Widget](Widget.md)*
- gesture: *[GestureObject](../types.md#GestureObject)*

Fired when a finger starts moving in the given direction. Values for {direction} are: `left`, `right`, `up`, `down`.

### "resize" (widget, bounds, options)

**Parameters:**

- widget: *[Widget](Widget.md)*
- bounds: *[Bounds](../types.md#Bounds)*, the new value of the [*bounds*](#bounds) property.
- options: *Object*

Fired when the widget's size has changed. You can use this event to apply new [*layoutData*](#layoutData).

### "swipe:{direction}" (widget, gesture)

**Parameters:**

- widget: *[Widget](Widget.md)*
- gesture: *[GestureObject](../types.md#GestureObject)*

Fired when a finger moves quickly in the given direction. Values for {direction} are: `left`, `right`, `up`, `down`.

### "tap" (widget, gesture)

**Parameters:**

- widget: *[Widget](Widget.md)*
- gesture: *[GestureObject](../types.md#GestureObject)*

Fired once when a finger briefly touched the widget.

### "touchcancel" (widget, gesture)

**Parameters:**

- widget: *[Widget](Widget.md)*
- gesture: *[TouchEvent](../types.md#TouchEvent)*

Fired instead of touchend when the touch ends on another widget than it started on.

### "touchend" (widget, gesture)

**Parameters:**

- widget: *[Widget](Widget.md)*
- gesture: *[TouchEvent](../types.md#TouchEvent)*

Fired when a touch ends on the same widget than it started on.

### "touchmove" (widget, gesture)

**Parameters:**

- widget: *[Widget](Widget.md)*
- gesture: *[TouchEvent](../types.md#TouchEvent)*

Fired repeatedly while swiping across the screen.

### "touchstart" (widget, gesture)

**Parameters:**

- widget: *[Widget](Widget.md)*
- gesture: *[TouchEvent](../types.md#TouchEvent)*

Fired when a widget is touched. See [Touch Events](../touch.md).


## See also

- [Understanding layouts in Tabris.js](../layout.md)
- [Understanding gesture events in Tabris.js](../touch.md)
