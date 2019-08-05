---
---
# Class "WebView"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`WebView`](WebView.md)</span>

A widget that can display a web page. Since this widget requires a lot of resources it's recommended to have no more than one instance at a time.


<div class="tabris-image"><figure><div><img srcset="img/android/WebView.png 2x" src="img/android/WebView.png" alt="WebView on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/WebView.png 2x" src="img/ios/WebView.png" alt="WebView on iOS"/></div><figcaption>iOS</figcaption></figure></div>

Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | Element: `<WebView/>`<br/>Parent element: [`<Composite/>`](Composite.md) *and any widget extending* <span style="white-space:nowrap;">[`Composite`](Composite.md)</span><br/>Child elements: *None*<br/>Text content: *Not supported*<br/>

## Example
```js
import {WebView, contentView} from 'tabris';

new WebView({
  left: 0, right: 0, top: 0, bottom: 0,
  url: "https://tabris.com"
}).appendTo(contentView);
```

See also:
  
[<span class='language jsx'>JSX</span> Creating a simple `WebView`](https://playground.tabris.com/?gitref=v3.1.0&snippet=webview.jsx)  
[<span class='language js'>JS</span> Creating browser-like navigation buttons in a `WebView`](https://playground.tabris.com/?gitref=v3.1.0&snippet=webview-navigation.js)  
[<span class='language js'>JS</span> Demonstrating web messaging in a `WebView`](https://playground.tabris.com/?gitref=v3.1.0&snippet=webview-webmessaging.js)  
[Web Messaging on Wikipedia](https://en.wikipedia.org/wiki/Web_Messaging)

## Constructor

### new WebView(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties&lt;WebView&gt;`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Methods

### goBack()



Navigate the `WebView` to the previous page if possible.

Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### goForward()



Navigate the `WebView` to the next page if possible.

Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### postMessage(message, targetOrigin)



Posts a web message to the underlying `window` object of the WebView. The website in the `WebView` can register for the message in the following fashion: `window.addEventListener('message', callbackFunction)`. For more information see [`Window.postMessage()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) API.


Parameter|Type|Optional|Description
-|-|-|-
message | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The message to send. Supports only strings.
targetOrigin | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The URL of the page that receives the message. The message is only sent if the current document URL has the same scheme, domain and path. Use `*` to send to any URL.


Returns <span style="white-space:nowrap;">[`this`](#)</span>


## Properties

### canGoBack


Whether there is a previous to navigated to via `goBack()`.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Settable | *No*
Change events | *Yes*




### canGoForward


Whether there is a next page to navigate to via `goForward()`.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Settable | *No*
Change events | *Yes*




### html


A complete HTML document to display. Always returns the last set value.
Note: `htmlChanged` event will not be fired on iOS when a page is using `history.pushState()` to navigate between pages.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *Yes*
Change events | *Yes*




### initScript


JavaScript code to be executed before page begins loading.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *On creation*
Change events | *No*




This property can only be set via constructor or JSX. Once set, it cannot change anymore.



### url


The URL of the web page to display. Relative URLs are resolved relative to 'package.json'. Returns empty string when content from *html* property is displayed.
Note: `urlChanged` event will not be fired on iOS when a page is using `history.pushState()` to navigate between pages.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *Yes*
Change events | *Yes*





## Events

### navigate

Fired when the WebView is about to navigate to a new URL.
Note: This event will not be fired on iOS when a page is using `history.pushState()` to navigate between pages.

Parameter|Type|Description
-|-|-
preventDefault | <span style="white-space:nowrap;">`() =&gt; void`</span> | Call to intercept the navigation.  Not possible when the event is only an anchor navigation
url | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new URL the WebView is about to navigate to.

### load

Fired when the url has been loaded.
Note: This event will not be fired on iOS when a page is using `history.pushState()` to navigate between pages.

### download

<p class="platforms"><span class='android-tag' title='supported on Android'>Android</span></p>Fired when the WebView requests a download. The download event provides the properties `url`, `mimeType`, `contentLength` and `contentDisposition`. Supported only on Android.

Parameter|Type|Description
-|-|-
contentDisposition | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | Indicates whether the download is expected to be displayed inline or to be downloaded as an attachment.
contentLength | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The size of the downloaded entity body.
mimeType | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The mime type of the resource to be downloaded.
url | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The URL of the resource to be downloaded.

### message

Fired when a web message has been sent via `window.parent.postMessage(message, targetOrigin)` from inside the `WebView`.

Parameter|Type|Description
-|-|-
data | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The sent message.

## Change Events

### urlChanged

Fired when the [*url*](#url) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*url*](#url).

### htmlChanged

Fired when the [*html*](#html) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*html*](#html).

### canGoForwardChanged

Fired when the [*canGoForward*](#cangoforward) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*canGoForward*](#cangoforward).

### canGoBackChanged

Fired when the [*canGoBack*](#cangoback) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*canGoBack*](#cangoback).

