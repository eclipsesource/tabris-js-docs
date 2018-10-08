---
---
# Type "Popup"

Extends [NativeObject](NativeObject.md)

Base class for all pop-up UI elements. Pop-ups are placed on top of all other UI, but are not widgets. Some pop-ups can be opened only once.

You can import this type like this:
```js
import {Popup} from 'tabris';
```
Or reference it directly form anywhere as "`tabris.Popup`".
## Methods

### close()


**Returns:** *this*

Hides the popup.

### open()


**Returns:** *this*

Makes the popup visible.

### static open(popup)


**Parameters:** 

- popup: *[Popup](Popup.md)*
  - the pop-up to open

**Returns:** *[Popup](Popup.md)*

Makes the given popup visible.

This is a static method. It is called directly on the class, not the instance.

