---
---
# ProgressBar

A widget representing a numeric value as a horizontal bar with a growing indicator.
Includes [Widget](Widget.md)

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

Type: *string*, supported values: `normal`, `paused`, `error`, default: `normal`

This property affects the color of the progress indicator. Not supported on iOS.

## See also

- [Simple ProgressBar snippet](https://github.com/eclipsesource/tabris-js/blob/v1.7.0/snippets/progressbar/progressbar.js)
