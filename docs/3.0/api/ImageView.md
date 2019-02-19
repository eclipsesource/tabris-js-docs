---
---
# Class "ImageView"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`ImageView`](ImageView.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\ImageView.png 2x" src="img\android\ImageView.png" alt="ImageView on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\ImageView.png 2x" src="img\ios\ImageView.png" alt="ImageView on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<ImageView/>`
  * Parent element: [`<Composite/>`](Composite.md) and any widget extending <span style="white-space:nowrap;">[`Composite`](Composite.md)</span>
  * Child elements: *None*
  * Text content: *Not supported*
* Direct subclasses: *None*
--------
A widget to display an image.


Example:
```js
import {ImageView, contentView} from 'tabris';

// Display images with different scale modes

createImageView('fit');
createImageView('none');
createImageView('fill');

function createImageView(scaleMode) {
  new ImageView({
    left: 10, top: 'prev() 10', width: 250, height: 100,
    image: 'resources/target_200.png',
    background: '#aaaaaa',
    scaleMode
  }).appendTo(contentView);
}
```
## Constructor

### new ImageView(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof ImageView>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### image


* Type: <span style="white-space:nowrap;">[`ImageValue`](../types.md#imagevalue)</span>
* Settable: *Yes*



The image to display. Providing the `width` and `height` attributes on the image will resize it internally. When no dimensions are given the image will be loaded with its original size. Since the full size image might occupy a lot of memory, it's recommended to provide exact dimensions.

### maxZoomLevel


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Default `3`
* Settable: *Yes*



The highest amount the image can be zoomed in to. Setting the `maxZoomLevel` to a level smaller than the current `zoomLevel` changes the `zoomLevel` to be the same as the new `maxZoomLevel`.

### minZoomLevel


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Default `1`
* Settable: *Yes*



The lowest amount the image can be zoomed out to. Setting the `minZoomLevel` to a level larger than the current `zoomLevel` changes the `zoomLevel` to be the same as the new `minZoomLevel`. 

### scaleMode


* Type: `'auto'` | `'fit'` | `'fill'` | `'stretch'` | `'none'`
* Default `'auto'`
* Settable: *Yes*



How to scale the image.

- `fit` will scale the image proportionally to fit into the view, possible leaving some empty space at the edges. That is, the image will be displayed as large as possible while being fully contained in the view.
- `fill` will scale the image proportionally to fill the entire view, possibly cutting off parts of the image. That is, the image will be displayed as small as possible while covering the entire view.
- `auto` will scale *down* the image to *fit* into the view if it is too large, but it won't scale up a smaller image.
- `stretch` will resize the image to the actual bounds of the image view.
- `none` will not resize the image at all. The image will be displayed in its original size.

### tintColor


* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



A color to change the image appearance. All opaque parts of the image will be tinted with the given color. Set to `initial` to remove the effect.

### zoomEnabled


* Type: <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
* Settable: *Yes*



Enables the pinch-to-zoom gesture on the `ImageView` and makes the properties `zoomLevel`, `minZoomLevel` and `maxZoomLevel` available. Setting `zoomEnabled` to `false` also resets the `zoomLevel`, `minZoomLevel`, `maxZoomLevel` to their respective defaults.

### zoomLevel


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Default `1`
* Settable: *Yes*



The amount that the image is zoomed in or out. The default position without any zooming has the value 1.0.


## Events

### load

Parameter|Type|Description
-|-|-
error | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | Contains the final status of the loading process

Fired when the image loading has finished.

### zoom

Parameter|Type|Description
-|-|-
zoomLevel | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of *[zoomLevel](#zoomLevel)*.

Fired when the user zooms the image in or out. The `zoom` event indicates a change to the `zoomLevel` property.

## Change Events

### imageChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ImageValue`](../types.md#imagevalue)</span> | The new value of [*image*](#image).

Fired when the [*image*](#image) property has changed.

### scaleModeChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*scaleMode*](#scaleMode).

Fired when the [*scaleMode*](#scaleMode) property has changed.

### tintColorChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*tintColor*](#tintColor).

Fired when the [*tintColor*](#tintColor) property has changed.

### zoomEnabledChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*zoomEnabled*](#zoomEnabled).

Fired when the [*zoomEnabled*](#zoomEnabled) property has changed.

### zoomLevelChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*zoomLevel*](#zoomLevel).

Fired when the [*zoomLevel*](#zoomLevel) property has changed.

### minZoomLevelChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*minZoomLevel*](#minZoomLevel).

Fired when the [*minZoomLevel*](#minZoomLevel) property has changed.

### maxZoomLevelChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*maxZoomLevel*](#maxZoomLevel).

Fired when the [*maxZoomLevel*](#maxZoomLevel) property has changed.

