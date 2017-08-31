---
---
# Tab

Extends [Composite](Composite.md)

A container representing a single tab of a TabFolder widget.

Import this type with "`const {Tab} = require('tabris');`"

## Properties

### badge
<p class="platforms"><span class="ios-tag" title="supported on iOS">iOS</span></p>

Type: *string*

A badge to attach to the tab.

### image
<p class="platforms"><span class="ios-tag" title="supported on iOS">iOS</span><span class="android-tag" title="supported on Android">Android</span></p>

Type: *[Image](../types.md#image)*

An image to be displayed on the tab.  Will not be shown on iOS if the `TabFolder`'s `tabBarLocation` is set to `top`

### selectedImage
<p class="platforms"><span class="ios-tag" title="supported on iOS">iOS</span><span class="android-tag" title="supported on Android">Android</span></p>

Type: *[Image](../types.md#image)*

An image to be displayed on the currently active tab.

### title


Type: *string*

The title to be displayed on the tab.


## Events

### badgeChanged

Fired when the [*badge*](#badge) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*badge*](#badge).


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

- [Snippet with a TabFolder and Tabs](https://github.com/eclipsesource/tabris-js/tree/v2.1.0/snippets/tabfolder.js)
