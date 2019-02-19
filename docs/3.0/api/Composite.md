---
---
# Class "Composite"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`Composite`](Composite.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\Composite.png 2x" src="img\android\Composite.png" alt="Composite on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\Composite.png 2x" src="img\ios\Composite.png" alt="Composite on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* TypeScript type: `Composite<ChildType extends Widget = Widget> extends Widget`
* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<Composite/>`
  * Parent element: [`<Composite/>`](Composite.md) and any widget extending <span style="white-space:nowrap;">[`Composite`](Composite.md)</span>
  * Child elements: *Widgets*
  * Text content: *Not supported*
* Direct subclasses: <span style="white-space:nowrap;">[`Canvas`](Canvas.md)</span>, <span style="white-space:nowrap;">[`ContentView`](ContentView.md)</span>, <span style="white-space:nowrap;">[`NavigationView`](NavigationView.md)</span>, <span style="white-space:nowrap;">[`Page`](Page.md)</span>, <span style="white-space:nowrap;">[`RefreshComposite`](RefreshComposite.md)</span>, <span style="white-space:nowrap;">[`ScrollView`](ScrollView.md)</span>, <span style="white-space:nowrap;">[`StackComposite`](StackComposite.md)</span>, <span style="white-space:nowrap;">[`Tab`](Tab.md)</span>, <span style="white-space:nowrap;">[`TabFolder`](TabFolder.md)</span>
--------
An empty widget that can contain other widgets.


Example:
```js
import {Composite, TextView, contentView} from 'tabris';

// Create composites and append children to them

const composite1 = new Composite({
  left: 0, top: 0, bottom: 0, right: '50%',
  background: '#f3f3f3'
}).appendTo(contentView);

new TextView({
  left: 0, right: 0, top: '50%',
  alignment: 'center',
  text: 'Composite 1'
}).appendTo(composite1);

const composite2 = new Composite({
  left: '50%', top: 0, bottom: 0, right: 0,
  background: '#eaeaea'
}).appendTo(contentView);

