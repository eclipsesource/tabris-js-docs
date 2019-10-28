---
---
# Class "Image"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >Image</a>

Represents an image. See also [ImageValue](../types.html#imagevalue)


Type: | <code style="white-space: nowrap">Image extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a></code>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


## Examples
### JavaScript


```js
import {Image} from 'tabris';

const image = Image.from({src: 'image@2x.png'});
console.log(image.scale); // "2"
```


## Constructor

### new Image(imageLike)

Parameter|Type|Description
-|-|-
imageLike | <code style="white-space: nowrap">ImageLikeObject</code> | An image configuration. See [ImageLikeObject](../types.html#imagelikeobject)

## Static Methods

### from(imageValue)



Creates a new instance of Image using any valid Image expression. For any other value, including `null`, the method throws.


Parameter|Type|Description
-|-|-
imageValue | <code style="white-space: nowrap"><a href="../types.html#imagevalue" title="ImageValue Type Reference">ImageValue</a></code> | The value to create an Image instance from. See [ImageValue](../types.html#imagevalue)


Returns: <code style="white-space: nowrap"><a href="#" >Image</a></code>

### isImageValue(value)



Returns true if value is an ImageValue. This includes `null`. Use this to check if a value will be accepted by an image property. This is also a valid TypeScript type guard function.


Parameter|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code> | The value to test


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

### isValidImageValue(value)



Returns true if value is a valid ImageValue. This excludes `null`. Use this to check if a value will be accepted by Image.from. This is also a valid TypeScript type guard function.


Parameter|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code> | The value to test


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>


## Properties

### height


Image height in dip. Extracted from the image file when 'auto'.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | No



This property can only be set via constructor. Once set, it cannot change anymore.



### scale


Image scale factor - the image will be scaled down by this factor. See [ImageLikeObject](../types.md#imagelikeobject) for details

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | No



This property can only be set via constructor. Once set, it cannot change anymore.



### src


As a string this is a file system path, relative path or URL. [Data URIs](https://en.wikipedia.org/wiki/Data_URI_scheme) are also supported. Relative paths are resolved **relative to ‘package.json’**. On Android the name of a bundled [drawable resource](https://developer.android.com/guide/topics/resources/drawable-resource) can be provided with the url scheme android-drawable, e.g. android-drawable://ic_info_black.
If a closed ImageBitmap is given the constructor will throw.
A given Blob must contain an encoded image.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a><br/> &#124; <a href="ImageBitmap.html" title="ImageBitmap Class Reference">ImageBitmap</a><br/> &#124; <a href="Blob.html" title="Blob Class Reference">Blob</a></code>
Settable: | No



This property can only be set via constructor. Once set, it cannot change anymore.



### width


Image width in dip. Extracted from the image file when 'auto'.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | No



This property can only be set via constructor. Once set, it cannot change anymore.



