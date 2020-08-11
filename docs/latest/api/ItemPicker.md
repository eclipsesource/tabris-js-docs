---
---
# Class "ItemPicker"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a> > <a href="Widget.html" title="Widget Class Reference">Widget</a> > <a href="Picker.html" title="Picker Class Reference">Picker</a> > <a href="#" >ItemPicker</a>

Type: | <code style="white-space: nowrap">ItemPicker&lt;ItemType&gt; extends <a href="Picker.html" title="Picker Class Reference">Picker</a></code>
Generics: | <span id="generics">ItemType: <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code><br/></span>
Constructor: | public
Singleton: | No
**Module:** |<a href="https://www.npmjs.com/package/tabris-decorators" >**tabris-decorators**</a>
Direct subclasses: | None
JSX Support: | Element: <code style="white-space: nowrap"><a href="#" >&lt;ItemPicker/&gt;</a></code><br/>Parent Elements: <code style="white-space: nowrap"><a href="Canvas.html" title="Canvas Class Reference">&lt;Canvas/&gt;</a></code>, <code style="white-space: nowrap"><a href="Cell.html" title="Cell Class Reference">&lt;Cell/&gt;</a></code>, <code style="white-space: nowrap"><a href="Composite.html" title="Composite Class Reference">&lt;Composite/&gt;</a></code>, <code style="white-space: nowrap"><a href="Page.html" title="Page Class Reference">&lt;Page/&gt;</a></code>, <code style="white-space: nowrap"><a href="RefreshComposite.html" title="RefreshComposite Class Reference">&lt;RefreshComposite/&gt;</a></code>, <code style="white-space: nowrap"><a href="Row.html" title="Row Class Reference">&lt;Row/&gt;</a></code>, <code style="white-space: nowrap"><a href="ScrollView.html" title="ScrollView Class Reference">&lt;ScrollView/&gt;</a></code>, <code style="white-space: nowrap"><a href="Stack.html" title="Stack Class Reference">&lt;Stack/&gt;</a></code>, <code style="white-space: nowrap"><a href="Tab.html" title="Tab Class Reference">&lt;Tab/&gt;</a></code><br/>Child Elements: *Not Supported*<br/>Element content sets: [<code style="white-space: nowrap">items</code>](#items)

`ItemPicker` is a high-level extension of the low-level `Picker` widget. It provides additional API to make usage more convenient, but does not add any new features.

In contrast to `Picker`, it has an [`items`](#items) property (taking either an array or a [`List`](./List.md)) and does not necessarily require a callback to determine the text of a list entry. Instead the items can be strings themselves, implement a `toString()` method, or provide a specific property containing the text. This item property may be given via [`textSource`](#textsource).

**ListView is not exported by the `tabris` module, but by `tabris-decorators`, which needs to be installed separately.**


## Examples
### JSX


```jsx
contentView.append(
  <ItemPicker stretchX textSource='name'>
    {[
      {name: 'Paul', id: 'person#101'},
      {name: 'Amanda', id: 'person#102'},
      {name: 'Jessica', id: 'person#103'}
    ]}
  </ItemPicker>
);
```


See also:
  
[<span class='language js'>JS</span> Example with various item types](https://github.com/eclipsesource/tabris-decorators/tree/v3.6.0/examples/itempicker-js)  
[<span class='language jsx'>JSX</span> Example with various item types (JSX variant)](https://github.com/eclipsesource/tabris-decorators/tree/v3.6.0/examples/itempicker-jsx)  
[<span class='language jsx'>JSX</span> Data Binding Example](https://github.com/eclipsesource/tabris-decorators/tree/v3.6.0/examples/bind-itempicker-list-jsx)  
[<span class='language tsx'>TSX</span> Example with various item types (TypeScript/JSX variant)](https://github.com/eclipsesource/tabris-decorators/tree/v3.6.0/examples/itempicker)  
[<span class='language tsx'>TSX</span> Data Binding Example (TypeScript variant)](https://github.com/eclipsesource/tabris-decorators/tree/v3.6.0/examples/bind-itempicker-list)

## Constructor

### new ItemPicker(properties?)

Parameter|Type|Description
-|-|-
properties | <code style="white-space: nowrap"><a href="../types.html#propertieswidget" title="Properties&lt;Widget&gt;">Properties</a>&lt;<a href="#" >ItemPicker</a>&gt;</code> | Sets all key-value pairs in the properties object as widget properties. *Optional.*

## Properties

### items


List or Array containing the items that can be selected. If a `List` is used any changes to the list (items added/removed/replaced) are applied to the `ItemPicker` automatically.

When `items` changes - either by modifying `List` or setting a new `Array` - the selection state will be preserved if the index currently selected item remains unchanged.

Items can also be provided as an array literal (within curly braces) or plain text with the `<ItemPicker`> JSX element. If text is given it will be interpreted as a comma separated list.

Type: |<code style="white-space: nowrap"><a href="List.html" title="List Class Reference">List</a>&lt;<a href="#generics" title="Generic Parameter&quot;ItemType&quot;">ItemType</a>&gt; &#124; <a href="#generics" title="Generic Parameter&quot;ItemType&quot;">ItemType</a>[]</code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">null</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`itemsChanged`](#itemschanged)
JSX Content Type: | <code style="white-space: nowrap"><a href="List.html" title="List Class Reference">List</a>&lt;<a href="#generics" title="Generic Parameter&quot;ItemType&quot;">ItemType</a>&gt; &#124; <a href="#generics" title="Generic Parameter&quot;ItemType&quot;">ItemType</a>[]</code>




When using ItemPicker as an JSX element the elements content value is mapped to this property.

### selection


The currently selected item. Corresponds to the `itemIndex` property. The value is adjusted automatically if `items` is manipulated. In this case a `selectionChanged` event is fired, but no `select` event.

Type: |<code style="white-space: nowrap"><a href="#generics" title="Generic Parameter&quot;ItemType&quot;">ItemType</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`selectionChanged`](#selectionchanged)




### textSource


Controls how the text representing an item is determined.

If this property is not set, the item is simply stringified. This works best when the item is a string already or implements a `toString()` method.

If the value is a string, it is interpreted as the name of a property of the item object. That property is used as the text. The string can also point to a sub-property, like a [data binding path](../databinding/@component#one-way-bindings). If the property is [`@property`](../databinding/@property.md)-decorated, changes will be applied automatically.

Lastly, a `path` string can be combined with a `converter` function in a plain object.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type" title="View &quot;null&quot; on MDN">null</a><br/> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a><br/> &#124; {path: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a>, converter: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a>}</code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">null</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`textSourceChanged`](#textsourcechanged)





## Events

### itemSelect

Fired when an item was selected by the user. Same as the `select` event, except that it provides not just the item index, but also the item and the item text.

EventObject Type: <code style="white-space: nowrap">ItemPickerItemSelectEvent&lt;<a href="#" >ItemPicker</a>&gt;</code>

Property|Type|Description
-|-|-
item | <code style="white-space: nowrap"><a href="#generics" title="Generic Parameter&quot;ItemType&quot;">ItemType</a></code> | 
itemIndex | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | 
itemText | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 

## Change Events

### itemsChanged

Fired when the [items](#items) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >ItemPicker</a>, <a href="List.html" title="List Class Reference">List</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="View &quot;Array&quot; on MDN">Array</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="List.html" title="List Class Reference">List</a>&lt;<a href="#generics" title="Generic Parameter&quot;ItemType&quot;">ItemType</a>&gt; &#124; <a href="#generics" title="Generic Parameter&quot;ItemType&quot;">ItemType</a>[]</code> | The new value of [items](#items).

### selectionChanged

Fired when the [selection](#selection) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >ItemPicker</a>, <a href="#generics" title="Generic Parameter&quot;ItemType&quot;">ItemType</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="#generics" title="Generic Parameter&quot;ItemType&quot;">ItemType</a></code> | The new value of [selection](#selection).

### textSourceChanged

Fired when the [textSource](#textsource) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >ItemPicker</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type" title="View &quot;null&quot; on MDN">null</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type" title="View &quot;null&quot; on MDN">null</a><br/> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a><br/> &#124; {path: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a>, converter: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a>}</code> | The new value of [textSource](#textsource).

