---
---
# Class "ImageBitmap"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`ImageBitmap`](ImageBitmap.md)</span>

Represents an in-memory Image. Unlike ImageData it is immutable, but can be created from a number of sources via [createImageBitmap](#createimagebitmapimage).


Constructor | *private*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | *No*


## Methods

### close()



Disposes the resources associated with this ImageBitmap. Should be called once the image is no longer needed to free up memory.

Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

## Static Methods

### createImageBitmap(image)



Creates a promise that resolves to a new instance of ImageBitmap. Also available in global scope.


Parameter|Type|Optional|Description
-|-|-|-
image | <span style="white-space:nowrap;">[`Blob`](Blob.md) \| [`ImageData`](../types.md#imagedata) \| [`ImageBitmap`](ImageBitmap.md)</span> | No | The data source to create an ImageBitmap instance from.


Returns <span style="white-space:nowrap;">`Promise<ImageBitmap>`</span>


## Properties

### height


Native image height in pixel

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.



### width


Native image width in pixel

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.



