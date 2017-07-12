---
---
# ui

Extends [Composite](Composite.md)

Represents the top-level parent for all widgets. It provides access to the status bar, the navigation bar, the drawer and the content view.

Import this object with "`const {ui} = require('tabris');`"

## Properties

### contentView


Type: *[Composite](Composite.md)*

The content view is the container for the widgets that constitute the app's main UI. It covers the entire app area. Widgets can be appended directly to the content view.

### drawer


Type: *[Drawer](Drawer.md)*

A drawer that can be swiped in from the left edge of the screen. The drawer is locked by default. To use it in an application, set the property `locked` to `false`. The drawer can contain any kind of widgets.

### navigationBar


Type: *[NavigationBar](NavigationBar.md)*

Represents the system navigation bar is the onscreen area where *Back*, *Home* and similar buttons are displayed. It is only supported on Android.

### statusBar


Type: *[StatusBar](StatusBar.md)*

Represents the system status bar. This is the area where notifications, status icons and device time are displayed.

