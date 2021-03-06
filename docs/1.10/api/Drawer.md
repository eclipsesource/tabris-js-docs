---
---
# Drawer

A navigation drawer that can be swiped in from the left edge of the screen. Can contain any kind of widgets. It may be useful to include a `PageSelector` that displays all top-level pages.
Includes [Composite](Composite.md)

## Methods

### close()



**Parameters:** 



**Returns:** *this*

Closes the drawer.


### open()



**Parameters:** 



**Returns:** *this*

Opens the drawer. It may be useful to call this method on first startup, so that users notice the drawer and its contents.



## Events

### "close" (widget)

**Parameters:** 

- widget: *this*

Fired when the drawer is closed and has reached its resting position.


### "open" (widget)

**Parameters:** 

- widget: *this*

Fired when the drawer is opened and has reached its resting position.



## See also

- [Snippet for creating a Drawer](https://github.com/eclipsesource/tabris-js/tree/v1.10.0/snippets/drawer/drawer.js)
