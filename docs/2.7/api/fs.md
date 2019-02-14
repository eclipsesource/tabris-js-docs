---
---
# fs

Extends [NativeObject](NativeObject.md)

The `fs` object provides methods to read and write files. All methods are asynchronous and return a promise.

Import this object with "`const {fs} = require('tabris');`"

## Methods

### readDir(path)


**Parameters:** 

- path: *string*
  - the path of the directory to read.

**Returns:** *Promise<string[]>*

Reads the contents of a given directory. Returns a promise that resolves on success to an array of the names of the files in the directory excluding '.' and '..'. In case of failure, the Promise rejects with an Error.

### readFile(path)


**Parameters:** 

- path: *string*
  - the path of the file to read.

**Returns:** *Promise<ArrayBuffer>*

Reads the given file and returns a promise that resolves to the contents of the file on success and rejects with an Error in case of a failure. The file contents are returned as an ArrayBuffer.

### readFile(path, encoding)


**Parameters:** 

- path: *string*
  - the path of the file to read.
- encoding: *string*
  - the encoding to use to read text files.

**Returns:** *Promise<string>*

Reads the given text file and returns a promise that resolves to the contents of the file on success and rejects with an Error in case of a failure. The file contents are returned as a string.

### removeFile(path)


**Parameters:** 

- path: *string*
  - the path of the file to remove.

**Returns:** *Promise<void>*

Removes the given file. Returns a promise that resolves on success and rejects with an Error in case of a failure.

### writeFile(path, data)


**Parameters:** 

- path: *string*
  - the path of the file to write.
- data: *ArrayBuffer*
  - the contents to write to the file.

**Returns:** *Promise<void>*

Writes the given binary contents to the given file. If the file exists, it is overwritten, otherwise it is created. Returns a promise that resolves on success and rejects with an Error in case of a failure.

### writeFile(path, text, encoding)


**Parameters:** 

- path: *string*
  - the path of the file to write.
- text: *string*
  - the text to write to the file.
- encoding: *string* [**Optional**]
  - the encoding to use to write a text file. When omitted, `utf-8` will be used.

**Returns:** *Promise<void>*

Writes the given text to the given file using the given encoding or `utf-8` if no encoding is specified. If the file exists, it is overwritten, otherwise it is created. Returns a promise that resolves on success and rejects with an Error in case of a failure.


## Properties

### cacheDir


**read-only**<br/>
Type: *string*

The path of a directory that the app may use to store cached files. The OS may delete files in this directory when the device runs low on storage. Only use this location for data that can easily be re-created.<br/>This property can only be set on widget creation. Once set, it cannot be changed anymore.

### filesDir


**read-only**<br/>
Type: *string*

The path of a directory that the app may use to store persistent files.<br/>This property can only be set on widget creation. Once set, it cannot be changed anymore.


## Example
```js
const {ImageView, fs, ui} = require('tabris');

let file = fs.cacheDir + '/test.png';

let imageView = new ImageView({
  centerX: 0, centerY: 0, width: 400, height: 200,
  background: '#aaaaaa'
}).appendTo(ui.contentView);

fetch('http://lorempixel.com/400/200/')
  .then(res => res.arrayBuffer())
  .then(data => fs.writeFile(file, data))
  .then(() => imageView.image = file)
  .then(() => console.log('image:', file))
  .catch(err => console.error(err));
```