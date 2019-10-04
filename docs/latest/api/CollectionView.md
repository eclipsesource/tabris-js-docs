---
---
# Class "CollectionView"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a> > <a href="Widget.html" title="Widget Class Reference">Widget</a> > <a href="Composite.html" title="Composite Class Reference">Composite</a> > <a href="#" >CollectionView</a>

A scrollable list that displays data items in cells, one per row. Cells are created on demand by the *createCell* callback and reused on scrolling.


<div class="tabris-image"><figure><div><img srcset="img/android/CollectionView.png 2x" src="img/android/CollectionView.png" alt="CollectionView on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/CollectionView.png 2x" src="img/ios/CollectionView.png" alt="CollectionView on iOS"/></div><figcaption>iOS</figcaption></figure></div>

Type: | <code style="white-space: nowrap">CollectionView&lt;CellWidgetType&gt; extends <a href="Composite.html" title="Composite Class Reference">Composite</a>&lt;<a href="#generics" title="Generic Parameter&quot;CellWidgetType&quot;">CellWidgetType</a>&gt;</code>
Generics: | <span id="generics">CellWidgetType: *The common widget class used for cells in this collectionView. It is recommended to use different classes for different [cell types](#celltype). Must be a subclass of <code style="white-space: nowrap"><a href="Widget.html" title="Widget Class Reference">Widget</a></code> and defaults to <code style="white-space: nowrap"><a href="Widget.html" title="Widget Class Reference">Widget</a></code>.*<br/></span>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | Element: <code style="white-space: nowrap"><a href="CollectionView.html" title="CollectionView Class Reference">&lt;CollectionView/&gt;</a></code><br/>Parent Elements: <code style="white-space: nowrap"><a href="Canvas.html" title="Canvas Class Reference">&lt;Canvas/&gt;</a></code>, <code style="white-space: nowrap"><a href="Composite.html" title="Composite Class Reference">&lt;Composite/&gt;</a></code>, <code style="white-space: nowrap"><a href="Page.html" title="Page Class Reference">&lt;Page/&gt;</a></code>, <code style="white-space: nowrap"><a href="RefreshComposite.html" title="RefreshComposite Class Reference">&lt;RefreshComposite/&gt;</a></code>, <code style="white-space: nowrap"><a href="ScrollView.html" title="ScrollView Class Reference">&lt;ScrollView/&gt;</a></code>, <code style="white-space: nowrap"><a href="Stack.html" title="Stack Class Reference">&lt;Stack/&gt;</a></code>, <code style="white-space: nowrap"><a href="Tab.html" title="Tab Class Reference">&lt;Tab/&gt;</a></code><br/>Child Elements: *Not Supported*<br/>Text Content: *Not supported*

## Examples
### JavaScript


```js
import {CollectionView, contentView, TextView} from 'tabris';

const items = ['Apple', 'Banana', 'Cherry'];

new CollectionView({
  left: 0, top: 0, right: 0, bottom: 0,
  itemCount: items.length,
  createCell: () => new TextView(),
  updateCell: (view, index) =>  {
    view.text = items[index];
  }
}).appendTo(contentView);
```


See also:
  
[<span class='language jsx'>JSX</span> Creating a simple CollectionView](https://playground.tabris.com/?gitref=vundefined&snippet=collectionview.jsx)  
[<span class='language jsx'>JSX</span> Creating a CollectionView with multiple cell types](https://playground.tabris.com/?gitref=vundefined&snippet=collectionview-celltype.jsx)  
[<span class='language jsx'>JSX</span> Creating a CollectionView with pull-to-refresh support](https://playground.tabris.com/?gitref=vundefined&snippet=collectionview-refreshenabled.jsx)  
[<span class='language jsx'>JSX</span> Creating a CollectionView with sticky headers](https://playground.tabris.com/?gitref=vundefined&snippet=collectionview-scroll.jsx)  
[<span class='language jsx'>JSX</span> Creating a CollectionView with dynamic column count](https://playground.tabris.com/?gitref=vundefined&snippet=collectionview-columncount.jsx)  
[<span class='language jsx'>JSX</span> collectionview-cellheightauto.jsx](https://playground.tabris.com/?gitref=vundefined&snippet=collectionview-cellheightauto.jsx)  
[<span class='language tsx'>TSX</span> collectionview-celltype-ts.tsx](https://playground.tabris.com/?gitref=vundefined&snippet=collectionview-celltype-ts.tsx)  
[<span class='language tsx'>TSX</span> collectionview-scroll-ts.tsx](https://playground.tabris.com/?gitref=vundefined&snippet=collectionview-scroll-ts.tsx)  
[<span class='language jsx'>JSX</span> collectionview-swipe-to-dismiss.jsx](https://playground.tabris.com/?gitref=vundefined&snippet=collectionview-swipe-to-dismiss.jsx)  
[<span class='language tsx'>TSX</span> collectionview-ts.tsx](https://playground.tabris.com/?gitref=vundefined&snippet=collectionview-ts.tsx)

## Constructor

### new CollectionView(properties?)

Parameter|Type|Description
-|-|-
properties | <code style="white-space: nowrap"><a href="../types.html#propertieswidget" title="Properties&lt;Widget&gt;">Properties</a>&lt;<a href="#" >CollectionView</a>&gt;</code> | Sets all key-value pairs in the properties object as widget properties. *Optional.*

## Methods

### cellByItemIndex(itemIndex)



Returns the cell currently associated with the given item index. Returns `null` if the item is not currently displayed.


Parameter|Type|Description
-|-|-
itemIndex | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The index of the item as given in `updateCell`.


Returns: <code style="white-space: nowrap"><a href="#generics" title="Generic Parameter&quot;CellWidgetType&quot;">CellWidgetType</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type" title="View &quot;null&quot; on MDN">null</a></code>

### insert(index, count?)



Inserts one or more items at the given index. When no *count* is specified, a single item will be added at the given *index*. New cells may be created if needed. The `updateCell` callback will only be called for those new items that become immediately visible. Note that inserting new items changes the index of all subsequent items. This operation will update the `itemCount` property.


Parameter|Type|Description
-|-|-
index | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | 
count | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The position to insert the items at. A negative index is interpreted as relative to the end. If the given index is greater than the item count, new items will be appended at the end. *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### itemIndex(widget)



Determines the item index currently associated with the given cell.


Parameter|Type|Description
-|-|-
widget | <code style="white-space: nowrap"><a href="Widget.html" title="Widget Class Reference">Widget</a></code> | A widget instance created by `createCell`, or a child of that widget.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code>

### load(itemCount)



Loads a new model with the given *itemCount*. This operation will update the `itemCount` property.


Parameter|Type|Description
-|-|-
itemCount | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The number of items in the model to load.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### refresh(index?)



Triggers an update of the item at the given *index* by calling the `updateCell` callback of the corresponding. If no *index* is given, all visible items will be updated.


Parameter|Type|Description
-|-|-
index | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The index of the item that was changed. *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### remove(index, count?)



Removes one or more items beginning with the given index. When no *count* is given, only the item at *index* will be removed. Note that this changes the index of all subsequent items, however. This operation will update the `itemCount` property.


Parameter|Type|Description
-|-|-
index | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The index of the first item to remove. A negative value is interpreted as relative to the end.
count | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The number of items to remove. *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### reveal(index, options?)



Scrolls the item with the given index into view.


Parameter|Type|Description
-|-|-
index | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The index of the item to reveal. If this is negative, it is interpreted as relative to the end
options | <code style="white-space: nowrap">{animate?: boolean}</code> | An additional object to control the animation. Set to `{animate: false}` to scroll without an animation. The `animate` property defaults to `true` when no options object is given. *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>


## Properties

### cellHeight


The height of a collection cell. If set to `'auto'`, the cell height will be calculated individually for each cell. If set to a function, this function will be called for every item, providing the item index and the cell type as parameters, and must return the cell height for the given item.
Note: On iOS `"auto"` may cause significant performance downgrade as it requires additional layouting passes to calculate cell height internally. If possible please use a combination of fixed `itemHeight` and `cellType` properties to specify different height for different cells.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a><br/> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a><br/> &#124; (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">index</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">cellType</a>) => <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`cellHeightChanged`](#cellheightchanged)




### cellType


The name of the cell type to use for the item at the given index. This name will be passed to the `createCell` and `cellHeight` callbacks. Cells will be reused only for those items that map to the same cell type. If set to a function, this function will be called for every item, providing the item index as a parameter, and must return a unique name for the cell type to use for the given item.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a><br/> &#124; (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">index</a>) => <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">cellType</a><br/> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type" title="View &quot;null&quot; on MDN">null</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`cellTypeChanged`](#celltypechanged)


See also:
  
[<span class='language tsx'>TSX</span> collectionview-celltype-ts.tsx](https://playground.tabris.com/?gitref=vundefined&snippet=collectionview-celltype-ts.tsx)  
[<span class='language jsx'>JSX</span> collectionview-celltype.jsx](https://playground.tabris.com/?gitref=vundefined&snippet=collectionview-celltype.jsx)


### columnCount


The number of columns to display in the collection view. If set to a value `n > 1`, each row will contain `n` items. The available space will be equally distributed between columns.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">1</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`columnCountChanged`](#columncountchanged)


See also:
  
[<span class='language jsx'>JSX</span> collectionview-columncount.jsx](https://playground.tabris.com/?gitref=vundefined&snippet=collectionview-columncount.jsx)


### createCell


A callback used to create a new reusable cell widget for a given type. This callback will be called by the framework and the created cell will be reused for different items. The created widget should be populated in the `updateCell` function.

Type: |<code style="white-space: nowrap">(<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">cellType</a>) => <a href="#generics" title="Generic Parameter&quot;CellWidgetType&quot;">CellWidgetType</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`createCellChanged`](#createcellchanged)




### firstVisibleIndex


The index of the first item that is currently visible on screen.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | [`firstVisibleIndexChanged`](#firstvisibleindexchanged)




### itemCount


The number of items to display. To add or remove items later, use the methods `insert()` and `remove()` instead of setting the `itemCount`. To display a new list of items, use the `load()` method.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`itemCountChanged`](#itemcountchanged)




### lastVisibleIndex


The index of the last item that is currently visible on screen.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | [`lastVisibleIndexChanged`](#lastvisibleindexchanged)




### refreshEnabled


Enables the user to trigger a refresh by using the pull-to-refresh gesture.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">false</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`refreshEnabledChanged`](#refreshenabledchanged)


See also:
  
[<span class='language jsx'>JSX</span> collectionview-refreshenabled.jsx](https://playground.tabris.com/?gitref=vundefined&snippet=collectionview-refreshenabled.jsx)


### refreshIndicator


Whether the refresh indicator is currently visible. Will be set to `true` when a *refresh* event is triggered. Reset it to `false` when the refresh is finished.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">false</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`refreshIndicatorChanged`](#refreshindicatorchanged)




### refreshMessage
<p class="platforms"><span class='ios-tag' title='supported on iOS'>iOS</span></p>

The message text displayed together with the refresh indicator.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>
Default: | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">(empty string)</a>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`refreshMessageChanged`](#refreshmessagechanged)




### scrollbarVisible


Allows to show or hide the scroll bar. When the scroll bar is hidden, it will be briefly visible while scrolling.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">true</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`scrollbarVisibleChanged`](#scrollbarvisiblechanged)




### updateCell


A callback used to update a given cell widget to display the item with the given index. This callback will be called by the framework.

Type: |<code style="white-space: nowrap">(<a href="#generics" title="Generic Parameter&quot;CellWidgetType&quot;">cell</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">index</a>) => <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">void</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`updateCellChanged`](#updatecellchanged)





## Events

### refresh

Fired when the user requested a refresh. An event listener should reset the *refreshIndicator* property when refresh is finished.

EventObject Type: <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a>&lt;<a href="#" >CollectionView</a>&gt;</code>

This event has no additional parameter.
### scroll

Fired while the collection view is scrolling.

EventObject Type: <code style="white-space: nowrap">CollectionViewScrollEvent&lt;<a href="#" >CollectionView</a>&gt;</code>

Property|Type|Description
-|-|-
deltaX | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | Currently always 0.
deltaY | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The delta of the scroll position. Positive when scrolling up and negative when scrolling down.

See also:
  
[<span class='language tsx'>TSX</span> collectionview-scroll-ts.tsx](https://playground.tabris.com/?gitref=vundefined&snippet=collectionview-scroll-ts.tsx)  
[<span class='language jsx'>JSX</span> collectionview-scroll.jsx](https://playground.tabris.com/?gitref=vundefined&snippet=collectionview-scroll.jsx)
## Change Events

### scrollbarVisibleChanged

Fired when the [scrollbarVisible](#scrollbarvisible) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >CollectionView</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | The new value of [scrollbarVisible](#scrollbarvisible).

### cellHeightChanged

Fired when the [cellHeight](#cellheight) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >CollectionView</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a><br/> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a><br/> &#124; (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">index</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">cellType</a>) => <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code> | The new value of [cellHeight](#cellheight).

### itemCountChanged

Fired when the [itemCount](#itemcount) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >CollectionView</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The new value of [itemCount](#itemcount).

### createCellChanged

Fired when the [createCell](#createcell) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >CollectionView</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap">(<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">cellType</a>) => <a href="#generics" title="Generic Parameter&quot;CellWidgetType&quot;">CellWidgetType</a></code> | The new value of [createCell](#createcell).

### updateCellChanged

Fired when the [updateCell](#updatecell) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >CollectionView</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap">(<a href="#generics" title="Generic Parameter&quot;CellWidgetType&quot;">cell</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">index</a>) => <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">void</a></code> | The new value of [updateCell](#updatecell).

### cellTypeChanged

Fired when the [cellType](#celltype) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >CollectionView</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type" title="View &quot;null&quot; on MDN">null</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a><br/> &#124; (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">index</a>) => <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">cellType</a><br/> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type" title="View &quot;null&quot; on MDN">null</a></code> | The new value of [cellType](#celltype).

### refreshEnabledChanged

Fired when the [refreshEnabled](#refreshenabled) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >CollectionView</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | The new value of [refreshEnabled](#refreshenabled).

### refreshIndicatorChanged

Fired when the [refreshIndicator](#refreshindicator) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >CollectionView</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | The new value of [refreshIndicator](#refreshindicator).

### refreshMessageChanged

Fired when the [refreshMessage](#refreshmessage) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >CollectionView</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The new value of [refreshMessage](#refreshmessage).

### firstVisibleIndexChanged

Fired when the [firstVisibleIndex](#firstvisibleindex) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >CollectionView</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The new value of [firstVisibleIndex](#firstvisibleindex).

### lastVisibleIndexChanged

Fired when the [lastVisibleIndex](#lastvisibleindex) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >CollectionView</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The new value of [lastVisibleIndex](#lastvisibleindex).

### columnCountChanged

Fired when the [columnCount](#columncount) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >CollectionView</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The new value of [columnCount](#columncount).

