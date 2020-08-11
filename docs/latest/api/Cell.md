---
---
# Class "Cell"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a> > <a href="Widget.html" title="Widget Class Reference">Widget</a> > <a href="Composite.html" title="Composite Class Reference">Composite</a> > <a href="#" >Cell</a>

This widget is expected by [`ListView`](./ListView.md) as a child (in JSX) or turn value of `createCell`. It's data-binding enabled by default. It's children can also [not be selected](../selector.md#encapsulation) from the outside, except for using `apply` directly on the instance. This allows using it as a function component as demonstrated in [this example](https://github.com/eclipsesource/tabris-decorators/tree/v3.6.0/examples/listview-cells-js).


Type: | <code style="white-space: nowrap">Cell&lt;ItemType&gt; extends <a href="Composite.html" title="Composite Class Reference">Composite</a></code>
Generics: | <span id="generics">ItemType: <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code><br/></span>
Constructor: | public
Singleton: | No
**Module:** |<a href="https://www.npmjs.com/package/tabris-decorators" >**tabris-decorators**</a>
Direct subclasses: | None
JSX Support: | Element: <code style="white-space: nowrap"><a href="#" >&lt;Cell/&gt;</a></code><br/>Parent Elements: <code style="white-space: nowrap"><a href="ListView.html" title="ListView Class Reference">&lt;ListView/&gt;</a></code><br/>Child Elements: *Any standalone widget element*<br/>

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


## Constructor

### new Cell(properties?)

Parameter|Type|Description
-|-|-
properties | <code style="white-space: nowrap"><a href="../types.html#propertieswidget" title="Properties&lt;Widget&gt;">Properties</a>&lt;<a href="#" >Cell</a>&gt;</code> | Sets all key-value pairs in the properties object as widget properties. *Optional.*

## Properties

### item


The `ListView` item currently assigned to this cell. Child elements of `<Cell>` can bind properties to it used the `bind-<widgetProperty>='item.itemProperty` [syntax](../databinding/@component#one-way-bindings).

Type: |<code style="white-space: nowrap"><a href="#generics" title="Generic Parameter&quot;ItemType&quot;">ItemType</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | [`itemChanged`](#itemchanged)




### itemCheck


A callback that must return `true` for any item this cell can display. This is used to determine which `<Cell>` template to use when multiple are given in a `<ListView>` element. May be used instead or in addition to [`itemType`](#itemtype).

Setting this property also enables runtime item type checks, so it can be useful to set it even if only one `<Cell>` element is present.

**This property only has an effect when `Cell` is used as an JSX child element of `ListView`.

Type: |<code style="white-space: nowrap">(<a title="Literally any JavaScript value">value</a>) => <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">null</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`itemCheckChanged`](#itemcheckchanged)




### itemIndex


The index (within the `items` of `ListView`) of the item currently assigned to this cell.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | [`itemIndexChanged`](#itemindexchanged)




### itemType


The class (constructor) or name (`typeof` value) of the item type this cell can display. This is used to determine which `<Cell>` template to use when multiple are given in a `<ListView>` element. May be used instead or in addition to [`itemCheck`](#itemcheck).

Setting this property also enables runtime item type checks, so it can be useful to set it even if only one `<Cell>` element is present.

**This property only has an effect when `Cell` is used as an JSX child element of `ListView`.

Type: |<code style="white-space: nowrap">Constructor<br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'string'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'number'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'boolean'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">null</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >By Constructor or JSX</a>
Change Event: | Not supported




This property can only be set via constructor or JSX. Once set, it cannot change anymore.



### selectable


If set to true (e.g. `<Cell selectable>`), the cell will trigger the `select` event of [`ListView`](./ListView.md) when tapped.

Alternatively, any of the static `ListView` [`select`](./ListView.md#selectprimaryev) trigger methods can be registered as listeners of any event of `Cell` or its child elements. This allows `select` events to be triggered on more specific user interactions.

**This property only has an effect when `Cell` is used as an JSX child element of `ListView`.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">false</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >By Constructor or JSX</a>
Change Event: | Not supported




This property can only be set via constructor or JSX. Once set, it cannot change anymore.




## Change Events

### itemChanged

Fired when the [item](#item) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >Cell</a>, <a href="#generics" title="Generic Parameter&quot;ItemType&quot;">ItemType</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="#generics" title="Generic Parameter&quot;ItemType&quot;">ItemType</a></code> | The new value of [item](#item).

### itemIndexChanged

Fired when the [itemIndex](#itemindex) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >Cell</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The new value of [itemIndex](#itemindex).

### itemCheckChanged

Fired when the [itemCheck](#itemcheck) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >Cell</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap">(<a title="Literally any JavaScript value">value</a>) => <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | The new value of [itemCheck](#itemcheck).

