---
---
# Widget "Page"

Extends [Composite](Composite.md)

A container representing a single page of a NavigationView widget.

You can import this type like this:
```js
import {Page} from 'tabris';
```
Or reference it directly form anywhere as "`tabris.Page`".
## Methods

### insertBefore(widget)


**Parameters:** 

- widget: *[Page](Page.md)*

**Returns:** *this*

Inserts this widget directly before the given `Page`.


## Properties

### autoDispose


Type: *boolean*, default: `true`

Defines whether this page will be automatically disposed when popped from the NavigationView, e.g. using native back navigation.

### image


Type: *[Image](../types.md#image)*

An image to be displayed in the navigation bar

### title


Type: *string*

The page title to be displayed in the navigation bar.


## Events

### appear

Fired when the page is about to become visible, i.e. it has become the active page.
### autoDisposeChanged

Fired when the [*autoDispose*](#autoDispose) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*autoDispose*](#autoDispose).


### disappear

Fired when the page is no longer visible, i.e. another page has become the active page.
### imageChanged

Fired when the [*image*](#image) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Image](../types.md#image)*
    The new value of [*image*](#image).


### titleChanged

Fired when the [*title*](#title) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*title*](#title).





## See also

- [Simple snippet for displaying a single page](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta1/snippets/navigationview-page.js)
- [Snippet for creating a stack of pages](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta1/snippets/navigationview-page-stacked.js)
