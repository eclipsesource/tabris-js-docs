# InactivityTimer

A timer that triggers when the app has not been interacted with for a configurable interval.

## Methods

### cancel()



**Parameters:** 



Stops and resets the timer.


### start()



**Parameters:** 



Starts the timer with the currently configured delay. After the first `timeout` event, the timer will stop but it can be started again.



## Properties

### delay

Type: *number*, default: `0`

The interval of user inactivity that will trigger the timer. Given in milliseconds. Changes to this property will not affect a running timer.


## Events

### "timeout" (target)

**Parameters:** 

- target: *this*

Fired when the app has not been interacted with since the configured delay.


