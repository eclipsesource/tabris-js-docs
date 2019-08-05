---
---
# Class "FormData"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`FormData`](FormData.md)</span>

FormData provides a way to construct a set of key/value pairs which can then be sent using fetch() or XMLHttpRequest. It uses the same format a HTML form would use if the encoding type were set to `multipart/form-data`.


Constructor | *public*
Singleton | *No*
Namespace |`global`
Direct subclasses | *None*
JSX support | *No*


## Constructor

### new FormData()


## Methods

### append(key, value)



Adds a string value associated with a given key. Any existing values for that key will be retained.


Parameter|Type|Optional|Description
-|-|-|-
key | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### append(key, value, filename?)



Adds binary data associated with a given key. Will be stored as an instance of `File` with its `name` set to the given `filename` parameter. If no `filename` is given and the value is not already a named `File` instance it will default to `'blob'`. Any existing values for that key will be retained.


Parameter|Type|Optional|Description
-|-|-|-
key | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
value | <span style="white-space:nowrap;">[`Blob`](Blob.md) \| [`File`](File.md)</span> | No | 
filename | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | Yes | 


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### delete(key)



Removes all values associated with a given key.


Parameter|Type|Optional|Description
-|-|-|-
key | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### entries()



Returns <span style="white-space:nowrap;">`IterableIterator<[string, string` \| `File]>`</span>

### get(key)



Returns the first value associated with a given key.


Parameter|Type|Optional|Description
-|-|-|-
key | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 


Returns <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [`File`](File.md) \| [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)</span>

### getAll(key)



Returns all the values associated with a given key.


Parameter|Type|Optional|Description
-|-|-|-
key | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 


Returns <span style="white-space:nowrap;">`Array<string` \| `File>`</span>

### has(key)



Returns true if there are any values associated with a given key.


Parameter|Type|Optional|Description
-|-|-|-
key | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 


Returns <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>

### keys()



Returns <span style="white-space:nowrap;">`IterableIterator<string>`</span>

### set(key, value)



Adds a string value associated with a given key. Any existing values for that key will be replaced.


Parameter|Type|Optional|Description
-|-|-|-
key | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### set(key, value, filename?)



Adds binary data associated with a given key. Will be stored as an instance of `File` with its `name` set to the given `filename` parameter. If no `filename` is given and the value is not already a named `File` instance it will default to `'blob'`. Any existing values for that key will be replaced.


Parameter|Type|Optional|Description
-|-|-|-
key | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
value | <span style="white-space:nowrap;">[`Blob`](Blob.md) \| [`File`](File.md)</span> | No | 
filename | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | Yes | 


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### values()



Returns <span style="white-space:nowrap;">`IterableIterator<string` \| `File>`</span>

