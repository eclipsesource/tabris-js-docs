---
---
# Class "Picker"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`Picker`](Picker.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\Picker.png 2x" src="img\android\Picker.png" alt="Picker on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\Picker.png 2x" src="img\ios\Picker.png" alt="Picker on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<Picker/>`
  * Parent element: [`<Composite/>`](Composite.md) and any widget extending <span style="white-space:nowrap;">[`Composite`](Composite.md)</span>
  * Child elements: *None*
  * Text content: *Not supported*
* Direct subclasses: *None*
--------
A widget with a drop-down list of items to choose from.


Example:
```js
import {Picker, contentView} from 'tabris';

// Create a picker widget to select a string from a list

const AIRPORTS = [
  {
    id: 'SFO',
    name: 'San Francisco'
  },
  {
    id: 'TXL',
    name: 'Berlin Tegel'
  },
  {
    id: 'FRA',
    name: 'Frankfurt'
  }
];

const picker = new Picker({
  left: 20, top: 20, right: 20,
  itemCount: AIRPORTS.length,
  itemText: (index) => AIRPORTS[index].name,
  selectionIndex: 1
}).appendTo(contentView);

picker.on('select', ({index}) => console.log('Selected ' + AIRPORTS[index].id));
```
See also:

- [Simple Picker snippet](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/picker.js)

## Constructor

### new Picker(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof Picker>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### borderColor


* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



The color of the border of the Picker. On iOS this is a rectangular border around the Picker, on Android it is a single line below the Picker.

### fillColor
<p class="platforms"> < span class = 'ios-tag' title = 'supported on iOS' > iOS < /span></p>

* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



The color of the background of the Picker - applies only to iOS.

### itemCount


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *Yes*



The number of items to display.

### itemText


* Type: <span style="white-space:nowrap;">`(index: number) => string`</span>
* Settable: *Yes*



A function that returns the string to display for a given index.

### selectionIndex


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *Yes*



The index of the currently selected item.

### textColor


* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



The color of the text.


## Events

### select

Parameter|Type|Description
-|-|-
index | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Contains the index of the selected item.

Fired when an item was selected by the user.

## Change Events

### itemCountChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*itemCount*](#itemCount).

Fired when the [*itemCount*](#itemCount) property has changed.

### itemTextChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`(index: number) => string`</span> | The new value of [*itemText*](#itemText).

Fired when the [*itemText*](#itemText) property has changed.

### selectionIndexChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*selectionIndex*](#selectionIndex).

Fired when the [*selectionIndex*](#selectionIndex) property has changed.

### fillColorChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*fillColor*](#fillColor).

Fired when the [*fillColor*](#fillColor) property has changed.

### borderColorChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*borderColor*](#borderColor).

Fired when the [*borderColor*](#borderColor) property has changed.

### textColorChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*textColor*](#textColor).

Fired when the [*textColor*](#textColor) property has changed.

