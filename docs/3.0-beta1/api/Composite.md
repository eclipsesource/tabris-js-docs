---
---
# Widget "Composite"

Extends [Widget](Widget.md)

An empty widget that can contain other widgets.

You can import this type like this:
```js
import {Composite} from 'tabris';
```
Or reference it directly form anywhere as "`tabris.Composite`".
## Methods

### append(...widgets)


**Parameters:** 

- ...widgets: *Widget[]*

**Returns:** *this*

Adds the given widgets to the composite.

### append(widgets)


**Parameters:** 

- widgets: *Widget[]*

**Returns:** *this*

Adds all widgets in the given array to the composite.

### append(widgets)


**Parameters:** 

- widgets: *[WidgetCollection](WidgetCollection.md)*

**Returns:** *this*

Adds all widgets in the given collection to the composite.

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

### find(selector)


**Parameters:** 

- selector: *[Selector](../types.md#selector)* [**Optional**]
  - a selector expression or a predicate function to filter the results.

**Returns:** *[WidgetCollection](WidgetCollection.md)*

Returns a collection containing all descendants of all widgets in this collection that match the given selector.

If you wish to always exclude specific "internal" children from the result, overwrite the `children` method on their parent. See `children` for details.

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

### padding


Type: *[BoxDimensions](../types.md#boxdimensions)\|number*, default: `0`

Additional space to add inside the widgets bounds. If set to a number, this padding will be applied on all four sides.


## Events

### addChild

Fired when a child is added to this widget.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **child**: *[Widget](Widget.md)*
    The widget that is added as a child.

- **index**: *number*
    Denotes the position in the children list at which the child widget is added.


### paddingChanged

Fired when the [*padding*](#padding) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[BoxDimensions](../types.md#boxdimensions)\|number*
    The new value of [*padding*](#padding).


### removeChild

Fired when a child is removed from this widget.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **child**: *[Widget](Widget.md)*
    The widget that is removed.

- **index**: *number*
    The property `index` denotes the removed child widget's position in the children list.`





## Example
```js
import {Composite, TextView, ui} from 'tabris';

// Create composites and append children to them

let composite1 = new Composite({
  left: 0, top: 0, bottom: 0, right: '50%',
  background: '#f3f3f3'
}).appendTo(ui.contentView);

new TextView({
  left: 0, right: 0, top: '50%',
  alignment: 'center',
  text: 'Composite 1'
}).appendTo(composite1);

let composite2 = new Composite({
  left: '50%', top: 0, bottom: 0, right: 0,
  background: '#eaeaea'
}).appendTo(ui.contentView);

new TextView({
  left: 0, right: 0, top: '50%',
  alignment: 'center',
  text: 'Composite 2'
}).appendTo(composite2);
```