---
---
# Class "Font"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`Font`](Font.md)</span>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support: *No*
* Direct subclasses: *None*
--------
Represents a font. See also [FontValue](./types.html#FontValue)


## Constructor

### new Font(size, family?, weight?, style?)

Parameter|Type|Optional|Description
-|-|-|-
size | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Positive number in dip
family | <span style="white-space:nowrap;">[`string[]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | Yes | Prioritized list of font families
weight | <span style="white-space:nowrap;">`'black'` \| `'bold'` \| `'medium'` \| `'thin'` \| `'light'` \| `'normal'`</span> | Yes | Boldness of the font
style | <span style="white-space:nowrap;">`'italic'` \| `'normal'`</span> | Yes | Face of the font family to be used

## Methods

### toString()

* Returns: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>

Returns a string representation of the font using the CSS font shorthand syntax.

## Static Methods

### from(fontValue)



Parameter|Type|Optional|Description
-|-|-|-
fontValue | <span style="white-space:nowrap;">[`FontValue`](../types.md#fontvalue)</span> | No | The value to create a Font instance from
* Returns: <span style="white-space:nowrap;">[`Font`](Font.md)</span>

Creates a new instance of Font using any valid font expression. For any other value, including `null` and `'initial'` the method throws.

### isFontValue(value)



Parameter|Type|Optional|Description
-|-|-|-
value | <span style="white-space:nowrap;">[`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)</span> | No | The value to test
* Returns: <span style="white-space:nowrap;">`value is FontValue`</span>

Returns true if value is a FontValue. This includes `null` and `'initial'`. Use this to check if a value will be accepted by a font property. This is also a valid TypeScript type guard function.

### isValidFontValue(value)



Parameter|Type|Optional|Description
-|-|-|-
value | <span style="white-space:nowrap;">[`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)</span> | No | The value to test
* Returns: <span style="white-space:nowrap;">`value is FontValue`</span>

Returns true if value is a valid FontValue. This excludes `null` and `'initial'`. Use this to check if a value will be accepted by Font.from. This is also a valid TypeScript type guard function.


## Properties

### family


* Type: <span style="white-space:nowrap;">[`string[]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *On creation*



Prioritized list of font families

This property can only be set via constructor. Once set, it cannot change anymore.

### size


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *On creation*



Positive number in dip

This property can only be set via constructor. Once set, it cannot change anymore.

### style


* Type: <span style="white-space:nowrap;">`'italic'` \| `'normal'`</span>
* Settable: *On creation*



Face of the font family to be used

This property can only be set via constructor. Once set, it cannot change anymore.

### weight


* Type: <span style="white-space:nowrap;">`'black'` \| `'bold'` \| `'medium'` \| `'thin'` \| `'light'` \| `'normal'`</span>
* Settable: *On creation*



Boldness of the font

This property can only be set via constructor. Once set, it cannot change anymore.

## Static Properties

### condensed


* Type: <span style="white-space:nowrap;">`"condensed"`</span>
* Settable: *No*




### monospace


* Type: <span style="white-space:nowrap;">`"monospace"`</span>
* Settable: *No*




### sansSerif


* Type: <span style="white-space:nowrap;">`"sans-serif"`</span>
* Settable: *No*




### serif


* Type: <span style="white-space:nowrap;">`"serif"`</span>
* Settable: *No*




