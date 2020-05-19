---
---
# Class "ImageBitmap"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >ImageBitmap</a>

Represents an in-memory Image. Unlike ImageData it is immutable, but can be created from a number of sources via [createImageBitmap](#createimagebitmapimagesource).


Type: | <code style="white-space: nowrap">ImageBitmap extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a></code>
Constructor: | private
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


## Methods

### close()



Disposes the resources associated with this ImageBitmap. Should be called once the image is no longer needed to free up memory.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

## Static Methods

### createImageBitmap(imageSource)



Creates a promise that resolves to a new instance of ImageBitmap. Also available in global scope.


Parameter|Type|Description
-|-|-
imageSource | <code style="white-space: nowrap"><a href="Blob.html" title="Blob Class Reference">Blob</a><br/> &#124; <a href="../types.html#imagedata" title="ImageData Type Reference">ImageData</a><br/> &#124; <a href="#" >ImageBitmap</a><br/> &#124; <a href="Canvas.html" title="Canvas Class Reference">Canvas</a></code> | The data source to create an ImageBitmap instance from.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="#" >ImageBitmap</a>&gt;</code>


## Properties

### height


Native image height in pixel

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | No




### width


Native image width in pixel

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | No




