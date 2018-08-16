---
---
# localStorage

The `localStorage` object allows storing key-value pairs in a persistent store. Both keys and values are stored as strings.

On iOS, there is an additional object `secureStorage` available in the global scope. This is a drop-in replacement for `localStorage` that keeps data in the encrypted iOS Keychain.

The `localStorage` is only meant to store relatively short strings. To store larger amounts of data it is recommended to use the [FileSystem](./fs.html) API.

This object is available in the global namespace. You do not need to import it explicitly.

## Methods

### clear()


Remove all key/value pairs from the storage.

### getItem(key)


**Parameters:** 

- key: *string*

**Returns:** *string*

Retrieves the value associated with the given key.

### removeItem(key)


**Parameters:** 

- key: *string*

Removes the given key/value pair from the storage.

### setItem(key, value)


**Parameters:** 

- key: *string*
- value: *string*

Stores a string value using the given key.

