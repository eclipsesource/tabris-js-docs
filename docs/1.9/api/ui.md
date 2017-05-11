# ui

The object `tabris.ui` is the root element for all widgets. This is the parent for all top-level pages, *actions* and the *drawer*.
Includes [Widget](Widget.md)

## Properties

### activePage

Type: *[Page](Page.md)*

The currently visible page.

### background

Type: *[Color](../types.md#color)*

Background color for the navigation elements

### displayMode

Type: *string*, supported values: `normal`, `fullscreen`, default: `normal`

Allows to switch the UI to full screen.

### statusBarTheme

Type: *string*, supported values: `light`, `dark`, `default`, default: `default`

The theme to use for the system status bar. The value "default" selects the platform default. This property will only control the foreground text and icons. The 'light' theme will result in *dark* foreground. Only supported on iOS and Android 6+.

### textColor

Type: *[Color](../types.md#color)*

Text color for the navigation elements

### toolbarVisible

Type: *boolean*, default: `true`

Whether the toolbars above and below pages are visible.


## Events

### "change:activePage" (ui, page, options)

**Parameters:** 

- ui: *[UI](UI.md)*
- page: *[Page](Page.md)*, the page that is now active (visible).
- options: *Object*

Fired when the active page changes.


