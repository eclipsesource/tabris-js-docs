---
---
# WebView

A widget that can display a web page. Since this widget requires a lot of recourses it's recommended to have no more than one instance at a time.
Includes [Widget](Widget.md)

## Methods

### postMessage(message, targetOrigin)



**Parameters:**

- message: *string*, the message to send. Currently supports only strings.
- targetOrigin: *string*, the URL of the page that recieves the message. The message is only sent if the current document URL has the same scheme, domain and path. Use `*` to send to any URL.

**Returns:** *this*

Posts a web message to the underlying `window` object of the WebView. The website in the `WebView` can register for the message in the following fashion: `window.addEventListener('message', callbackFunction)`. For more information see [`Window.postMessage()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) API.



## Properties

### html

Type: *string*

A complete HTML document to display. Always returns the last set value.

### url

Type: *string*

The URL of the web page to display. Relative URLs are resolved relative to 'package.json'. Returns empty string when content from *html* property is displayed.


## Events

### "download" (widget, event)

**Parameters:**

- widget: *this*
- event: *Object*

Fired when the WebView requests a download. The download event provides the properties `url`, `mimeType`, `contentLength` and `contentDisposition`. Supported only on Android.


### "load" (widget)

**Parameters:**

- widget: *this*

Fired when the url has been loaded.


### "message" (widget, event)

**Parameters:**

- widget: *this*
- event: *{data: string}*

Fired when a web message has been send via `window.parent.postMessage(message, targetOrigin)` from inside the `WebView`. The events `data` property contains the message send, which currently has to be a string.


### "navigate" (widget, event)

**Parameters:**

- widget: *this*
- event: *Object*

Fired when the WebView is about to navigate to a new URL. Listeners can intercept the navigation by calling `event.preventDefault()`.



## See also

- [Simple WebView snippet](https://github.com/eclipsesource/tabris-js/tree/v1.10.0/snippets/webview/webview.js)
- [WebView snippet demonstrating web messaging](https://github.com/eclipsesource/tabris-js/tree/v1.10.0/snippets/webview-webmessaging/webview-webmessaging.js)
- [Web Messaging](https://en.wikipedia.org/wiki/Web_Messaging)
