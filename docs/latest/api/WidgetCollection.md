---
---
# Class "WidgetCollection"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >WidgetCollection</a>

A `WidgetCollection` is an array-like object representing a set of widgets, as returned by the widget methods `children` and `find`. It combines a subset of the JavaScript Array API with a subset of the Tabris.js Widget API. Like an array, the widgets within the collection may be accessed directly using the `[index]` syntax. The number of widgets is stored in the `length` field. Instances of *WidgetCollection* are immutable.

Calls to `set` or `animate` change the given properties for all widgets in the collection. Similarly, the `on`, `off` and `once` methods will add/remove the given listener to/from all widgets. When `get` is used, the value of the first widget in the collection is returned.

WidgetCollection can also in JSX as a means of creating a group of widgets to append to the same parent. To shorten this common use case the `WidgetCollection` is also available as the alias ["$"](./$.md). This alias still needs to be imported from the tabris module though.


Type: | <code style="white-space: nowrap">WidgetCollection&lt;WidgetType&gt; extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a></code>
Generics: | <span id="generics">WidgetType: *The common type of all widgets in this collection. Must be a subclass of <code style="white-space: nowrap"><a href="Widget.html" title="Widget Class Reference">Widget</a></code> and defaults to <code style="white-space: nowrap"><a href="Widget.html" title="Widget Class Reference">Widget</a></code>.*<br/></span>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | Element: <code style="white-space: nowrap"><a href="#" >&lt;WidgetCollection/&gt;</a></code><br/>Parent Elements: *Not supported*<br/>Child Elements: *Not Supported*<br/>

## Examples
### JavaScript


```js
import {Page} from 'tabris';

const children = $(Page).first().children();
for (const child of children) {
  console.log(child.id);
}
```


### JSX

WidgetCollection as a JSX element via the `$` alias:
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

Parameter|Type|Description
-|-|-
widgets | <code style="white-space: nowrap"><a href="Widget.html" title="Widget Class Reference">Widget</a>[]</code> | Array of widgets to include in the WidgetCollection *Optional.*

## Methods

### animate(properties, options)



Animates all widgets in this collection.


Parameter|Type|Description
-|-|-
properties | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;transform: <a href="../types.html#transformation" title="Transformation Type Reference">Transformation</a>, // optional<br/>&nbsp;&nbsp;opacity: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a> // optional<br/>}</code> | The properties and target values to animate.
options | <code style="white-space: nowrap"><a href="../types.html#animationoptions" title="AnimationOptions Type Reference">AnimationOptions</a></code> | Configures the animation itself.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### appendTo(parent)



Appends all widgets in this collection to the given parent widget.


Parameter|Type|Description
-|-|-
parent | <code style="white-space: nowrap"><a href="Composite.html" title="Composite Class Reference">Composite</a></code> | The parent widget to append to.


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### children(selector?)



Returns a collection containing all children of all widgets in this collection that match the given selector.


Parameter|Type|Description
-|-|-
selector | <code style="white-space: nowrap"><a href="../selector.html" title="More about selectors">Selector</a></code> | A selector expression or a predicate function to filter the results. *Optional.*


Returns: <code style="white-space: nowrap"><a href="#" >WidgetCollection</a></code>

### concat()



Returns a clone of this *WidgetCollection* containing all widgets in this collection.

Returns: <code style="white-space: nowrap"><a href="#" >WidgetCollection</a>&lt;<a href="#generics" title="Generic Parameter&quot;WidgetType&quot;">WidgetType</a>&gt;</code>

### concat(...items)



Returns a new *WidgetCollection* containing all widgets in this collection and those given as arguments.


Parameter|Type|Description
-|-|-
...items | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="View &quot;Array&quot; on MDN">Array</a>&lt;<a href="Widget.html" title="Widget Class Reference">Widget</a> &#124; <a href="Widget.html" title="Widget Class Reference">Widget</a>[] &#124; <a href="#" >WidgetCollection</a>&gt;</code> | 


Returns: <code style="white-space: nowrap"><a href="#" >WidgetCollection</a>&lt;<a href="Widget.html" title="Widget Class Reference">Widget</a>&gt;</code>

### detach()



Detaches all widgets in this collection from their parent.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### dispose()



Disposes all widgets in this collection.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### filter(selector)



Returns a new *WidgetCollection* containing all widgets in this collection that match the given selector.


Parameter|Type|Description
-|-|-
selector | <code style="white-space: nowrap"><a href="../selector.html" title="More about selectors">Selector</a>&lt;WidgetType, Result&gt;</code> | A selector expression or a predicate function to filter the results.


Returns: <code style="white-space: nowrap"><a href="#" >WidgetCollection</a>&lt;<a href="#generics" title="Generic Parameter&quot;WidgetType&quot;">WidgetType</a>&gt;</code>

### first(selector?)



Returns the first widget in the collection that is matched by the selector. Without selector, it is the same as `collection[0]`.


Parameter|Type|Description
-|-|-
selector | <code style="white-space: nowrap"><a href="../selector.html" title="More about selectors">Selector</a></code> | A selector expression or a predicate function to filter the results. *Optional.*


Returns: <code style="white-space: nowrap"><a href="#generics" title="Generic Parameter&quot;WidgetType&quot;">WidgetType</a></code>

### forEach(callback)



