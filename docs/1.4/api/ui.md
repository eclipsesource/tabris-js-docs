---
---
# tabris.ui
The object `tabris.ui` is the root element for all widgets. This is the parent for all top-level pages, *actions* and the *drawer*.
Includes [Events API](Events.md), [Properties API](Properties.md)

## Properties
### activePage
Type: *[Page](Page.md)*

The currently visible page.
### background
Type: *[Color](../types.md#color)*

Background color for the navigation elements
### textColor
Type: *[Color](../types.md#color)*

Text color for the navigation elements
### toolbarVisible
Type: *boolean*, default: `true`

Whether the toolbars above and below pages are visible.

## Events
### "change:activePage" (ui, page, options)

**Parameters:** 

- ui: `tabris.ui`
- page: *[Page](Page.md)*, the page that is now active (visible).
- options: *Object*

