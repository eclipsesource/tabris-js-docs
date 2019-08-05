---
---
# Class "Slider"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`Slider`](Slider.md)</span>

A widget representing a numeric value as an movable indicator on a horizontal line.


<div class="tabris-image"><figure><div><img srcset="img/android/Slider.png 2x" src="img/android/Slider.png" alt="Slider on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/Slider.png 2x" src="img/ios/Slider.png" alt="Slider on iOS"/></div><figcaption>iOS</figcaption></figure></div>

Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | Element: `<Slider/>`<br/>Parent element: [`<Composite/>`](Composite.md) *and any widget extending* <span style="white-space:nowrap;">[`Composite`](Composite.md)</span><br/>Child elements: *None*<br/>Text content: *Not supported*<br/>

## Example
```js
import {Slider, contentView} from 'tabris';

new Slider({
  left: 16, right: 16,
  selection: 50
}).onSelect(({selection}) => console.log(`Slider is at ${selection}`))
  .appendTo(contentView);
```

See also:
  
[<span class='language jsx'>JSX</span> Creating a simple `Slider`](https://playground.tabris.com/?gitref=v3.1.0&snippet=slider.jsx)

## Constructor

### new Slider(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties&lt;Slider&gt;`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### maximum


The maximum value.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Default | `100`
Settable | *Yes*
Change events | *Yes*




### minimum


The minimum value.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Default | `0`
Settable | *Yes*
Change events | *Yes*




### selection


The actual value.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Default | `0`
Settable | *Yes*
Change events | *Yes*




### tintColor


The color used to display the current selection.

Type | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
Settable | *Yes*
Change events | *Yes*





## Events

### select

Fired when the selection property is changed by the user.

Parameter|Type|Description
-|-|-
selection | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of *[selection](#selection)*.

## Change Events

### minimumChanged

Fired when the [*minimum*](#minimum) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*minimum*](#minimum).

### maximumChanged

Fired when the [*maximum*](#maximum) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*maximum*](#maximum).

### selectionChanged

Fired when the [*selection*](#selection) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*selection*](#selection).

### tintColorChanged

Fired when the [*tintColor*](#tintcolor) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*tintColor*](#tintcolor).

