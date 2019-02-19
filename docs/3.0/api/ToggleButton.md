---
---
# Class "ToggleButton"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`ToggleButton`](ToggleButton.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\ToggleButton.png 2x" src="img\android\ToggleButton.png" alt="ToggleButton on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\ToggleButton.png 2x" src="img\ios\ToggleButton.png" alt="ToggleButton on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<ToggleButton/>`
  * Parent element: [`<Composite/>`](Composite.md) and any widget extending <span style="white-space:nowrap;">[`Composite`](Composite.md)</span>
  * Child elements: *None*
  * Text content: *Sets [text](#text) property*
* Direct subclasses: *None*
--------
A push button that "snaps in", i.e. it is selected when pressed and deselected when pressed again.


Example:
```js
import {ToggleButton, contentView} from 'tabris';

// Create a toggle button with a checked handler

new ToggleButton({
  left: 10, top: 10,
  text: 'checked',
  checked: true
}).on('checkedChanged', event => event.target.text = event.value ? 'checked' : 'not checked')
  .appendTo(contentView);
```
See also:

- [Simple ToggleButton snippet](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/togglebutton.js)

## Constructor

### new ToggleButton(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof ToggleButton>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### alignment


* Type: `'left'` | `'right'` | `'center'`
* Default `'center'`
* Settable: *Yes*



The horizontal alignment of the button text.

### checked


* Type: <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
* Default `false`
* Settable: *Yes*



The checked state of the toggle button.

### font


* Type: <span style="white-space:nowrap;">[`FontValue`](../types.md#fontvalue)</span>
* Settable: *Yes*



The font used for the text.

### image


* Type: <span style="white-space:nowrap;">[`ImageValue`](../types.md#imagevalue)</span>
* Settable: *Yes*



An image to be displayed on the button.

### text


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *Yes*
* JSX Content Type: `string`



The button's label text.

When using ToggleButton as an JSX element the element content is mapped to this property. Therefore
```jsx
<ToggleButton>Hello World</ToggleButton>
```
 has the same effect as:
```jsx
<ToggleButton text='Hello World' />
```


### textColor


* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



The color of the text.


## Events

### select

Parameter|Type|Description
-|-|-
checked | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The current value of *[checked](#checked)*.

Fired when the toggle button is selected or deselected by the user.

## Change Events

### alignmentChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*alignment*](#alignment).

Fired when the [*alignment*](#alignment) property has changed.

### imageChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ImageValue`](../types.md#imagevalue)</span> | The new value of [*image*](#image).

Fired when the [*image*](#image) property has changed.

### checkedChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*checked*](#checked).

Fired when the [*checked*](#checked) property has changed.

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

### fontChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`FontValue`](../types.md#fontvalue)</span> | The new value of [*font*](#font).

Fired when the [*font*](#font) property has changed.

