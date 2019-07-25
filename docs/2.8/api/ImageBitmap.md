---
---
# ImageBitmap

Represents an in-memory Image. Unlike ImageData it is immutable. The constructor is private, instances can be created from via the global `createImageBitmap()` function. It takes a [Blob](./Blob.md) containing the compressed image file (.jpg, .png) and returns a Promise that resolves with `ImageBitmap`.

Import this type with "`const {ImageBitmap} = require('tabris');`"

## Methods

### close()


Disposes the resources associated with this ImageBitmap. Should be called once the image is no longer needed to free up memory.


## Properties

### height


**read-only**<br/>
Type: *number*

Native image height in pixel

### width


**read-only**<br/>
Type: *number*

Native image width in pixel

