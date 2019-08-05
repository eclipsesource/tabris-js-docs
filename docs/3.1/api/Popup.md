---
---
# Class "Popup"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Popup`](Popup.md)</span>

Base class for all pop-up UI elements. Pop-ups are placed on top of all other UI, but are not widgets. Some pop-ups can be opened only once.


Constructor | *protected*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | <span style="white-space:nowrap;">[`ActionSheet`](ActionSheet.md)</span>, <span style="white-space:nowrap;">[`AlertDialog`](AlertDialog.md)</span>, <span style="white-space:nowrap;">[`DateDialog`](DateDialog.md)</span>, <span style="white-space:nowrap;">[`Popover`](Popover.md)</span>, <span style="white-space:nowrap;">[`TimeDialog`](TimeDialog.md)</span>
JSX support | *No*


## Methods

### close()



Hides the popup.

Returns <span style="white-space:nowrap;">[`this`](#)</span>

### open()



Makes the popup visible.

Returns <span style="white-space:nowrap;">[`this`](#)</span>


## Properties

### [JSX.jsxFactory]


This function is called to create JSX popup elements. You may override it in your own subclass to create custom JSX behavior. **The function is not called with any context, i.e. `this` is not available.**

Type | <span style="white-space:nowrap;">`JSX.JsxFactory`</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.



