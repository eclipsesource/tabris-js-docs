---
---
# Class "Camera"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a> > <a href="#" >Camera</a>

A `Camera` provides access to the device's camera. The `Camera` can be used as a source for a `CameraView` to display a live preview feed or to capture a photo.

In order to capture an image or to show a camera preview image the app has to have the [`'camera'`](../permissions.md#category-camera) [permission](./permission.md).


Type: | <code style="white-space: nowrap">Camera extends <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a></code>
Constructor: | private
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


## Examples
### JavaScript


```js
import {device} from 'tabris';

const camera = device.cameras[0];
camera.active = true;

camera.captureImage()
  .then(({image}) => console.log(`Captured image with size ${image.size}.`));
```


See also:
  
[<span class='language tsx'>TSX</span> Simple example to capture an image](https://playground.tabris.com/?gitref=v3.6.0&snippet=camera.tsx)  
[<span class='language tsx'>TSX</span> Control `Camera` and `CameraView` to capture an image](https://playground.tabris.com/?gitref=v3.6.0&snippet=camera-advanced.tsx)  
[<span class='language jsx'>JSX</span> Check and request camera permissions](https://playground.tabris.com/?gitref=v3.6.0&snippet=permission.jsx)

## Methods

### captureImage(options?)



Captures an image and returns a result object when the returned promise resolves successfully. The `Camera` has to be in an `active` state to capture an image. The result object has an `image` property of type `Blob` which contains the jpg encoded image, as well as a `width` and `height` property describing the dimensions of the captured image.


Parameter|Type|Description
-|-|-
options | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;flash: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'auto'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'on'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'off'</a> // Whether to enable or disable the device flashlight. If set to `'auto'` the device will decide (based on the lighting conditions) whether to activate the flashlight. defaults to off<br/>}</code> | A set of capture options to apply when taking a picture. *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;{image: <a href="Blob.html" title="Blob Class Reference">Blob</a>, width: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a>, height: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a>}&gt;</code>


## Properties

### active


Setting `active` to true activates the camera. If it is currently assigned to a `CameraView`, the `CameraView` will now show the video feed from the `Camera`. It is then possible to capture an image via the `captureImage()` method.

Setting `active` to false stops the camera and disables any video feed shown on a `CameraView`.

It is recommended to stop the `Camera` when not in use in order to preserve battery life.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">false</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`activeChanged`](#activechanged)




### availableCaptureResolutions


An array of resolutions supported by the camera. Each array entry is an object consisting of `width` and `height`. Eg.: `{width: 4000, height: 3000}

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="View &quot;Array&quot; on MDN">Array</a>&lt;{width: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a>, height: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a>}&gt;</code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | [`availableCaptureResolutionsChanged`](#availablecaptureresolutionschanged)




### cameraId


The id of the device camera given by the native platform.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | Not supported




### captureResolution


An object determining the pixel dimensions of the captured image. Has to be an object containing `width` and `height` properties of type `number`. The list of natively available resolutions can be obtained from the `availableCaptureResolutions` property.

If the given `captureResolution` is not in the list of `availableCaptureResolutions`, a closely matching resolution larger than the given resolution is used. When no `captureResolution` is given (value is `null`), the best possible match for the device is chosen automatically. The physical dimensions of the captured image should be checked on the resolved result object of the `captureImage()` method.

When setting the `captureResolution` on the iOS platform, a small grace period should pass before capturing an image. Otherwise the image might turn out incorrectly exposed.

Type: |<code style="white-space: nowrap">{width: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a>, height: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a>}</code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`captureResolutionChanged`](#captureresolutionchanged)




### position


The position of the camera on the device. The `external` position is used for devices like usb cameras.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'front'</a><br/> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'back'</a><br/> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'external'</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | Not supported





## Change Events

### activeChanged

Fired when the [active](#active) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >Camera</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | The new value of [active](#active).

### availableCaptureResolutionsChanged

Fired when the [availableCaptureResolutions](#availablecaptureresolutions) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >Camera</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="View &quot;Array&quot; on MDN">Array</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="View &quot;Array&quot; on MDN">Array</a>&lt;{width: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a>, height: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a>}&gt;</code> | The new value of [availableCaptureResolutions](#availablecaptureresolutions).

### captureResolutionChanged

Fired when the [captureResolution](#captureresolution) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >Camera</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap">{width: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a>, height: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a>}</code> | The new value of [captureResolution](#captureresolution).

