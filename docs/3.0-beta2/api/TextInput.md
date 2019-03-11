---
---
# Class "TextInput"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`TextInput`](TextInput.md)</span>

A widget that allows to enter text.


<div class="tabris-image"><figure><div><img srcset="img/android/TextInput.png 2x" src="img/android/TextInput.png" alt="TextInput on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/TextInput.png 2x" src="img/ios/TextInput.png" alt="TextInput on iOS"/></div><figcaption>iOS</figcaption></figure></div>

Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | Element: `<TextInput/>`<br/>Parent element: [`<Composite/>`](Composite.md) *and any widget extending* <span style="white-space:nowrap;">[`Composite`](Composite.md)</span><br/>Child elements: *None*<br/>Text content: *Sets [text](#text) property*<br/>

## Example
```js
import {TextInput, contentView} from 'tabris';

new TextInput({
  left: 16, right: 16,
  message: 'Name'
}).onInput(({text}) => console.log(`Text changed to ${text}`))
  .appendTo(contentView);
```

See also:

- [Simple TextInput snippet](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190311+1537/snippets/textinput.js)
- [Example with Text and other input controls](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190311+1537/examples/input/input.js)

## Constructor

### new TextInput(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<TextInput>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### alignment


The horizontal alignment of the text.

Type | `'left'` \| `'right'` \| `'center'`
Default | `'left'`
Settable | *Yes*




### autoCapitalize


Control how text input is capitalized.

* `none` - Do not change any text input
* `sentence` - Capitalize the first word of a sentence
* `word` - Capitalize every word
* `all` - Capitalize every letter

The boolean value `false` maps to `none` whereas `true` is equal to `all`.

Type | `true` \| `false` \| `none` \| `sentence` \| `word` \| `all`
Settable | *Yes*




### autoCorrect


Enables the spell checker and auto-correction feature.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Default | `false`
Settable | *Yes*




### borderColor


The color of the border of the TextInput. On iOS this is a rectangular border around the TextInput, on Android it is a single line below the TextInput.

Type | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
Settable | *Yes*




### cursorColor
<p class="platforms"><span class='ios-tag' title='supported on iOS'>iOS</span></p>

The color of the cursor in the `TextInput`.

Type | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
Settable | *Yes*




### editable


Whether the text can be edited or not.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Default | `true`
Settable | *Yes*




### enterKeyType


Label or icon to display on the keyboard 'confirmation' key. The key press can be captured via the `accept` event. Setting an `enterKeyType` other than `default` will change the key behavior to not close the keyboard automatically. The developer is able close the keyboard by removing the focus from the `TextInput`.

Type | `'default'` \| `'done'` \| `'next'` \| `'send'` \| `'search'` \| `'go'`
Default | `'default'`
Settable | *Yes*




### fillColor
<p class="platforms"><span class='ios-tag' title='supported on iOS'>iOS</span></p>

The color of the background of the TextInput - applies only to iOS.

Type | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
Settable | *Yes*




### focused


Reflects whether this widget has the keyboard focus. Setting this property to `true` will focus the widget and open the virtual keyboard, setting it to `false` will remove the focus and hide the virtual keyboard.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Default | `false`
Settable | *Yes*




### font


The font used for the text.

Type | <span style="white-space:nowrap;">[`FontValue`](../types.md#fontvalue)</span>
Settable | *Yes*




### keepFocus


When `true` the `TextInput` will keep its focus, even when tapped outside of the widget bounds.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Default | `false`
Settable | *Yes*




### keyboard


Selects the keyboard type to use for editing this widget. Has no effect when `type` is set to `multiline`.

Type | `'ascii'` \| `'decimal'` \| `'email'` \| `'number'` \| `'numbersAndPunctuation'` \| `'phone'` \| `'url'` \| `'default'`
Default | `'default'`
Settable | *Yes*




### message


A hint text that is displayed when the input field is empty. Does not apply on iOS when `type` is set to `multiline`.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *Yes*




### revealPassword


Makes the text visible when the `TextInput` has the type `password`.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Settable | *Yes*




### selection


The `selection` is a two element number array representing the text selections start and end position. The native platform usually shows selection handles so that the selection can be changed by the user. A `selection` array where both numbers are the same represent a single cursor at the given position. The selection start is the index of the first character where as the end is the index of the last character + 1. E.g. to select the word "ok" the selection would be `[0, 2]`.

To make a selection visible the `TextInput` has to be in focus. Consequently the selection is preserved when the focus is lost and regained. When the user gives the `TextInput` focus by tapping on it, the selection is changed to represent his touch position.

 Getting the `selection` upon user interaction (e.g. a button press) the focus would be lost and possibly the `selection` altered due to user interaction. In such a scenario it is recommended to set the [`keepFocus`](#keepFocus) property to `true`.

Type | <span style="white-space:nowrap;">[`number[]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *Yes*




### text


The text in the input field.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *Yes*
JSX content type | `string`




When using TextInput as an JSX element the element content is mapped to this property. Therefore
```jsx
<TextInput>Hello World</TextInput>
```
 has the same effect as:
```jsx
<TextInput text='Hello World' />
```


### textColor


The color of the text.

Type | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
Settable | *Yes*




### type


The type of the text widget.

Type | `'default'` \| `'password'` \| `'search'` \| `'multiline'`
Default | `'default'`
Settable | *On creation*




This property can only be set via constructor or JSX. Once set, it cannot change anymore.


## Events

### accept

Fired when a text input has been finished by pressing the keyboard's Enter key. The label of this key may vary depending on the platform and locale.

Parameter|Type|Description
-|-|-
text | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The current value of *[text](#text)*.

### select

The `select` event is fired when the user alters the text [`selection`](#selection). Either by dragging the selection handles of a text selection, by moving the cursor inside the text or by typing which also advances the cursor.

The event also fires when the user taps inside a `TextInput` since this involves to set the cursor to the tapped position.

Parameter|Type|Description
-|-|-
selection | <span style="white-space:nowrap;">[`number[]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The current `selection` as a two element number array of start and end position.

### blur

Fired when the widget lost focus.

### focus

Fired when the widget gains focus.

### input

Fired when the text was changed by the user.

Parameter|Type|Description
-|-|-
text | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of *[text](#text)*.

## Change Events

### textChanged

Fired when the [*text*](#text) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*text*](#text).

### textColorChanged

Fired when the [*textColor*](#textColor) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*textColor*](#textColor).

### messageChanged

Fired when the [*message*](#message) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*message*](#message).

### editableChanged

Fired when the [*editable*](#editable) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*editable*](#editable).

### alignmentChanged

Fired when the [*alignment*](#alignment) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*alignment*](#alignment).

### autoCorrectChanged

Fired when the [*autoCorrect*](#autoCorrect) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*autoCorrect*](#autoCorrect).

### autoCapitalizeChanged

Fired when the [*autoCapitalize*](#autoCapitalize) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)</span> | The new value of [*autoCapitalize*](#autoCapitalize).

### keyboardChanged

Fired when the [*keyboard*](#keyboard) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*keyboard*](#keyboard).

### enterKeyTypeChanged

Fired when the [*enterKeyType*](#enterKeyType) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*enterKeyType*](#enterKeyType).

### focusedChanged

Fired when the [*focused*](#focused) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*focused*](#focused).

### keepFocusChanged

Fired when the [*keepFocus*](#keepFocus) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*keepFocus*](#keepFocus).

### fillColorChanged

Fired when the [*fillColor*](#fillColor) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*fillColor*](#fillColor).

### borderColorChanged

Fired when the [*borderColor*](#borderColor) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*borderColor*](#borderColor).

### revealPasswordChanged

Fired when the [*revealPassword*](#revealPassword) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*revealPassword*](#revealPassword).

### cursorColorChanged

Fired when the [*cursorColor*](#cursorColor) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*cursorColor*](#cursorColor).

### selectionChanged

Fired when the [*selection*](#selection) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number[]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*selection*](#selection).

### fontChanged

Fired when the [*font*](#font) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`FontValue`](../types.md#fontvalue)</span> | The new value of [*font*](#font).

