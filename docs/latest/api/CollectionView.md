---
---
# Class "CollectionView"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`Composite`](Composite.md)</span> > <span style="white-space:nowrap;">[`CollectionView`](CollectionView.md)</span>

A scrollable list that displays data items in cells, one per row. Cells are created on demand by the *createCell* callback and reused on scrolling.


<div class="tabris-image"><figure><div><img srcset="img/android/CollectionView.png 2x" src="img/android/CollectionView.png" alt="CollectionView on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/CollectionView.png 2x" src="img/ios/CollectionView.png" alt="CollectionView on iOS"/></div><figcaption>iOS</figcaption></figure></div>

TypeScript type | `CollectionView<Cell extends Widget> extends Composite<Cell>`
Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | Element: `<CollectionView/>`<br/>Parent element: [`<Composite/>`](Composite.md) *and any widget extending* <span style="white-space:nowrap;">[`Composite`](Composite.md)</span><br/>Child elements: *None*<br/>Text content: *Not supported*<br/>

## Example
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
  
[<span class='language jsx'>JSX</span> Creating a simple `CollectionView`](https://playground.tabris.com/?gitref=v3.1.0&snippet=collectionview.jsx)  
[<span class='language jsx'>JSX</span> Creating a `CollectionView` with multiple cell types](https://playground.tabris.com/?gitref=v3.1.0&snippet=collectionview-celltype.jsx)  
[<span class='language jsx'>JSX</span> Creating a `CollectionView` with pull-to-refresh support](https://playground.tabris.com/?gitref=v3.1.0&snippet=collectionview-refreshenabled.jsx)  
[<span class='language jsx'>JSX</span> Creating a `CollectionView` with sticky headers](https://playground.tabris.com/?gitref=v3.1.0&snippet=collectionview-scroll.jsx)  
[<span class='language jsx'>JSX</span> Creating a `CollectionView` with dynamic column count](https://playground.tabris.com/?gitref=v3.1.0&snippet=collectionview-columncount.jsx)  
[<span class='language jsx'>JSX</span> collectionview-cellheightauto.jsx](https://playground.tabris.com/?gitref=v3.1.0&snippet=collectionview-cellheightauto.jsx)  
[<span class='language tsx'>TSX</span> collectionview-celltype-ts.tsx](https://playground.tabris.com/?gitref=v3.1.0&snippet=collectionview-celltype-ts.tsx)  
[<span class='language tsx'>TSX</span> collectionview-scroll-ts.tsx](https://playground.tabris.com/?gitref=v3.1.0&snippet=collectionview-scroll-ts.tsx)  
[<span class='language jsx'>JSX</span> collectionview-swipe-to-dismiss.jsx](https://playground.tabris.com/?gitref=v3.1.0&snippet=collectionview-swipe-to-dismiss.jsx)  
[<span class='language tsx'>TSX</span> collectionview-ts.tsx](https://playground.tabris.com/?gitref=v3.1.0&snippet=collectionview-ts.tsx)

## Constructor

### new CollectionView(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<CollectionView<Cell>> & Partial<Pick<CollectionView<Cell>, 'cellHeight'` \| `'cellType'` \| `'createCell'` \| `'updateCell'>>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Methods

### cellByItemIndex(itemIndex)



Returns the cell currently associated with the given item index. Returns `null` if the item is not currently displayed.


Parameter|Type|Optional|Description
-|-|-|-
itemIndex | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The index of the item as given in `updateCell`.


Returns <span style="white-space:nowrap;">`Cell` \| [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)</span>

### insert(index, count?)



Inserts one or more items at the given index. When no *count* is specified, a single item will be added at the given *index*. New cells may be created if needed. The `updateCell` callback will only be called for those new items that become immediately visible. Note that inserting new items changes the index of all subsequent items. This operation will update the `itemCount` property.


Parameter|Type|Optional|Description
-|-|-|-
index | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | 
count | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Yes | The position to insert the items at. A negative index is interpreted as relative to the end. If the given index is greater than the item count, new items will be appended at the end.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### itemIndex(widget)



Determines the item index currently associated with the given cell.


Parameter|Type|Optional|Description
-|-|-|-
widget | <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> | No | A widget instance created by `createCell`, or a child of that widget.


Returns <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>

### load(itemCount)



Loads a new model with the given *itemCount*. This operation will update the `itemCount` property.


Parameter|Type|Optional|Description
-|-|-|-
itemCount | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The number of items in the model to load.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### refresh(index?)



Triggers an update of the item at the given *index* by calling the `updateCell` callback of the corresponding. If no *index* is given, all visible items will be updated.


Parameter|Type|Optional|Description
-|-|-|-
index | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Yes | The index of the item that was changed.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### remove(index, count?)



Removes one or more items beginning with the given index. When no *count* is given, only the item at *index* will be removed. Note that this changes the index of all subsequent items, however. This operation will update the `itemCount` property.


Parameter|Type|Optional|Description
-|-|-|-
index | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The index of the first item to remove. A negative value is interpreted as relative to the end.
count | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Yes | The number of items to remove.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### reveal(index)



Scrolls the item with the given index into view.


Parameter|Type|Optional|Description
-|-|-|-
index | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The index of the item to reveal. If this is negative, it is interpreted as relative to the end


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### set(properties)



Sets all key-value pairs in the properties object as widget properties.

**Important TypeScript note:** When called on `this` you may need to specify your custom type like this: `this.set<MyComponent>({propA: valueA});`


Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<T> & Partial<Pick<this, 'cellHeight'` \| `'cellType'` \| `'createCell'>>`</span> | No | 


Returns <span style="white-space:nowrap;">[`this`](#)</span>


## Properties

### cellHeight


The height of a collection cell. If set to `"auto"`, the cell height will be calculated individually for each cell. If set to a function, this function will be called for every item, providing the item index and the cell type as parameters, and must return the cell height for the given item.
Note: On iOS `"auto"` may cause significant performance downgrade as it requires additional layouting passes to calculate cell height internally. If possible please use a combination of fixed `itemHeight` and `cellType` properties to specify different height for different cells.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| `"auto"` \| `((index: number, cellType: string) => number` \| `"auto")`</span>
Default | `auto`
Settable | *Yes*
Change events | *Yes*




### cellType


The name of the cell type to use for the item at the given index. This name will be passed to the `createCell` and `cellHeight` callbacks. Cells will be reused only for those items that map to the same cell type. If set to a function, this function will be called for every item, providing the item index as a parameter, and must return a unique name for the cell type to use for the given item.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| `((index: number) => string)` \| [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)</span>
Settable | *Yes*
Change events | *Yes*


See also:
  
[<span class='language tsx'>TSX</span> collectionview-celltype-ts.tsx](https://playground.tabris.com/?gitref=v3.1.0&snippet=collectionview-celltype-ts.tsx)  
[<span class='language jsx'>JSX</span> collectionview-celltype.jsx](https://playground.tabris.com/?gitref=v3.1.0&snippet=collectionview-celltype.jsx)


### columnCount


The number of columns to display in the collection view. If set to a value `n > 1`, each row will contain `n` items. The available space will be equally distributed between columns.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Default | `1`
Settable | *Yes*
Change events | *Yes*


See also:
  
[<span class='language jsx'>JSX</span> collectionview-columncount.jsx](https://playground.tabris.com/?gitref=v3.1.0&snippet=collectionview-columncount.jsx)


### createCell


A callback used to create a new reusable cell widget for a given type. This callback will be called by the framework and the created cell will be reused for different items. The created widget should be populated in the `updateCell` function.

Type | <span style="white-space:nowrap;">`(cellType: string) => Cell`</span>
Settable | *Yes*
Change events | *Yes*




### firstVisibleIndex


The index of the first item that is currently visible on screen.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *No*
Change events | *Yes*




### itemCount


The number of items to display. To add or remove items later, use the methods `insert()` and `remove()` instead of setting the `itemCount`. To display a new list of items, use the `load()` method.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *Yes*
Change events | *Yes*




### lastVisibleIndex


The index of the last item that is currently visible on screen.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *No*
Change events | *Yes*




### refreshEnabled


Enables the user to trigger a refresh by using the pull-to-refresh gesture.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Default | `false`
Settable | *Yes*
Change events | *Yes*


See also:
  
[<span class='language jsx'>JSX</span> collectionview-refreshenabled.jsx](https://playground.tabris.com/?gitref=v3.1.0&snippet=collectionview-refreshenabled.jsx)


### refreshIndicator


Whether the refresh indicator is currently visible. Will be set to `true` when a *refresh* event is triggered. Reset it to `false` when the refresh is finished.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Default | `false`
Settable | *Yes*
Change events | *Yes*




### refreshMessage
<p class="platforms"><span class='ios-tag' title='supported on iOS'>iOS</span></p>

The message text displayed together with the refresh indicator.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Default | `'""'`
Settable | *Yes*
Change events | *Yes*




### scrollbarVisible


Allows to show or hide the scroll bar. When the scroll bar is hidden, it will be briefly visible while scrolling.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Default | `true`
Settable | *Yes*
Change events | *Yes*




### updateCell


A callback used to update a given cell widget to display the item with the given index. This callback will be called by the framework.

Type | <span style="white-space:nowrap;">`(cell: Cell, index: number) => void`</span>
Settable | *Yes*
Change events | *Yes*





## Events

### refresh

Fired when the user requested a refresh. An event listener should reset the *refreshIndicator* property when refresh is finished.

### scroll

Fired while the collection view is scrolling.

Parameter|Type|Description
-|-|-
deltaX | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Currently always 0.
deltaY | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The delta of the scroll position. Positive when scrolling up and negative when scrolling down.

See also:
  
[<span class='language tsx'>TSX</span> collectionview-scroll-ts.tsx](https://playground.tabris.com/?gitref=v3.1.0&snippet=collectionview-scroll-ts.tsx)  
[<span class='language jsx'>JSX</span> collectionview-scroll.jsx](https://playground.tabris.com/?gitref=v3.1.0&snippet=collectionview-scroll.jsx)
## Change Events

### scrollbarVisibleChanged

Fired when the [*scrollbarVisible*](#scrollbarvisible) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*scrollbarVisible*](#scrollbarvisible).

### cellHeightChanged

Fired when the [*cellHeight*](#cellheight) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| `"auto"` \| `((index: number, cellType: string) => number` \| `"auto")`</span> | The new value of [*cellHeight*](#cellheight).

### itemCountChanged

Fired when the [*itemCount*](#itemcount) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*itemCount*](#itemcount).

### createCellChanged

Fired when the [*createCell*](#createcell) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`(cellType: string) => Cell`</span> | The new value of [*createCell*](#createcell).

### updateCellChanged

Fired when the [*updateCell*](#updatecell) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`(cell: Cell, index: number) => void`</span> | The new value of [*updateCell*](#updatecell).

### cellTypeChanged

Fired when the [*cellType*](#celltype) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| `((index: number) => string)` \| [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)</span> | The new value of [*cellType*](#celltype).

### refreshEnabledChanged

Fired when the [*refreshEnabled*](#refreshenabled) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*refreshEnabled*](#refreshenabled).

### refreshIndicatorChanged

Fired when the [*refreshIndicator*](#refreshindicator) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*refreshIndicator*](#refreshindicator).

### refreshMessageChanged

Fired when the [*refreshMessage*](#refreshmessage) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*refreshMessage*](#refreshmessage).

### firstVisibleIndexChanged

Fired when the [*firstVisibleIndex*](#firstvisibleindex) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*firstVisibleIndex*](#firstvisibleindex).

### lastVisibleIndexChanged

Fired when the [*lastVisibleIndex*](#lastvisibleindex) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*lastVisibleIndex*](#lastvisibleindex).

### columnCountChanged

Fired when the [*columnCount*](#columncount) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*columnCount*](#columncount).

