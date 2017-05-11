# NavigationView

A widget that displays a stack of [pages](Page) with a toolbar that allows to navigate back. The toolbar also displays the current page's title and the highest priority [actions](Action) that are added to the NavigationView. Only children of type `Page`, `Action` and `SearchAction` are supported. Since the NavigationView does not compute its own size, the width and height must be defined by the respective layout properties (e.g. either `width` or `left` and `right` must be specified).

Extends [Composite](Composite.md)

## Methods

### pages()

**Returns:** *[WidgetCollection](WidgetCollection.md)*

Returns the ordered list of pages on the page stack, with the bottommost page as the first and the topmost page as the last element. This method is similar to children(), but it does not contain children of other types than `Page`.


## Properties

### actionColor

Type: *[Color](../types.md#color)*

The color used for action icons.

### actionTextColor

Type: *[Color](../types.md#color)*

The color used for action texts. Only applied on Android. IOS uses the `actionColor` to colorize the action text.

### animated

Type: *boolean*, default: `true`

Controls whether page transitions are animated.

### drawerActionVisible

Type: *boolean*

Whether to display the so-called "Burger menu" to open the drawer.

### titleTextColor

Type: *[Color](../types.md#color)*

The text color used for page titles.

### toolbarColor

Type: *[Color](../types.md#color)*

The background color of the toolbar.

### toolbarVisible

Type: *boolean*, default: `true`

Whether the toolbar is visible.

### win_drawerActionBackground

Type: *[Color](../types.md#color)*

The background color used for the drawer action. It is common to the make this the same color as the splash screen. Available only on Windows.

### win_drawerActionTheme

Type: *string*, supported values: `light`, `dark`, `default`, default: `default`

Controls the color scheme used for the drawer action. When set to `"default"` the theme is inherited from the NavigationView. Available only on Windows.

### win_toolbarOverflowTheme

Type: *string*, supported values: `light`, `dark`, `default`, default: `default`

Controls the color scheme used for the toolbars overflow menu. When set to `"default"` the theme is inherited from the toolbar. Available only on Windows.

### win_toolbarTheme

Type: *string*, supported values: `light`, `dark`, `default`, default: `default`

Controls the color scheme used for the toolbar. When set to `"default"` the theme is inherited from the NavigationView. Available only on Windows.


## See also

- [Snippet with a NavigationView and Pages](https://github.com/eclipsesource/tabris-js/tree/v2.0.0-beta2/snippets/navigationview-page-stacked.js)
- [Snippet with a NavigationView and its various properties](https://github.com/eclipsesource/tabris-js/tree/v2.0.0-beta2/snippets/navigationview-properties.js)
- [Snippet with NavigationViews embedded in Tabs of a TabFolder](https://github.com/eclipsesource/tabris-js/tree/v2.0.0-beta2/snippets/navigationview-tabfolder.js)
