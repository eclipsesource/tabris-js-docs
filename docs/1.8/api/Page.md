---
---
# Page

Pages contain an application's UI. Top-level pages can have a stack of non-top-level pages on top. See [Widget Tree](../ui)
Includes [Composite](Composite.md)

## Methods

### close()


**Parameters:**



Closes and disposes of the page.

### open()


**Parameters:**



**Returns:** *this*

Opens the page, i.e. makes it the active page.


## Properties

### image
Type: *[Image](../types.md#image)*

An image to be displayed in the navigation bar. Not supported anymore, don't use it.
### title

Type: *string*

The page title to be displayed in the navigation bar.
### topLevel

Type: *boolean*, default: `false`

Defines whether this is a top level page.

## Events

### "appear" (widget)

**Parameters:**

- widget: *this*

Fired when the page is about to become visible, i.e. it has become the active page.

### "disappear" (widget)

**Parameters:**

- widget: *this*

Fired when the page is no longer visible, i.e. another page has become the active page.


## See also

- [Simple Page snippet with multiple top-level pages including a PageSelector (aka Burger Menu)](https://github.com/eclipsesource/tabris-js/blob/v1.8.0/snippets/page/page.js)
- [Snippet for creating a full screen Page](https://github.com/eclipsesource/tabris-js/blob/v1.8.0/snippets/page-fullscreen/page-fullscreen.js)
- [Snippet for dynamically creating Pages](https://github.com/eclipsesource/tabris-js/blob/v1.8.0/snippets/page-add-dynamically/page-add-dynamically.js)
