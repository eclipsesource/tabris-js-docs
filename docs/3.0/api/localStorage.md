---
---
# Global object "localStorage"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`Storage`](Storage.md)</span>

* Constructor: *private*
* Singleton: `localStorage`
* Namespace: `global`
* JSX support: *No*
* Direct subclasses: *None*
--------
The `localStorage` object allows storing key-value pairs in a persistent store. Both keys and values are stored as strings.

On iOS, there is an additional object `secureStorage` available in the global scope. This is a drop-in replacement for `localStorage` that keeps data in the encrypted iOS Keychain.

The `localStorage` is only meant to store relatively short strings. To store larger amounts of data it is recommended to use the [FileSystem](./fs.html) API.


## Methods

### clear()

* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Remove all key/value pairs from the storage.

### getItem(key)



Parameter|Type|Optional|Description
-|-|-|-
key | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
* Returns: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>

Retrieves the value associated with the given key.

### key(index)



Parameter|Type|Optional|Description
-|-|-|-
index | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | 
* Returns: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>

Returns the name of the key at the given index in the storage. The order of keys is platform dependent, you should not rely on it to be deterministic

### removeItem(key)



Parameter|Type|Optional|Description
-|-|-|-
key | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Removes the given key/value pair from the storage.

### setItem(key, value)



Parameter|Type|Optional|Description
-|-|-|-
key | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Stores a string value using the given key.


## Properties

### length


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *No*



The number of items in the storage.


## Change Events

### lengthChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*length*](#length).

Fired when the [*length*](#length) property has changed.

