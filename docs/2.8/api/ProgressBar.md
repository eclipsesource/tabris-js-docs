---
---
# ProgressBar

Extends [Widget](Widget.md)

A widget representing a numeric value as a horizontal bar with a growing indicator.

Import this type with "`const {ProgressBar} = require('tabris');`"

Android | iOS
--- | ---
![ProgressBar on Android](img\android\ProgressBar.png) | ![ProgressBar on iOS](img\ios\ProgressBar.png)

## Properties

### maximum


Type: *number*, default: `100`

The value that represents a progress of 100%.

### minimum


Type: *number*, default: `0`

The value that represents a progress of 0%.

### selection


Type: *number*, default: `0`

The actual progress to be displayed.

### state
<p class="platforms"><span class="android-tag" title="supported on Android">Android</span><span class="windows-tag" title="supported on Windows 10">Windows 10</span></p>

Type: *string*, supported values: `normal`, `paused`, `error`, default: `normal`

This property affects the color of the progress indicator. Not supported on iOS.

### tintColor


Type: *[Color](../types.md#color)*

The color used to display the current progress.


## Events

### maximumChanged

Fired when the [*maximum*](#maximum) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *number*
    The new value of [*maximum*](#maximum).


### minimumChanged

Fired when the [*minimum*](#minimum) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *number*
    The new value of [*minimum*](#minimum).


### selectionChanged

Fired when the [*selection*](#selection) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *number*
    The new value of [*selection*](#selection).


### stateChanged

Fired when the [*state*](#state) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*state*](#state).


### tintColorChanged

Fired when the [*tintColor*](#tintColor) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*tintColor*](#tintColor).





## Example
```js
const {ProgressBar, ui} = require('tabris');

// A progress bar that is animated using a timer

let progressBar = new ProgressBar({
  left: 15, right: 15, centerY: 0,
  maximum: 300,
  selection: 100
}).appendTo(ui.contentView);

setInterval(() => {
  let selection = progressBar.selection + 1;
  progressBar.selection = selection > 300 ? 0 : selection;
}, 20);
```
## See also

- [Simple ProgressBar snippet](https://github.com/eclipsesource/tabris-js/tree/v2.8.0/snippets/progressbar.js)
