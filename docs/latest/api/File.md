---
---
# Class "File"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`Blob`](Blob.md)</span> > <span style="white-space:nowrap;">[`File`](File.md)</span>

Represents raw data of a given type and name.


Constructor | *public*
Singleton | *No*
Namespace |`global`
Direct subclasses | *None*
JSX support | *No*


## Constructor

### new File(blobParts, name, options?)

Parameter|Type|Optional|Description
-|-|-|-
blobParts | <span style="white-space:nowrap;">`any[]`</span> | No | Array of ArrayBuffer, Blob, string, or any typed array. Any other type will be stringified. Strings are encoded as UTF-8.
name | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The name or path of the file
options | <span style="white-space:nowrap;">`{type?: string, lastModified?: number}`</span> | Yes | `type` represents the MIME type of the blob content. Defaults to empty string.
`lastModified` is a unix timestamp of the last known modification of the file. Defaults to the current time.

## Properties

### lastModified


Unix timestamp of the last known modification of the file

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.



### name


The name or path of the file

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.



