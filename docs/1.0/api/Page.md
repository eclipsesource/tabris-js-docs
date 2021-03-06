---
---
# Page

Pages contain an application's UI. Top-level pages are included in the application's main menu.
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
Type: *[Image](../types.md#Image)*

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

- [Simple Page snippet](https://github.com/eclipsesource/tabris-js/blob/v1.0.0/snippets/page/page.js)
- [Snippet for creating a full screen Page](https://github.com/eclipsesource/tabris-js/blob/v1.0.0/snippets/page-fullscreen/page-fullscreen.js)
- [Snippet for dynamically creating Pages](https://github.com/eclipsesource/tabris-js/blob/v1.0.0/snippets/page-stacked/page-add-dynamically.js)
