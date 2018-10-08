---
---
# Widget "ActivityIndicator"

Extends [Widget](Widget.md)

A widget representing a spinning indicator for indeterminate loading / processing time.

You can import this type like this:
```js
import {ActivityIndicator} from 'tabris';
```
Or reference it directly form anywhere as "`tabris.ActivityIndicator`".
Android | iOS
--- | ---
![ActivityIndicator on Android](img/android/ActivityIndicator.png) | ![ActivityIndicator on iOS](img/ios/ActivityIndicator.png)

## Properties

### tintColor


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
import {ActivityIndicator, Button, ui} from 'tabris';

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

- [Simple ActivityIndicator snippet](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta1/snippets/activityindicator.js)
