---
---
# Class "InactivityTimer"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a> > <a href="#" >InactivityTimer</a>

A timer that triggers when the app has not been interacted with for a configurable interval.


Type: | <code style="white-space: nowrap">InactivityTimer extends <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a></code>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


## Examples
### JavaScript


```js
import {InactivityTimer} from 'tabris';

new InactivityTimer({delay: 2000})
  .onTimeout(() => console.log('Inactive'));
```


See also:
  
[<span class='language js'>JS</span> inactivitytimer.js](https://playground.tabris.com/?gitref=v3.6.0&snippet=inactivitytimer.js)

## Constructor

### new InactivityTimer(properties?)

Parameter|Type|Description
-|-|-
properties | <code style="white-space: nowrap"><a href="../types.html#propertieswidget" title="Properties&lt;Widget&gt;">Properties</a>&lt;<a href="#" >InactivityTimer</a>&gt;</code> | Sets all key-value pairs in the properties object as widget properties. *Optional.*

## Methods

### cancel()



Stops and resets the timer.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### start()



Starts the timer with the currently configured delay. After the first `timeout` event, the timer will stop but it can be started again.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>


## Properties

### delay


The interval of user inactivity that will trigger the timer. Given in milliseconds. Changes to this property will not affect a running timer.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">0</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`delayChanged`](#delaychanged)





## Events

### timeout

Fired when the app has not been interacted with since the configured delay.

EventObject Type: <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a>&lt;<a href="#" >InactivityTimer</a>&gt;</code>

This event has no additional parameter.
## Change Events

### delayChanged

Fired when the [delay](#delay) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >InactivityTimer</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The new value of [delay](#delay).

