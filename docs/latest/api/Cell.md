# Cell

This widget represents a space in a *CollectionView* on which an item is displayed. Cell widgets are not created by the application but by the *CollectionView* widget.

Extends [Composite](Composite.md)

## Properties

### item

**read-only**<br/>
Type: *any*

The item that is currently represented by this cell.

### itemIndex

**read-only**<br/>
Type: *number*

The index of the item that is currently represented by this cell.


## Events

### change:item
Fired when a collection item is assigned to this cell. Use this event to configure the widgets in this cell to represent the assigned item.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *any*
    The new item.




### change:itemIndex
Fired when the index of the assigned item changes, either by assigning a new item or by inserting/removing items above the current item.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *number*
    The new index of the item.





## See also

- [CollectionView example](https://github.com/eclipsesource/tabris-js/tree/v2.0.0-beta2/snippets/collectionview.js)
