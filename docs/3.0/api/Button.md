---
---
# Class "Button"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`Button`](Button.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\Button.png 2x" src="img\android\Button.png" alt="Button on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\Button.png 2x" src="img\ios\Button.png" alt="Button on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<Button/>`
  * Parent element: [`<Composite/>`](Composite.md) and any widget extending <span style="white-space:nowrap;">[`Composite`](Composite.md)</span>
  * Child elements: *None*
  * Text content: *Sets [text](#text) property*
* Direct subclasses: *None*
--------
A push button. Can contain a text or an image.


Example:
```js
import {Button, contentView} from 'tabris';

// Create a push button that counts up on selection

let count = 0;

new Button({
  left: 10, top: 10,
  text: 'Button'
}).on('select', ({target}) => target.text = 'Pressed ' + (++count) + ' times')
  .appendTo(contentView);
```
See also:

- [Simple Button snippet](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/button.js)

## Constructor

### new Button(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof Button>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### alignment


* Type: `'left'` | `'right'` | `'center'`
* Default `'center'`
* Settable: *Yes*



The horizontal alignment of the button text.

### font


* Type: <span style="white-space:nowrap;">[`FontValue`](../types.md#fontvalue)</span>
* Settable: *Yes*



The font used for the button text.

### image


* Type: <span style="white-space:nowrap;">[`ImageValue`](../types.md#imagevalue)</span>
* Settable: *Yes*



An image to be displayed on the button.

### strokeColor


* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



Controls the line width of a button with the `style` _outline_.

### strokeWidth


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *Yes*



Controls the line color of a button with the `style` _outline_.

### style


* Type: `'default'` | `'elevate'` | `'flat'` | `'outline'` | `'text'`
* Default `'default'`
* Settable: *On creation*



The `style` controls the appearance of a `Button` and has to be provided in its constructor. The `default` style creates a platform specific button, which is flat on iOS and has an elevation and shadow on Android. In addition the following specific style values can be used:

- `elevate` A button with a platform specific background color, elevation and a surrounding drop shadow. Only supported on Android
- `flat` A button with no elevation and a platform specific background color
- `outline` A button with a transparent background and an outline stroke which can be controlled via the properties `strokeWidth` and `strokeColor`
- `text` A button with no background and only consisting of its text label.

This property can only be set via constructor or JSX. Once set, it cannot change anymore.

### text


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *Yes*
* JSX Content Type: `string`



The button's label text.

When using Button as an JSX element the element content is mapped to this property. Therefore
```jsx
<Button>Hello World</Button>
```
 has the same effect as:
```jsx
<Button text='Hello World' />
```


### textColor


* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



The color of the text.


## Events

### select

Fired when the button is pressed.

## Change Events

### strokeColorChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*strokeColor*](#strokeColor).

Fired when the [*strokeColor*](#strokeColor) property has changed.

### strokeWidthChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*strokeWidth*](#strokeWidth).

Fired when the [*strokeWidth*](#strokeWidth) property has changed.

### alignmentChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*alignment*](#alignment).

Fired when the [*alignment*](#alignment) property has changed.

### fontChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`FontValue`](../types.md#fontvalue)</span> | The new value of [*font*](#font).

Fired when the [*font*](#font) property has changed.

### imageChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ImageValue`](../types.md#imagevalue)</span> | The new value of [*image*](#image).

Fired when the [*image*](#image) property has changed.

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

