---
---
# Class "LayoutData"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >LayoutData</a>

Provides layout information for a widget to be used by the parent widget when determining its size and position. See also [LayoutDataValue](../types.md#layoutdatavalue)


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

### toString()



Returns a string representation of LayoutData.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>

## Static Methods

### from(layoutDataValue)



Creates a new instance of LayoutData using any valid layoutData expression. For any other value, including `null`, the method throws.


Parameter|Type|Description
-|-|-
layoutDataValue | <code style="white-space: nowrap"><a href="../types.html#layoutdatavalue" title="LayoutDataValue Type Reference">LayoutDataValue</a></code> | The value to create


Returns: <code style="white-space: nowrap"><a href="#" >LayoutData</a></code>


## Properties

### baseline


The vertical position of the widget's baseline relative to a sibling widget.

Type: |<code style="white-space: nowrap"><a href="../types.html#siblingreference" title="SiblingReference Type Reference">SiblingReference</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | No



This property can only be set via constructor. Once set, it cannot change anymore.



### bottom


The position of the widget's bottom edge relative to the parent or a sibling widget. Must not be negative.

Type: |<code style="white-space: nowrap"><a href="Constraint.html" title="Constraint Class Reference">Constraint</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | No



This property can only be set via constructor. Once set, it cannot change anymore.



### centerX


The horizontal position of the widget's center relative to the parent's center.

Type: |<code style="white-space: nowrap"><a href="../types.html#offset" title="Offset Type Reference">Offset</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | No



This property can only be set via constructor. Once set, it cannot change anymore.



### centerY


The vertical position of the widget's center relative to the parent's center.

Type: |<code style="white-space: nowrap"><a href="../types.html#offset" title="Offset Type Reference">Offset</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | No



This property can only be set via constructor. Once set, it cannot change anymore.



### height


The height of the widget.

Type: |<code style="white-space: nowrap"><a href="../types.html#dimension" title="Dimension Type Reference">Dimension</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | No



This property can only be set via constructor. Once set, it cannot change anymore.



### left


The position of the widget's left edge relative to the parent or a sibling widget. Must not be negative.

Type: |<code style="white-space: nowrap"><a href="Constraint.html" title="Constraint Class Reference">Constraint</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | No



This property can only be set via constructor. Once set, it cannot change anymore.



### right


The position of the widget's right edge relative to the parent or a sibling widget. Must not be negative.

Type: |<code style="white-space: nowrap"><a href="Constraint.html" title="Constraint Class Reference">Constraint</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | No



This property can only be set via constructor. Once set, it cannot change anymore.



### top


The position of the widget's top edge relative to the parent or a sibling widget. Must not be negative.

Type: |<code style="white-space: nowrap"><a href="Constraint.html" title="Constraint Class Reference">Constraint</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | No



This property can only be set via constructor. Once set, it cannot change anymore.



### width


The width of the widget.

Type: |<code style="white-space: nowrap"><a href="../types.html#dimension" title="Dimension Type Reference">Dimension</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | No



This property can only be set via constructor. Once set, it cannot change anymore.



## Static Properties

### center


An instance of LayoutData that centers a widget horizontally and vertically. Equivalent to `LayoutData.from({centerX: 0, centerY: 0})`

Type: |<code style="white-space: nowrap"><a href="#" >LayoutData</a></code>
Settable: | No



### next


A [SiblingReference](../types.md#siblingreference) indicating the next widget in the list of children attached to the same parent. Used by the [`baseline`](#baseline) property. An alias of `Constraint.next`.

Type: |<code style="white-space: nowrap">typeof Constraint.next</code>
Settable: | No



### prev


A [SiblingReference](../types.md#siblingreference) indicating the previous widget in the list of children attached to the same parent. Used by the [`baseline`](#baseline) property. An alias of `Constraint.next`.

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



