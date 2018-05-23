---
---
# ActivityIndicator

Extends [Widget](Widget.md)

A widget representing a spinning indicator for indeterminate loading / processing time.

Import this type with "`const {ActivityIndicator} = require('tabris');`"

Android | iOS
--- | ---
![ActivityIndicator on Android](img/android/ActivityIndicator.png) | ![ActivityIndicator on iOS](img/ios/ActivityIndicator.png)

## Properties

### tintColor
<p class="platforms"><span class="ios-tag" title="supported on iOS">iOS</span><span class="android-tag" title="supported on Android">Android</span></p>

Type: *[Color](../types.md#color)*

The color of the indicator.


## Events

### tintColorChanged

Fired when the [*tintColor*](#tintColor) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*tintColor*](#tintColor).





## Example
```js
const {ActivityIndicator, Button, ui} = require('tabris');

// Create the activity indicator centered in the page
let activityIndicator = new ActivityIndicator({
  centerX: 0,
  centerY: 0
}).appendTo(ui.contentView);

// Create reload button
let reloadButton = new Button({
  centerX: 0, centerY: 0,
  text: 'Run Task'
}).on('select', () => executeLongRunningTask())
  .appendTo(ui.contentView);

function executeLongRunningTask() {
  // Toggle visibility of elements
  activityIndicator.visible = true;
  reloadButton.visible = false;

  setTimeout(() => {
    // Async action is done
    activityIndicator.visible = false;
    reloadButton.visible = true;
  }, 2500);
}

executeLongRunningTask();
```
## See also

- [Simple ActivityIndicator snippet](https://github.com/eclipsesource/tabris-js/tree/v2.5.0/snippets/activityindicator.js)
