# TabFolder
A widget that can switch between [tabs](#tab).
Includes [Widget API](Widget.md)

## Methods
### append(child, child*)


**Parameters:** 

- child: *[Tab](Tab.md)*
- child*: *[Tab](Tab.md)*

**Returns:** *[TabFolder](TabFolder.md)*

Adds the given tabs in the given order to the TabFolder


## Properties
### paging
Type: *boolean*

Enables swiping through tabs.
### selection
Type: *[Tab](Tab.md)*

### tabBarLocation
Type: *string*, supported values: `top`, `bottom`, `auto`, default: `auto`

The placement of the tab titles. When set to `"auto"`, the position is platform dependent.<br/>This property can only be set in the `tabris.create` method. It cannot be changed after widget creation.

## Events
### "change:selection" (widget, selection, options)

**Parameters:** 

- widget: *[TabFolder](TabFolder.md)*
- selection: *[Tab](Tab.md)*, the new value of *selection*.
- options: *Object*

Fired when the selection property changes.

### "select" (widget, selection, options)

**Parameters:** 

- widget: *[TabFolder](TabFolder.md)*
- selection: *[Tab](Tab.md)*, the new value of *selection*.
- options: *Object*

Fired when the selection property changes by user interaction.


## See also
- [Snippet with a TabFolder and Tabs](https://github.com/eclipsesource/tabris-js/blob/master/snippets/tabfolder/tabfolder.js)
