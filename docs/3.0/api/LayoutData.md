---
---
# Class "LayoutData"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`LayoutData`](LayoutData.md)</span>

Provides layout information for a widget to be used by the parent widget when determining its size and position. See also [LayoutDataValue](../types.md#layoutdatavalue)


Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | *No*


## Example
```js
import {LayoutData} from 'tabris';

const layoutData = LayoutData.from({left: 16, right: "20%", height: 128});
console.log(layoutData.height); // "128"
```

## Constructor

### new LayoutData(parameters)

Parameter|Type|Optional|Description
-|-|-|-
parameters | <span style="white-space:nowrap;">`LayoutDataProperties`</span> | No | An object containing some or all `LayoutData` properties. Constraints have to be instances of the Constraint class. Any omitted property defaults to 'auto'.

## Methods

### toString()



Returns a string representation of LayoutData.

Returns <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>

## Static Methods

### from(layoutDataValue)



Creates a new instance of LayoutData using any valid layoutData expression. For any other value, including `null`, the method throws.


Parameter|Type|Optional|Description
-|-|-|-
layoutDataValue | <span style="white-space:nowrap;">[`LayoutDataValue`](../types.md#layoutdatavalue)</span> | No | The value to create


Returns <span style="white-space:nowrap;">[`LayoutData`](LayoutData.md)</span>


## Properties

### baseline


The vertical position of the widget's baseline relative to a sibling widget.

Type | <span style="white-space:nowrap;">[`SiblingReference`](../types.md#siblingreference) \| `'auto'`</span>
Default | `'auto'`
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### bottom


The position of the widget's bottom edge relative to the parent or a sibling widget. Must not be negative.

Type | <span style="white-space:nowrap;">[`Constraint`](Constraint.md) \| `'auto'`</span>
Default | `'auto'`
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### centerX


The horizontal position of the widget's center relative to the parent's center.

Type | <span style="white-space:nowrap;">[`Offset`](../types.md#offset) \| `'auto'`</span>
Default | `'auto'`
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### centerY


The vertical position of the widget's center relative to the parent's center.

Type | <span style="white-space:nowrap;">[`Offset`](../types.md#offset) \| `'auto'`</span>
Default | `'auto'`
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### height


The height of the widget.

Type | <span style="white-space:nowrap;">[`Dimension`](../types.md#dimension) \| `'auto'`</span>
Default | `'auto'`
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### left


The position of the widget's left edge relative to the parent or a sibling widget. Must not be negative.

Type | <span style="white-space:nowrap;">[`Constraint`](Constraint.md) \| `'auto'`</span>
Default | `'auto'`
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### right


The position of the widget's right edge relative to the parent or a sibling widget. Must not be negative.

Type | <span style="white-space:nowrap;">[`Constraint`](Constraint.md) \| `'auto'`</span>
Default | `'auto'`
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### top


The position of the widget's top edge relative to the parent or a sibling widget. Must not be negative.

Type | <span style="white-space:nowrap;">[`Constraint`](Constraint.md) \| `'auto'`</span>
Default | `'auto'`
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### width


The width of the widget.

Type | <span style="white-space:nowrap;">[`Dimension`](../types.md#dimension) \| `'auto'`</span>
Default | `'auto'`
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

## Static Properties

### center


An instance of LayoutData that centers a widget horizontally and vertically. Equivalent to `LayoutData.from({centerX: 0, centerY: 0})`

Type | <span style="white-space:nowrap;">[`LayoutData`](LayoutData.md)</span>
Settable | *No*
Change events | *No*




### next


A [SiblingReference](../types.md#siblingreference) indicating the next widget in the list of children attached to the same parent. Used by the [`baseline`](#baseline) property. An alias of `Constraint.next`.

Type | <span style="white-space:nowrap;">`typeof Constraint.next`</span>
Settable | *No*
Change events | *No*




### prev


A [SiblingReference](../types.md#siblingreference) indicating the previous widget in the list of children attached to the same parent. Used by the [`baseline`](#baseline) property. An alias of `Constraint.next`.

Type | <span style="white-space:nowrap;">`typeof Constraint.prev`</span>
Settable | *No*
Change events | *No*




### stretch


An instance of LayoutData that makes a widget fill the inner width and height of its parent (padding excluded). Equivalent to `LayoutData.from({left: 0, top: 0, right: 0, bottom: 0})`.

Type | <span style="white-space:nowrap;">[`LayoutData`](LayoutData.md)</span>
Settable | *No*
Change events | *No*




### stretchX


An instance of LayoutData that makes a widget as wide as its parent (padding excluded). Equivalent to `LayoutData.from({left: 0, right: 0})`.

Type | <span style="white-space:nowrap;">[`LayoutData`](LayoutData.md)</span>
Settable | *No*
Change events | *No*




### stretchY


An instance of LayoutData that makes a widget as high as its parent (padding excluded). Equivalent to `LayoutData.from({top: 0, bottom: 0})`.

Type | <span style="white-space:nowrap;">[`LayoutData`](LayoutData.md)</span>
Settable | *No*
Change events | *No*