new TextView({
  left: 0, right: 0, top: '50%',
  alignment: 'center',
  text: 'Composite 2'
}).appendTo(composite2);
```
## Constructor

### new Composite(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof Composite>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Methods

### append(...widgets)



Parameter|Type|Optional|Description
-|-|-|-
...widgets | <span style="white-space:nowrap;">`Widget[]`</span> | No | 
* Returns: <span style="white-space:nowrap;">[`this`](#)</span>

Adds the given widgets to the composite.

### append(widgets)



Parameter|Type|Optional|Description
-|-|-|-
widgets | <span style="white-space:nowrap;">`Widget[]`</span> | No | 
* Returns: <span style="white-space:nowrap;">[`this`](#)</span>

Adds all widgets in the given array to the composite.

### append(widgets)



Parameter|Type|Optional|Description
-|-|-|-
widgets | <span style="white-space:nowrap;">[`WidgetCollection`](WidgetCollection.md)</span> | No | 
* Returns: <span style="white-space:nowrap;">[`this`](#)</span>

Adds all widgets in the given collection to the composite.

### apply(properties)



Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">[`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> | No | An object in the format `{Selector: {property: value, property: value, ... }, Selector: ...}`
* Returns: <span style="white-space:nowrap;">[`this`](#)</span>

Applies the given properties to all descendants that match the associated selector(s).

If you wish to always exclude specific "internal" children from this, overwrite the `children` method on their parent. See `children` for details.

### children(selector?)



Parameter|Type|Optional|Description
-|-|-|-
selector | <span style="white-space:nowrap;">`Selector<ChildType>`</span> | Yes | A selector expression or a predicate function to filter the results.
* Returns: <span style="white-space:nowrap;">[`WidgetCollection`](WidgetCollection.md)</span>

Returns a (possibly empty) collection of all children of this widget that match the given selector.

When writing custom UI components it may be useful to overwrite this method to prevent access to the internal children by external code. Doing so also affects `find` and `apply`, on this widget as well as on all parents, thereby preventing accidental clashes of widget id or class values. See also `_children`, `_find` and `_apply`.

### children(constructor)



Parameter|Type|Optional|Description
-|-|-|-
constructor | <span style="white-space:nowrap;">`{ new (...args: any[]): U }`</span> | No | A class to filter the results.
* Returns: <span style="white-space:nowrap;">`WidgetCollection<U>`</span>

Returns a collection containing all children of all widgets in this collection that are instances of the given class.

### find(selector?)



Parameter|Type|Optional|Description
-|-|-|-
selector | <span style="white-space:nowrap;">`Selector<ChildType>`</span> | Yes | A selector expression or a predicate function to filter the results.
* Returns: <span style="white-space:nowrap;">[`WidgetCollection`](WidgetCollection.md)</span>

Returns a collection containing all descendants of all widgets in this collection that match the given selector.

If you wish to always exclude specific "internal" children from the result, overwrite the `children` method on their parent. See `children` for details.

### find(constructor)



Parameter|Type|Optional|Description
-|-|-|-
constructor | <span style="white-space:nowrap;">`{ new (...args: any[]): U }`</span> | No | A class to filter the results.
* Returns: <span style="white-space:nowrap;">`WidgetCollection<U>`</span>

Returns a collection containing all descendants of all widgets in this collection that match the given selector.

If you wish to always exclude  specific "internal" children from the result, overwrite the `children` method on their parent. See `children` for details.

## Protected Methods

These methods are accessible only in classes extending *Composite*.

### _apply(properties)



Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">[`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> | No | An object in the format `{Selector: {property: value, property: value, ... }, Selector: ...}`
* Returns: <span style="white-space:nowrap;">[`this`](#)</span>

Identical to the `apply` method, but intended to be used by subclasses in case the `children` method was overwritten . See `children` for details.

### _children(selector?)



Parameter|Type|Optional|Description
-|-|-|-
selector | <span style="white-space:nowrap;">`Selector<ChildType>`</span> | Yes | A selector expression or a predicate function to filter the results.
* Returns: <span style="white-space:nowrap;">[`WidgetCollection`](WidgetCollection.md)</span>

Identical to the `children` method, but intended to be used by subclasses in case the `children` method was overwritten. See `children` for details.

### _children(constructor)



Parameter|Type|Optional|Description
-|-|-|-
constructor | <span style="white-space:nowrap;">`{ new (...args: any[]): U }`</span> | No | A class to filter the results.
* Returns: <span style="white-space:nowrap;">`WidgetCollection<U>`</span>

Identical to the `children` method, but intended to be used by subclasses in case the `children` method was overwritten. See `children` for details.

### _find(selector?)



Parameter|Type|Optional|Description
-|-|-|-
selector | <span style="white-space:nowrap;">`Selector<ChildType>`</span> | Yes | A selector expression or a predicate function to filter the results.
* Returns: <span style="white-space:nowrap;">[`WidgetCollection`](WidgetCollection.md)</span>

Identical to the `find` method, but intended to be used by subclasses in case the `children` method was overwritten. See `children` for details.

### _find(constructor)



Parameter|Type|Optional|Description
-|-|-|-
constructor | <span style="white-space:nowrap;">`{ new (...args: any[]): U }`</span> | No | A class to filter the results.
* Returns: <span style="white-space:nowrap;">`WidgetCollection<U>`</span>

Identical to the `find` method, but intended to be used by subclasses in case the `children` method was overwritten. See `children` for details.


## Properties

### layout


* Type: <span style="white-space:nowrap;">[`Layout`](Layout.md) \| [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)</span>
* Default `Layout`
* Settable: *On creation*



The layout manager responsible for interpreting the [`layoutData`](./Widget.md#layoutData) of the child widgets of this Composite.

This property can only be set via constructor or JSX. Once set, it cannot change anymore.

### padding


* Type: <span style="white-space:nowrap;">[`BoxDimensions`](../types.md#boxdimensions) \| [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)</span>
* Settable: *On creation*



Additional space to add inside the widgets bounds. A shortcut to setting/getting the `padding` property of `layout`.

This property can only be set via constructor or JSX. Once set, it cannot change anymore.


## Events

### addChild

Parameter|Type|Description
-|-|-
child | <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> | The widget that is added as a child.
index | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Denotes the position in the children list at which the child widget is added.

Fired when a child is added to this widget.

### removeChild

Parameter|Type|Description
-|-|-
child | <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> | The widget that is removed.
index | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The property `index` denotes the removed child widget's position in the children list.`

Fired when a child is removed from this widget.

