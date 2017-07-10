---
---
# InactivityTimer

Extends [NativeObject](NativeObject.md)

A timer that triggers when the app has not been interacted with for a configurable interval.

Import this type with "`const {InactivityTimer} = require('tabris');`"

## Methods

### cancel()

Stops and resets the timer.

### start()

Starts the timer with the currently configured delay. After the first `timeout` event, the timer will stop but it can be started again.


## Properties

### delay

Type: *number*, default: `0`

The interval of user inactivity that will trigger the timer. Given in milliseconds. Changes to this property will not affect a running timer.


## Events

### delayChanged

Fired when the [*delay*](#delay) property has changed.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *number*
    The new value of [*delay*](#delay).


### timeout

Fired when the app has not been interacted with since the configured delay.



## Example

```js
const {Button, InactivityTimer, TextView, ui} = require('tabris');

let timer = new InactivityTimer({
  delay: 2000
}).on('timeout', () => label.text = 'inactive!');

let label = new TextView({
  centerX: 0, top: 16,
  text: ''
}).appendTo(ui.contentView);

new Button({
  centerX: 0, top: 'prev()',
  text: 'Start'
}).on('select', () => {
  timer.start();
  label.text = 'started';
}).appendTo(ui.contentView);

new Button({
  centerX: 0, top: 'prev()',
  text: 'Cancel'
}).on('select', () => {
  timer.cancel();
  label.text = 'cancelled';
}).appendTo(ui.contentView);
```