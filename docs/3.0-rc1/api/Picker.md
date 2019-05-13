---
---
# Class "Picker"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`Picker`](Picker.md)</span>

A widget with a drop-down list of items to choose from.


<div class="tabris-image"><figure><div><img srcset="img\android\Picker.png 2x" src="img\android\Picker.png" alt="Picker on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\Picker.png 2x" src="img\ios\Picker.png" alt="Picker on iOS"/></div><figcaption>iOS</figcaption></figure></div>

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

- [Creating a simple `Picker`](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-rc1/snippets/picker.js)

## Constructor

### new Picker(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<Picker> & Partial<Pick<Picker, 'itemText'>>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Methods

### set(properties)



Sets all key-value pairs in the properties object as widget properties.

**Important TypeScript note:** When called on `this` you may need to specify your custom type like this: `this.set<MyComponent>({propA: valueA});`


Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<T> & Partial<Pick<this, 'itemText'>>`</span> | No | 


Returns <span style="white-space:nowrap;">[`this`](#)</span>


## Properties

### borderColor


The color of the Picker border. This can be the surrounding line or the underline of the Picker depending on the `style` property.

Type | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
Settable | *Yes*
Change events | *Yes*




### floatMessage
<p class="platforms"><span class='android-tag' title='supported on Android'>Android</span></p>

Whether the hint message should float above the Picker when focus is gained.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Default | `true`
Settable | *Yes*
Change events | *Yes*




### font


The font used for the text inside the Picker.

Type | <span style="white-space:nowrap;">[`FontValue`](../types.md#fontvalue)</span>
Settable | *Yes*
Change events | *Yes*




### itemCount


The number of items to display.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *Yes*
Change events | *Yes*




### itemText


A function that returns the string to display for a given index.

Type | <span style="white-space:nowrap;">`(index: number) => string`</span>
Settable | *Yes*
Change events | *Yes*




### message


A hint text that is displayed when the picker has no selection.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *Yes*
Change events | *Yes*




### selectionIndex


The index of the currently selected item.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *Yes*
Change events | *Yes*




### style
<p class="platforms"><span class='android-tag' title='supported on Android'>Android</span></p>

The visual appearance of the `Picker` widget.

With the `style` _outline_, _fill_ or _underline_ the message hint will float above the `Picker` on Android. This behavior can be controlled with the property `floatMessage`. The `style` _none_ will remove any background visualization, allowing to create a custom background. 

Type | `'default'` \| `'outline'` \| `'fill'` \| `'underline'` \| `'none'`
Default | `'default'`
Settable | *On creation*
Change events | *No*




This property can only be set via constructor or JSX. Once set, it cannot change anymore.

### textColor


The color of the text.

Type | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
Settable | *Yes*
Change events | *Yes*





## Events

### select

Fired when an item was selected by the user.

Parameter|Type|Description
-|-|-
index | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Contains the index of the selected item.

## Change Events

### messageChanged

Fired when the [*message*](#message) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*message*](#message).

### floatMessageChanged

Fired when the [*floatMessage*](#floatmessage) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*floatMessage*](#floatmessage).

### itemCountChanged

Fired when the [*itemCount*](#itemcount) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*itemCount*](#itemcount).

### itemTextChanged

Fired when the [*itemText*](#itemtext) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`(index: number) => string`</span> | The new value of [*itemText*](#itemtext).

### selectionIndexChanged

Fired when the [*selectionIndex*](#selectionindex) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*selectionIndex*](#selectionindex).

### borderColorChanged

Fired when the [*borderColor*](#bordercolor) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*borderColor*](#bordercolor).

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

