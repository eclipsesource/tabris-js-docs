---
---
# Class "Font"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >Font</a>

Represents a font. See also [`FontValue`](./Font.md#fontvalue)


Type: | <code style="white-space: nowrap">Font extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a></code>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


## Examples
### JavaScript


```js
import {Font} from 'tabris';

const font = Font.from('bold 24px');
console.log(font.size); // 24
```



See also:
  
[<span class='language js'>JS</span> Applying multiple font styles to TextViews](https://github.com/eclipsesource/tabris-js/tree/v3.8.0/snippets/textview-font-bundled.js) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.8.0&snippet=textview-font-bundled.js" style="color: cadetblue;">► Run in Playground</a>]</span>

## Constructor

### new Font(size, family?, weight?, style?)

Parameter|Type|Description
-|-|-
size | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | Positive number in dip
family | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>[]</code> | Prioritized list of font families *Optional.*
weight | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'black'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'bold'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'medium'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'thin'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'light'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'normal'</a></code> | Boldness of the font *Optional.*
style | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'italic'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'normal'</a></code> | Face of the font family to be used *Optional.*

## Methods

### equals(value)



Tests if the given value is a `Font` instance that is deeply equal to this one.


Parameter|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="#" >Font</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

### toString()



Returns a string representation of the font using the CSS font shorthand syntax.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code>

## Static Methods

### from(fontValue)



Creates a new instance of Font using any valid font expression. For any other value, including `null` and `'initial'` the method throws.


Parameter|Type|Description
-|-|-
fontValue | <code style="white-space: nowrap"><a href="Font.html#fontvalue" title="Font Class Type">FontValue</a></code> | The value to create a Font instance from


Returns: <code style="white-space: nowrap"><a href="#" >Font</a></code>

### isFontValue(value)



Returns true if value is a FontValue. This includes `null` and `'initial'`. Use this to check if a value will be accepted by a font property. This is also a valid TypeScript type guard function.


Parameter|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code> | The value to test


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

### isValidFontValue(value)



Returns true if value is a valid FontValue. This excludes `null` and `'initial'`. Use this to check if a value will be accepted by Font.from. This is also a valid TypeScript type guard function.


Parameter|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code> | The value to test


Returns: <code style="white-space: nowrap">value is FontValue</code>


## Properties

### family


Prioritized list of font families

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>[]</code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### size


Positive number in dip

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### style


Face of the font family to be used

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'italic'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'normal'</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### weight


Boldness of the font

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'black'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'bold'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'medium'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'thin'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'light'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'normal'</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



## Static Properties

### condensed



Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">"condensed"</a></code>
Settable: | No




### monospace



Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">"monospace"</a></code>
Settable: | No




### sansSerif



Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">"sans-serif"</a></code>
Settable: | No




### serif



Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">"serif"</a></code>
Settable: | No






## Related Types

### FontValue

* JavaScript Type: `tabris.Font`, `Object`, `string`
* TypeScript Type: `tabris.FontValue`

A `FontValue` describes a font by size, family, weight and style. This type allows various expressions that can all be used in place of a [`Font`](#class-font) instance for convenience. All API that accept these expressions will convert them to a `Font` object. (With the exception of `CanvasContext`.) Setting a FontValue property to null resets it to the default.

Generic **font size** is always given as DIP (device independent pixels), though the string shorthand expects `"px"` as a unit. It's still DIPs.

Generic **font families** are supported across all platforms: `"serif"`, `"sans-serif"`, `"condensed"` and `"monospace"`. These are available as static string properties of `Font`, e.g. `Font.serif`. These exist just to help with autocompletion. More families can be added via `app.registerFont`. If no family is given for a font the system default is used. If no font family is given the default system font will be used. The string `"initial"` represents the platform default.

Supported **font weights** are `"light"`, `"thin"`, `"normal"`, `"medium"`, `"bold"` and `"black"`. The default is `"normal"`

Supported **font styles** are `"italic"` and `"normal"`. The default is `"normal"`

In TypeScript you can import this type as a union with `import {FontValue} from 'tabris';` or use `tabris.FontValue`. [Type guards](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types) for `FontValue` are available as [`Font.isFontValue`](#isfontvaluevalue) and [`Font.isValidFontValue`](#isvalidfontvaluevalue).

In addition to `Font` instances `FontValue` includes:

### FontLikeObject

* JavaScript Type: `Object`
* TypeScript Type: `tabris.FontLikeObject`

```ts
interface FontLikeObject {
  size: number;
  family?: string[];
  weight?: FontWeight;
  style?: FontStyle;
}
```

A plain object implementing the same properties as [`Font`](#class-font).

Examples:

```js
{size: 16, weight: 'bold'}
{size: 24, family: 'sans-serif', style: 'italic'}
```

### FontString

* JavaScript Type: `string`
* TypeScript Type: `tabris.FontString`

 As a string, a subset of the shorthand syntax known from CSS is used: `"font-style font-weight font-size font-family"`, where every value except size is optional. The size also need to have a `"px"` postfix. Multiple families may be given separated by commas. Families with spaces in their name need to be put in single or double quotes.

Examples:

```js
"bold 24px"
"12px sans-serif"
"italic thin 12px sans-serif"
"24px 'My Font', sans-serif"
"initial"
```

