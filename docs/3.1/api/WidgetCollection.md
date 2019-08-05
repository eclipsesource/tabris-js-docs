---
---
# Class "WidgetCollection"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`WidgetCollection`](WidgetCollection.md)</span>

A `WidgetCollection` is an array-like object representing a set of widgets, as returned by the widget methods `children` and `find`. It combines a subset of the JavaScript Array API with a subset of the Tabris.js Widget API. Like an array, the widgets within the collection may be accessed directly using the `[index]` syntax. The number of widgets is stored in the `length` field. Instances of *WidgetCollection* are immutable.

Calls to `set` or `animate` change the given properties for all widgets in the collection. Similarly, the `on`, `off` and `once` methods will add/remove the given listener to/from all widgets. When `get` is used, the value of the first widget in the collection is returned.

WidgetCollection can also in JSX as a means of creating a group of widgets to append to the same parent. To shorten this common use case the `WidgetCollection` is also available as the alias `$`. This alias still needs to be imported from the tabris module though.


TypeScript type | `WidgetCollection<T extends Widget = Widget> extends Object`
Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | *No*


## Example
```js
let children = page.children();
for (let child of children) {
  console.log(child.id);
}
```

As a JSX element via the `$` alias:

```jsx
import {contentView, $, TextView} from 'tabris';

contentView.append(
  <$>
    <TextView>Hello</TextView>
    <TextView top='prev()'>World</TextView>
  </$>
);
```

## Constructor

### new WidgetCollection(widgets?)

Parameter|Type|Optional|Description
-|-|-|-
widgets | <span style="white-space:nowrap;">`Widget[]`</span> | Yes | Array of widgets to include in the WidgetCollection

## Methods

### animate(properties, options)



