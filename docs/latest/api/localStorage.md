---
---
# Global object "localStorage"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >Storage</a>

The `localStorage` object allows storing key-value pairs in a persistent store. Both keys and values are stored as strings.

In addition Tabris.js adds support for a `secureStorage` available in the global scope. This is a drop-in replacement for `localStorage` that keeps data encrypted using the Keychain on iOS and the AndroidKeyStore on Android 6+. Note that on Android 5 the store is encrypted but does not use hardware encryption.

The `localStorage` is only meant to store relatively short strings. To store larger amounts of data it is recommended to use the [FileSystem](./fs.html) API.


Type: | <code style="white-space: nowrap">Storage extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a></code>
Constructor: | private
Singleton: | `localStorage`
Namespace: |<a href="../modules.html#startup" >global</a>
Direct subclasses: | None
JSX Support: | No


## Examples
### JavaScript


```js
localStorage.setItem('message', 'Hello World!');
console.log(localStorage.getItem('message')); // "Hello World!"
```



See also:
  
[<span class='language jsx'>JSX</span> A example how to read and write from the `localStorage`](https://github.com/eclipsesource/tabris-js/tree/v3.7.2/snippets/local-storage.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.7.2&snippet=local-storage.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>

## Methods

### clear()



Remove all key/value pairs from the storage.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### getItem(key)



Retrieves the value associated with the given key.


Parameter|Type|Description
-|-|-
key | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code>

### key(index)



Returns the name of the key at the given index in the storage. The order of keys is platform dependent, you should not rely on it to be deterministic


Parameter|Type|Description
-|-|-
index | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code>

### removeItem(key)



Removes the given key/value pair from the storage.


Parameter|Type|Description
-|-|-
key | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### setItem(key, value)



Stores a string value using the given key.


Parameter|Type|Description
-|-|-
key | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | 
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>


## Properties

### length


The number of items in the storage.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | No





