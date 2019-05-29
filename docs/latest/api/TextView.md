---
---
# Class "TextView"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`TextView`](TextView.md)</span>

A widget to display a text. For images, use ImageView.


<div class="tabris-image"><figure><div><img srcset="img/android/TextView.png 2x" src="img/android/TextView.png" alt="TextView on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/TextView.png 2x" src="img/ios/TextView.png" alt="TextView on iOS"/></div><figcaption>iOS</figcaption></figure></div>

Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | Element: `<TextView/>`<br/>Parent element: [`<Composite/>`](Composite.md) *and any widget extending* <span style="white-space:nowrap;">[`Composite`](Composite.md)</span><br/>Child elements: *None*<br/>Text content: *Sets [text](#text) property*<br/>

## Example
```js
import {TextView, contentView} from 'tabris';

new TextView({
  left: 16, right: 16,
  text: 'Content'
}).appendTo(contentView);
```

See also:
  
[<span class='language jsx'>JSX</span> Creating a simple `TextView`](https://playground.tabris.com/?gitref=v3.0.0&snippet=textview.jsx)  
[<span class='language jsx'>JSX</span> Creating a `TextView` with support for markup](https://playground.tabris.com/?gitref=v3.0.0&snippet=textview-markupenabled.jsx)  
[<span class='language jsx'>JSX</span> Creating a `TextView` with support for text links](https://playground.tabris.com/?gitref=v3.0.0&snippet=textview-link.jsx)  
[<span class='language jsx'>JSX</span> Demonstrating various line spacing values on a `TextView`](https://playground.tabris.com/?gitref=v3.0.0&snippet=textview-link.jsx)  
[<span class='language js'>JS</span> Creating a `TextView` with an external font](https://playground.tabris.com/?gitref=v3.0.0&snippet=textview-font-external.js)  
[<span class='language js'>JS</span> textview-font-bundled.js](https://playground.tabris.com/?gitref=v3.0.0&snippet=textview-font-bundled.js)  
[<span class='language js'>JS</span> textview-linespacing.js](https://playground.tabris.com/?gitref=v3.0.0&snippet=textview-linespacing.js)

## Constructor

### new TextView(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<TextView>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### alignment


The horizontal alignment of the text.

Type | `'left'` \| `'right'` \| `'centerX'`
Default | `'left'`
Settable | *Yes*
Change events | *Yes*




### font


The font used for the text.

Type | <span style="white-space:nowrap;">[`FontValue`](../types.md#fontvalue)</span>
Settable | *Yes*
Change events | *Yes*


See also:
  
[<span class='language js'>JS</span> textview-font-bundled.js](https://playground.tabris.com/?gitref=v3.0.0&snippet=textview-font-bundled.js)  
[<span class='language js'>JS</span> textview-font-external.js](https://playground.tabris.com/?gitref=v3.0.0&snippet=textview-font-external.js)


### lineSpacing


The amount of space between each line of text. The `lineSpacing` property is a factor with a default value of `1.0`.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Default | `1.0`
Settable | *Yes*
Change events | *Yes*


See also:
  
[<span class='language js'>JS</span> textview-linespacing.js](https://playground.tabris.com/?gitref=v3.0.0&snippet=textview-linespacing.js)


### markupEnabled


Allows for a subset of HTML tags in the text. Supported tags are: `a`, `del`, `ins`, `b`, `i`, `strong`, `em`, `big`, `small`, `br`. All tags must be closed (e.g. use `<br/>` instead of `<br>`). Nesting tags is not supported. When the text is given as the content of a `<TextView>` JSX element, `markupEnabled` will parse the text more like HTML, i.e. consecutive white spaces will be merged.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Settable | *Yes*
Change events | *Yes*


See also:
  
[<span class='language jsx'>JSX</span> textview-markupenabled.jsx](https://playground.tabris.com/?gitref=v3.0.0&snippet=textview-markupenabled.jsx)


### maxLines


Limit the number of lines to be displayed to the given maximum. `null` disables this limit.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)</span>
Default | `null`
Settable | *Yes*
Change events | *Yes*




### selectable
<p class="platforms"><span class='android-tag' title='supported on Android'>Android</span></p>

Whether the text can be selected or not.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Settable | *Yes*
Change events | *Yes*




### text


The text to display.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *Yes*
Change events | *Yes*
JSX content type | `string`




When using TextView as an JSX element the element content is mapped to this property. Therefore
```jsx
<TextView>Hello World</TextView>
```
 has the same effect as:
```jsx
<TextView text='Hello World' />
```


### textColor


The color of the text.

Type | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
Settable | *Yes*
Change events | *Yes*





## Events

### tapLink

Fires when the user clicks on a link in an html text. Requires to set `markupEnabled` to true and to provide a text containing an anchor (`<a>`) with an `href` attribute. Eg. `textView.text = 'Website: <a href="http://example.com>example.com</a>'`. The event object contains a property `url` which provides the anchors `href` url.

Parameter|Type|Description
-|-|-
url | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The url referenced by the `href` attribute of the anchor.

## Change Events

### alignmentChanged

Fired when the [*alignment*](#alignment) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*alignment*](#alignment).

### selectableChanged

Fired when the [*selectable*](#selectable) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*selectable*](#selectable).

### markupEnabledChanged

Fired when the [*markupEnabled*](#markupenabled) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*markupEnabled*](#markupenabled).

### textChanged

Fired when the [*text*](#text) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*text*](#text).

### textColorChanged

Fired when the [*textColor*](#textcolor) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*textColor*](#textcolor).

### maxLinesChanged

Fired when the [*maxLines*](#maxlines) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)</span> | The new value of [*maxLines*](#maxlines).

### lineSpacingChanged

Fired when the [*lineSpacing*](#linespacing) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*lineSpacing*](#linespacing).

### fontChanged

Fired when the [*font*](#font) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`FontValue`](../types.md#fontvalue)</span> | The new value of [*font*](#font).

