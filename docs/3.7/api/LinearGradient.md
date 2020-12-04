---
---
# Class "LinearGradient"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >LinearGradient</a>

Represents a linear gradient. See also [`LinearGradientValue`](./LinearGradient.md#lineargradientvalue)


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
  
[<span class='language js'>JS</span> Creating various types of linear gradients](https://playground.tabris.com/?gitref=v3.7.0&snippet=widget-lineargradient.js)

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
linearGradientValue | <code style="white-space: nowrap"><a href="LinearGradient.html#lineargradientvalue" title="LinearGradient Class Type">LinearGradientValue</a></code> | The value to create a LinearGradient instance from


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





## Related Types

### LinearGradientValue

A `LinearGradientValue` specifies a set of colors, their relative position along a straight line, and the angle of that line. This describes a color gradient that can be drawn to fill any area, usually the background of a widget. This type allows various expressions that can all be used in place of a [`LinearGradient`](./LinearGradient.md) instance for convenience. All API that accept these expressions will convert them to a `LinearGradient` object.

In TypeScript you can import this type as a union with `import {LinearGradientValue} from 'tabris';` or use `tabris.LinearGradientValue`. [Type guards](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types) for `LinearGradientValue` are available as [`LinearGradient.isLinearGradientValue`](#islineargradientvaluevalue) and [`LinearGradient.isValidLinearGradientValue`](#isvalidlineargradientvaluevalue).

The following are all valid `LinearGradientValue` types:

### LinearGradientLikeObject

An object implementing the following interface:

```ts
interface LinearGradientLikeObject {
  colorStops: Array<ColorValue | [ColorValue, PercentValue]>,
  direction?: number | 'left' | 'top' | 'right' | 'bottom'
}
```

An instances of [`LinearGradient`](#class-lineargradient) is a valid `LinearGradientLikeObject`, but `LinearGradientLikeObject` is less strict as it accepts more expressions for `colorStops` and `direction`.
Examples:

```js
{colorStops: [['red', '5%'], 'green'], direction: 'left'}
{colorStops: [['red', '5%'], 'green'], direction: 45}
```

### LinearGradient string

 As a string, a subset of the CSS syntax is used:

```css
<color-stop> ::= <color> [ <number>% ]
<linear-gradient> ::= linear-gradient(
    [ <number>deg | to ( left | top | right | bottom ), ]
    <color-stop> {, <color-stop>}
)
```

Examples:

```js
"linear-gradient(red, green)"
"linear-gradient(to left, red 5%, green)"
"linear-gradient(45deg, red 5%, green)"
```

