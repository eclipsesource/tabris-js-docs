---
---
# Class "ListView"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a> > <a href="Widget.html" title="Widget Class Reference">Widget</a> > <a href="Composite.html" title="Composite Class Reference">Composite</a> > <a href="CollectionView.html" title="CollectionView Class Reference">CollectionView</a> > <a href="#" >ListView</a>

Type: | <code style="white-space: nowrap">ListView&lt;ItemType&gt; extends <a href="CollectionView.html" title="CollectionView Class Reference">CollectionView</a>&lt;<a href="Cell.html" title="Cell Class Reference">Cell</a>&gt;</code>
Generics: | <span id="generics">ItemType: <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code><br/></span>
Constructor: | public
Singleton: | No
**Module:** |<a href="https://www.npmjs.com/package/tabris-decorators" >**tabris-decorators**</a>
Direct subclasses: | None
JSX Support: | Element: <code style="white-space: nowrap"><a href="#" >&lt;ListView/&gt;</a></code><br/>Parent Elements: <code style="white-space: nowrap"><a href="Canvas.html" title="Canvas Class Reference">&lt;Canvas/&gt;</a></code>, <code style="white-space: nowrap"><a href="Cell.html" title="Cell Class Reference">&lt;Cell/&gt;</a></code>, <code style="white-space: nowrap"><a href="Composite.html" title="Composite Class Reference">&lt;Composite/&gt;</a></code>, <code style="white-space: nowrap"><a href="Page.html" title="Page Class Reference">&lt;Page/&gt;</a></code>, <code style="white-space: nowrap"><a href="RefreshComposite.html" title="RefreshComposite Class Reference">&lt;RefreshComposite/&gt;</a></code>, <code style="white-space: nowrap"><a href="Row.html" title="Row Class Reference">&lt;Row/&gt;</a></code>, <code style="white-space: nowrap"><a href="ScrollView.html" title="ScrollView Class Reference">&lt;ScrollView/&gt;</a></code>, <code style="white-space: nowrap"><a href="Stack.html" title="Stack Class Reference">&lt;Stack/&gt;</a></code>, <code style="white-space: nowrap"><a href="Tab.html" title="Tab Class Reference">&lt;Tab/&gt;</a></code><br/>Child Elements: <code style="white-space: nowrap"><a href="Cell.html" title="Cell Class Reference">&lt;Cell/&gt;</a></code><br/>

`ListView` is a high-level extension of the low-level `CollectionView` widget. It provides additional API to make usage more convenient, but does not add any new features.

`ListView` is optimized for [JSX](../declarative-ui.md) and [data binding](../databinding/index.md). It *can* be used in plain JavaScript, but in this case some features do not work, as noted below.

