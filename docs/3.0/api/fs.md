---
---
# Object "fs"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`FileSystem`](FileSystem.md)</span>

* Constructor: *private*
* Singleton: `fs`
* Namespace: `tabris`
* JSX support: *No*
* Direct subclasses: *None*
--------
The `fs` object provides methods to read and write files. All methods are asynchronous and return a promise.


## Methods

### readDir(path)



Parameter|Type|Optional|Description
-|-|-|-
path | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The path of the directory to read.
* Returns: <span style="white-space:nowrap;">`Promise<string[]>`</span>

Reads the contents of a given directory. Returns a promise that resolves on success to an array of the names of the files in the directory excluding '.' and '..'. In case of failure, the Promise rejects with an Error.

### readFile(path)



Parameter|Type|Optional|Description
-|-|-|-
path | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The path of the file to read.
* Returns: <span style="white-space:nowrap;">`Promise<ArrayBuffer>`</span>

Reads the given file and returns a promise that resolves to the contents of the file on success and rejects with an Error in case of a failure. The file contents are returned as an ArrayBuffer.

### readFile(path, encoding)



Parameter|Type|Optional|Description
-|-|-|-
path | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The path of the file to read.
encoding | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The encoding to use to read text files.
* Returns: <span style="white-space:nowrap;">`Promise<string>`</span>

Reads the given text file and returns a promise that resolves to the contents of the file on success and rejects with an Error in case of a failure. The file contents are returned as a string.

### removeFile(path)



Parameter|Type|Optional|Description
-|-|-|-
path | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The path of the file to remove.
* Returns: <span style="white-space:nowrap;">`Promise<void>`</span>

Removes the given file. Returns a promise that resolves on success and rejects with an Error in case of a failure.

### writeFile(path, data)



Parameter|Type|Optional|Description
-|-|-|-
path | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The path of the file to write.
data | <span style="white-space:nowrap;">`ArrayBuffer`</span> | No | The contents to write to the file.
* Returns: <span style="white-space:nowrap;">`Promise<void>`</span>

Writes the given binary contents to the given file. If the file exists, it is overwritten, otherwise it is created. Returns a promise that resolves on success and rejects with an Error in case of a failure.

### writeFile(path, text, encoding?)



Parameter|Type|Optional|Description
-|-|-|-
path | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The path of the file to write.
text | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The text to write to the file.
encoding | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | Yes | The encoding to use to write a text file. When omitted, `utf-8` will be used.
* Returns: <span style="white-space:nowrap;">`Promise<void>`</span>

Writes the given text to the given file using the given encoding or `utf-8` if no encoding is specified. If the file exists, it is overwritten, otherwise it is created. Returns a promise that resolves on success and rejects with an Error in case of a failure.


## Properties

### cacheDir


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *No*



The path of a directory that the app may use to store cached files. The OS may delete files in this directory when the device runs low on storage. Only use this location for data that can easily be re-created.

This property can only be set via constructor. Once set, it cannot change anymore.

### filesDir


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *No*



The path of a directory that the app may use to store persistent files. This is *not* the directory that contains the files bundled with the project, e.g. images, js files, `package.json`. You can access these files using the `fetch` or `XMLHttpRequest` APIs.

This property can only be set via constructor. Once set, it cannot change anymore.

