---
---
# Class "Switch"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`Switch`](Switch.md)</span>

A switch widget that can be toggled.


<div class="tabris-image"><figure><div><img srcset="img/android/Switch.png 2x" src="img/android/Switch.png" alt="Switch on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/Switch.png 2x" src="img/ios/Switch.png" alt="Switch on iOS"/></div><figcaption>iOS</figcaption></figure></div>

Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | Element: `<Switch/>`<br/>Parent element: [`<Composite/>`](Composite.md) *and any widget extending* <span style="white-space:nowrap;">[`Composite`](Composite.md)</span><br/>Child elements: *None*<br/>Text content: *Not supported*<br/>

## Example
```js
import {Switch, contentView} from 'tabris';

new Switch()
  .onSelect(() => console.log('Switch toggled'))
  .appendTo(contentView);
```

See also:
  
[<span class='language jsx'>JSX</span> Creating a Switch](https://playground.tabris.com/?gitref=v3.1.0&snippet=switch.jsx)

## Constructor

### new Switch(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<Switch>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### checked


The checked state of the switch.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Default | `false`
Settable | *Yes*
Change events | *Yes*




### thumbOffColor


The color of the movable thumb, when switched *off*.

Type | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
Settable | *Yes*
Change events | *Yes*




### thumbOnColor


The color of the movable thumb, when switched *on*.

Type | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
Settable | *Yes*
Change events | *Yes*




### trackOffColor


The color of the track that holds the thumb, when switched *off*.

Type | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
Settable | *Yes*
Change events | *Yes*




### trackOnColor


The color of the track that holds the thumb, when switched *on*.

Type | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
Settable | *Yes*
Change events | *Yes*





## Events

### select

Fired when the switch is toggled by the user.

Parameter|Type|Description
-|-|-
checked | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The current value of *[checked](#checked)*.

## Change Events

### checkedChanged

Fired when the [*checked*](#checked) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*checked*](#checked).

### thumbOnColorChanged

Fired when the [*thumbOnColor*](#thumboncolor) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*thumbOnColor*](#thumboncolor).

### thumbOffColorChanged

Fired when the [*thumbOffColor*](#thumboffcolor) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*thumbOffColor*](#thumboffcolor).

### trackOnColorChanged

Fired when the [*trackOnColor*](#trackoncolor) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*trackOnColor*](#trackoncolor).

### trackOffColorChanged

Fired when the [*trackOffColor*](#trackoffcolor) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*trackOffColor*](#trackoffcolor).

