---
---
# Class "Slider"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`Slider`](Slider.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\Slider.png 2x" src="img\android\Slider.png" alt="Slider on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\Slider.png 2x" src="img\ios\Slider.png" alt="Slider on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<Slider/>`
  * Parent element: [`<Composite/>`](Composite.md) and any widget extending <span style="white-space:nowrap;">[`Composite`](Composite.md)</span>
  * Child elements: *None*
  * Text content: *Not supported*
* Direct subclasses: *None*
--------
A widget representing a numeric value as an movable indicator on a horizontal line.


Example:
```js
import {Slider, TextView, contentView} from 'tabris';

// Create a slider with a selection handler

const textView = new TextView({
  left: 10, right: 10, top: '30%',
  alignment: 'center',
  font: '22px sans-serif',
  text: '50'
}).appendTo(contentView);

new Slider({
  left: 50, top: [textView, 20], right: 50,
  minimum: -50,
  selection: 50,
  maximum: 150
}).on('selectionChanged', ({value}) => textView.text = value)
  .appendTo(contentView);
```
See also:

- [Simple Slider snippet](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/slider.js)

## Constructor

### new Slider(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof Slider>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### maximum


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Default `100`
* Settable: *Yes*



The maximum value.

### minimum


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Default `0`
* Settable: *Yes*



The minimum value.

### selection


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Default `0`
* Settable: *Yes*



The actual value.

### tintColor


* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



The color used to display the current selection.


## Events

### select

Parameter|Type|Description
-|-|-
selection | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of *[selection](#selection)*.

Fired when the selection property is changed by the user.

## Change Events

### minimumChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*minimum*](#minimum).

Fired when the [*minimum*](#minimum) property has changed.

### maximumChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*maximum*](#maximum).

Fired when the [*maximum*](#maximum) property has changed.

### selectionChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*selection*](#selection).

Fired when the [*selection*](#selection) property has changed.

### tintColorChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*tintColor*](#tintColor).

Fired when the [*tintColor*](#tintColor) property has changed.

