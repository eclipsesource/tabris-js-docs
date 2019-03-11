---
---
# Class "Video"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`Video`](Video.md)</span>

A widget that plays a video from an URL.


<div class="tabris-image"><figure><div><img srcset="img/android/Video.png 2x" src="img/android/Video.png" alt="Video on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/Video.png 2x" src="img/ios/Video.png" alt="Video on iOS"/></div><figcaption>iOS</figcaption></figure></div>

Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | Element: `<Video/>`<br/>Parent element: [`<Composite/>`](Composite.md) *and any widget extending* <span style="white-space:nowrap;">[`Composite`](Composite.md)</span><br/>Child elements: *None*<br/>Text content: *Not supported*<br/>

## Example
```js
import {Video, contentView} from 'tabris';

new Video({
  width: 160, height: 90,
  url: "resources/video.mp4"
}).appendTo(contentView);
```

See also:

- [Snippet for creating a video widget](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190311+1537/snippets/video.js)

## Constructor

### new Video(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<Video>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Methods

### pause()



Pauses the video. *[state](#state)* changes to `pause` and `speed` to `0`. Has no effect when *[state](#state)* is not `play`.

Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### play(speed?)



Starts playing the video, *[state](#state)* changes to `play`. Has no effect unless the current state is either `pause` or `ready`.


Parameter|Type|Optional|Description
-|-|-|-
speed | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Yes | Desired playback speed. If the given speed is not supported by the platform or video, the actual playback speed will be `1` - i.e. the natural speed of the video.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### seek(position)



Attempts to change the `position` to the given time index. Success depends on the currently loaded video. Has no effect if the current *[state](#state)* is `empty` or `fail`.


Parameter|Type|Optional|Description
-|-|-|-
position | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | No | Desired position in milliseconds.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>


## Properties

### autoPlay


If set to `true`, starts playing the video as soon as the state changes from `open` to `ready`.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Default | `true`
Settable | *Yes*




### controlsVisible


If set to `true`, overlays the video with a native UI for controlling playback.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Default | `true`
Settable | *Yes*




### duration


Returns the full length of the current video in milliseconds.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *No*




### position


Returns the current playback position in milliseconds. This property does not trigger any change events.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *No*




### speed


Returns the current playback speed. The value `1` represents the natural speed of the video. When the *[state](#state)* of the widget is not `play` this property always has the value `0`.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *No*




### state


The current state of the widget.

Type | `'empty'` \| `'open'` \| `'ready'` \| `'play'` \| `'stale'` \| `'pause'` \| `'finish'` \| `'fail'`
Default | `'empty'`
Settable | *No*




### url


The URL of the video to play. Setting this property to any non-empty string changes the *[state](#state)* to `open` and the video starts loading. Setting this property to an empty string unloads the current video and the *[state](#state)* returns to `empty`.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *Yes*





## Change Events

### urlChanged

Fired when the [*url*](#url) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*url*](#url).

### controlsVisibleChanged

Fired when the [*controlsVisible*](#controlsVisible) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*controlsVisible*](#controlsVisible).

### autoPlayChanged

Fired when the [*autoPlay*](#autoPlay) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*autoPlay*](#autoPlay).

### speedChanged

Fired when the [*speed*](#speed) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*speed*](#speed).

### positionChanged

Fired when the [*position*](#position) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*position*](#position).

### durationChanged

Fired when the [*duration*](#duration) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*duration*](#duration).

### stateChanged

Fired when the [*state*](#state) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*state*](#state).