Calls the given callback function once for each widget in the collection.


Parameter|Type|Description
-|-|-
callback | <code style="white-space: nowrap">(<a href="#generics" title="Generic Parameter&quot;WidgetType&quot;">widget</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">index</a>, <a href="#" >WidgetCollection</a>&lt;<a href="#generics" title="Generic Parameter&quot;WidgetType&quot;">WidgetType</a>&gt;) => <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">void</a></code> | The function to call.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### includes(widget)



Returns `true` if the given widget is included in the collection, `false` otherwise.


Parameter|Type|Description
-|-|-
widget | <code style="white-space: nowrap"><a href="Widget.html" title="Widget Class Reference">Widget</a></code> | The widget to search in the collection.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

### indexOf(widget)



Returns the index of the given widget within the collection, or `-1` if the widget is not present.


Parameter|Type|Description
-|-|-
widget | <code style="white-space: nowrap"><a href="Widget.html" title="Widget Class Reference">Widget</a></code> | The widget to locate in the collection.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code>

### last(selector?)



Returns the last widget in the collection that is matched by the selector. Without selector, it is the same as `collection[collection.length - 1]`.


Parameter|Type|Description
-|-|-
selector | <code style="white-space: nowrap"><a href="../selector.html" title="More about selectors">Selector</a></code> | A selector expression or a predicate function to filter the results. *Optional.*


Returns: <code style="white-space: nowrap"><a href="#generics" title="Generic Parameter&quot;WidgetType&quot;">WidgetType</a></code>

### map(callback)



Calls the given callback function once for each widget in the collection and returns an array with the return values of each call.


Parameter|Type|Description
-|-|-
callback | <code style="white-space: nowrap">(<a href="#generics" title="Generic Parameter&quot;WidgetType&quot;">widget</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">index</a>, <a href="#" >WidgetCollection</a>&lt;<a href="#generics" title="Generic Parameter&quot;WidgetType&quot;">WidgetType</a>&gt;) => <a title="Literally any JavaScript value">any</a></code> | The function to call for each widget.


Returns: <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a>[]</code>

### off(event, listener, context?)



Removes the given listener from all widgets in this collection. See also `Widget.off()`.


Parameter|Type|Description
-|-|-
event | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 
listener | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a></code> | 
context | <code style="white-space: nowrap"><a href="#" title="This object">this</a></code> | *Optional.*


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### on(event, listener, context?)



Adds the given listener to all widgets in this collection. See also `Widget.on()`.


Parameter|Type|Description
-|-|-
event | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 
listener | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a></code> | 
context | <code style="white-space: nowrap"><a href="#" title="This object">this</a></code> | In the listener function, `this` will point to this object. *Optional.*


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### once(event, listener, context?)



Adds the given listener for single execution on all widgets in this collection. See also `Widget.once()`.


Parameter|Type|Description
-|-|-
event | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 
listener | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a></code> | 
context | <code style="white-space: nowrap"><a href="#" title="This object">this</a></code> | In the listener function, `this` will point to this object. *Optional.*


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### only(selector?)



Returns the only widget in the collection that is matched by the selector. If there is more or less than one match the method throws en Error. Without a selector the widget collection needs to have exactly one entry.


Parameter|Type|Description
-|-|-
selector | <code style="white-space: nowrap"><a href="../selector.html" title="More about selectors">Selector</a></code> | A selector expression or a predicate function to filter the results. *Optional.*


Returns: <code style="white-space: nowrap"><a href="#generics" title="Generic Parameter&quot;WidgetType&quot;">WidgetType</a></code>

### parent()



Returns a collection containing all direct parents of the widgets in this collection.

Returns: <code style="white-space: nowrap"><a href="#" >WidgetCollection</a></code>

### set(properties)



Sets all key-value pairs in the properties object on all widgets in this collection. See also `Widget.set()`.


Parameter|Type|Description
-|-|-
properties | <code style="white-space: nowrap"><a href="../types.html#propertieswidget" title="Properties&lt;Widget&gt;">Properties</a>&lt;<a href="#generics" title="Generic Parameter&quot;WidgetType&quot;">WidgetType</a>&gt;</code> | 


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### slice(start?, end?)



Returns a new *WidgetCollection* containing a section of this collection.


Parameter|Type|Description
-|-|-
start | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The beginning of the specified portion of the collection. *Optional.*
end | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The end of the specified portion of the collection. *Optional.*


Returns: <code style="white-space: nowrap"><a href="#" >WidgetCollection</a>&lt;<a href="#generics" title="Generic Parameter&quot;WidgetType&quot;">WidgetType</a>&gt;</code>

### toArray()



Returns an Array containing all widgets in the collection.

Returns: <code style="white-space: nowrap"><a href="#generics" title="Generic Parameter&quot;WidgetType&quot;">WidgetType</a>[]</code>

### trigger(type, eventData?)



Triggers an event of the given type on all widgets in this collection and passes the fields of the given *object* to all listeners`


Parameter|Type|Description
-|-|-
type | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The type of event to trigger
eventData | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code> | The data to pass to listener functions. *Optional.*


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>


## Properties

### host


The widget this WidgetCollection was created from. Corresponds to the ':host' selector.

Type: |<code style="white-space: nowrap"><a href="Widget.html" title="Widget Class Reference">Widget</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### length


Contains the number of widgets in the collection.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



