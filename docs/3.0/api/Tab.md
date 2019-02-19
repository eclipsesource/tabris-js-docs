---
---
# Class "Tab"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`Composite`](Composite.md)</span> > <span style="white-space:nowrap;">[`Tab`](Tab.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\Tab.png 2x" src="img\android\Tab.png" alt="Tab on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\Tab.png 2x" src="img\ios\Tab.png" alt="Tab on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<Tab/>`
  * Parent element: [`<TabFolder/>`](TabFolder.md)
  * Child elements: *Widgets*
  * Text content: *Not supported*
* Direct subclasses: *None*
--------
A container representing a single tab of a TabFolder widget.


See also:

- [Snippet with a TabFolder and Tabs](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/tabfolder.js)

## Constructor

### new Tab(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof Tab>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Methods

### insertBefore(widget)



Parameter|Type|Optional|Description
-|-|-|-
widget | <span style="white-space:nowrap;">[`Tab`](Tab.md)</span> | No | 
* Returns: <span style="white-space:nowrap;">[`this`](#)</span>

Inserts this widget directly before the given `Tab`.


## Properties

### badge
<p class="platforms"> < span class = 'ios-tag' title = 'supported on iOS' > iOS < /span></p>

* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *Yes*



A badge to attach to the tab.

### badgeColor
<p class="platforms"> < span class = 'ios-tag' title = 'supported on iOS' > iOS < /span></p>

* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



The color used for the `badge` indicator.

### image


* Type: <span style="white-space:nowrap;">[`ImageValue`](../types.md#imagevalue)</span>
* Settable: *Yes*



An image to be displayed on the tab.  Will not be shown on iOS if the `TabFolder`'s `tabBarLocation` is set to `top`

### selectedImage


* Type: <span style="white-space:nowrap;">[`ImageValue`](../types.md#imagevalue)</span>
* Settable: *Yes*



An image to be displayed on the currently active tab.

### title


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *Yes*



The title to be displayed on the tab.


## Events

### appear

Fired when the tab will become visible, i.e. the selection of its TabFolder.

### disappear

Fired when the tab is no longer visible, i.e. it no longer is the selection of its TabFolder.

## Change Events

### titleChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*title*](#title).

Fired when the [*title*](#title) property has changed.

### imageChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ImageValue`](../types.md#imagevalue)</span> | The new value of [*image*](#image).

Fired when the [*image*](#image) property has changed.

### selectedImageChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ImageValue`](../types.md#imagevalue)</span> | The new value of [*selectedImage*](#selectedImage).

Fired when the [*selectedImage*](#selectedImage) property has changed.

### badgeChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*badge*](#badge).

Fired when the [*badge*](#badge) property has changed.

### badgeColorChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*badgeColor*](#badgeColor).

Fired when the [*badgeColor*](#badgeColor) property has changed.

