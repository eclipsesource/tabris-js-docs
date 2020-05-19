---
---
# Class "Color"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >Color</a>

Represents a color. See also [ColorValue](../types.html#colorvalue)


Type: | <code style="white-space: nowrap">Color extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a></code>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


## Examples
### JavaScript


```js
import {Color} from 'tabris';

const color = Color.from('red');
console.log(color.red); // red channel value
```


## Constructor

### new Color(red, green, blue, alpha?)

Parameter|Type|Description
-|-|-
red | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | A number between and including 0 and 255
green | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | A number between and including 0 and 255
blue | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | A number between and including 0 and 255
alpha | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | A number between and including 0 and 255. Defaults to 255. *Optional.*

## Methods

### equals(value)



Tests if the given value is a `Color` instance that is deeply equal to this one.


Parameter|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="#" >Color</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

### toArray()



Returns a array representation of the color in the format of `[red, green, blue, alpha]`. Each value is a number between (and in including) 0 and 255.

Returns: <code style="white-space: nowrap">[<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a>]</code>

### toString()



Returns a string representation of the color. Is either in `rgb(red, green, blue)` or `rgba(red, green, blue, alpha)` format. Note that alpha is a value between 0 and 1 in the string representation, but between 0 and 255 on the Color object.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>

## Static Methods

### from(colorValue)



Creates a new instance of Color using any valid color expression. For any other value, including `null` and `'initial'` the method throws.


Parameter|Type|Description
-|-|-
colorValue | <code style="white-space: nowrap"><a href="../types.html#colorvalue" title="ColorValue Type Reference">ColorValue</a></code> | The value to create a Color instance from


Returns: <code style="white-space: nowrap"><a href="#" >Color</a></code>

### isColorValue(value)



Returns true if value is a ColorValue. This includes `null` and `'initial'`. Use this to check if a value will be accepted by a color property. This is also a valid TypeScript type guard function.


Parameter|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code> | The value to test


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

### isValidColorValue(value)



Returns true if value is a valid ColorValue. This excludes `null` and `'initial'`. Use this to check if a value will be accepted by Color.from. This is also a valid TypeScript type guard function.


Parameter|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code> | The value to test


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>


## Properties

### alpha


A number between and including 0 and 255

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### blue


A number between and including 0 and 255

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### green


A number between and including 0 and 255

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### red


A number between and including 0 and 255

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



## Static Properties

### aqua



Type: |<code style="white-space: nowrap"><a href="#" >Color</a></code>
Settable: | No




### black



Type: |<code style="white-space: nowrap"><a href="#" >Color</a></code>
Settable: | No




### blue



Type: |<code style="white-space: nowrap"><a href="#" >Color</a></code>
Settable: | No




### fuchsia



Type: |<code style="white-space: nowrap"><a href="#" >Color</a></code>
Settable: | No




### gray



Type: |<code style="white-space: nowrap"><a href="#" >Color</a></code>
Settable: | No




### green



Type: |<code style="white-space: nowrap"><a href="#" >Color</a></code>
Settable: | No




### lime



Type: |<code style="white-space: nowrap"><a href="#" >Color</a></code>
Settable: | No




### maroon



Type: |<code style="white-space: nowrap"><a href="#" >Color</a></code>
Settable: | No




### navy



Type: |<code style="white-space: nowrap"><a href="#" >Color</a></code>
Settable: | No




### olive



Type: |<code style="white-space: nowrap"><a href="#" >Color</a></code>
Settable: | No




### purple



Type: |<code style="white-space: nowrap"><a href="#" >Color</a></code>
Settable: | No




### red



Type: |<code style="white-space: nowrap"><a href="#" >Color</a></code>
Settable: | No




### silver



Type: |<code style="white-space: nowrap"><a href="#" >Color</a></code>
Settable: | No




### teal



Type: |<code style="white-space: nowrap"><a href="#" >Color</a></code>
Settable: | No




### transparent



Type: |<code style="white-space: nowrap"><a href="#" >Color</a></code>
Settable: | No




### white



Type: |<code style="white-space: nowrap"><a href="#" >Color</a></code>
Settable: | No




### yellow



Type: |<code style="white-space: nowrap"><a href="#" >Color</a></code>
Settable: | No




