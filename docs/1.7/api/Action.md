---
---
# Action
An executable item that is integrated in the application's navigation menu. Add a listener on *select* to implement the action.
Includes [Widget](Widget.md)

## Properties
### image
Type: *[Image](../types.md#image)*

Icon image for the action.
### placementPriority
Type: *string*, supported values: `low`, `high`, `normal`, default: `normal`

Actions with higher placement priority will be placed at a more significant position in the UI, e.g. low priority actions could go into a menu instead of being included in a toolbar.
### title
Type: *string*

The text to be displayed for the action.

## Events
### "select" (widget)

**Parameters:**

- widget: *[Action](Action.md)*

Fired when the action is invoked.


## See also
- [Snippet for creating actions](https://github.com/eclipsesource/tabris-js/blob/v1.7.0/snippets/action/action.js)
- [Actions - placement priorities](https://github.com/eclipsesource/tabris-js/blob/v1.7.0/snippets/action-placement-priority/action-placement-priority.js)
