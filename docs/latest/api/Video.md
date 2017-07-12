---
---
# Video

Extends [Widget](Widget.md)

A widget that plays a video from an URL.

Import this type with "`const {Video} = require('tabris');`"

Android | iOS
--- | ---
![Video on Android](img/android/Video.png) | ![Video on iOS](img/ios/Video.png)

## Methods

### pause()


Pauses the video. *[state](#state)* changes to `pause` and `speed` to `0`. Has no effect when *[state](#state)* is not `play`.

### play(speed)


**Parameters:** 

- speed: *number* [**Optional**]
  - desired playback speed. If the given speed is not supported by the platform or video, the actual playback speed will be `1` - i.e. the natural speed of the video.

Starts playing the video, *[state](#state)* changes to `play`. Has no effect unless the current state is either `pause` or `ready`.

### seek(position)


**Parameters:** 

- position: *number*
  - desired position in milliseconds.

Attempts to change the `position` to the given time index. Success depends on the currently loaded video. Has no effect if the current *[state](#state)* is `empty` or `fail`.


## Properties

### autoPlay


Type: *boolean*, default: `true`

If set to `true`, starts playing the video as soon as the state changes from `open` to `ready`.

### controlsVisible


Type: *boolean*, default: `true`

If set to `true`, overlays the video with a native UI for controlling playback.

### duration


**read-only**<br/>
Type: *number*

Returns the full length of the current video in milliseconds.

### position


**read-only**<br/>
Type: *number*

Returns the current playback position in milliseconds. This property does not trigger any change events.

### speed


**read-only**<br/>
Type: *number*

Returns the current playback speed. The value `1` represents the natural speed of the video. When the *[state](#state)* of the widget is not `play` this property always has the value `0`.

### state


**read-only**<br/>
Type: *string*, supported values: `empty`, `open`, `ready`, `play`, `stale`, `pause`, `finish`, `fail`, default: `empty`

The current state of the widget.

### url


Type: *string*

The URL of the video to play. Setting this property to any non-empty string changes the *[state](#state)* to `open` and the video starts loading. Setting this property to an empty string unloads the current video and the *[state](#state)* returns to `empty`.


## Events

### autoPlayChanged

Fired when the [*autoPlay*](#autoPlay) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*autoPlay*](#autoPlay).


### controlsVisibleChanged

Fired when the [*controlsVisible*](#controlsVisible) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*controlsVisible*](#controlsVisible).


### durationChanged

Fired when the [*duration*](#duration) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *number*
    The new value of [*duration*](#duration).


### positionChanged

Fired when the [*position*](#position) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *number*
    The new value of [*position*](#position).


### speedChanged

Fired when the [*speed*](#speed) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *number*
    The new value of [*speed*](#speed).


### stateChanged

Fired when the state property changes.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of the `state` property.


### urlChanged

Fired when the [*url*](#url) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*url*](#url).





## Example
```js
const {Button, Video, ui} = require('tabris');

let button = new Button({
  id: 'button',
  centerX: 0, bottom: 16,
  text: '❚❚'
}).on('select', () => video.state === 'play' ? video.pause() : video.play())
  .appendTo(ui.contentView);

let video = new Video({
  left: 0, top: 0, right: 0, bottom: '#button 16',
  url: 'http://peach.themazzone.com/durian/movies/sintel-1280-stereo.mp4',
  controlsVisible: false
}).on('stateChanged', event => button.text = event.value !== 'pause' ? '❚❚' : '▶')
  .appendTo(ui.contentView);
```
## See also

- [Snippet for creating a video widget](https://github.com/eclipsesource/tabris-js/tree/v2.0.0-rc2/snippets/video.js)
