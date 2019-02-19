---
---
# Class "InactivityTimer"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`InactivityTimer`](InactivityTimer.md)</span>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support: *No*
* Direct subclasses: *None*
--------
A timer that triggers when the app has not been interacted with for a configurable interval.


Example:
```js
import {Button, InactivityTimer, TextView, contentView} from 'tabris';

const timer = new InactivityTimer({
  delay: 2000
}).on('timeout', () => label.text = 'inactive!');

const label = new TextView({
  centerX: 0, top: 16,
  text: ''
}).appendTo(contentView);

new Button({
  centerX: 0, top: 'prev()',
  text: 'Start'
}).on('select', () => {
  timer.start();
  label.text = 'started';
}).appendTo(contentView);

new Button({
  centerX: 0, top: 'prev()',
  text: 'Cancel'
}).on('select', () => {
  timer.cancel();
  label.text = 'cancelled';
}).appendTo(contentView);
```
## Constructor

### new InactivityTimer(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof InactivityTimer>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Methods

### cancel()

* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Stops and resets the timer.

### start()

* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Starts the timer with the currently configured delay. After the first `timeout` event, the timer will stop but it can be started again.


## Properties

### delay


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Default `0`
* Settable: *Yes*



The interval of user inactivity that will trigger the timer. Given in milliseconds. Changes to this property will not affect a running timer.


## Events

### timeout

Fired when the app has not been interacted with since the configured delay.

## Change Events

### delayChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*delay*](#delay).

Fired when the [*delay*](#delay) property has changed.

