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

## See also

- [Simple WebView snippet](https://github.com/eclipsesource/tabris-js/blob/v1.3.0/snippets/webview/webview.js)
