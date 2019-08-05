---
---
# Class "InactivityTimer"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`InactivityTimer`](InactivityTimer.md)</span>

A timer that triggers when the app has not been interacted with for a configurable interval.


Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | *No*


## Example
```js
import {InactivityTimer} from 'tabris';

new InactivityTimer({delay: 2000})
  .onTimeout(() => console.log('Inactive'));
```

See also:
  
[<span class='language js'>JS</span> inactivitytimer.js](https://playground.tabris.com/?gitref=v3.1.0&snippet=inactivitytimer.js)

## Constructor

### new InactivityTimer(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<InactivityTimer>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Methods

### cancel()



Stops and resets the timer.

Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### start()



Starts the timer with the currently configured delay. After the first `timeout` event, the timer will stop but it can be started again.

Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>


## Properties

### delay


The interval of user inactivity that will trigger the timer. Given in milliseconds. Changes to this property will not affect a running timer.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Default | `0`
Settable | *Yes*
Change events | *Yes*





## Events

### timeout

Fired when the app has not been interacted with since the configured delay.

## Change Events

### delayChanged

Fired when the [*delay*](#delay) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*delay*](#delay).

