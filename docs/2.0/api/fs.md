---
---
# fs

Extends [NativeObject](NativeObject.md)

The `fs` object provides methods to read and write files. All methods are asynchronous and return a promise.

Import this object with "`const {fs} = require('tabris');`"

## Methods

### readFile(path)


**Parameters:** 

- path: *string*
  - the path to the file to read.

**Returns:** *Promise<ArrayBuffer>*

Reads the given file and returns a promise that resolves to the contents of the file on success and rejects with an Error in case of a failure. The file contents are returned as an ArrayBuffer.

### removeFile(path)


**Parameters:** 

- path: *string*
  - the path to the file to remove.

**Returns:** *Promise<void>*

Removes the given file. Returns a promise that resolves on success and rejects with an Error in case of a failure.

### writeFile(path, data)


**Parameters:** 

- path: *string*
  - the path to the file to write.
- data: *ArrayBuffer*
  - the contents to write to the file.

**Returns:** *Promise<void>*

Writes the given contents to the given file. If the file exists, it is overwritten, otherwise it is created. Returns a promise that resolves on success and rejects with an Error in case of a failure.


## Properties

### cacheDir


**read-only**<br/>
Type: *string*

The path to a directory that the app may use to store cached files. The OS may delete files in this directory when the device runs low on storage. Only use this location for data that can easily be re-created.

### filesDir


**read-only**<br/>
Type: *string*

The path to a directory that the app may use to store persistent files.


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