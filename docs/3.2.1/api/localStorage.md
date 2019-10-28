---
---
# Global object "localStorage"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >Storage</a>

The `localStorage` object allows storing key-value pairs in a persistent store. Both keys and values are stored as strings.

On iOS, there is an additional object `secureStorage` available in the global scope. This is a drop-in replacement for `localStorage` that keeps data in the encrypted iOS Keychain.

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
  
[<span class='language jsx'>JSX</span> A example how to read and write from the `localStorage`](https://playground.tabris.com/?gitref=v3.2.0&snippet=local-storage.jsx)

## Methods

### clear()



Remove all key/value pairs from the storage.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### getItem(key)



Retrieves the value associated with the given key.


Parameter|Type|Description
-|-|-
key | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>

### key(index)



Returns the name of the key at the given index in the storage. The order of keys is platform dependent, you should not rely on it to be deterministic


Parameter|Type|Description
-|-|-
index | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>

### removeItem(key)



Removes the given key/value pair from the storage.


Parameter|Type|Description
-|-|-
key | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### setItem(key, value)



Stores a string value using the given key.


Parameter|Type|Description
-|-|-
key | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>


## Properties

### length


The number of items in the storage.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | No



This property can only be set via constructor. Once set, it cannot change anymore.



