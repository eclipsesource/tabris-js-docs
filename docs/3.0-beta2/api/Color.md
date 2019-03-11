---
---
# Class "Color"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`Color`](Color.md)</span>

Represents a color. See also [ColorValue](./types.html#ColorValue)


Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | *No*


## Example
```js
import {Color} from 'tabris';

const color = Color.from('red');
console.log(color.red); // red channel value
```

## Constructor

### new Color(red, green, blue, alpha?)

Parameter|Type|Optional|Description
-|-|-|-
red | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | A number between and including 0 and 255
green | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | A number between and including 0 and 255
blue | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | A number between and including 0 and 255
alpha | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Yes | A number between and including 0 and 255. Defaults to 255.

## Methods

### toArray()



Returns a array representation of the color in the format of `[red, green, blue, alpha]`. Each value is a number between (and in including) 0 and 255.

Returns <span style="white-space:nowrap;">`[number, number, number, number]`</span>

### toString()



Returns a string representation of the color. Is either in `rgb(red, green, blue)` or `rgba(red, green, blue, alpha)` format. Note that alpha is a value between 0 and 1 in the string representation, but between 0 and 255 on the Color object.

Returns <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>

## Static Methods

### from(colorValue)



Creates a new instance of Color using any valid color expression. For any other value, including `null` and `'initial'` the method throws.


Parameter|Type|Optional|Description
-|-|-|-
colorValue | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | No | The value to create a Color instance from


Returns <span style="white-space:nowrap;">[`Color`](Color.md)</span>

### isColorValue(value)



Returns true if value is a ColorValue. This includes `null` and `'initial'`. Use this to check if a value will be accepted by a color property. This is also a valid TypeScript type guard function.


Parameter|Type|Optional|Description
-|-|-|-
value | <span style="white-space:nowrap;">[`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)</span> | No | The value to test


Returns <span style="white-space:nowrap;">`value is ColorValue`</span>

### isValidColorValue(value)



Returns true if value is a valid ColorValue. This excludes `null` and `'initial'`. Use this to check if a value will be accepted by Color.from. This is also a valid TypeScript type guard function.


Parameter|Type|Optional|Description
-|-|-|-
value | <span style="white-space:nowrap;">[`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)</span> | No | The value to test


Returns <span style="white-space:nowrap;">`value is ColorValue`</span>


## Properties

### alpha


A number between and including 0 and 255

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### blue


A number between and including 0 and 255

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### green


A number between and including 0 and 255

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### red


A number between and including 0 and 255

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

## Static Properties

### aqua



Type | <span style="white-space:nowrap;">[`Color`](Color.md)</span>
Settable | *No*




### black



Type | <span style="white-space:nowrap;">[`Color`](Color.md)</span>
Settable | *No*




### blue



Type | <span style="white-space:nowrap;">[`Color`](Color.md)</span>
Settable | *No*




### fuchsia



Type | <span style="white-space:nowrap;">[`Color`](Color.md)</span>
Settable | *No*




### gray



Type | <span style="white-space:nowrap;">[`Color`](Color.md)</span>
Settable | *No*




### green



Type | <span style="white-space:nowrap;">[`Color`](Color.md)</span>
Settable | *No*




### lime



Type | <span style="white-space:nowrap;">[`Color`](Color.md)</span>
Settable | *No*




### maroon



Type | <span style="white-space:nowrap;">[`Color`](Color.md)</span>
Settable | *No*




### navy



Type | <span style="white-space:nowrap;">[`Color`](Color.md)</span>
Settable | *No*




### olive



Type | <span style="white-space:nowrap;">[`Color`](Color.md)</span>
Settable | *No*




### purple



Type | <span style="white-space:nowrap;">[`Color`](Color.md)</span>
Settable | *No*




### red



Type | <span style="white-space:nowrap;">[`Color`](Color.md)</span>
Settable | *No*




### silver



Type | <span style="white-space:nowrap;">[`Color`](Color.md)</span>
Settable | *No*




### teal



Type | <span style="white-space:nowrap;">[`Color`](Color.md)</span>
Settable | *No*




### transparent



Type | <span style="white-space:nowrap;">[`Color`](Color.md)</span>
Settable | *No*




### white



Type | <span style="white-space:nowrap;">[`Color`](Color.md)</span>
Settable | *No*




### yellow



Type | <span style="white-space:nowrap;">[`Color`](Color.md)</span>
Settable | *No*




