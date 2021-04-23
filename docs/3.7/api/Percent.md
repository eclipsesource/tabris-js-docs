---
---
# Class "Percent"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >Percent</a>

Represents a percentage. See also [`PercentValue`](./Percent.md#percentvalue)


Type: | <code style="white-space: nowrap">Percent extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a></code>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


## Constructor

### new Percent(value)

Parameter|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | A number between and including 0 and 100

## Methods

### toString()



Returns a string representation of the percent (a number followed by '%').

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code>

### valueOf()



Returns the percent number

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code>

## Static Methods

### from(percentValue)



Creates a new instance of Percent using any valid percent expression. For any other value, including `null` the method throws.


Parameter|Type|Description
-|-|-
percentValue | <code style="white-space: nowrap"><a href="Percent.html#percentvalue" title="Percent Class Type">PercentValue</a></code> | The value to create a Percent instance from


Returns: <code style="white-space: nowrap"><a href="#" >Percent</a></code>

### isValidPercentValue(value)



Returns true if value is a valid PercentValue. This excludes `null`. Use this to check if a value will be accepted by Percent.from. This is also a valid TypeScript type guard function.


Parameter|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code> | The value to test


Returns: <code style="white-space: nowrap">value</code>


## Properties

### percent


A number between and including 0 and 100

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.





## Related Types

### PercentValue

* JavaScript Type: `tabris.Percent`, `Object`, `string`
* TypeScript Type: `tabris.PercentValue`

Represents a percentage. This type includes various expressions that can all be used in place of a [`Percent`](#class-percent) instance for convenience. All APIs that accept these expressions will convert them to a `Percent` object.

In TypeScript you can import this type as a union with `import {PercentValue} from 'tabris';` or use `tabris.PercentValue`. A [Type guard](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types) for `PercentValue` is available as  [`Percent.isValidPercentValue`](#isvalidpercentvaluevalue).

In addition to `Percent` instances `PercentValue` includes:

### PercentLikeObject

* JavaScript Type: `Object`
* TypeScript Type: `tabris.PercentLikeObject`

```ts
export interface PercentLikeObject {
  percent: number;
}
```

A plain object in the format of `{percent: number}`, where `100` presents 100%.

Examples:

```js
widget.left = {percent: 50};
```

### PercentString

A number followed by `%`.

Example: `'50%'`

