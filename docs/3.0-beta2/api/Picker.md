---
---
# Class "Picker"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`Picker`](Picker.md)</span>

A widget with a drop-down list of items to choose from.


<div class="tabris-image"><figure><div><img srcset="img/android/Picker.png 2x" src="img/android/Picker.png" alt="Picker on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/Picker.png 2x" src="img/ios/Picker.png" alt="Picker on iOS"/></div><figcaption>iOS</figcaption></figure></div>

Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | Element: `<Picker/>`<br/>Parent element: [`<Composite/>`](Composite.md) *and any widget extending* <span style="white-space:nowrap;">[`Composite`](Composite.md)</span><br/>Child elements: *None*<br/>Text content: *Not supported*<br/>

## Example
```js
import {contentView, Picker} from 'tabris';

const items = ['Apple', 'Banana', 'Cherry'];

new Picker({
  itemCount: items.length,
  itemText: index => items[index]
}).onSelect(event => console.log(`Selected ${items[event.index]}`))
  .appendTo(contentView);
```

See also:

- [Simple Picker snippet](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190311+1537/snippets/picker.js)

## Constructor

### new Picker(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<Picker> & Partial<Pick<Picker, 'itemText'>>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Methods

### set(properties)



Sets all key-value pairs in the properties object as widget properties.


Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<this> & Partial<Pick<this, 'itemText'>>`</span> | No | 


Returns <span style="white-space:nowrap;">[`this`](#)</span>


## Properties

### borderColor


The color of the border of the Picker. On iOS this is a rectangular border around the Picker, on Android it is a single line below the Picker.

Type | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
Settable | *Yes*




### fillColor
<p class="platforms"><span class='ios-tag' title='supported on iOS'>iOS</span></p>

The color of the background of the Picker - applies only to iOS.

Type | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
Settable | *Yes*




### itemCount


The number of items to display.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *Yes*




### itemText


A function that returns the string to display for a given index.

Type | <span style="white-space:nowrap;">`(index: number) => string`</span>
Settable | *Yes*




### selectionIndex


The index of the currently selected item.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *Yes*




### textColor


The color of the text.

Type | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
Settable | *Yes*





## Events

### select

Fired when an item was selected by the user.

Parameter|Type|Description
-|-|-
index | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Contains the index of the selected item.

## Change Events

### itemCountChanged

Fired when the [*itemCount*](#itemCount) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*itemCount*](#itemCount).

### itemTextChanged

Fired when the [*itemText*](#itemText) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`(index: number) => string`</span> | The new value of [*itemText*](#itemText).

### selectionIndexChanged

Fired when the [*selectionIndex*](#selectionIndex) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*selectionIndex*](#selectionIndex).

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

### textColorChanged

Fired when the [*textColor*](#textColor) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*textColor*](#textColor).

