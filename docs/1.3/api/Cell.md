---
---
# Cell

This widget represents a space in a *CollectionView* on which an item is displayed. Cell widgets are not created by the application but by the *CollectionView* widget.
Includes [Composite](Composite.md)

## Properties

### item
Type: *mixed*

The item that is currently represented by this cell. This property is not set by the application but by the *CollectionView* widget.
### itemIndex

Type: *number*

The index of the item that is currently represented by this cell. This property is not set by the application but by the *CollectionView* widget.

## Events

### "change:item" (widget, item, options)

**Parameters:**

- widget: *[Cell](Cell.md)*
- item: *mixed*, the new value of *[item](#item)*.
- options: *Object*

Fired when a collection item is assigned to this cell. Use this event to configure the widgets in this cell to represent the assigned item.

### "change:itemIndex" (widget, itemIndex, options)

**Parameters:**

- widget: *[Cell](Cell.md)*
- itemIndex: *number*, the new value of *[itemIndex](#indexindex)*.
- options: *Object*

Fired when the index of the assigned item changes, either by assigning a new item or by inserting/removing items above the current item.


## See also

- [CollectionView example](https://github.com/eclipsesource/tabris-js/blob/v1.3.0/snippets/collectionview/collectionview.js)
