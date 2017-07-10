---
---
# Tab

Extends [Composite](Composite.md)

A container representing a single tab of a TabFolder widget.

Import this type with "`const {Tab} = require('tabris');`"

## Properties

### badge

Type: *string*

A badge to attach to the tab. Only supported on iOS.

### image

Type: *[Image](../types.md#image)*

An image to be displayed on the tab.  Will not be shown on iOS if the `TabFolder`'s `tabBarLocation` is set to `top`

### selectedImage

Type: *[Image](../types.md#image)*

An image to be displayed on the currently active tab.

### title

Type: *string*

The title to be displayed on the tab.


## See also

- [Snippet with a TabFolder and Tabs](https://github.com/eclipsesource/tabris-js/tree/v2.0.0-rc2-dev.20170710+0912/snippets/tabfolder.js)
