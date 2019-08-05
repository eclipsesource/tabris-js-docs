---
---
# Class "Percent"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`Percent`](Percent.md)</span>

Represents a percentage. See also [PercentValue](../types.html#percentvalue)


Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | *No*


## Constructor

### new Percent(value)

Parameter|Type|Optional|Description
-|-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | A number between and including 0 and 100

## Methods

### toString()



Returns a string representation of the percent (a number followed by '%').

Returns <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>

### valueOf()



Returns the percent number

Returns <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>

## Static Methods

### from(percentValue)



Creates a new instance of Percent using any valid percent expression. For any other value, including `null` the method throws.


Parameter|Type|Optional|Description
-|-|-|-
percentValue | <span style="white-space:nowrap;">[`PercentValue`](../types.md#percentvalue)</span> | No | The value to create a Percent instance from


Returns <span style="white-space:nowrap;">[`Percent`](Percent.md)</span>

### isValidPercentValue(value)



Returns true if value is a valid PercentValue. This excludes `null`. Use this to check if a value will be accepted by Percent.from. This is also a valid TypeScript type guard function.


Parameter|Type|Optional|Description
-|-|-|-
value | <span style="white-space:nowrap;">[`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)</span> | No | The value to test


Returns <span style="white-space:nowrap;">`value is PercentValue`</span>


## Properties

### percent


A number between and including 0 and 100

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.



