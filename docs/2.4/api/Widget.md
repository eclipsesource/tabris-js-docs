---
---
# Widget

Extends [NativeObject](NativeObject.md)

Base class for all widgets

Import this type with "`const {Widget} = require('tabris');`"

## Methods

### animate(properties, options)


**Parameters:** 

- properties: *{transform?: Transformation, opacity?: number}*
  - the properties and target values to animate.
- options: *[AnimationOptions](../types.md#animationoptions)*
  - configures the animation itself.

**Returns:** *Promise<any>*

Starts an animation that transforms the given properties from their current values to the given ones. Supported properties are *transform* and *opacity*. Returns a promise that is resolved once the animation is completed and is rejected if the animation is aborted.

### appendTo(parent)


**Parameters:** 

- parent: *[Composite](Composite.md)*

**Returns:** *this*

Appends this widget to the given parent. The parent widget must support children (extending *Composite*). If the widget already has a parent, it is removed from the old parent.

### apply(properties)


**Parameters:** 

- properties: *object*
  - an object in the format `{Selector: {property: value, property: value, ... }, Selector: ...}`

**Returns:** *this*

Applies the given properties to all descendants that match the associated selector(s).

If you wish to always exclude specific "internal" children from this, overwrite the `children` method on their parent. See `children` for details.

### children(selector)


**Parameters:** 

- selector: *[Selector](../types.md#selector)* [**Optional**]
  - a selector expression or a predicate function to filter the results.

**Returns:** *[WidgetCollection](WidgetCollection.md)*

Returns a (possibly empty) collection of all children of this widget that match the given selector.

When writing custom UI components it may be useful to overwrite this method to prevent access to the internal children by external code. Doing so also affects `find` and `apply`, on this widget as well as on all parents, thereby preventing accidental clashes of widget id or class values. See also `_children`, `_find` and `_apply`.

### detach()


**Returns:** *this*

Removes this widget from its parent.

### dispose()


Removes this widget from its parent and destroys it. Also disposes of all its children. Triggers a `remove` event on the parent and a `dispose` event on itself. The widget can no longer be used.

### find(selector)


**Parameters:** 

- selector: *[Selector](../types.md#selector)* [**Optional**]
  - a selector expression or a predicate function to filter the results.

**Returns:** *[WidgetCollection](WidgetCollection.md)*

Returns a collection containing all descendants of all widgets in this collection that match the given selector.

If you wish to always exclude specific "internal" children from the result, overwrite the `children` method on their parent. See `children` for details.

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


**Returns:** *boolean*

Returns `true` if the widget has been disposed, otherwise `false`.

### parent()


**Returns:** *[Composite](Composite.md)*

Returns the parent of this widget or `null` if this widget is not appended to a parent.

### siblings(selector)


**Parameters:** 

- selector: *[Selector](../types.md#selector)* [**Optional**]
  - a selector expression or a predicate function to filter the results.

**Returns:** *[WidgetCollection](WidgetCollection.md)*

Returns a (possibly empty) collection of all siblings of this widget that match the given selector.

### _apply(properties)


**Parameters:** 

- properties: *object*
  - an object in the format `{Selector: {property: value, property: value, ... }, Selector: ...}`

**Returns:** *this*

Identical to the `apply` method, but intended to be used by subclasses in case the `children` method was overwritten . See `children` for details.

### _children(selector)


**Parameters:** 

- selector: *[Selector](../types.md#selector)* [**Optional**]
  - a selector expression or a predicate function to filter the results.

**Returns:** *[WidgetCollection](WidgetCollection.md)*

Identical to the `children` method, but intended to be used by subclasses in case the `children` method was overwritten. See `children` for details.

### _find(selector)


**Parameters:** 

- selector: *[Selector](../types.md#selector)* [**Optional**]
  - a selector expression or a predicate function to filter the results.

**Returns:** *[WidgetCollection](WidgetCollection.md)*

Identical to the `find` method, but intended to be used by subclasses in case the `children` method was overwritten. See `children` for details.


## Properties

### background


Type: *[Color](../types.md#color)*

Background color of the widget.

### backgroundImage


Type: *[Image](../types.md#image)*

An image to be displayed on the widget's background. If the image is smaller than the widget, it will be tiled.

### baseline


Type: *[Widget](Widget.md)\|[Selector](../types.md#selector)*

The vertical position of the widget's baseline relative to a sibling widget.

### bottom


Type: *margin*

The position of the widget's bottom edge relative to the parent or a sibling widget.

### bounds


**read-only**<br/>
Type: *[Bounds](../types.md#bounds)*

The actual location and size of the widget, relative to its parent.

### centerX


Type: *offset*

The horizontal position of the widget's center relative to the parent's center.

### centerY


Type: *offset*

The vertical position of the widget's center relative to the parent's center.

### class


Type: *string*

A class name or a whitespace separated list of class names to identify the widget. Class names are arbitrary strings that describe a state or a category and help to select widgets using a selector expression. A class name may only contain alphanumeric characters, `_` and `-`. Class names can also be added or removed using the field `classList`.

### classList


Type: *string[]*

Provides convenient access to the list of class names set to this widget. Class names can either be set using the `class` property or by modifying the `classList` directly.

### cornerRadius
<p class="platforms"><span class="ios-tag" title="supported on iOS">iOS</span><span class="android-tag" title="supported on Android">Android</span></p>

Type: *number*

Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and Android 5.0+.

### data


**read-only**<br/>
Type: *object*

A general-purpose object that allows the application to attach arbitrary data to the widget. Manipulations on this object have no effect on the widget itself in any way. Example: `widget.data.myData = myData;`

### elevation
<p class="platforms"><span class="ios-tag" title="supported on iOS">iOS</span><span class="android-tag" title="supported on Android">Android</span></p>

Type: *number*

The position of the widget on the z-axis. Supported on iOS and Android 5.0+.

### enabled


Type: *boolean*, default: `true`

Whether the widget can be operated.

### font


Type: *[Font](../types.md#font)*

The font used for the widget.

### height


Type: *dimension*

The height of the widget.

### highlightOnTouch


Type: *boolean*, default: `false`

Whether the widget should show visual feedback while touched. Enabling `highlightOnTouch` will not prevent the touch event from being propagated to the parent widget.

### id


Type: *string*

A string to identify the widget by using selectors. IDs are optional. It is strongly recommended that they are unique within a page.

### layoutData


Type: *[LayoutData](../types.md#layoutdata)*

Shorthand for all layout properties. See [Layout](../layout.md).

### left


Type: *margin*

The position of the widget's left edge relative to the parent or a sibling widget.

### opacity


Type: *number*, default: `1`

Opacity of the entire widget, in the range `[0..1]`. Can be used for fade animations.

### right


Type: *margin*

The position of the widget's right edge relative to the parent or a sibling widget.

### top


Type: *margin*

The position of the widget's top edge relative to the parent or a sibling widget.

### transform


Type: *[Transformation](../types.md#transformation)*

Modifications to the widget's shape, size, or position. Can be used for animations. **Note:** In Android the *transform* property does not affect the *bounds* property, while it does so in iOS.

### visible


Type: *boolean*, default: `true`

Whether the widget is visible.

### width


Type: *dimension*

The width of the widget.

### win_theme
<p class="platforms"><span class="windows-tag" title="supported on Windows 10">Windows 10</span></p>

Type: *string*, supported values: `light`, `dark`, `default`, default: `default`

Controls the color scheme used for this widget. When set to `"default"` the theme is inherited from either the parent (if present) or the OS settings. Available only on windows.


## Events

### backgroundChanged

Fired when the [*background*](#background) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*background*](#background).


### backgroundImageChanged

Fired when the [*backgroundImage*](#backgroundImage) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Image](../types.md#image)*
    The new value of [*backgroundImage*](#backgroundImage).


### baselineChanged

Fired when the [*baseline*](#baseline) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Widget](Widget.md)\|[Selector](../types.md#selector)*
    The new value of [*baseline*](#baseline).


### bottomChanged

Fired when the [*bottom*](#bottom) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *margin*
    The new value of [*bottom*](#bottom).


### boundsChanged

Fired when the [*bounds*](#bounds) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Bounds](../types.md#bounds)*
    The new value of [*bounds*](#bounds).


### centerXChanged

Fired when the [*centerX*](#centerX) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *offset*
    The new value of [*centerX*](#centerX).


### centerYChanged

Fired when the [*centerY*](#centerY) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *offset*
    The new value of [*centerY*](#centerY).


### classChanged

Fired when the [*class*](#class) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*class*](#class).


### classListChanged

Fired when the [*classList*](#classList) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string[]*
    The new value of [*classList*](#classList).


### cornerRadiusChanged

Fired when the [*cornerRadius*](#cornerRadius) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *number*
    The new value of [*cornerRadius*](#cornerRadius).


### dataChanged

Fired when the [*data*](#data) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *object*
    The new value of [*data*](#data).


### dispose

Fired when the widget is about to be disposed. At this point the widget and its children are still accessible.
### elevationChanged

Fired when the [*elevation*](#elevation) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *number*
    The new value of [*elevation*](#elevation).


### enabledChanged

Fired when the [*enabled*](#enabled) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*enabled*](#enabled).


### fontChanged

Fired when the [*font*](#font) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Font](../types.md#font)*
    The new value of [*font*](#font).


### heightChanged

Fired when the [*height*](#height) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *dimension*
    The new value of [*height*](#height).


### highlightOnTouchChanged

Fired when the [*highlightOnTouch*](#highlightOnTouch) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*highlightOnTouch*](#highlightOnTouch).


### idChanged

Fired when the [*id*](#id) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*id*](#id).


### layoutDataChanged

Fired when the [*layoutData*](#layoutData) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[LayoutData](../types.md#layoutdata)*
    The new value of [*layoutData*](#layoutData).


### leftChanged

Fired when the [*left*](#left) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *margin*
    The new value of [*left*](#left).


### longpress

Fired after pressing a widget for a specific amount of time (about a second), and again on lifting the finger.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **state**: *'start'\|'end'\|'cancel'*
    'start' when the widget has been hold down long enough, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.

- **touches**: *{x: number, y: number}[]*
    Touch coordinates relative to the origin coordinates of the widget.


### opacityChanged

Fired when the [*opacity*](#opacity) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *number*
    The new value of [*opacity*](#opacity).


### pan

Fired continuously after a finger touching the widget moved for a certain distance.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **state**: *'start'\|'change'\|'end'\|'cancel'*
    'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.

- **touches**: *{x: number, y: number}[]*
    Touch coordinates relative to the origin coordinates of the widget.

- **translationX**: *number*
    Current horizontal touch offset relative to the first touch.

- **translationY**: *number*
    Current vertical touch offset relative to the first touch.

- **velocityX**: *number*
    Current horizontal velocity in pixels per second.

- **velocityY**: *number*
    Current vertical velocity in pixels per second.


### panDown

Fired when a finger starts moving down.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **state**: *'start'\|'change'\|'end'\|'cancel'*
    'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.

- **touches**: *{x: number, y: number}[]*
    Touch coordinates relative to the origin coordinates of the widget.

- **translationX**: *number*
    Current horizontal touch offset relative to the first touch.

- **translationY**: *number*
    Current vertical touch offset relative to the first touch.

- **velocityX**: *number*
    Current horizontal velocity in pixels per second.

- **velocityY**: *number*
    Current vertical velocity in pixels per second.


### panHorizontal

Fired when a finger starts moving left or right.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **state**: *'start'\|'change'\|'end'\|'cancel'*
    'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.

- **touches**: *{x: number, y: number}[]*
    Touch coordinates relative to the origin coordinates of the widget.

- **translationX**: *number*
    Current horizontal touch offset relative to the first touch.

- **translationY**: *number*
    Current vertical touch offset relative to the first touch.

- **velocityX**: *number*
    Current horizontal velocity in pixels per second.

- **velocityY**: *number*
    Current vertical velocity in pixels per second.


### panLeft

Fired when a finger starts moving left.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **state**: *'start'\|'change'\|'end'\|'cancel'*
    'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.

- **touches**: *{x: number, y: number}[]*
    Touch coordinates relative to the origin coordinates of the widget.

- **translationX**: *number*
    Current horizontal touch offset relative to the first touch.

- **translationY**: *number*
    Current vertical touch offset relative to the first touch.

- **velocityX**: *number*
    Current horizontal velocity in pixels per second.

- **velocityY**: *number*
    Current vertical velocity in pixels per second.


### panRight

Fired when a finger starts moving right.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **state**: *'start'\|'change'\|'end'\|'cancel'*
    'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.

- **touches**: *{x: number, y: number}[]*
    Touch coordinates relative to the origin coordinates of the widget.

- **translationX**: *number*
    Current horizontal touch offset relative to the first touch.

- **translationY**: *number*
    Current vertical touch offset relative to the first touch.

- **velocityX**: *number*
    Current horizontal velocity in pixels per second.

- **velocityY**: *number*
    Current vertical velocity in pixels per second.


### panUp

Fired when a finger starts moving up.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **state**: *'start'\|'change'\|'end'\|'cancel'*
    'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.

- **touches**: *{x: number, y: number}[]*
    Touch coordinates relative to the origin coordinates of the widget.

- **translationX**: *number*
    Current horizontal touch offset relative to the first touch.

- **translationY**: *number*
    Current vertical touch offset relative to the first touch.

- **velocityX**: *number*
    Current horizontal velocity in pixels per second.

- **velocityY**: *number*
    Current vertical velocity in pixels per second.


### panVertical

Fired when a finger starts moving up or down.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **state**: *'start'\|'change'\|'end'\|'cancel'*
    'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.

- **touches**: *{x: number, y: number}[]*
    Touch coordinates relative to the origin coordinates of the widget.

- **translationX**: *number*
    Current horizontal touch offset relative to the first touch.

- **translationY**: *number*
    Current vertical touch offset relative to the first touch.

- **velocityX**: *number*
    Current horizontal velocity in pixels per second.

- **velocityY**: *number*
    Current vertical velocity in pixels per second.


### resize

Fired when the widget's size has changed. You can use this event to apply new [*layoutData*](#layoutdata).

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **height**: *number*
    The height of the widget in dip.

- **left**: *number*
    The horizontal offset from the parent's left edge in dip.

- **top**: *number*
    The vertical offset from the parent's top edge in dip.

- **width**: *number*
    The width of the widget in dip.


### rightChanged

Fired when the [*right*](#right) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *margin*
    The new value of [*right*](#right).


### swipeDown

Fired when a finger moves down quickly.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **touches**: *{x: number, y: number}[]*
    Touch coordinates relative to the origin coordinates of the widget.


### swipeLeft

Fired when a finger moves left quickly.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **touches**: *{x: number, y: number}[]*
    Touch coordinates relative to the origin coordinates of the widget.


### swipeRight

Fired when a finger moves right quickly.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **touches**: *{x: number, y: number}[]*
    Touch coordinates relative to the origin coordinates of the widget.


### swipeUp

Fired when a finger moves up quickly.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **touches**: *{x: number, y: number}[]*
    Touch coordinates relative to the origin coordinates of the widget.


### tap

Fired once when a finger briefly touched the widget.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **touches**: *{x: number, y: number}[]*
    Touch coordinates relative to the origin coordinates of the widget.


### topChanged

Fired when the [*top*](#top) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *margin*
    The new value of [*top*](#top).


### touchCancel

Fired instead of touchEnd when the touch ends on another widget than it started on.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **touches**: *{x: number, y: number, absoluteX: number, absoluteY: number}[]*
    Touch coordinates relative to the origin coordinates of the widget.


### touchEnd

Fired when a touch ends on the same widget than it started on.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **touches**: *{x: number, y: number, absoluteX: number, absoluteY: number}[]*
    Touch coordinates relative to the origin coordinates of the widget.


### touchMove

Fired repeatedly while swiping across the screen.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **touches**: *{x: number, y: number, absoluteX: number, absoluteY: number}[]*
    Touch coordinates relative to the origin coordinates of the widget.


### touchStart

Fired when a widget is touched. See [Touch Events](../touch.md).

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **touches**: *{x: number, y: number, absoluteX: number, absoluteY: number}[]*
    Touch coordinates relative to the origin coordinates of the widget.


### transformChanged

Fired when the [*transform*](#transform) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Transformation](../types.md#transformation)*
    The new value of [*transform*](#transform).


### visibleChanged

Fired when the [*visible*](#visible) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*visible*](#visible).


### widthChanged

Fired when the [*width*](#width) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *dimension*
    The new value of [*width*](#width).


### win_themeChanged

Fired when the [*win_theme*](#win_theme) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*win_theme*](#win_theme).





## See also

- [Understanding layouts in Tabris.js](../layout.md)
- [Understanding gesture events in Tabris.js](../touch.md)
