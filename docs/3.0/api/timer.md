---
---
# Timer

## Example
```js
setTimeout(() => console.log('Timer finished after 2 seconds'), 2000);
```

See also:

- [Demo TypeScript/JSX Snippet: timer.tsx](https://playground.tabris.com/?gitref=v3.0.0&snippet=timer.tsx)

## Methods

### clearInterval(id)



Cancels the running interval associated with the given ID. When given an invalid ID, nothing happens.


Parameter|Type|Optional|Description
-|-|-|-
id | <span style="white-space:nowrap;">[`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)</span> | No | The ID that was returned by `setInterval`.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### clearTimeout(id)



Cancels the running timeout associated with the given ID. When given an invalid ID, nothing happens.


Parameter|Type|Optional|Description
-|-|-|-
id | <span style="white-space:nowrap;">[`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)</span> | No | The ID that was returned by `setTimeout`.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### setInterval(callback, delay?, ...params)



Calls the given function repeatedly, each times waiting the given delay. The actual delay may be slightly longer than the given one.


Parameter|Type|Optional|Description
-|-|-|-
callback | <span style="white-space:nowrap;">`Function`</span> | No | The function to call.
delay | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Yes | The delay in milliseconds.
...params | <span style="white-space:nowrap;">`any[]`</span> | No | One or more values passed on to the callback.


Returns <span style="white-space:nowrap;">[`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)</span>

### setTimeout(callback, delay?, ...params)



Calls the given function with `param` (and all following parameters) after the specified delay. The actual delay may be slightly longer than the given one.


Parameter|Type|Optional|Description
-|-|-|-
callback | <span style="white-space:nowrap;">`Function`</span> | No | The function to call.
delay | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Yes | The delay in milliseconds.
...params | <span style="white-space:nowrap;">`any[]`</span> | No | One or more values passed on to the callback.


Returns <span style="white-space:nowrap;">[`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)</span>

