---
---
# Class "Switch"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`Switch`](Switch.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\Switch.png 2x" src="img\android\Switch.png" alt="Switch on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\Switch.png 2x" src="img\ios\Switch.png" alt="Switch on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<Switch/>`
  * Parent element: [`<Composite/>`](Composite.md) and any widget extending <span style="white-space:nowrap;">[`Composite`](Composite.md)</span>
  * Child elements: *None*
  * Text content: *Not supported*
* Direct subclasses: *None*
--------
A switch widget that can be toggled.


Example:
```js
import {Button, Switch, TextView, contentView} from 'tabris';

// Create a switch with a checked handler

const MARGIN = 16;

new Switch({
  left: MARGIN, top: MARGIN,
  id: 'switch',
  checked: true
}).on('checkedChanged', ({value: checked}) => {
  contentView.find('#stateView').first().text = checked ? 'State: checked' : 'State: unchecked';
}).appendTo(contentView);

new TextView({
  left: ['#switch', MARGIN], baseline: '#switch',
  id: 'stateView',
  text: 'State: checked'
}).appendTo(contentView);

new Button({
  left: MARGIN, top: ['#switch', MARGIN],
  text: 'Toggle Switch'
}).on('select', () => {
  const switcher = contentView.find('#switch').first();
  switcher.checked = !switcher.checked;
}).appendTo(contentView);
```
## Constructor

### new Switch(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof Switch>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### checked


* Type: <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
* Default `false`
* Settable: *Yes*



The checked state of the switch.

### thumbOffColor


* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



The color of the movable thumb, when switched *off*.

### thumbOnColor


* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



The color of the movable thumb, when switched *on*.

### trackOffColor


* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



The color of the track that holds the thumb, when switched *off*.

### trackOnColor


* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



The color of the track that holds the thumb, when switched *on*.


## Events

### select

Parameter|Type|Description
-|-|-
checked | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The current value of *[checked](#checked)*.

Fired when the switch is toggled by the user.

## Change Events

### checkedChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*checked*](#checked).

Fired when the [*checked*](#checked) property has changed.

### thumbOnColorChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*thumbOnColor*](#thumbOnColor).

Fired when the [*thumbOnColor*](#thumbOnColor) property has changed.

### thumbOffColorChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*thumbOffColor*](#thumbOffColor).

Fired when the [*thumbOffColor*](#thumbOffColor) property has changed.

### trackOnColorChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*trackOnColor*](#trackOnColor).

Fired when the [*trackOnColor*](#trackOnColor) property has changed.

### trackOffColorChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*trackOffColor*](#trackOffColor).

Fired when the [*trackOffColor*](#trackOffColor) property has changed.