In contrast to `CollectionView` it features an [`items`](#items) property and requires no callbacks to create or populate cells, and no explicit item position/content updates: The `load()`, `insert()`, `remove()` and `refresh()`) methods are called implicitly when the `items` property value changes or mutates. For this to work as expected the [`items`](#items) property must either be set a [`List`](./List.md) instance, or to a series of immutable arrays. Any change to a `List` will be recognized immediately, while an items array must to be entirely *replaced without modifying the previous one*. `ListView` will then compute the difference between the old and new array automatically.

To define the look of a `ListView` it requires one or more [`<Cell>`](./Cell.md) child elements containing widgets that [bind](../databinding/@component#one-way-bindings) themselves to the cell's [`item`](./Cell.md#item). These cells act as templates for all `Cell` instances needed by `ListView` to display the items. If multiple cell templates are present, their `itemType` and/or `itemCheck` properties are used to determine which cell template to use for which item.

Note that this mechanism ONLY works in JSX, but `ListView` can still be used without templates by setting the `createCell`, `cellType` and `cellHeight` properties instead. You may want to do this if you are using plain JavaScript project setup. In this scenario the `Cell` properties `itemType`, `itemCheck` and `selectable` are not supported.

**ListView is not exported by the `tabris` module, but by `tabris-decorators`, which needs to be installed separately.**


## Examples
### JSX


```jsx
contentView.append(
  <ListView stretch items={items}>
    <Cell padding={8} height={52}>
      <TextView centerY bind-text='item.text' font='24px'/>
    </Cell>
  </ListView>
);
```



See also:
  
[<span class='language jsx'>JSX</span> Examples with various cell types and selection events](https://github.com/eclipsesource/tabris-decorators/tree/v3.10.0/examples/listview-cells-jsx)  
[<span class='language jsx'>JSX</span> Data Binding Example](https://github.com/eclipsesource/tabris-decorators/tree/v3.10.0/examples/bind-listview-list-jsx)  
[<span class='language tsx'>TSX</span> Examples with various cell types and selection events (TypeScript variant)](https://github.com/eclipsesource/tabris-decorators/tree/v3.10.0/examples/listview-cells)  
[<span class='language tsx'>TSX</span> Data Binding Example (TypeScript variant)](https://github.com/eclipsesource/tabris-decorators/tree/v3.10.0/examples/bind-listview-list)  
[<span class='language js'>JS</span> Examples with various cell types and selection events (Plain JavaScript - some features not supported)](https://github.com/eclipsesource/tabris-decorators/tree/v3.10.0/examples/listview-cells-js)

## Constructor

### new ListView(properties?)

Parameter|Type|Description
-|-|-
properties | <code style="white-space: nowrap"><a href="Widget.html#propertieswidget" title="Widget Class Type">Properties</a>&lt;<a href="#" >ListView</a>&gt;</code> | Sets all key-value pairs in the properties object as widget properties. *Optional.*

## Static Methods

### select(ev, action?)



This is a helper method intended to be used in an event listener of any event of `Cell` or its children. It triggers a `select` event on the `ListView` containing the cell. [The `action` value is set on the resulting `ListViewSelectEvent` event object](#select).

Example usage: `onTap={ev => ListView.select(ev, someNumber)}`.

 Use `selectPrimary`, `selectSecondary`, `selectToggle` or `selectDismiss` as a shorthand to trigger `select` with a specific value for `action`, **or just set the [`selectable`](./Cell.md#selectable) property of `Cell`**.


Parameter|Type|Description
-|-|-
ev | <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a></code> | 
action | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | A numeric value passed on to the `select` event object, defaults to `0`. *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### selectDismiss(ev)



This is a helper method intended to be used directly as an event listener of any event of `Cell` or its children. Like [the `select` method](#selectev-action) it  triggers a `select` event on the `ListView` containing the cell. This difference is only semantic: [The `action` value on the `ListViewSelectEvent` event object](#select) will be set to `ItemAction.Dismiss` (i.e. `4`), typically indicating the item should be removed .

Example usage:`onSomeEvent={ListView.selectDismiss}`.


Parameter|Type|Description
-|-|-
ev | <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### selectPrimary(ev)



This is a helper method intended to be used directly as an event listener of any event of `Cell` or its children. Like [the `select` method](#selectev-action) it triggers a `select` event on the `ListView` containing the cell. This difference is only semantic: [The `action` value on the `ListViewSelectEvent` event object](#select) will be set to `ItemAction.Primary` (i.e. `1`), indicating a 'normal' selection.

Example usage: `onTap={ListView.selectPrimary}`.


Parameter|Type|Description
-|-|-
ev | <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### selectSecondary(ev)



This is a helper method intended to be used directly as an event listener of any event of `Cell` or its children. Like [the `select` method](#selectev-action) it  triggers a `select` event on the `ListView` containing the cell. This difference is only semantic: [The `action` value on the `ListViewSelectEvent` event object](#select) will be set to `ItemAction.Secondary` (i.e. `2`), indicating some alternative kind of selection.

Example usage: `onSomeEvent={ListView.selectSecondary}`.


Parameter|Type|Description
-|-|-
ev | <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### selectToggle(ev)



This is a helper method intended to be used directly as an event listener of any event of `Cell` or its children. Like [the `select` method](#selectev-action) it  triggers a `select` event on the `ListView` containing the cell. This difference is only semantic: [The `action` value on the `ListViewSelectEvent` event object](#select) will be set to `ItemAction.Toggle` (i.e. `3`), typically indicating the item should be marked as checked or unchecked.

Example usage: `onSomeEvent={ListView.selectToggle}`.


Parameter|Type|Description
-|-|-
ev | <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>


## Properties

### items


List or Array containing the items that to be displayed. If a `List` is used any changes to the list (items added/removed/replaced) the `ListView` updates itself automatically. The updated will be animated if possible.

Type: |<code style="white-space: nowrap"><a href="List.html" title="List Class Reference">List</a>&lt;<a href="#generics" title="Generic Parameter&quot;ItemType&quot;">ItemType</a>&gt; &#124; <a href="#generics" title="Generic Parameter&quot;ItemType&quot;">ItemType</a>[]</code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`itemsChanged`](#itemschanged)





## Events

### select

An event that may be triggered by a `Cell` as the result of any kind of user interaction. By default cells do not trigger `select` events, they have to be explicitly configured to do so. This can be done via the [`selectable`](./Cell.md#selectable) property on `Cell` or the static [`select`](#selectprimaryev) trigger methods.

EventObject Type: <code style="white-space: nowrap">ListViewSelectEvent&lt;<a href="#" >ListView</a>&gt;</code>

Property|Type|Description
-|-|-
action | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | A general-purpose parameter passed on when the event was triggered by one of the [static `select` methods](#selectev-action). This is meant to be used by the application to differentiate between different kind of interactions. It can be safely ignored if there is only one kind of selection, such as tapping a cell. <br/><br/>`tabris-decorators` exports a `ItemAction` enum defining 4 pre-defined values for use with this property: `Primary`, `Secondary`, `Toggle` and `Dismiss`. These are set when using the corresponding [trigger methods](#selectprimaryev).
item | <code style="white-space: nowrap"><a href="#generics" title="Generic Parameter&quot;ItemType&quot;">ItemType</a></code> | The item currently associated with the Cell that triggered the event.
itemIndex | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The index of the item within the `items` list/array.
originalEvent | <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a></code> | The event that was the cause of this select event.

## Change Events

### itemsChanged

Fired when the [items](#items) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >ListView</a>, <a href="List.html" title="List Class Reference">List</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="View &quot;Array&quot; on MDN">Array</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="List.html" title="List Class Reference">List</a>&lt;<a href="#generics" title="Generic Parameter&quot;ItemType&quot;">ItemType</a>&gt; &#124; <a href="#generics" title="Generic Parameter&quot;ItemType&quot;">ItemType</a>[]</code> | The new value of [items](#items).


