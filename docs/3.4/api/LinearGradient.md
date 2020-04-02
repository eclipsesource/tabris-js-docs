---
---
# Class "LinearGradient"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >LinearGradient</a>

Represents a linear gradient. See also [LinearGradientValue](../types.html#lineargradientvalue)


Type: | <code style="white-space: nowrap">LinearGradient extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a></code>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


## Examples
### JavaScript


```js
import {LinearGradient} from 'tabris';

const linearGradient = LinearGradient.from('linear-gradient(90deg, red, blue 50%, green)');
console.log(linearGradient.direction); // "90"
```


See also:
  
[<span class='language js'>JS</span> Creating various types of linear gradients](https://playground.tabris.com/?gitref=v3.4.0&snippet=widget-lineargradient.js)

## Constructor

### new LinearGradient(colorStops, direction?)

Parameter|Type|Description
-|-|-
colorStops | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="View &quot;Array&quot; on MDN">Array</a>&lt;<a href="Color.html" title="Color Class Reference">Color</a> &#124; [<a href="Color.html" title="Color Class Reference">Color</a>, <a href="Percent.html" title="Percent Class Reference">Percent</a>]&gt;</code> | An array with at least one color stop. Defines the position and the offset of the gradient color stop.
direction | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The direction of the gradient line in degrees. *Optional.*

## Methods

### equals(value)



Tests if the given value is a `LinearGradient` instance that is deeply equal to this one.


Parameter|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="#" >LinearGradient</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

### toString()



Returns a CSS string representation of the linear gradient.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>

## Static Methods

### from(linearGradientValue)



Creates a new instance of LinearGradient using any valid linear gradient expression. For any other value, including `null` and `'initial'` the method throws.


Parameter|Type|Description
-|-|-
linearGradientValue | <code style="white-space: nowrap"><a href="../types.html#lineargradientvalue" title="LinearGradientValue Type Reference">LinearGradientValue</a></code> | The value to create a LinearGradient instance from


Returns: <code style="white-space: nowrap"><a href="#" >LinearGradient</a></code>

### isLinearGradientValue(value)



Returns true if value is a LinearGradientValue. This includes `null` and `'initial'`. Use this to check if a value will be accepted by a linear gradient property. This is also a valid TypeScript type guard function.


Parameter|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code> | The value to test


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

### isValidLinearGradientValue(value)



Returns true if value is a valid LinearGradientValue. This excludes `null` and `'initial'`. Use this to check if a value will be accepted by LinearGradient.from. This is also a valid TypeScript type guard function.


Parameter|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code> | The value to test


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>


## Properties

### colorStops


An array with the gradient color stops. Defines the position and the offset of the gradient color stop.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="View &quot;Array&quot; on MDN">Array</a>&lt;<a href="Color.html" title="Color Class Reference">Color</a> &#124; [<a href="Color.html" title="Color Class Reference">Color</a>, <a href="Percent.html" title="Percent Class Reference">Percent</a>]&gt;</code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### direction


The direction of the gradient line in degrees.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



