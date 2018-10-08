---
---
# Type "WidgetCollection"

A `WidgetCollection` is an array-like object representing a set of widgets, as returned by the widget methods `children` and `find`.

You can import this type like this:
```js
import {WidgetCollection} from 'tabris';
```
Or reference it directly form anywhere as "`tabris.WidgetCollection`".
A `WidgetCollection` is an array-like object that represents any number of widgets - it can also be empty.

It combines a subset of the JavaScript Array API with a subset of the Tabris.js Widget API. Like an array, the widgets within the collection may be accessed directly using the `[index]` syntax. The number of widgets is stored in the `length` field. Instances of *WidgetCollection* are immutable.

Example:

```js
let children = page.children();
for (let child of children) {
  console.log(child.id);
}
```

Calls to `set` or `animate` change the given properties for all widgets in the collection. Similarly, the `on`, `off` and `once` methods will add/remove the given listener to/from all widgets. When `get` is used, the value of the first widget in the collection is returned.

## Methods

### animate(properties, options)


**Parameters:** 

- properties: *{transform?: Transformation, opacity?: number}*
  - the properties and target values to animate.
- options: *[AnimationOptions](../types.md#animationoptions)*
  - configures the animation itself.

Animates all widgets in this collection.

### appendTo(parent)


**Parameters:** 

- parent: *[Composite](Composite.md)*
  - the parent widget to append to.

**Returns:** *this*

Appends all widgets in this collection to the given parent widget.

### children(selector)


**Parameters:** 

- selector: *[Selector](../types.md#selector)* [**Optional**]
  - a selector expression or a predicate function to filter the results.

**Returns:** *[WidgetCollection](WidgetCollection.md)*

Returns a collection containing all children of all widgets in this collection that match the given selector.

### dispose()


Disposes all widgets in this collection.

### filter(selector)


**Parameters:** 

- selector: *[Selector](../types.md#selector)*
  - a selector expression or a predicate function to filter the results.

**Returns:** *[WidgetCollection](WidgetCollection.md)*

Returns a new *WidgetCollection* containing all widgets in this collection that match the given selector.

### find(selector)


**Parameters:** 

- selector: *[Selector](../types.md#selector)* [**Optional**]
  - a selector expression or a predicate function to filter the results.

**Returns:** *[WidgetCollection](WidgetCollection.md)*

Returns a collection containing all descendants of all widgets in this collection that match the given selector.

### first(selector)


**Parameters:** 

- selector: *[Selector](../types.md#selector)* [**Optional**]
  - a selector expression or a predicate function to filter the results.

**Returns:** *[Widget](Widget.md)*

Returns the first widget in the collection that is matched by the selector. Without selector, it is the same as `collection[0]`.

### forEach(callback)


**Parameters:** 

- callback: *(widget: Widget, index: number, collection: WidgetCollection) => void*
  - the function to call for each widget. The arguments are: *widget*, *index*, *collection*

Calls the given callback function once for each widget in the collection.

### includes(widget)


**Parameters:** 

- widget: *[Widget](Widget.md)*
  - the widget to search in the collection.

**Returns:** *boolean*

Returns `true` if the given widget is included in the collection, `false` otherwise.

### indexOf(widget)


**Parameters:** 

- widget: *[Widget](Widget.md)*
  - the widget to locate in the collection.

**Returns:** *number*

Returns the index of the given widget within the collection, or `-1` if the widget is not present.

### last(selector)


**Parameters:** 

- selector: *[Selector](../types.md#selector)* [**Optional**]
  - a selector expression or a predicate function to filter the results.

**Returns:** *[Widget](Widget.md)*

Returns the last widget in the collection that is matched by the selector. Without selector, it is the same as `collection[collection.length - 1]`.

### off(event, listener, context)


**Parameters:** 

- event: *string*
- listener: *Function*
- context: *this* [**Optional**]

**Returns:** *this*

Removes the given listener from all widgets in this collection. See also `Widget.off()`.

### on(event, listener, context)


**Parameters:** 

- event: *string*
- listener: *Function*
- context: *this* [**Optional**]
  - in the listener function, `this` will point to this object.

**Returns:** *this*

Adds the given listener to all widgets in this collection. See also `Widget.on()`.

### once(event, listener, context)


**Parameters:** 

- event: *string*
- listener: *Function*
- context: *this* [**Optional**]
  - in the listener function, `this` will point to this object.

**Returns:** *this*

Adds the given listener for single execution on all widgets in this collection. See also `Widget.once()`.

### parent()


**Returns:** *[WidgetCollection](WidgetCollection.md)*

Returns a collection containing all direct parents of the widgets in this collection.

### set(properties)


**Parameters:** 

- properties: *object*

**Returns:** *this*

Sets all key-value pairs in the properties object on all widgets in this collection. See also `Widget.set()`.

### toArray()


**Returns:** *Widget[]*

Returns an Array containing all widgets in the collection.

### trigger(event, ...params)


**Parameters:** 

- event: *string*
- ...params: *any[]*

**Returns:** *this*

Triggers an event of the given type on all widgets in this collection. See also `Widget.trigger()`


## Properties

### length


**read-only**<br/>
Type: *number*

Contains the number of widgets in the collection.<br/>This property can only be set on widget creation. Once set, it cannot be changed anymore.

