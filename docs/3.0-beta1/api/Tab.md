---
---
# Widget "Tab"

Extends [Composite](Composite.md)

A container representing a single tab of a TabFolder widget.

You can import this type like this:
```js
import {Tab} from 'tabris';
```
Or reference it directly form anywhere as "`tabris.Tab`".
## Methods

### insertBefore(widget)


**Parameters:** 

- widget: *[Tab](Tab.md)*

**Returns:** *this*

Inserts this widget directly before the given `Tab`.


## Properties

### badge
<p class="platforms"> < span class = 'ios-tag' title = 'supported on iOS' > iOS < /span></p>

Type: *string*

A badge to attach to the tab.

### image


Type: *[Image](../types.md#image)*

An image to be displayed on the tab.  Will not be shown on iOS if the `TabFolder`'s `tabBarLocation` is set to `top`

### selectedImage


Type: *[Image](../types.md#image)*

An image to be displayed on the currently active tab.

### title


Type: *string*

The title to be displayed on the tab.


## Events

### appear

Fired when the tab will become visible, i.e. the selection of its TabFolder.
### badgeChanged

Fired when the [*badge*](#badge) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*badge*](#badge).


### disappear

Fired when the tab is no longer visible, i.e. it no longer is the selection of its TabFolder.
### imageChanged

Fired when the [*image*](#image) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Image](../types.md#image)*
    The new value of [*image*](#image).


### selectedImageChanged

Fired when the [*selectedImage*](#selectedImage) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Image](../types.md#image)*
    The new value of [*selectedImage*](#selectedImage).


### titleChanged

Fired when the [*title*](#title) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*title*](#title).





## See also

- [Snippet with a TabFolder and Tabs](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta1/snippets/tabfolder.js)
