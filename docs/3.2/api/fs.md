---
---
# Object "fs"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a> > <a href="#" >FileSystem</a>

The `fs` object provides methods to read and write files. All methods are asynchronous and return a promise.


Type: | <code style="white-space: nowrap">FileSystem extends <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a></code>
Constructor: | private
Singleton: | `fs`
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


## Examples
### JavaScript


```js
import {fs} from 'tabris';

fs.writeFile(fs.cacheDir + '/file.txt', 'Hello World!')
  .then(() => console.log('File written successfully'))
  .catch(error => console.error(error));
```


See also:
  
[<span class='language jsx'>JSX</span> Using the file system to read and write files](https://playground.tabris.com/?gitref=vundefined&snippet=fs.jsx)

## Methods

### readDir(path)



Reads the contents of a given directory. Returns a promise that resolves on success to an array of the names of the files in the directory excluding '.' and '..'. In case of failure, the Promise rejects with an Error.


Parameter|Type|Description
-|-|-
path | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The path of the directory to read.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a>[]&gt;</code>

### readFile(path)



Reads the given file and returns a promise that resolves to the contents of the file on success and rejects with an Error in case of a failure. The file contents are returned as an ArrayBuffer.


Parameter|Type|Description
-|-|-
path | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The path of the file to read.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a>&gt;</code>

### readFile(path, encoding)



Reads the given text file and returns a promise that resolves to the contents of the file on success and rejects with an Error in case of a failure. The file contents are returned as a string.


Parameter|Type|Description
-|-|-
path | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The path of the file to read.
encoding | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The encoding to use to read text files.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a>&gt;</code>

### removeFile(path)



Removes the given file. Returns a promise that resolves on success and rejects with an Error in case of a failure.


Parameter|Type|Description
-|-|-
path | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The path of the file to remove.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a></code>

### writeFile(path, data)



Writes the given binary contents to the given file. If the file exists, it is overwritten, otherwise it is created. Returns a promise that resolves on success and rejects with an Error in case of a failure.


Parameter|Type|Description
-|-|-
path | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The path of the file to write.
data | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a> &#124; <a href="Blob.html" title="Blob Class Reference">Blob</a></code> | The contents to write to the file.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a></code>

### writeFile(path, text, encoding?)



Writes the given text to the given file using the given encoding or `utf-8` if no encoding is specified. If the file exists, it is overwritten, otherwise it is created. Returns a promise that resolves on success and rejects with an Error in case of a failure.


Parameter|Type|Description
-|-|-
path | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The path of the file to write.
text | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The text to write to the file.
encoding | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The encoding to use to write a text file. When omitted, `utf-8` will be used. *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a></code>


## Properties

### cacheDir


The path of a directory that the app may use to store cached files. The OS may delete files in this directory when the device runs low on storage. Only use this location for data that can easily be re-created.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | Not supported




This property can only be set via constructor. Once set, it cannot change anymore.



### filesDir


The path of a directory that the app may use to store persistent files. This is *not* the directory that contains the files bundled with the project, e.g. images, js files, `package.json`. You can access these files using the `fetch` or `XMLHttpRequest` APIs.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | Not supported




This property can only be set via constructor. Once set, it cannot change anymore.



