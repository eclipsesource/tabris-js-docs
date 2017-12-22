---
---
# ImageView

Extends [Widget](Widget.md)

A widget to display an image.

Import this type with "`const {ImageView} = require('tabris');`"

## Properties

### image


Type: *[Image](../types.md#image)*

The image to display. Providing the `width` and `height` attributes on the image will resize it internally. When no dimensions are given the image will be loaded with its original size. Since the full size image might occupy a lot of memory, it's recommended to provide exact dimensions.

### scaleMode


Type: *string*, supported values: `auto`, `fit`, `fill`, `stretch`, `none`, default: `auto`

How to scale the image.

- `fit` will scale the image proportionally to fit into the view, possible leaving some empty space at the edges. That is, the image will be displayed as large as possible while being fully contained in the view.
- `fill` will scale the image proportionally to fill the entire view, possibly cutting off parts of the image. That is, the image will be displayed as small as possible while covering the entire view.
- `auto` will scale *down* the image to *fit* into the view if it is too large, but it won't scale up a smaller image.
- `stretch` will resize the image to the actual bounds of the image view.
- `none` will not resize the image at all. The image will be displayed in its original size.

### tintColor
<p class="platforms"><span class="ios-tag" title="supported on iOS">iOS</span><span class="android-tag" title="supported on Android">Android</span></p>

Type: *[Color](../types.md#color)*

A color to change the image appearance. All opaque parts of the image will be tinted with the given color. Set to `initial` to remove the effect.


## Events

### imageChanged

Fired when the [*image*](#image) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Image](../types.md#image)*
    The new value of [*image*](#image).


### load

Fired when the image loading has finished.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **error**: *boolean*
    Contains the final status of the loading process


### scaleModeChanged

Fired when the [*scaleMode*](#scaleMode) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*scaleMode*](#scaleMode).


### tintColorChanged

Fired when the [*tintColor*](#tintColor) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*tintColor*](#tintColor).





## Example
```js
const {ImageView, ui} = require('tabris');

// Display images with different scale modes

createImageView('fit');
createImageView('none');
createImageView('fill');

function createImageView(scaleMode) {
  new ImageView({
    left: 10, top: 'prev() 10', width: 250, height: 100,
    image: 'resources/target_200.png',
    background: '#aaaaaa',
    scaleMode: scaleMode
  }).appendTo(ui.contentView);
}
```