Animates all widgets in this collection.


Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`{transform?: Transformation, opacity?: number}`</span> | No | The properties and target values to animate.
options | <span style="white-space:nowrap;">[`AnimationOptions`](../types.md#animationoptions)</span> | No | Configures the animation itself.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### appendTo(parent)



Appends all widgets in this collection to the given parent widget.


Parameter|Type|Optional|Description
-|-|-|-
parent | <span style="white-space:nowrap;">[`Composite`](Composite.md)</span> | No | The parent widget to append to.


Returns <span style="white-space:nowrap;">[`this`](#)</span>

### children(selector?)



Returns a collection containing all children of all widgets in this collection that match the given selector.


Parameter|Type|Optional|Description
-|-|-|-
selector | <span style="white-space:nowrap;">[`Selector`](../types.md#selector)</span> | Yes | A selector expression or a predicate function to filter the results.


Returns <span style="white-space:nowrap;">[`WidgetCollection`](WidgetCollection.md)</span>

### concat(...items)



Returns a new *WidgetCollection* containing all widgets in this collection and those given as arguments.


Parameter|Type|Optional|Description
-|-|-|-
...items | <span style="white-space:nowrap;">`Array<T` \| `T[]` \| `WidgetCollection<T>>`</span> | No | 


Returns <span style="white-space:nowrap;">[`WidgetCollection`](WidgetCollection.md)</span>

### detach()



Detaches all widgets in this collection from their parent.

Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### dispose()



Disposes all widgets in this collection.

Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### filter(selector)



Returns a new *WidgetCollection* containing all widgets in this collection that match the given selector.


Parameter|Type|Optional|Description
-|-|-|-
selector | <span style="white-space:nowrap;">`Selector<T, Result>`</span> | No | A selector expression or a predicate function to filter the results.


Returns <span style="white-space:nowrap;">[`WidgetCollection`](WidgetCollection.md)</span>

### first(selector?)



Returns the first widget in the collection that is matched by the selector. Without selector, it is the same as `collection[0]`.


Parameter|Type|Optional|Description
-|-|-|-
selector | <span style="white-space:nowrap;">[`Selector`](../types.md#selector)</span> | Yes | A selector expression or a predicate function to filter the results.


Returns <span style="white-space:nowrap;">[`Widget`](Widget.md)</span>

### forEach(callback)



Calls the given callback function once for each widget in the collection.


Parameter|Type|Optional|Description
-|-|-|-
callback | <span style="white-space:nowrap;">`(widget: Widget, index: number, collection: WidgetCollection) => void`</span> | No | The function to call for each widget. The arguments are: *widget*, *index*, *collection*


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### includes(widget)



Returns `true` if the given widget is included in the collection, `false` otherwise.


Parameter|Type|Optional|Description
-|-|-|-
widget | <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> | No | The widget to search in the collection.


Returns <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>

### indexOf(widget)



Returns the index of the given widget within the collection, or `-1` if the widget is not present.


Parameter|Type|Optional|Description
-|-|-|-
widget | <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> | No | The widget to locate in the collection.


Returns <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>

### last(selector?)



Returns the last widget in the collection that is matched by the selector. Without selector, it is the same as `collection[collection.length - 1]`.


Parameter|Type|Optional|Description
-|-|-|-
selector | <span style="white-space:nowrap;">[`Selector`](../types.md#selector)</span> | Yes | A selector expression or a predicate function to filter the results.


Returns <span style="white-space:nowrap;">[`Widget`](Widget.md)</span>

### last(constructor)



Returns the last widget in the collection that is an instance of the given class.


Parameter|Type|Optional|Description
-|-|-|-
constructor | <span style="white-space:nowrap;">`{ new (...args: any[]): U }` \| [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type)</span> | No | A class to filter the results.


Returns <span style="white-space:nowrap;">`U`</span>

### map(callback)



Calls the given callback function once for each widget in the collection and returns an array with the return values of each call.


Parameter|Type|Optional|Description
-|-|-|-
callback | <span style="white-space:nowrap;">`(widget: Widget, index: number, collection: WidgetCollection) => void`</span> | No | The function to call for each widget. The arguments are: *widget*, *index*, *collection*


Returns <span style="white-space:nowrap;">`Array`</span>

### off(event, listener, context?)



Removes the given listener from all widgets in this collection. See also `Widget.off()`.


Parameter|Type|Optional|Description
-|-|-|-
event | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
listener | <span style="white-space:nowrap;">`Function`</span> | No | 
context | <span style="white-space:nowrap;">[`this`](#)</span> | Yes | 


Returns <span style="white-space:nowrap;">[`this`](#)</span>

### on(event, listener, context?)



Adds the given listener to all widgets in this collection. See also `Widget.on()`.


Parameter|Type|Optional|Description
-|-|-|-
event | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
listener | <span style="white-space:nowrap;">`Function`</span> | No | 
context | <span style="white-space:nowrap;">[`this`](#)</span> | Yes | In the listener function, `this` will point to this object.


Returns <span style="white-space:nowrap;">[`this`](#)</span>

### once(event, listener, context?)



Adds the given listener for single execution on all widgets in this collection. See also `Widget.once()`.


Parameter|Type|Optional|Description
-|-|-|-
event | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
listener | <span style="white-space:nowrap;">`Function`</span> | No | 
context | <span style="white-space:nowrap;">[`this`](#)</span> | Yes | In the listener function, `this` will point to this object.


Returns <span style="white-space:nowrap;">[`this`](#)</span>

### only(selector?)



Returns the only widget in the collection that is matched by the selector. If there is more or less than one match the method throws en Error. Without a selector the widget collection needs to have exactly one entry.


Parameter|Type|Optional|Description
-|-|-|-
selector | <span style="white-space:nowrap;">[`Selector`](../types.md#selector)</span> | Yes | A selector expression or a predicate function to filter the results.


Returns <span style="white-space:nowrap;">[`Widget`](Widget.md)</span>

### parent()



Returns a collection containing all direct parents of the widgets in this collection.

Returns <span style="white-space:nowrap;">[`WidgetCollection`](WidgetCollection.md)</span>

### set(properties)



Sets all key-value pairs in the properties object on all widgets in this collection. See also `Widget.set()`.


Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">[`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> | No | 


Returns <span style="white-space:nowrap;">[`this`](#)</span>

### slice(start?, end?)



Returns a new *WidgetCollection* containing a section of this collection.


Parameter|Type|Optional|Description
-|-|-|-
start | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Yes | The beginning of the specified portion of the collection.
end | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Yes | The end of the specified portion of the collection.


Returns <span style="white-space:nowrap;">[`WidgetCollection`](WidgetCollection.md)</span>

### toArray()



Returns an Array containing all widgets in the collection.

Returns <span style="white-space:nowrap;">`Widget[]`</span>

### trigger(event, ...params)



Triggers an event of the given type on all widgets in this collection. See also `Widget.trigger()`


Parameter|Type|Optional|Description
-|-|-|-
event | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
...params | <span style="white-space:nowrap;">`any[]`</span> | No | 


Returns <span style="white-space:nowrap;">[`this`](#)</span>


## Properties

### host


The widget this WidgetCollection was created from. Corresponds to the ':host' selector.

Type | <span style="white-space:nowrap;">[`Widget`](Widget.md)</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.



### length


Contains the number of widgets in the collection.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.



