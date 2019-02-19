---
---
# Class "WebView"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`WebView`](WebView.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\WebView.png 2x" src="img\android\WebView.png" alt="WebView on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\WebView.png 2x" src="img\ios\WebView.png" alt="WebView on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<WebView/>`
  * Parent element: [`<Composite/>`](Composite.md) and any widget extending <span style="white-space:nowrap;">[`Composite`](Composite.md)</span>
  * Child elements: *None*
  * Text content: *Not supported*
* Direct subclasses: *None*
--------
A widget that can display a web page. Since this widget requires a lot of resources it's recommended to have no more than one instance at a time.


Example:
```js
import {TextInput, WebView, contentView} from 'tabris';

// Create a web view to show a web page

const urlInput = new TextInput({
  left: 8, right: 8, top: 8,
  message: 'Enter URL...',
  text: 'http://en.wikipedia.org'
}).on('accept', loadUrl)
  .appendTo(contentView);

const webView = new WebView({
  left: 0, top: 'prev() 8', right: 0, bottom: 0
}).appendTo(contentView);

function loadUrl() {
  webView.url = urlInput.text;
}

loadUrl();
```
See also:

- [Simple WebView snippet](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/webview.js)
- [WebView snippet demonstrating web messaging](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/webview-webmessaging.js)
- [Web Messaging](https://en.wikipedia.org/wiki/Web_Messaging)

## Constructor

### new WebView(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof WebView>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Methods

### goBack()

* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Navigate the `WebView` to the previous page if possible.

### goForward()

* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Navigate the `WebView` to the next page if possible.

### postMessage(message, targetOrigin)



Parameter|Type|Optional|Description
-|-|-|-
message | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The message to send. Supports only strings.
targetOrigin | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The URL of the page that receives the message. The message is only sent if the current document URL has the same scheme, domain and path. Use `*` to send to any URL.
* Returns: <span style="white-space:nowrap;">[`this`](#)</span>

Posts a web message to the underlying `window` object of the WebView. The website in the `WebView` can register for the message in the following fashion: `window.addEventListener('message', callbackFunction)`. For more information see [`Window.postMessage()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) API.


## Properties

### canGoBack


* Type: <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
* Settable: *No*



Whether there is a previous to navigated to via `goBack()`.

### canGoForward


* Type: <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
* Settable: *No*



Whether there is a next page to navigate to via `goForward()`.

### html


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *Yes*



A complete HTML document to display. Always returns the last set value.

### url


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *Yes*



The URL of the web page to display. Relative URLs are resolved relative to 'package.json'. Returns empty string when content from *html* property is displayed.


## Events

### navigate

Parameter|Type|Description
-|-|-
preventDefault | <span style="white-space:nowrap;">`() => void`</span> | Call to intercept the navigation.  Not possible when the event is only an anchor navigation
url | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new URL the WebView is about to navigate to.

Fired when the WebView is about to navigate to a new URL.

### load

Fired when the url has been loaded.

### download

<p class="platforms"> < span class = 'android-tag' title = 'supported on Android' > Android < /span></p>Parameter|Type|Description
-|-|-
contentDisposition | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | Indicates whether the download is expected to be displayed inline or to be downloaded as an attachment.
contentLength | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The size of the downloaded entity body.
mimeType | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The mime type of the resource to be downloaded.
url | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The URL of the resource to be downloaded.

Fired when the WebView requests a download. The download event provides the properties `url`, `mimeType`, `contentLength` and `contentDisposition`. Supported only on Android.

### message

Parameter|Type|Description
-|-|-
data | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The sent message.

Fired when a web message has been sent via `window.parent.postMessage(message, targetOrigin)` from inside the `WebView`.

## Change Events

### urlChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*url*](#url).

Fired when the [*url*](#url) property has changed.

### htmlChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*html*](#html).

Fired when the [*html*](#html) property has changed.

### canGoForwardChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*canGoForward*](#canGoForward).

Fired when the [*canGoForward*](#canGoForward) property has changed.

### canGoBackChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*canGoBack*](#canGoBack).

Fired when the [*canGoBack*](#canGoBack) property has changed.

