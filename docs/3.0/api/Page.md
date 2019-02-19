---
---
# Class "Page"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`Composite`](Composite.md)</span> > <span style="white-space:nowrap;">[`Page`](Page.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\Page.png 2x" src="img\android\Page.png" alt="Page on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\Page.png 2x" src="img\ios\Page.png" alt="Page on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<Page/>`
  * Parent element: [`<NavigationView/>`](NavigationView.md)
  * Child elements: *Widgets*
  * Text content: *Not supported*
* Direct subclasses: *None*
--------
A container representing a single page of a NavigationView widget.


See also:

- [Simple snippet for displaying a single page](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/navigationview-page.js)
- [Snippet for creating a stack of pages](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/navigationview-page-stacked.js)

## Constructor

### new Page(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof Page>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Methods

### insertBefore(widget)



Parameter|Type|Optional|Description
-|-|-|-
widget | <span style="white-space:nowrap;">[`Page`](Page.md)</span> | No | 
* Returns: <span style="white-space:nowrap;">[`this`](#)</span>

Inserts this widget directly before the given `Page`.


## Properties

### autoDispose


* Type: <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
* Default `true`
* Settable: *Yes*



Defines whether this page will be automatically disposed when popped from the NavigationView, e.g. using native back navigation.

### image


* Type: <span style="white-space:nowrap;">[`ImageValue`](../types.md#imagevalue)</span>
* Settable: *Yes*



An image to be displayed in the navigation bar

### title


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *Yes*



The page title to be displayed in the navigation bar.


## Events

### appear

Fired when the page is about to become visible, i.e. it has become the active page.

### disappear

Fired when the page is no longer visible, i.e. another page has become the active page.

## Change Events

### imageChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ImageValue`](../types.md#imagevalue)</span> | The new value of [*image*](#image).

Fired when the [*image*](#image) property has changed.

### titleChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*title*](#title).

Fired when the [*title*](#title) property has changed.

### autoDisposeChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*autoDispose*](#autoDispose).

Fired when the [*autoDispose*](#autoDispose) property has changed.

