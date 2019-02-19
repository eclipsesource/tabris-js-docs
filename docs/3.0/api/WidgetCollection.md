---
---
# Class "WidgetCollection"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`WidgetCollection`](WidgetCollection.md)</span>

* TypeScript type: `WidgetCollection<T extends Widget = Widget> extends Object`
* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support: *No*
* Direct subclasses: *None*
--------
A `WidgetCollection` is an array-like object representing a set of widgets, as returned by the widget methods `children` and `find`.


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

## Constructor

### new WidgetCollection(widgets?)

Parameter|Type|Optional|Description
-|-|-|-
widgets | <span style="white-space:nowrap;">`Widget[]`</span> | Yes | Array of widgets to include in the WidgetCollection

## Methods

### animate(properties, options)



Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`{transform?: Transformation, opacity?: number}`</span> | No | The properties and target values to animate.
options | <span style="white-space:nowrap;">[`AnimationOptions`](../types.md#animationoptions)</span> | No | Configures the animation itself.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Animates all widgets in this collection.

### appendTo(parent)



Parameter|Type|Optional|Description
-|-|-|-
parent | <span style="white-space:nowrap;">[`Composite`](Composite.md)</span> | No | The parent widget to append to.
* Returns: <span style="white-space:nowrap;">[`this`](#)</span>

Appends all widgets in this collection to the given parent widget.

### children(selector?)



Parameter|Type|Optional|Description
-|-|-|-
selector | <span style="white-space:nowrap;">[`Selector`](../types.md#selector)</span> | Yes | A selector expression or a predicate function to filter the results.
* Returns: <span style="white-space:nowrap;">[`WidgetCollection`](WidgetCollection.md)</span>

Returns a collection containing all children of all widgets in this collection that match the given selector.

### children(constructor)



Parameter|Type|Optional|Description
-|-|-|-
constructor | <span style="white-space:nowrap;">`{ new (...args: any[]): U }`</span> | No | A class to filter the results.
* Returns: <span style="white-space:nowrap;">`WidgetCollection<U>`</span>

Returns a collection containing all children of all widgets in this collection that are instances of the given class.

### dispose()

* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Disposes all widgets in this collection.

### filter(selector)



Parameter|Type|Optional|Description
-|-|-|-
selector | <span style="white-space:nowrap;">`Selector<T>`</span> | No | A selector expression or a predicate function to filter the results.
* Returns: <span style="white-space:nowrap;">[`WidgetCollection`](WidgetCollection.md)</span>

Returns a new *WidgetCollection* containing all widgets in this collection that match the given selector.

### filter(constructor)



Parameter|Type|Optional|Description
-|-|-|-
constructor | <span style="white-space:nowrap;">`{ new (...args: any[]): U }`</span> | No | A class to filter the results.
* Returns: <span style="white-space:nowrap;">`WidgetCollection<U>`</span>

Returns a new *WidgetCollection* containing all widgets in this collection that are instances of the given class.

### find(selector?)



Parameter|Type|Optional|Description
-|-|-|-
selector | <span style="white-space:nowrap;">[`Selector`](../types.md#selector)</span> | Yes | A selector expression or a predicate function to filter the results.
* Returns: <span style="white-space:nowrap;">[`WidgetCollection`](WidgetCollection.md)</span>

Returns a collection containing all descendants of all widgets in this collection that match the given selector.

### find(constructor)



Parameter|Type|Optional|Description
-|-|-|-
constructor | <span style="white-space:nowrap;">`{ new (...args: any[]): U }`</span> | No | A class to filter the results.
* Returns: <span style="white-space:nowrap;">`WidgetCollection<U>`</span>

Returns a collection containing all descendants of all widgets in this collection that are instances of the given class.

### first(selector?)



Parameter|Type|Optional|Description
-|-|-|-
selector | <span style="white-space:nowrap;">[`Selector`](../types.md#selector)</span> | Yes | A selector expression or a predicate function to filter the results.
* Returns: <span style="white-space:nowrap;">[`Widget`](Widget.md)</span>

Returns the first widget in the collection that is matched by the selector. Without selector, it is the same as `collection[0]`.

### first(constructor)



Parameter|Type|Optional|Description
-|-|-|-
constructor | <span style="white-space:nowrap;">`{ new (...args: any[]): U }` \| [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type)</span> | No | A class to filter the results.
* Returns: <span style="white-space:nowrap;">`U`</span>

Returns the first widget in the collection that is an instance of the given class.

### forEach(callback)



Parameter|Type|Optional|Description
-|-|-|-
callback | <span style="white-space:nowrap;">`(widget: Widget, index: number, collection: WidgetCollection) => void`</span> | No | The function to call for each widget. The arguments are: *widget*, *index*, *collection*
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Calls the given callback function once for each widget in the collection.

### includes(widget)



Parameter|Type|Optional|Description
-|-|-|-
widget | <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> | No | The widget to search in the collection.
* Returns: <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>

Returns `true` if the given widget is included in the collection, `false` otherwise.

### indexOf(widget)



Parameter|Type|Optional|Description
-|-|-|-
widget | <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> | No | The widget to locate in the collection.
* Returns: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>

Returns the index of the given widget within the collection, or `-1` if the widget is not present.

### last(selector?)



Parameter|Type|Optional|Description
-|-|-|-
selector | <span style="white-space:nowrap;">[`Selector`](../types.md#selector)</span> | Yes | A selector expression or a predicate function to filter the results.
* Returns: <span style="white-space:nowrap;">[`Widget`](Widget.md)</span>

Returns the last widget in the collection that is matched by the selector. Without selector, it is the same as `collection[collection.length - 1]`.

### last(constructor)



Parameter|Type|Optional|Description
-|-|-|-
constructor | <span style="white-space:nowrap;">`{ new (...args: any[]): U }` \| [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type)</span> | No | A class to filter the results.
* Returns: <span style="white-space:nowrap;">`U`</span>

Returns the last widget in the collection that is an instance of the given class.

### off(event, listener, context?)



Parameter|Type|Optional|Description
-|-|-|-
event | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
listener | <span style="white-space:nowrap;">`Function`</span> | No | 
context | <span style="white-space:nowrap;">[`this`](#)</span> | Yes | 
* Returns: <span style="white-space:nowrap;">[`this`](#)</span>

Removes the given listener from all widgets in this collection. See also `Widget.off()`.

### on(event, listener, context?)



Parameter|Type|Optional|Description
-|-|-|-
event | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
listener | <span style="white-space:nowrap;">`Function`</span> | No | 
context | <span style="white-space:nowrap;">[`this`](#)</span> | Yes | In the listener function, `this` will point to this object.
* Returns: <span style="white-space:nowrap;">[`this`](#)</span>

Adds the given listener to all widgets in this collection. See also `Widget.on()`.

### once(event, listener, context?)



Parameter|Type|Optional|Description
-|-|-|-
event | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
listener | <span style="white-space:nowrap;">`Function`</span> | No | 
context | <span style="white-space:nowrap;">[`this`](#)</span> | Yes | In the listener function, `this` will point to this object.
* Returns: <span style="white-space:nowrap;">[`this`](#)</span>

Adds the given listener for single execution on all widgets in this collection. See also `Widget.once()`.

### parent()

* Returns: <span style="white-space:nowrap;">[`WidgetCollection`](WidgetCollection.md)</span>

Returns a collection containing all direct parents of the widgets in this collection.

### set(properties)



Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">[`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> | No | 
* Returns: <span style="white-space:nowrap;">[`this`](#)</span>

Sets all key-value pairs in the properties object on all widgets in this collection. See also `Widget.set()`.

### toArray()

* Returns: <span style="white-space:nowrap;">`Widget[]`</span>

Returns an Array containing all widgets in the collection.

### trigger(event, ...params)



Parameter|Type|Optional|Description
-|-|-|-
event | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
...params | <span style="white-space:nowrap;">`any[]`</span> | No | 
* Returns: <span style="white-space:nowrap;">[`this`](#)</span>

Triggers an event of the given type on all widgets in this collection. See also `Widget.trigger()`


## Properties

### host


* Type: <span style="white-space:nowrap;">[`Widget`](Widget.md)</span>
* Settable: *No*



The widget this WidgetCollection was created from. Corresponds to the ':host' selector.

This property can only be set via constructor. Once set, it cannot change anymore.

### length


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *No*



Contains the number of widgets in the collection.

This property can only be set via constructor. Once set, it cannot change anymore.

