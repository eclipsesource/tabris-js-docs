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
  
[<span class='language jsx'>JSX</span> Using the file system to read and write files](https://playground.tabris.com/?gitref=v3.6.1&snippet=fs.jsx)  
[<span class='language jsx'>JSX</span> Opening files and showing their properties](https://playground.tabris.com/?gitref=v3.6.1&snippet=fs-openfile-advanced.jsx)

## Methods

### appendToFile(path, data)



Writes the given binary content to the given file. If the file exists, it is appended, otherwise it is created. Returns a promise that resolves with `true` if a new file was created, or with `false` if the file already existed. It rejects with an Error if the path points to a directory.


Parameter|Type|Description
-|-|-
path | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The path of the file to append.
data | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a> &#124; <a href="Blob.html" title="Blob Class Reference">Blob</a></code> | The content to append to the file.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a>&gt;</code>

### appendToFile(path, text, encoding?)



Writes the given text to the given file using the given encoding or `utf-8` if no encoding is specified. If the file exists, it is appended, otherwise it is created. Returns a promise that resolves with `true` if a new file was created, or with `false` if the file already existed. It rejects with an Error if the path points to a directory.


Parameter|Type|Description
-|-|-
path | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The path of the file to append.
text | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The text to write to the file.
encoding | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The encoding to use to write a text file. When omitted, `utf-8` will be used. *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a>&gt;</code>

### createDir(path)



Creates a directory on the given path, including intermediate directories. Returns a promise that resolves with `true` if the directory was created, or with `false` if it  already existed. If the path points to a file the promise rejects.


Parameter|Type|Description
-|-|-
path | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The path of the directory to create.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a>&gt;</code>

### isDir(path)



Returns `true` if there is a directory at the given path. Otherwise (no directory, or is a file) it returns `false`.


Parameter|Type|Description
-|-|-
path | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The path of the directory.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

### isFile(path)



Returns `true` if there is a file at the given path. Otherwise (no file, or is a directory) it returns `false`.


Parameter|Type|Description
-|-|-
path | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The path of the file.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

### openFile(options?)



Allows to select a file via a native file picker ui. The supplied `options` object provides additional configuration parameters to adjust the picker behavior.

Once the picker ui is closed the returned promise resolves with an array of `File` objects or an empty array if no file has been selected.


Parameter|Type|Description
-|-|-
options | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;type: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a>, // A mime type to only select a certain category of files. Eg. `'image/png'` or `image/*`. defaults to */*<br/>&nbsp;&nbsp;quantity: // The number of files to select. defaults to single<br/><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'single'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'multiple'</a><br/>}</code> | An optional set of configuration parameters. *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="File.html" title="File Class Reference">File</a>[]&gt;</code>

### readDir(path)



Reads the contents of a given directory. Returns a promise that resolves on success to an array of the names of the files in the directory excluding '.' and '..'. If no directory exists at that path the Promise rejects with an error object.


Parameter|Type|Description
-|-|-
path | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The path of the directory to read.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a>[]&gt;</code>

### readFile(path)



Reads the given file and returns a promise that resolves to the contents of the file on success and rejects with an error object if no file exists at that path. The file contents are returned as an ArrayBuffer.


Parameter|Type|Description
-|-|-
path | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The path of the file to read.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a>&gt;</code>

### readFile(path, encoding)



Reads the given text file and returns a promise that resolves to the contents of the file on success and rejects with an Error if no file exists at that path. The file contents are returned as a string.


Parameter|Type|Description
-|-|-
path | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The path of the file to read.
encoding | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The encoding to use to read text files.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a>&gt;</code>

### remove(path)



Removes the given file or directory. If the directory is not empty all its contents will also be deleted. If there is no file or directory at the given path nothing will happen. Returns a promise that resolves with `true` if something was deleted, otherwise `false`. Rejects with an error object only in case of an access error.


Parameter|Type|Description
-|-|-
path | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The path to the file or directory to remove.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a>&gt;</code>

### removeDir(path)



Removes the given directory if it exists. If the directory is not empty all its contents will also be deleted. Returns a promise that resolves if the directory was deleted or none existed at that path. If the path points to a file the promise rejects.


Parameter|Type|Description
-|-|-
path | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The path of the directory to remove. Must be empty.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a>&gt;</code>

### removeFile(path)



Removes the given file if it exists. Returns a promise that resolves with `true` on success or with `false` if no directory exists at that path. If the path points to a directory the promise rejects.


Parameter|Type|Description
-|-|-
path | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The path of the file to remove.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a>&gt;</code>

### writeFile(path, data)



Writes the given binary contents to the given file. If the file exists, it is overwritten, otherwise it is created. Returns a promise that resolves on success and rejects with an Error in case of a failure.


Parameter|Type|Description
-|-|-
path | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The path of the file to write.
data | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a> &#124; <a href="Blob.html" title="Blob Class Reference">Blob</a></code> | The contents to write to the file.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a>&gt;</code>

### writeFile(path, text, encoding?)



Writes the given text to the given file using the given encoding or `utf-8` if no encoding is specified. If the file exists, it is overwritten, otherwise it is created. Returns a promise that resolves on success and rejects with an Error in case of a failure.


Parameter|Type|Description
-|-|-
path | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The path of the file to write.
text | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The text to write to the file.
encoding | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The encoding to use to write a text file. When omitted, `utf-8` will be used. *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a>&gt;</code>


## Properties

### cacheDir


An external path of a directory that the app may use to store cached files. External storage may be any type like permanent internal disc storage, sd-card or a usb stick. The OS may delete files in this directory when the device runs low on storage. Only use this location for data that can easily be re-created.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | Not supported




### externalCacheDirs
<p class="platforms"><span class='ios-tag' title='supported on iOS'>iOS</span><span class='android-tag' title='supported on Android'>Android</span></p>

An list of external paths that the app may use to store cached files. External storage may be any type storage type like permanent internal disc storage, sd-card or a usb stick. In case no type of external storage is available the list will be empty.

The OS may delete files in this directory when the device runs low on storage. Only use this location for data that can easily be re-created.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a>[]</code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | Not supported




### externalFileDirs
<p class="platforms"><span class='ios-tag' title='supported on iOS'>iOS</span><span class='android-tag' title='supported on Android'>Android</span></p>

A list of external paths that the app may use to store persistent files. External storage may be any storage type like permanent internal disc storage, sd-card or a usb stick. In case no type of external storage is available the list will be empty.

This is *not* the directory that contains the files bundled with the project, e.g. images, js files, `package.json`. You can access these files using the `fetch` or `XMLHttpRequest` APIs.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a>[]</code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | Not supported




### filesDir


The path of a directory that the app may use to store persistent files. This is *not* the directory that contains the files bundled with the project, e.g. images, js files, `package.json`. You can access these files using the `fetch` or `XMLHttpRequest` APIs.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | Not supported




