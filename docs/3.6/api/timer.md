---
---
# Timer

## Examples
### JavaScript


```js
setTimeout(() => console.log('Timer finished after 2 seconds'), 2000);
```


See also:
  
[<span class='language jsx'>JSX</span> timer.jsx](https://playground.tabris.com/?gitref=v3.6.1&snippet=timer.jsx)

## Methods

### clearInterval(id)



Cancels the running interval associated with the given ID. When given an invalid ID, nothing happens.


Parameter|Type|Description
-|-|-
id | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code> | The ID that was returned by `setInterval`.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### clearTimeout(id)



Cancels the running timeout associated with the given ID. When given an invalid ID, nothing happens.


Parameter|Type|Description
-|-|-
id | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code> | The ID that was returned by `setTimeout`.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### setInterval(callback, delay?, ...params)



Calls the given function repeatedly, each times waiting the given delay. The actual delay may be slightly longer than the given one.


Parameter|Type|Description
-|-|-
callback | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a></code> | The function to call.
delay | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The delay in milliseconds. *Optional.*
...params | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a>[]</code> | One or more values passed on to the callback.


Returns: <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code>

### setTimeout(callback, delay?, ...params)



Calls the given function with `param` (and all following parameters) after the specified delay. The actual delay may be slightly longer than the given one.


Parameter|Type|Description
-|-|-
callback | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a></code> | The function to call.
delay | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The delay in milliseconds. *Optional.*
...params | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a>[]</code> | One or more values passed on to the callback.


Returns: <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code>

