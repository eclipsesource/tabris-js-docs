---
---
# Class "Constraint"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >Constraint</a>

Represents a constraint on the layout of a widget that the parent uses to determine the position of one of its edges. See also [ConstraintValue](../types.md#constraintvalue)


Type: | <code style="white-space: nowrap">Constraint extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a></code>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


## Constructor

### new Constraint(reference, offset)

Parameter|Type|Description
-|-|-
reference | <code style="white-space: nowrap"><a href="Percent.html" title="Percent Class Reference">Percent</a> &#124; <a href="../types.html#siblingreference" title="SiblingReference Type Reference">SiblingReference</a></code> | Sets the `reference` property.
offset | <code style="white-space: nowrap"><a href="../types.html#offset" title="Offset Type Reference">Offset</a></code> | Sets the `offset` property.

## Methods

### equals(value)



Tests if the given value is a `Constraint` instance that is deeply equal to this one.


Parameter|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="#" >Constraint</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

### toArray()



A tuple consisting of the values of the `reference` and `offset` properties, i.e. `[reference, offset]`.

Returns: <code style="white-space: nowrap">ConstraintArray</code>

### toString()



A string representation of the constraint as a space separated string in the pattern of `'reference offset'`.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>

## Static Methods

### from(constraintValue)



Creates a new instance of Constraint using [any valid constraint expression](../types.md#constraintvalue). For any other value, including `null` and `'auto'`, the method throws.


Parameter|Type|Description
-|-|-
constraintValue | <code style="white-space: nowrap"><a href="../types.html#constraintvalue" title="ConstraintValue Type Reference">ConstraintValue</a></code> | The value to create an Constraint instance from.


Returns: <code style="white-space: nowrap"><a href="#" >Constraint</a></code>


## Properties

### offset


An additional distance between the reference point and the edge of the widget itself.

Type: |<code style="white-space: nowrap"><a href="../types.html#offset" title="Offset Type Reference">Offset</a></code>
Settable: | Yes




This property can only be set via constructor. Once set, it cannot change anymore.



### reference


A reference point from which the offset is added. Either a [SiblingReference](../types.md#siblingreference) - indicating the opposing edge of that widget - or a [`Percent`](./Percent.md) instance, indicating a fraction of the width/height (padding excluded) of the parent widget.

If the sibling reference is a string it will be a valid selector string and not contain any pseudo selectors   (`'next()'`/`'prev()'`).

Type: |<code style="white-space: nowrap"><a href="Percent.html" title="Percent Class Reference">Percent</a> &#124; <a href="../types.html#siblingreference" title="SiblingReference Type Reference">SiblingReference</a></code>
Settable: | Yes




This property can only be set via constructor. Once set, it cannot change anymore.



## Static Properties

### next


A [SiblingReference](../types.md#siblingreference) indicating the next widget in the list of children attached to the same parent. Used by the [`reference`](#reference) property. Also available as `LayoutData.next`.

Type: |<code style="white-space: nowrap">unique symbol</code>
Settable: | No




### prev


A [SiblingReference](../types.md#siblingreference) indicating the previous widget in the list of children attached to the same parent. Used by the [`reference`](#reference) property. Also available as `LayoutData.prev`.

Type: |<code style="white-space: nowrap">unique symbol</code>
Settable: | No




