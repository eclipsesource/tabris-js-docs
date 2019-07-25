---
---
# Blob

Represents raw data of a given type.

This API is available in the global namespace. You do not need to import it explicitly.

## Methods

### arrayBuffer()


**Returns:** *Promise&lt;ArrayBuffer&gt;*

Reads the blob data into an ArrayBuffer and returns it in a promise. Each call creates a new in-memory copy of the data.

### text()


**Returns:** *Promise&lt;string&gt;*

Decodes the blob data as a string and returns it in a promise.


## Properties

### size


**read-only**<br/>
Type: *number*, default: `0`

Size of the blob data in bytes

### type


**read-only**<br/>
Type: *string*, default: `''`

The MIME type of the blob data

