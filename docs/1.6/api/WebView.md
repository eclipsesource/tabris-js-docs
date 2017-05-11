---
---
# WebView
A widget that can display a web page. Since this widget requires a lot of recourses it's recommended to have no more than one instance at a time.
Includes [Widget API](Widget.md)

## Properties
### html
Type: *string*

A complete HTML document to display. Always returns the last set value.
### url
Type: *string*

The URL of the web page to display. Returns empty string when content from *html* property is displayed.

## Events
### "load" (widget)

**Parameters:** 

- widget: *[WebView](WebView.md)*

Fired when the url has been loaded.

### "navigate" (widget, event)

**Parameters:** 

- widget: *[WebView](WebView.md)*
- event: *Object*

Fired when the WebView is about to navigate to a new URL. Listeners can intercept the navigation by calling `event.preventDefault()`.


## See also
- [Simple WebView snippet](https://github.com/eclipsesource/tabris-js/blob/master/snippets/webview/webview.js)
