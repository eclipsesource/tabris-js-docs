---
---
# Class "Image"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`Image`](Image.md)</span>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support: *No*
* Direct subclasses: *None*
--------
Represents an image. See also [ImageValue](./types.html#ImageValue)


## Constructor

### new Image(imageLike)

Parameter|Type|Optional|Description
-|-|-|-
imageLike | <span style="white-space:nowrap;">`ImageLikeObject`</span> | No | An image configuration. See [ImageLikeObject](./types.html#imagelikeobject)

## Static Methods

### from(imageValue)



Parameter|Type|Optional|Description
-|-|-|-
imageValue | <span style="white-space:nowrap;">[`ImageValue`](../types.md#imagevalue)</span> | No | The value to create an Image instance from. See [ImageValue](./types.html#ImageValue)
* Returns: <span style="white-space:nowrap;">[`Image`](Image.md)</span>

Creates a new instance of Image using any valid Image expression. For any other value, including `null`, the method throws.

### isImageValue(value)



Parameter|Type|Optional|Description
-|-|-|-
value | <span style="white-space:nowrap;">[`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)</span> | No | The value to test
* Returns: <span style="white-space:nowrap;">`value is ImageValue`</span>

Returns true if value is an ImageValue. This includes `null`. Use this to check if a value will be accepted by an image property. This is also a valid TypeScript type guard function.

### isValidImageValue(value)



Parameter|Type|Optional|Description
-|-|-|-
value | <span style="white-space:nowrap;">[`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)</span> | No | The value to test
* Returns: <span style="white-space:nowrap;">`value is ImageValue`</span>

Returns true if value is a valid ImageValue. This excludes `null`. Use this to check if a value will be accepted by Image.from. This is also a valid TypeScript type guard function.


## Properties

### height


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| `'auto'`</span>
* Settable: *On creation*



Image height in dip. Extracted from the image file when 'auto'.

This property can only be set via constructor. Once set, it cannot change anymore.

### scale


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| `'auto'`</span>
* Settable: *On creation*



Image scale factor - the image will be scaled down by this factor. See [ImageLikeObject](../types.md#ImageLikeObject) for details

This property can only be set via constructor. Once set, it cannot change anymore.

### src


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *On creation*



File system path, relative path or URL. Android and iOS also support [data URI](https://en.wikipedia.org/wiki/Data_URI_scheme). Relative paths are resolved **relative to ‘package.json’**. On Android the name of a bundled [drawable resource](https://developer.android.com/guide/topics/resources/drawable-resource) can be provided with the url scheme android-drawable, e.g. android-drawable://ic_info_black.

This property can only be set via constructor. Once set, it cannot change anymore.

### width


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| `'auto'`</span>
* Settable: *On creation*



Image width in dip. Extracted from the image file when 'auto'.

This property can only be set via constructor. Once set, it cannot change anymore.

