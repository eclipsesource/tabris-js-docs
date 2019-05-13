---
---
# Class "Font"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`Font`](Font.md)</span>

Represents a font. See also [FontValue](../types.html#fontvalue)


Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | *No*


## Example
```js
import {Font} from 'tabris';

const font = Font.from('bold 24px');
console.log(font.size); // 24
```

See also:

- [Applying multiple font styles to TextViews](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-rc1/snippets/textview-font-bundled.js)

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



Returns a string representation of the font using the CSS font shorthand syntax.

Returns <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>

## Static Methods

### from(fontValue)



Creates a new instance of Font using any valid font expression. For any other value, including `null` and `'initial'` the method throws.


Parameter|Type|Optional|Description
-|-|-|-
fontValue | <span style="white-space:nowrap;">[`FontValue`](../types.md#fontvalue)</span> | No | The value to create a Font instance from


Returns <span style="white-space:nowrap;">[`Font`](Font.md)</span>

### isFontValue(value)



Returns true if value is a FontValue. This includes `null` and `'initial'`. Use this to check if a value will be accepted by a font property. This is also a valid TypeScript type guard function.


Parameter|Type|Optional|Description
-|-|-|-
value | <span style="white-space:nowrap;">[`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)</span> | No | The value to test


Returns <span style="white-space:nowrap;">`value is FontValue`</span>

### isValidFontValue(value)



Returns true if value is a valid FontValue. This excludes `null` and `'initial'`. Use this to check if a value will be accepted by Font.from. This is also a valid TypeScript type guard function.


Parameter|Type|Optional|Description
-|-|-|-
value | <span style="white-space:nowrap;">[`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)</span> | No | The value to test


Returns <span style="white-space:nowrap;">`value is FontValue`</span>


## Properties

### family


Prioritized list of font families

Type | <span style="white-space:nowrap;">[`string[]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### size


Positive number in dip

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### style


Face of the font family to be used

Type | <span style="white-space:nowrap;">`'italic'` \| `'normal'`</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### weight


Boldness of the font

Type | <span style="white-space:nowrap;">`'black'` \| `'bold'` \| `'medium'` \| `'thin'` \| `'light'` \| `'normal'`</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

## Static Properties

### condensed



Type | <span style="white-space:nowrap;">`"condensed"`</span>
Settable | *No*
Change events | *No*




### monospace



Type | <span style="white-space:nowrap;">`"monospace"`</span>
Settable | *No*
Change events | *No*




### sansSerif



Type | <span style="white-space:nowrap;">`"sans-serif"`</span>
Settable | *No*
Change events | *No*




### serif



Type | <span style="white-space:nowrap;">`"serif"`</span>
Settable | *No*
Change events | *No*




