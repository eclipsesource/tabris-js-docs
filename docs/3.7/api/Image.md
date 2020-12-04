---
---
# Class "Image"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >Image</a>

This class represents an image source and optionally that image's dimension or the scale it should be displayed at. **For convenience there are [various expressions](#imagevalue) that may be used in place of an `Image` instance.** All API that accept these expressions will convert them to a `Image` object.


Type: | <code style="white-space: nowrap">Image extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a></code>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


The **width** and **height** of an image may optionally be specified in DIP (device independent pixel). If none are given the dimensions from the image file are used in combination with the given **scale**. If neither **scale**, **width** or **height** are given the scale may be extracted from an image URL if the file name contains the pattern "@\<scale\>x", e.g. `"image@2x.jpg"`. If the scale can not be determined by any of these methods it will be treated as `1`.

The scale factor of the image is relevant when the intrinsic size (in DIP) of the image is needed for layouting. On high-density displays (i.e. [devices with a  scale factor higher than 1](./device.md#scalefactor)) an undetermined image scale factor (or scale factor `1`) may make the image look blurry at full its full natural size.  It is the application developers responsibility to provide and use image files with the appropriate scale factor for any given device.

When displaying images that are very large (eg. 3000 x 2000) on small widgets (like a 100 x 100 `ImageView`), it is strongly recommended to provided a concrete image size. This will allow the system to scale the image to the given size, saving memory and computing power, which leads to a faster display time overall.


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
imageLike | <code style="white-space: nowrap"><a href="Image.html#imagelikeobject" title="Image Class Type">ImageLikeObject</a></code> | An image configuration. See [`ImageLikeObject`](./Image.md#imagelikeobject)

## Methods

### equals(value)



Tests if the given value is a `Image` instance that is deeply equal to this one.


Parameter|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="#" >Image</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

## Static Methods

### from(imageValue)



Creates a new instance of Image using any valid Image expression. For any other value, including `null`, the method throws.


Parameter|Type|Description
-|-|-
imageValue | <code style="white-space: nowrap"><a href="Image.html#imagevalue" title="Image Class Type">ImageValue</a></code> | The value to create an Image instance from. See [`ImageValue`](./Image.md#imagevalue)


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


Image scale factor - the image will be scaled down by this factor. See [`ImageLikeObject`](./Image.md#imagelikeobject) for details

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### src


As a string this is a file system path, relative path, full URL, a [`Blob`](./Blob.md) containing a `jpg` or `png` file, or an [`ImageBitmap`](./ImageBitmap.md) instance. [Data URIs](https://en.wikipedia.org/wiki/Data_URI_scheme) are also supported. Relative paths are resolved **relative to ‘package.json’**. On Android the name of a bundled [drawable resource](https://developer.android.com/guide/topics/resources/drawable-resource) can be provided with the url scheme android-drawable, e.g. android-drawable://ic_info_black.
If a closed ImageBitmap is given the constructor will throw.
A given Blob must contain an encoded image.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a><br/>&#124; <a href="ImageBitmap.html" title="ImageBitmap Class Reference">ImageBitmap</a><br/>&#124; <a href="Blob.html" title="Blob Class Reference">Blob</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### width


Image width in dip. Extracted from the image file when 'auto'.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.





## Related Types

### ImageValue

* JavaScript Type: `tabris.Image`, `Object`, `string`, `Blob`, `ImageBitmap`
* TypeScript Type: `tabris.ImageValue`

`ImageValue` describes any value that can be used to as an image in Tabris.js, which includes [`Image`](#class-image) instances, [`ImageLikeObject`](#imagelikeobject) and [`ImageSource`](#imagesource).

In TypeScript `ImageValue` is available as a union type exported by the `tabris` module.

### ImageLikeObject

* JavaScript Type: `Object`
* TypeScript Type: `tabris.ImageLikeObject`

```ts
interface ImageLikeObject {
  src: string | ImageBitmap | Blob;
  scale?: number | "auto";
  width?: number | "auto";
  height?: number | "auto";
}
```

A plain object implementing the same properties as [`Image`](#class-image).

Examples:

```js
{src: "images/catseye.jpg", width: 300, height: 200}
{src: blob, scale: 2}
```

### ImageSource

* JavaScript Type: `string`, `Blob`, `ImageBitmap`
* TypeScript Type: `tabris.ImageSource`

This is just the [source](#src) value of an `Image` by itself.

```js
"images/catseye.jpg"  // same as:
{src: "images/catseye.jpg"}
```

