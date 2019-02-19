---
---
# Class "Video"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`Video`](Video.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\Video.png 2x" src="img\android\Video.png" alt="Video on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\Video.png 2x" src="img\ios\Video.png" alt="Video on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<Video/>`
  * Parent element: [`<Composite/>`](Composite.md) and any widget extending <span style="white-space:nowrap;">[`Composite`](Composite.md)</span>
  * Child elements: *None*
  * Text content: *Not supported*
* Direct subclasses: *None*
--------
A widget that plays a video from an URL.


Example:
```js
import {Button, Video, contentView} from 'tabris';

const button = new Button({
  id: 'button',
  centerX: 0, bottom: 16,
  text: '❚❚'
}).on('select', () => video.state === 'play' ? video.pause() : video.play())
  .appendTo(contentView);

const video = new Video({
  left: 0, top: 0, right: 0, bottom: '#button 16',
  url: 'http://peach.themazzone.com/durian/movies/sintel-1280-stereo.mp4',
  controlsVisible: false
}).on('stateChanged', event => button.text = event.value !== 'pause' ? '❚❚' : '▶')
  .appendTo(contentView);
```
See also:

- [Snippet for creating a video widget](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/video.js)

## Constructor

### new Video(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof Video>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Methods

### pause()

* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Pauses the video. *[state](#state)* changes to `pause` and `speed` to `0`. Has no effect when *[state](#state)* is not `play`.

### play(speed?)



Parameter|Type|Optional|Description
-|-|-|-
speed | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Yes | Desired playback speed. If the given speed is not supported by the platform or video, the actual playback speed will be `1` - i.e. the natural speed of the video.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Starts playing the video, *[state](#state)* changes to `play`. Has no effect unless the current state is either `pause` or `ready`.

### seek(position)



Parameter|Type|Optional|Description
-|-|-|-
position | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Desired position in milliseconds.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Attempts to change the `position` to the given time index. Success depends on the currently loaded video. Has no effect if the current *[state](#state)* is `empty` or `fail`.


## Properties

### autoPlay


* Type: <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
* Default `true`
* Settable: *Yes*



If set to `true`, starts playing the video as soon as the state changes from `open` to `ready`.

### controlsVisible


* Type: <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
* Default `true`
* Settable: *Yes*



If set to `true`, overlays the video with a native UI for controlling playback.

### duration


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *No*



Returns the full length of the current video in milliseconds.

### position


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *No*



Returns the current playback position in milliseconds. This property does not trigger any change events.

### speed


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *No*



Returns the current playback speed. The value `1` represents the natural speed of the video. When the *[state](#state)* of the widget is not `play` this property always has the value `0`.

### state


* Type: `'empty'` | `'open'` | `'ready'` | `'play'` | `'stale'` | `'pause'` | `'finish'` | `'fail'`
* Default `'empty'`
* Settable: *No*



The current state of the widget.

### url


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *Yes*



The URL of the video to play. Setting this property to any non-empty string changes the *[state](#state)* to `open` and the video starts loading. Setting this property to an empty string unloads the current video and the *[state](#state)* returns to `empty`.


## Change Events

### urlChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*url*](#url).

Fired when the [*url*](#url) property has changed.

### controlsVisibleChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*controlsVisible*](#controlsVisible).

Fired when the [*controlsVisible*](#controlsVisible) property has changed.

### autoPlayChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*autoPlay*](#autoPlay).

Fired when the [*autoPlay*](#autoPlay) property has changed.

### speedChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*speed*](#speed).

Fired when the [*speed*](#speed) property has changed.

### positionChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*position*](#position).

Fired when the [*position*](#position) property has changed.

### durationChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*duration*](#duration).

Fired when the [*duration*](#duration) property has changed.

### stateChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*state*](#state).

Fired when the [*state*](#state) property has changed.

