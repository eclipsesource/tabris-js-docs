---
---
# WidgetCollection

A `WidgetCollection` is an array-like object representing a set of widgets, as returned by the widget methods `children` and `find`.
Includes [Events API](Events.md), [Properties API](Properties.md)

A `WidgetCollection` is an array-like object that represents any number of widgets - it can also be empty. 

It combines a subset of the JavaScript Array API with a subset of the Tabris.js Widget API. Like an array, the widgets within the collection may be accessed directly using the `[index]` syntax. The number of widgets is stored in the `length` field. Instances of *WidgetCollection* are immutable.

Example:

```js
var children = page.children();
for(var i = 0; i < children.length; i++) {
  console.log(children[i].get("id"));
}
```

Calls to `set` or `animate` change the given properties for all widgets in the collection. Similarly, the `on`, `off` and `once` methods will add/remove the given listener to/from all widgets. When `get` is used, the value of the first widget in the collection is returned. 

## Methods

### animate(properties, options)


**Parameters:** 

- properties: *Object*, the properties and target values to animate.
- options: *Object*, configures the animation itself.

Animates all widgets in this collection.

### appendTo(parent)


**Parameters:** 

- parent: *[Composite](Composite.md)*

**Returns:** *[WidgetCollection](WidgetCollection.md)*

Append all widgets in this collection to the given widget.

### children()


**Parameters:** 



**Returns:** *[WidgetCollection](WidgetCollection.md)*

Returns a collection containing all children of all widgets in this collection.

### children(selector)


**Parameters:** 

- selector: *[Selector](../types.md#selector)*

**Returns:** *[WidgetCollection](WidgetCollection.md)*

Same as `collection.children().filter(selector)`.

### dispose()


**Parameters:** 



Disposes all widgets in this collection.

### find()


**Parameters:** 



**Returns:** *[WidgetCollection](WidgetCollection.md)*

Returns a collection containing all descendants of all widgets in this collection.

### find(selector)


**Parameters:** 

- selector: *[Selector](../types.md#selector)*

**Returns:** *[WidgetCollection](WidgetCollection.md)*

Returns a collection containing all descendants of all widgets in this collection that match the given selector.

### isDisposed()


**Parameters:** 



**Returns:** *boolean*

Returns `true` if the widget has been disposed, otherwise `false`.

### parent()


**Parameters:** 



**Returns:** *[WidgetCollection](WidgetCollection.md)*

Returns a collection containing all direct parents of all widgets in this collection.


## Fields

### length
Type: *number*

A read-only field containing the number of widgets in the collection.
