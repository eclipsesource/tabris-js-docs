---
---
# Page

Pages contain an application's UI. Top-level pages can have a stack of non-top-level pages on top.
Includes [Composite](Composite.md)

## Methods

### close()


**Parameters:**



Closes and disposes of the page.

### open()


**Parameters:**



Opens the page, i.e. makes it the active page.


## Properties

### image
Type: *[Image](../types.md#image)*

### title

Type: *string*

### topLevel

Type: *boolean*, default: `false`


## Events

### "appear" (widget)

**Parameters:**

- widget: *[Page](Page.md)*

Fired when the page is about to become visible, i.e. it has become the active page.

### "disappear" (widget)

**Parameters:**

- widget: *[Page](Page.md)*

Fired when the page is no longer visible, i.e. another page has become the active page.


## See also

- [Simple Page snippet with multiple top-level pages including a PageSelector (aka Burger Menu)](https://github.com/eclipsesource/tabris-js/blob/v1.5.0/snippets/page/page.js)
- [Snippet for dynamically creating Pages](https://github.com/eclipsesource/tabris-js/blob/v1.5.0/snippets/page-stacked/page-add-dynamically.js)
