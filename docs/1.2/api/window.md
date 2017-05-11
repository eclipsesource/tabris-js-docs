# window
The object `window` is the global object. All fields of windows are also global variables and vice versa. For compatibility it is also known as `global` and `self`.

## Methods
### clearInterval(id)


**Parameters:** 

- id: *intervalID*, the ID that was returned by `setInterval`.

Cancels the running interval associated with the given id. When given an invalid ID, nothing happens.

### clearTimeout(id)


**Parameters:** 

- id: *timeoutID*, the ID that was returned by `setTimeout`.

Cancels the running timeout associated with the given id. When given an invalid ID, nothing happens.

### setInterval(callback, delay)


**Parameters:** 

- callback: *Function*, the function to call.
- delay: *number*, the delay in milliseconds.

**Returns:** *intervalID*

Calls the given function repeatedly, each times waiting the given delay. The actual delay may be slightly longer than the given one.

### setInterval(callback, delay, param*)


**Parameters:** 

- callback: *Function*, the function to call.
- delay: *number*, the delay in milliseconds.
- param*: *mixed*, one ore more values passed on to the callback.

**Returns:** *intervalID*

Calls the given function repeatedly, each times waiting the given delay. The actual delay may be slightly longer than the given one.

### setTimeout(callback)


**Parameters:** 

- callback: *Function*, the function to call.

**Returns:** *timeoutID*

Calls the given function as soon as the current javascript thread is no longer busy. Same as `setTimeout(callback, 0)`.

### setTimeout(callback, delay)


**Parameters:** 

- callback: *Function*, the function to call.
- delay: *number*, the delay in milliseconds.

**Returns:** *timeoutID*

Calls the given function after the specified delay. The actual delay may be slightly longer than the given one.

### setTimeout(callback, delay, param*)


**Parameters:** 

- callback: *Function*, the function to call.
- delay: *number*, the delay in milliseconds.
- param*: *mixed*, one ore more values passed on to the callback.

**Returns:** *timeoutID*

Calls the given function with `param` (and all following parameters) after the specified delay. The actual delay may be slightly longer than the given one.

