---
---
# Global object "localStorage"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`Storage`](Storage.md)</span>

The `localStorage` object allows storing key-value pairs in a persistent store. Both keys and values are stored as strings.

On iOS, there is an additional object `secureStorage` available in the global scope. This is a drop-in replacement for `localStorage` that keeps data in the encrypted iOS Keychain.

The `localStorage` is only meant to store relatively short strings. To store larger amounts of data it is recommended to use the [FileSystem](./fs.html) API.


Constructor | *private*
Singleton | `localStorage`
Namespace |`global`
Direct subclasses | *None*
JSX support | *No*


## Example
```js
localStorage.setItem("message", "Hello World!");
console.log(localStorage.getItem("message")); // "Hello World!"
```

## Methods

### clear()



Remove all key/value pairs from the storage.

Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### getItem(key)



Retrieves the value associated with the given key.


Parameter|Type|Optional|Description
-|-|-|-
key | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 


Returns <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>

### key(index)



Returns the name of the key at the given index in the storage. The order of keys is platform dependent, you should not rely on it to be deterministic


Parameter|Type|Optional|Description
-|-|-|-
index | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | 


Returns <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>

### removeItem(key)



Removes the given key/value pair from the storage.


Parameter|Type|Optional|Description
-|-|-|-
key | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### setItem(key, value)



Stores a string value using the given key.


Parameter|Type|Optional|Description
-|-|-|-
key | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>


## Properties

### length


The number of items in the storage.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

