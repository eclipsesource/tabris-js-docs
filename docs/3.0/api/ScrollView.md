---
---
# Class "ScrollView"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`Composite`](Composite.md)</span> > <span style="white-space:nowrap;">[`ScrollView`](ScrollView.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\ScrollView.png 2x" src="img\android\ScrollView.png" alt="ScrollView on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\ScrollView.png 2x" src="img\ios\ScrollView.png" alt="ScrollView on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<ScrollView/>`
  * Parent element: [`<Composite/>`](Composite.md) and any widget extending <span style="white-space:nowrap;">[`Composite`](Composite.md)</span>
  * Child elements: *Widgets*
  * Text content: *Not supported*
* Direct subclasses: *None*
--------
A composite that allows its content to overflow either vertically (default) or horizontally. Since the ScrollView does not compute its own size, the width and height must be defined by the respective layout properties (e.g. either `width` or `left` and `right` must be specified).


Example:
```js
import {Button, ScrollView, TextView, contentView} from 'tabris';

// Create a horizontal scroll view and populate it with text views

const scrollView = new ScrollView({
  left: 0, right: 0, top: '40%', bottom: '40%',
  direction: 'horizontal',
  background: '#234'
}).appendTo(contentView);

for (let i = 0; i <= 50; i++) {
  new TextView({
    left: i * 30 + 20, centerY: 0, width: 30,
    textColor: 'white',
    text: i + '°'
  }).appendTo(scrollView);
}

new Button({
  left: 16, bottom: 16,
  text: 'scroll'
}).on('select', () => scrollView.scrollToX(310))
  .appendTo(contentView);
```
See also:

- [Simple ScrollView snippet](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/scrollview.js)
- [Example using a ScrollView](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/examples/parallax/parallax.js)

## Constructor

### new ScrollView(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof ScrollView>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Methods

### scrollToX(offset, options?)



Parameter|Type|Optional|Description
-|-|-|-
offset | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The offset to scroll to in dip.
options | <span style="white-space:nowrap;">`{animate?: boolean}`</span> | Yes | An additional object to control the animation. Set to `{animate: false}` to scroll without an animation.
* Returns: <span style="white-space:nowrap;">[`this`](#)</span>

Scrolls to the given horizontal offset. Give `{animate: false}` as the second parameter to suppress the animation.

### scrollToY(offset, options?)



Parameter|Type|Optional|Description
-|-|-|-
offset | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | The offset to scroll to in dip.
options | <span style="white-space:nowrap;">`{animate?: boolean}`</span> | Yes | An additional object to control the animation. Set to `{animate: false}` to scroll without an animation.
* Returns: <span style="white-space:nowrap;">[`this`](#)</span>

Scrolls to the given vertical offset. Give `{animate: false}` as the second parameter to suppress the animation.


## Properties

### direction


* Type: `'vertical'` | `'horizontal'`
* Default `'vertical'`
* Settable: *On creation*



Specifies the scrolling direction of the scroll composite.

This property can only be set via constructor or JSX. Once set, it cannot change anymore.

### offsetX


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *No*



The horizontal scrolling position in dip.

### offsetY


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *No*



The vertical scrolling position in dip.

### scrollbarVisible


* Type: <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
* Default `true`
* Settable: *Yes*



Allows to show or hide scroll bar for current direction.


## Events

### scrollX

Parameter|Type|Description
-|-|-
offset | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Indicates the current horizontal scrolling position.

Fired while scrolling horizontally.

### scrollY

Parameter|Type|Description
-|-|-
offset | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Indicates the current vertical scrolling position.

Fired while scrolling vertically.

## Change Events

### offsetXChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*offsetX*](#offsetX).

Fired when the [*offsetX*](#offsetX) property has changed.

### offsetYChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*offsetY*](#offsetY).

Fired when the [*offsetY*](#offsetY) property has changed.

### scrollbarVisibleChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*scrollbarVisible*](#scrollbarVisible).

Fired when the [*scrollbarVisible*](#scrollbarVisible) property has changed.

