---
---
# Class "LinearGradient"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`LinearGradient`](LinearGradient.md)</span>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support: *No*
* Direct subclasses: *None*
--------
Represents a linear gradient. See also [LinearGradientValue](./types.html#LinearGradientValue)


## Constructor

### new LinearGradient(colorStops, direction?)

Parameter|Type|Optional|Description
-|-|-|-
colorStops | <span style="white-space:nowrap;">`(Color` \| `[Color, Percent])[]`</span> | No | An array with at least one color stop. Defines the position and the offset of the gradient color stop.
direction | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Yes | The direction of the gradient line in degrees.

## Methods

### toString()

* Returns: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>

Returns a CSS string representation of the linear gradient.

## Static Methods

### from(linearGradientValue)



Parameter|Type|Optional|Description
-|-|-|-
linearGradientValue | <span style="white-space:nowrap;">[`LinearGradientValue`](../types.md#lineargradientvalue)</span> | No | The value to create a LinearGradient instance from
* Returns: <span style="white-space:nowrap;">[`LinearGradient`](LinearGradient.md)</span>

Creates a new instance of LinearGradient using any valid linear gradient expression. For any other value, including `null` and `'initial'` the method throws.

### isLinearGradientValue(value)



Parameter|Type|Optional|Description
-|-|-|-
value | <span style="white-space:nowrap;">[`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)</span> | No | The value to test
* Returns: <span style="white-space:nowrap;">`value is LinearGradientValue`</span>

Returns true if value is a LinearGradientValue. This includes `null` and `'initial'`. Use this to check if a value will be accepted by a linear gradient property. This is also a valid TypeScript type guard function.

### isValidLinearGradientValue(value)



Parameter|Type|Optional|Description
-|-|-|-
value | <span style="white-space:nowrap;">[`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)</span> | No | The value to test
* Returns: <span style="white-space:nowrap;">`value is LinearGradientValue`</span>

Returns true if value is a valid LinearGradientValue. This excludes `null` and `'initial'`. Use this to check if a value will be accepted by LinearGradient.from. This is also a valid TypeScript type guard function.


## Properties

### colorStops


* Type: <span style="white-space:nowrap;">`(Color` \| `[Color, Percent])[]`</span>
* Settable: *On creation*



An array with the gradient color stops. Defines the position and the offset of the gradient color stop.

This property can only be set via constructor. Once set, it cannot change anymore.

### direction


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *On creation*



The direction of the gradient line in degrees.

This property can only be set via constructor. Once set, it cannot change anymore.

