---
---
# Class "Constraint"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`Constraint`](Constraint.md)</span>

Represents a constraint on the layout of a widget that the parent uses to determine the position of one of its edges. See also [ConstraintValue](./types.md#ConstraintValue)


Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | *No*


## Constructor

### new Constraint(reference, offset)

Parameter|Type|Optional|Description
-|-|-|-
reference | <span style="white-space:nowrap;">[`Percent`](Percent.md) \| [`SiblingReference`](../types.md#siblingreference)</span> | No | Sets the `reference` property.
offset | <span style="white-space:nowrap;">[`Offset`](../types.md#offset)</span> | No | Sets the `offset` property.

## Methods

### toArray()



A tuple consisting of the values of the `reference` and `offset` properties, i.e. `[reference, offset]`.

Returns <span style="white-space:nowrap;">`ConstraintArray`</span>

### toString()



A string representation of the constraint as a space separated string in the pattern of `'reference offset'`.

Returns <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>

## Static Methods

### from(constraintValue)



Creates a new instance of Constraint using [any valid constraint expression](./types.md#ConstraintValue). For any other value, including `null` and `'auto'`, the method throws.


Parameter|Type|Optional|Description
-|-|-|-
constraintValue | <span style="white-space:nowrap;">[`ConstraintValue`](../types.md#constraintvalue)</span> | No | The value to create an Constraint instance from.


Returns <span style="white-space:nowrap;">[`Constraint`](Constraint.md)</span>


## Properties

### offset


An additional distance between the reference point and the edge of the widget itself.

Type | <span style="white-space:nowrap;">[`Offset`](../types.md#offset)</span>
Settable | *On creation*




This property can only be set via constructor. Once set, it cannot change anymore.

### reference


A reference point from which the offset is added. Either a [SiblingReference](./types.md#SiblingReference) - indicating the opposing edge of that widget - or a [`Percent`](./types.md#Percent) instance, indicating a fraction of the width/height (padding excluded) of the parent widget.

If the sibling reference is a string it will be a valid selector string and not contain any pseudo selectors   (`'next()'`/`'prev()'`).

Type | <span style="white-space:nowrap;">[`Percent`](Percent.md) \| [`SiblingReference`](../types.md#siblingreference)</span>
Settable | *On creation*




This property can only be set via constructor. Once set, it cannot change anymore.

## Static Properties

### next


A [SiblingReference](./types.md#SiblingReference) indicating the next widget in the list of children attached to the same parent. Used by the [`reference`](#reference) property. Also available as `LayoutData.next`.

Type | <span style="white-space:nowrap;">`unique symbol`</span>
Settable | *No*




### prev


A [SiblingReference](./types.md#SiblingReference) indicating the previous widget in the list of children attached to the same parent. Used by the [`reference`](#reference) property. Also available as `LayoutData.prev`.

Type | <span style="white-space:nowrap;">`unique symbol`</span>
Settable | *No*




