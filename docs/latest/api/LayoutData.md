---
---
# Class "LayoutData"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >LayoutData</a>

Provides layout information for a widget to be used by the parent widget when determining its size and position. See also [`LayoutDataValue`](./LayoutData.md#layoutdatavalue)


Type: | <code style="white-space: nowrap">LayoutData extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a></code>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


## Examples
### JavaScript


```js
import {LayoutData} from 'tabris';

const layoutData = LayoutData.from({left: 16, right: '20%', height: 128});
console.log(layoutData.height); // "128"
```


## Constructor

### new LayoutData(parameters)

Parameter|Type|Description
-|-|-
parameters | <code style="white-space: nowrap">LayoutDataProperties</code> | An object containing some or all `LayoutData` properties. Constraints have to be instances of the Constraint class. Any omitted property defaults to 'auto'.

## Methods

### equals(value)



Tests if the given value is a `LayoutData` instance that is deeply equal to this one.


Parameter|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="#" >LayoutData</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

### toString()



Returns a string representation of LayoutData.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code>

## Static Methods

### from(layoutDataValue)



Creates a new instance of LayoutData using any valid layoutData expression. For any other value, including `null`, the method throws.


Parameter|Type|Description
-|-|-
layoutDataValue | <code style="white-space: nowrap"><a href="LayoutData.html#layoutdatavalue" title="LayoutData Class Type">LayoutDataValue</a></code> | The value to create


Returns: <code style="white-space: nowrap"><a href="#" >LayoutData</a></code>


## Properties

### baseline


The vertical position of the widget's baseline relative to a sibling widget.

Type: |<code style="white-space: nowrap"><a href="Constraint.html#siblingreference" title="Constraint Class Type">SiblingReference</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### bottom


The position of the widget's bottom edge relative to the parent or a sibling widget. Must not be negative.

Type: |<code style="white-space: nowrap"><a href="Constraint.html" title="Constraint Class Reference">Constraint</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### centerX


The horizontal position of the widget's center relative to the parent's center.

Type: |<code style="white-space: nowrap"><a href="Constraint.html#offset" title="Constraint Class Type">Offset</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### centerY


The vertical position of the widget's center relative to the parent's center.

Type: |<code style="white-space: nowrap"><a href="Constraint.html#offset" title="Constraint Class Type">Offset</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### height


The height of the widget.

Type: |<code style="white-space: nowrap"><a href="Widget.html#dimension" title="Widget Class Type">Dimension</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### left


The position of the widget's left edge relative to the parent or a sibling widget. Must not be negative.

Type: |<code style="white-space: nowrap"><a href="Constraint.html" title="Constraint Class Reference">Constraint</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### right


The position of the widget's right edge relative to the parent or a sibling widget. Must not be negative.

Type: |<code style="white-space: nowrap"><a href="Constraint.html" title="Constraint Class Reference">Constraint</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### top


The position of the widget's top edge relative to the parent or a sibling widget. Must not be negative.

Type: |<code style="white-space: nowrap"><a href="Constraint.html" title="Constraint Class Reference">Constraint</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### width


The width of the widget.

Type: |<code style="white-space: nowrap"><a href="Widget.html#dimension" title="Widget Class Type">Dimension</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



## Static Properties

### center


An instance of LayoutData that centers a widget horizontally and vertically. Equivalent to `LayoutData.from({centerX: 0, centerY: 0})`

Type: |<code style="white-space: nowrap"><a href="#" >LayoutData</a></code>
Settable: | No




### next


A [`SiblingReference`](./Constraint.md#siblingreference) indicating the next widget in the list of children attached to the same parent. Used by the [`baseline`](#baseline) property. An alias of `Constraint.next`.

Type: |<code style="white-space: nowrap">typeof Constraint.next</code>
Settable: | No




### prev


A [`SiblingReference`](./Constraint.md#siblingreference) indicating the previous widget in the list of children attached to the same parent. Used by the [`baseline`](#baseline) property. An alias of `Constraint.next`.

Type: |<code style="white-space: nowrap">typeof Constraint.prev</code>
Settable: | No




### stretch


An instance of LayoutData that makes a widget fill the inner width and height of its parent (padding excluded). Equivalent to `LayoutData.from({left: 0, top: 0, right: 0, bottom: 0})`.

Type: |<code style="white-space: nowrap"><a href="#" >LayoutData</a></code>
Settable: | No




### stretchX


An instance of LayoutData that makes a widget as wide as its parent (padding excluded). Equivalent to `LayoutData.from({left: 0, right: 0})`.

Type: |<code style="white-space: nowrap"><a href="#" >LayoutData</a></code>
Settable: | No




### stretchY


An instance of LayoutData that makes a widget as high as its parent (padding excluded). Equivalent to `LayoutData.from({top: 0, bottom: 0})`.

Type: |<code style="white-space: nowrap"><a href="#" >LayoutData</a></code>
Settable: | No






## Related Types

### LayoutDataValue

* JavaScript Type: `tabris.LayoutData`, `Object`
* TypeScript Type: `tabris.LayoutDataValue`

A `LayoutDataValue` provides layout information for a widget to be used its parent when determining its size and position. It allows various expressions that can all be used in place of a [`LayoutData`](#class-layoutdata) instance for convenience. All API that accepts these expressions will convert them to a `LayoutData` object.

In addition to `LayoutData` instances `LayoutDataValue` includes:

### LayoutDataLikeObject

* JavaScript Type: `Object`
* TypeScript Type: `tabris.LayoutDataLikeObject`

```ts
interface LayoutDataLikeObject {
  left?: 'auto' | ConstraintValue;
  right?: 'auto' | ConstraintValue;
  top?: 'auto' | ConstraintValue;
  bottom?: 'auto' | ConstraintValue;
  centerX?: 'auto' | Offset | true;
  centerY?: 'auto' | Offset | true;
  baseline?: 'auto' | SiblingReferenceValue | true;
  width?: 'auto' | Dimension;
  height?: 'auto' | Dimension;
}
```

A plain object implementing the same properties as [`LayoutData`](#class-layoutdata).

An instance of [`LayoutData`](#class-layoutdata) is a valid `LayoutDataLikeObject`, but in `LayoutDataLikeObject` all properties are optional and less strict. For example `left`, `top`, `right` and `bottom` accept [`ConstraintValue`](./Constraint.md#constraintvalue) (e.g. a `number`) in place of a [`Constraint`](./Constraint.md) instance.

A value of `true` is also accepted for all fields except `width` and `height`. For `left`, `right`, `top`, `bottom`, `centerX` and `centerY` it means `0`. For `baseline` it means `'prev()'`.

Example:

```js
widget.layoutData = {
  baseline: 'prev()',
  left: 10,
  width: 100
};
widget.layoutData = {
  top: '25%',
  centerX: true
};
```

#### LayoutDataString

There are 4 alias strings that can be used in place of a LayoutData object:

Alias        | Equivalent
-------------|-----------------------------------------
`'center'`   | `{centerX: 0, centerY: 0}`
`'stretch'`  | `{left: 0, top: 0, right: 0, bottom: 0}`
`'stretchX'` | `{left: 0, right: 0}`
`'stretchY'` | `{top: 0, bottom: 0}`

```js
widget.layoutData = 'stretch';
```

