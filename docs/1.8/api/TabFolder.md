---
---
# TabFolder
A widget that can switch between [tabs](Tab). Only children of type `Tab` are supported. Since the TabFolder does not compute its own size, the width and height must be defined by the respective layout properties (e.g. either `width` or `left` and `right` must be specified).
Includes [Composite](Composite.md)

## Properties
### paging
Type: *boolean*

Enables swiping through tabs.
### selection
Type: *[Tab](Tab.md)*

The currently selected tab.
### tabBarLocation
Type: *string*, supported values: `top`, `bottom`, `hidden`, `auto`, default: `auto`

The placement of the tab titles. When set to `"hidden"`, the tab bar will not be visible. When set to `"auto"`, the position is platform dependent.<br/>This property can only be set on widget creation. Once set, it cannot be changed anymore.

## Events
### "change:selection" (widget, selection, options)

**Parameters:** 

- widget: *this*
- selection: *[Tab](Tab.md)*, the new value of *selection*.
- options: *any*

Fired when the selection property changes.

### "select" (widget, selection, options)

**Parameters:** 

- widget: *this*
- selection: *[Tab](Tab.md)*, the new value of *selection*.
- options: *any*

Fired when the selection property changes by user interaction.


## See also
- [Snippet with a TabFolder and Tabs](https://github.com/eclipsesource/tabris-js/blob/master/snippets/tabfolder/tabfolder.js)
