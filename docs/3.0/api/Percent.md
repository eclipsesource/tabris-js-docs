---
---
# Class "Percent"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`Percent`](Percent.md)</span>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support: *No*
* Direct subclasses: *None*
--------
Represents a percentage. See also [PercentValue](./types.html#PercentValue)


## Constructor

### new Percent(value)

Parameter|Type|Optional|Description
-|-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | A number between and including 0 and 100

## Methods

### toString()

* Returns: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>

Returns a string representation of the percent (a number followed by '%').

### valueOf()

* Returns: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>

Returns the percent number

## Static Methods

### from(percentValue)



Parameter|Type|Optional|Description
-|-|-|-
percentValue | <span style="white-space:nowrap;">[`PercentValue`](../types.md#percentvalue)</span> | No | The value to create a Percent instance from
* Returns: <span style="white-space:nowrap;">[`Percent`](Percent.md)</span>

Creates a new instance of Percent using any valid percent expression. For any other value, including `null` the method throws.

### isValidPercentValue(value)



Parameter|Type|Optional|Description
-|-|-|-
value | <span style="white-space:nowrap;">[`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)</span> | No | The value to test
* Returns: <span style="white-space:nowrap;">`value is PercentValue`</span>

Returns true if value is a valid PercentValue. This excludes `null`. Use this to check if a value will be accepted by Percent.from. This is also a valid TypeScript type guard function.


## Properties

### percent


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *On creation*



A number between and including 0 and 100

This property can only be set via constructor. Once set, it cannot change anymore.

