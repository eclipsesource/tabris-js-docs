---
---
# Page

A container representing a single page of a NavigationView widget.

Extends [Composite](Composite.md)

## Properties

### autoDispose

Type: *boolean*, default: `true`

Defines whether this page will be automatically disposed when popped from the NavigationView, e.g. using native back navigation.

### image

Type: *[Image](../types.md#image)*

An image to be displayed in the navigation bar. Not supported on Windows.

### title

Type: *string*

The page title to be displayed in the navigation bar.


## Events

### appear

Fired when the page is about to become visible, i.e. it has become the active page.
### change:autoDispose

Fired when the [*autoDispose*](#autoDispose) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*autoDispose*](#autoDispose).


### change:image

Fired when the [*image*](#image) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *[Image](../types.md#image)*
    The new value of [*image*](#image).


### change:title

Fired when the [*title*](#title) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*title*](#title).


### disappear

Fired when the page is no longer visible, i.e. another page has become the active page.



## See also

- [Simple snippet for displaying a single page](https://github.com/eclipsesource/tabris-js/tree/v2.0.0-rc2/snippets/navigationview-page.js)
- [Snippet for creating a stack of pages](https://github.com/eclipsesource/tabris-js/tree/v2.0.0-rc2/snippets/navigationview-page-stacked.js)
