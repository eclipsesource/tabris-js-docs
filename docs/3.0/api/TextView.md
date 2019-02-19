---
---
# Class "TextView"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`TextView`](TextView.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\TextView.png 2x" src="img\android\TextView.png" alt="TextView on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\TextView.png 2x" src="img\ios\TextView.png" alt="TextView on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<TextView/>`
  * Parent element: [`<Composite/>`](Composite.md) and any widget extending <span style="white-space:nowrap;">[`Composite`](Composite.md)</span>
  * Child elements: *None*
  * Text content: *Sets [text](#text) property*
* Direct subclasses: *None*
--------
A widget to display a text. For images, use ImageView.


Example:
```js
import {TextView, contentView} from 'tabris';

// Create text views with different alignments

new TextView({
  left: 10, top: 10, right: 10,
  text: 'Left',
  alignment: 'left'
}).appendTo(contentView);

new TextView({
  left: 10, top: 'prev() 10', right: 10,
  text: 'Center',
  alignment: 'center'
}).appendTo(contentView);

new TextView({
  left: 10, top: 'prev() 10', right: 10,
  text: 'Right',
  alignment: 'right'
}).appendTo(contentView);
```
See also:

- [Simple TextView snippet](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/textview.js)
- [Snippet for TextView with markup](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/textview-markupenabled.js)

## Constructor

### new TextView(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof TextView>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### alignment


* Type: `'left'` | `'right'` | `'center'`
* Default `'left'`
* Settable: *Yes*



The horizontal alignment of the text.

### font


* Type: <span style="white-space:nowrap;">[`FontValue`](../types.md#fontvalue)</span>
* Settable: *Yes*



The font used for the text.

### lineSpacing


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Default `1.0`
* Settable: *Yes*



The amount of space between each line of text. The `lineSpacing` property is a factor with a default value of `1.0`.

### markupEnabled


* Type: <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
* Settable: *Yes*



Allows for a subset of HTML tags in the text. Supported tags are: `a`, `del`, `ins`, `b`, `i`, `strong`, `em`, `big`, `small`, `br`. All tags must be closed (e.g. use `<br/>` instead of `<br>`). Nesting tags is not supported.

### maxLines


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)</span>
* Default `null`
* Settable: *Yes*



Limit the number of lines to be displayed to the given maximum. `null` disables this limit.

### selectable
<p class="platforms"> < span class = 'android-tag' title = 'supported on Android' > Android < /span></p>

* Type: <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
* Settable: *Yes*



Whether the text can be selected or not. Only support on Android.

### text


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *Yes*
* JSX Content Type: `string`



The text to display.

When using TextView as an JSX element the element content is mapped to this property. Therefore
```jsx
<TextView>Hello World</TextView>
```
 has the same effect as:
```jsx
<TextView text='Hello World' />
```


### textColor


* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



The color of the text.


## Events

### tapLink

Parameter|Type|Description
-|-|-
url | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The url referenced by the `href` attribute of the anchor.

Fires when the user clicks on a link in an html text. Requires to set `markupEnabled` to true and to provide a text containing an anchor (`<a>`) with an `href` attribute. Eg. `textView.text = 'Website: <a href="http://example.com>example.com</a>'`. The event object contains a property `url` which provides the anchors `href` url.

## Change Events

### alignmentChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*alignment*](#alignment).

Fired when the [*alignment*](#alignment) property has changed.

### selectableChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*selectable*](#selectable).

Fired when the [*selectable*](#selectable) property has changed.

### markupEnabledChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*markupEnabled*](#markupEnabled).

Fired when the [*markupEnabled*](#markupEnabled) property has changed.

### textChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*text*](#text).

Fired when the [*text*](#text) property has changed.

### textColorChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*textColor*](#textColor).

Fired when the [*textColor*](#textColor) property has changed.

### maxLinesChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)</span> | The new value of [*maxLines*](#maxLines).

Fired when the [*maxLines*](#maxLines) property has changed.

### lineSpacingChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*lineSpacing*](#lineSpacing).

Fired when the [*lineSpacing*](#lineSpacing) property has changed.

### fontChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`FontValue`](../types.md#fontvalue)</span> | The new value of [*font*](#font).

Fired when the [*font*](#font) property has changed.

