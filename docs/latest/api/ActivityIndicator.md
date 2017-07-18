---
---
# ActivityIndicator

Extends [Widget](Widget.md)

A widget representing a spinning indicator for indeterminate loading / processing time.

Import this type with "`const {ActivityIndicator} = require('tabris');`"

Android | iOS
--- | ---
![ActivityIndicator on Android](img/android/ActivityIndicator.png) | ![ActivityIndicator on iOS](img/ios/ActivityIndicator.png)

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

- [Simple ActivityIndicator snippet](https://github.com/eclipsesource/tabris-js/tree/v2.0.0/snippets/activityindicator.js)
