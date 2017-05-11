---
---
# Video

A widget that plays a video from an URL.
Includes [Widget](Widget.md)

## Methods

### pause()



**Parameters:** 



Pauses the video. *[state](#state)* changes to `pause` and `speed` to `0`. Has no effect when *[state](#state)* is not `play`.


### play()



**Parameters:** 



Starts playing the video, *[state](#state)* changes to `play`. Has no effect if the current state is not either `pause` or `ready`.


### play(speed)



**Parameters:** 

- speed: *number*, desired playback speed. If the given speed is not supported by the platform or video, the actual playback speed will be `1` - i.e. the natural speed of the video.

Starts playing the video, *[state](#state)* changes to `play`. Has no effect if the current state is not either `pause` or `ready`.


### seek(position)



**Parameters:** 

- position: *number*, desired position in milliseconds.

Attempts to change the `position` to the given time index. Success depends on the currently loaded video. Has no effect if the current *[state](#state)* is `empty` or `fail`.



## Properties

### autoPlay

Type: *boolean*, default: `true`

If set to `true`, starts playing the video as soon as the state changes from `open` to `ready`.

### controlsVisible

Type: *boolean*, default: `true`

If set to `true`, overlays the video with a native UI for controlling playback.

### duration

Type: *number*

Returns the full length of the current video in milliseconds. This property is read-only.

### position

Type: *number*

Returns the current playback position in milliseconds. This property is read-only. This property does not trigger any change events.

### speed

Type: *number*

Returns the current playback speed. The value `1` represents the natural speed of the video. When the *[state](#state)* of the widget is not `play` this property always has the value `0`. This property is read-only.

### state

Type: *string*, supported values: `empty`, `open`, `ready`, `play`, `stale`, `pause`, `finish`, `fail`, default: `empty`

The current state of the widget. This property is read-only.
 * `empty` - No URL is set.
 * `open` - URL is set to a valid value, but the video is not yet ready to play.
 * `fail` - No supported video file was found at the given URL.
 * `ready` - The video is ready to play. If `autoPlay` is `true` the state will automatically change from `ready` to `play`.
 * `play` - The video is currently playing.
 * `stale` - The playback was paused for buffering, but will continue once enough data has been buffered.
 * `pause` - The playback was explicitly paused due to user interaction or `pause()` call.
 * `finish` - Playback stopped at the end of the timeline.

### url

Type: *string*

The URL of the video to play. Setting this property to any non-empty string changes the *[state](#state)* to `open` and the video starts loading. Seting this property to an empty string unloads the current video and the *[state](#state)* returns to `empty`.


## Events

### "change:state" (widget, state, options)

**Parameters:** 

- widget: *this*
- state: *string*, the current value of *[state](#state)*.
- options: *Object*

Fired when the state property changes.



## See also

- [Snippet for creating a video wigdet](https://github.com/eclipsesource/tabris-js/tree/v1.10.0/snippets/video/video.js)
