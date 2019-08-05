---
---
# Class "Blob"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`Blob`](Blob.md)</span>

Represents raw data of a given type.


Constructor | *public*
Singleton | *No*
Namespace |`global`
Direct subclasses | <span style="white-space:nowrap;">[`File`](File.md)</span>
JSX support | *No*


## Constructor

### new Blob(blobParts?, options?)

Parameter|Type|Optional|Description
-|-|-|-
blobParts | <span style="white-space:nowrap;">`any[]`</span> | Yes | Array of ArrayBuffer, Blob, string, or any typed array. Any other type will be stringified. Strings are encoded as UTF-8.
options | <span style="white-space:nowrap;">`{type?: string}`</span> | Yes | `type` represents the MIME type of the blob content. Defaults to empty string.

## Methods

### arrayBuffer()



Reads the blob data into an ArrayBuffer and returns it in a promise. Each call creates a new in-memory copy of the data.

Returns <span style="white-space:nowrap;">`Promise<ArrayBuffer>`</span>

### text()



Decodes the blob data as a string and returns it in a promise.

Returns <span style="white-space:nowrap;">`Promise<string>`</span>


## Properties

### size


Size of the blob data in bytes

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Default | `0`
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.



### type


The MIME type of the blob data

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Default | `''''`
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.



