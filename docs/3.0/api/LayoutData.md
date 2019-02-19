---
---
# Class "LayoutData"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`LayoutData`](LayoutData.md)</span>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support: *No*
* Direct subclasses: *None*
--------
Provides layout information for a widget to be used by the parent widget when determining its size and position. See also [LayoutDataValue](./types.md#layoutDataValue)


## Constructor

### new LayoutData(parameters)

Parameter|Type|Optional|Description
-|-|-|-
parameters | <span style="white-space:nowrap;">`LayoutDataProperties`</span> | No | An object containing some or all `LayoutData` properties. Constraints have to be instances of the Constraint class. Any omitted property defaults to 'auto'.

## Methods

### toString()

* Returns: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>

Returns a string representation of LayoutData.

## Static Methods

### from(layoutDataValue)



Parameter|Type|Optional|Description
-|-|-|-
layoutDataValue | <span style="white-space:nowrap;">[`LayoutDataValue`](../types.md#layoutdatavalue)</span> | No | The value to create
* Returns: <span style="white-space:nowrap;">[`LayoutData`](LayoutData.md)</span>

Creates a new instance of LayoutData using any valid layoutData expression. For any other value, including `null`, the method throws.


## Properties

### baseline


* Type: <span style="white-space:nowrap;">[`SiblingReference`](../types.md#siblingreference) \| `'auto'`</span>
* Default `'auto'`
* Settable: *On creation*



The vertical position of the widget's baseline relative to a sibling widget.

This property can only be set via constructor. Once set, it cannot change anymore.

### bottom


* Type: <span style="white-space:nowrap;">[`Constraint`](Constraint.md) \| `'auto'`</span>
* Default `'auto'`
* Settable: *On creation*



The position of the widget's bottom edge relative to the parent or a sibling widget. Must not be negative.

This property can only be set via constructor. Once set, it cannot change anymore.

### centerX


* Type: <span style="white-space:nowrap;">[`Offset`](../types.md#offset) \| `'auto'`</span>
* Default `'auto'`
* Settable: *On creation*



The horizontal position of the widget's center relative to the parent's center.

This property can only be set via constructor. Once set, it cannot change anymore.

### centerY


* Type: <span style="white-space:nowrap;">[`Offset`](../types.md#offset) \| `'auto'`</span>
* Default `'auto'`
* Settable: *On creation*



The vertical position of the widget's center relative to the parent's center.

This property can only be set via constructor. Once set, it cannot change anymore.

### height


* Type: <span style="white-space:nowrap;">[`Dimension`](../types.md#dimension) \| `'auto'`</span>
* Default `'auto'`
* Settable: *On creation*



The height of the widget.

This property can only be set via constructor. Once set, it cannot change anymore.

### left


* Type: <span style="white-space:nowrap;">[`Constraint`](Constraint.md) \| `'auto'`</span>
* Default `'auto'`
* Settable: *On creation*



The position of the widget's left edge relative to the parent or a sibling widget. Must not be negative.

This property can only be set via constructor. Once set, it cannot change anymore.

### right


* Type: <span style="white-space:nowrap;">[`Constraint`](Constraint.md) \| `'auto'`</span>
* Default `'auto'`
* Settable: *On creation*



The position of the widget's right edge relative to the parent or a sibling widget. Must not be negative.

This property can only be set via constructor. Once set, it cannot change anymore.

### top


* Type: <span style="white-space:nowrap;">[`Constraint`](Constraint.md) \| `'auto'`</span>
* Default `'auto'`
* Settable: *On creation*



The position of the widget's top edge relative to the parent or a sibling widget. Must not be negative.

This property can only be set via constructor. Once set, it cannot change anymore.

### width


* Type: <span style="white-space:nowrap;">[`Dimension`](../types.md#dimension) \| `'auto'`</span>
* Default `'auto'`
* Settable: *On creation*



The width of the widget.

This property can only be set via constructor. Once set, it cannot change anymore.

## Static Properties

### center


* Type: <span style="white-space:nowrap;">[`LayoutData`](LayoutData.md)</span>
* Settable: *No*



An instance of LayoutData that centers a widget horizontally and vertically. Equivalent to `LayoutData.from({centerX: 0, centerY: 0})`

### fill


* Type: <span style="white-space:nowrap;">[`LayoutData`](LayoutData.md)</span>
* Settable: *No*



An instance of LayoutData that makes a widget fill the inner width and height of its parent (padding excluded). Equivalent to `LayoutData.from({left: 0, top: 0, right: 0, bottom: 0})`.

### next


* Type: <span style="white-space:nowrap;">`typeof Constraint.next`</span>
* Settable: *No*



A [SiblingReference](./types.md#SiblingReference) indicating the next widget in the list of children attached to the same parent. Used by the [`baseline`](#baseline) property. An alias of `Constraint.next`.

### prev


* Type: <span style="white-space:nowrap;">`typeof Constraint.prev`</span>
* Settable: *No*



A [SiblingReference](./types.md#SiblingReference) indicating the previous widget in the list of children attached to the same parent. Used by the [`baseline`](#baseline) property. An alias of `Constraint.next`.

