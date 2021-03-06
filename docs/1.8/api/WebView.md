---
---
# WebView

A widget that can display a web page. Since this widget requires a lot of recourses it's recommended to have no more than one instance at a time.
Includes [Widget](Widget.md)

## Properties

### html
Type: *string*

A complete HTML document to display. Always returns the last set value.
### url

Type: *string*

The URL of the web page to display. Relative URLs are resolved relative to 'package.json'. Returns empty string when content from *html* property is displayed.

## Events

### "load" (widget)

**Parameters:**

- widget: *this*

Fired when the url has been loaded.

### "navigate" (widget, event)

**Parameters:**

- widget: *this*
- event: *any*

Fired when the WebView is about to navigate to a new URL. Listeners can intercept the navigation by calling `event.preventDefault()`.


## See also

- [Simple WebView snippet](https://github.com/eclipsesource/tabris-js/blob/v1.8.0/snippets/webview/webview.js)
