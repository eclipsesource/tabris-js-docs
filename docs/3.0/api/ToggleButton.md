---
---
# Class "ToggleButton"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`ToggleButton`](ToggleButton.md)</span>

A push button that "snaps in", i.e. it is selected when pressed and deselected when pressed again.


<div class="tabris-image"><figure><div><img srcset="img/android/ToggleButton.png 2x" src="img/android/ToggleButton.png" alt="ToggleButton on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/ToggleButton.png 2x" src="img/ios/ToggleButton.png" alt="ToggleButton on iOS"/></div><figcaption>iOS</figcaption></figure></div>

Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | Element: `<ToggleButton/>`<br/>Parent element: [`<Composite/>`](Composite.md) *and any widget extending* <span style="white-space:nowrap;">[`Composite`](Composite.md)</span><br/>Child elements: *None*<br/>Text content: *Sets [text](#text) property*<br/>

## Example
```js
import {Tab, contentView} from 'tabris';

new ToggleButton({text: 'Toggle button'})
  .onSelect(() => console.log('ToggleButton toggled'))
  .appendTo(contentView);
```

See also:

- [Demo JavaScript/JSX Snippet: Creating a simple `ToggleButton`](https://playground.tabris.com/?gitref=v3.0.0&snippet=togglebutton.jsx)

## Constructor

### new ToggleButton(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<ToggleButton>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### alignment


The horizontal alignment of the button text.

Type | `'left'` \| `'right'` \| `'centerX'`
Default | `'centerX'`
Settable | *Yes*
Change events | *Yes*




### checked


The checked state of the toggle button.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Default | `false`
Settable | *Yes*
Change events | *Yes*




### font


The font used for the text.

Type | <span style="white-space:nowrap;">[`FontValue`](../types.md#fontvalue)</span>
Settable | *Yes*
Change events | *Yes*




### image


An image to be displayed on the button.

Type | <span style="white-space:nowrap;">[`ImageValue`](../types.md#imagevalue)</span>
Settable | *Yes*
Change events | *Yes*




### text


The button's label text.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *Yes*
Change events | *Yes*
JSX content type | `string`




When using ToggleButton as an JSX element the element content is mapped to this property. Therefore
```jsx
<ToggleButton>Hello World</ToggleButton>
```
 has the same effect as:
```jsx
<ToggleButton text='Hello World' />
```


### textColor


The color of the text.

Type | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
Settable | *Yes*
Change events | *Yes*





## Events

### select

Fired when the toggle button is selected or deselected by the user.

Parameter|Type|Description
-|-|-
checked | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The current value of *[checked](#checked)*.

## Change Events

### alignmentChanged

Fired when the [*alignment*](#alignment) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*alignment*](#alignment).

### imageChanged

Fired when the [*image*](#image) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ImageValue`](../types.md#imagevalue)</span> | The new value of [*image*](#image).

### checkedChanged

Fired when the [*checked*](#checked) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*checked*](#checked).

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

### fontChanged

Fired when the [*font*](#font) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`FontValue`](../types.md#fontvalue)</span> | The new value of [*font*](#font).

