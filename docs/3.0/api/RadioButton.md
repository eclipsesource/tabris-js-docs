---
---
# Class "RadioButton"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`RadioButton`](RadioButton.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\RadioButton.png 2x" src="img\android\RadioButton.png" alt="RadioButton on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\RadioButton.png 2x" src="img\ios\RadioButton.png" alt="RadioButton on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<RadioButton/>`
  * Parent element: [`<Composite/>`](Composite.md) and any widget extending <span style="white-space:nowrap;">[`Composite`](Composite.md)</span>
  * Child elements: *None*
  * Text content: *Sets [text](#text) property*
* Direct subclasses: *None*
--------
A radio button. Selecting a radio button de-selects all its siblings (i.e. all radio buttons within the same parent).


Example:
```js
import {RadioButton, contentView} from 'tabris';

// Create radio buttons with checked handlers

['One', 'Two', 'Three'].forEach((title) => {
  new RadioButton({
    left: 10, top: 'prev() 10',
    text: title
  }).on('checkedChanged', ({target, value: checked}) => {
    if (checked) {
      console.log(target.text + ' checked');
    }
  }).appendTo(contentView);
});
```
See also:

- [Simple RadioButton snippet](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/radiobutton.js)

## Constructor

### new RadioButton(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof RadioButton>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### checked


* Type: <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
* Default `false`
* Settable: *Yes*



The checked state of the radio button.

### checkedTintColor


* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



The color of the selectable area in checked state. Will fall back to `tintColor` if not set.

### font


* Type: <span style="white-space:nowrap;">[`FontValue`](../types.md#fontvalue)</span>
* Settable: *Yes*



The font used for the text.

### text


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *Yes*
* JSX Content Type: `string`



The label text of the radio button.

When using RadioButton as an JSX element the element content is mapped to this property. Therefore
```jsx
<RadioButton>Hello World</RadioButton>
```
 has the same effect as:
```jsx
<RadioButton text='Hello World' />
```


### textColor


* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



The color of the text.

### tintColor


* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



The color of the selectable area.


## Events

### select

Parameter|Type|Description
-|-|-
checked | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of *[checked](#checked)*.

Fired when the radio button is selected or deselected by the user.

## Change Events

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

### tintColorChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*tintColor*](#tintColor).

Fired when the [*tintColor*](#tintColor) property has changed.

### checkedTintColorChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*checkedTintColor*](#checkedTintColor).

Fired when the [*checkedTintColor*](#checkedTintColor) property has changed.

### fontChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`FontValue`](../types.md#fontvalue)</span> | The new value of [*font*](#font).

Fired when the [*font*](#font) property has changed.

