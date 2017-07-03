---
---
# NavigationView

A widget that displays a stack of [pages](Page) with a toolbar that allows to navigate back. The toolbar also displays the current page's title and the highest priority [actions](Action) that are added to the NavigationView. Only children of type `Page`, `Action` and `SearchAction` are supported. Since the NavigationView does not compute its own size, the width and height must be defined by the respective layout properties (e.g. either `width` or `left` and `right` must be specified).

Extends [Composite](Composite.md)

## Methods

### pages(selector)

**Parameters:** 

- selector: *[Selector](../types.md#selector)* [**Optional**]
  - a selector expression or a predicate function to filter the results.

**Returns:** *[WidgetCollection](WidgetCollection.md)*

Returns the ordered list of pages on the page stack, with the bottommost page as the first and the topmost page as the last element. Same as children(), but only returns children that are of type `Page`.


## Properties

### actionColor

Type: *[Color](../types.md#color)*

The color used for action icons.

### actionTextColor

Type: *[Color](../types.md#color)*

The color used for action texts. Only applied on Android and Windows. IOS uses the `actionColor` to colorize the action text.

### bottomToolbarHeight

Type: *number*

The height of the bottom toolbar. Is 0 if not visible or unsupported by the platform.

### drawerActionVisible

Type: *boolean*

Whether to display the so-called "Burger menu" to open the drawer.

### pageAnimation

Type: *string*, supported values: `default`, `none`, default: `default`

Controls what animation to use when animating a page transition.

### titleTextColor

Type: *[Color](../types.md#color)*

The text color used for page titles.

### toolbarColor

Type: *[Color](../types.md#color)*

The background color of the toolbar.

### toolbarVisible

Type: *boolean*, default: `true`

Whether the toolbar is visible.

### topToolbarHeight

Type: *number*

The height of the top toolbar. Is 0 if not visible.

### win_drawerActionBackground

Type: *[Color](../types.md#color)*

The background color used for the drawer action. It is common to the make this the same color as the splash screen. Available only on Windows.

### win_drawerActionTheme

Type: *string*, supported values: `light`, `dark`, `default`, default: `default`

Controls the color scheme used for the drawer action. When set to `"default"` the theme is inherited from the NavigationView. Available only on Windows.

### win_toolbarOverflowTheme

Type: *string*, supported values: `light`, `dark`, `default`, default: `default`

Controls the color scheme used for the toolbar's overflow menu. When set to `"default"` the theme is inherited from the toolbar. Available only on Windows.

### win_toolbarTheme

Type: *string*, supported values: `light`, `dark`, `default`, default: `default`

Controls the color scheme used for the toolbar. When set to `"default"` the theme is inherited from the NavigationView. Available only on Windows.


## Events

### bottomToolbarHeightChanged

Fired when the height of the bottom toolbar changes, e.g. if it changes visibility.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *number*
    The new height


### change:actionColor

Fired when the [*actionColor*](#actionColor) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*actionColor*](#actionColor).


### change:actionTextColor

Fired when the [*actionTextColor*](#actionTextColor) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*actionTextColor*](#actionTextColor).


### change:bottomToolbarHeight

Fired when the [*bottomToolbarHeight*](#bottomToolbarHeight) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *number*
    The new value of [*bottomToolbarHeight*](#bottomToolbarHeight).


### change:drawerActionVisible

Fired when the [*drawerActionVisible*](#drawerActionVisible) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*drawerActionVisible*](#drawerActionVisible).


### change:pageAnimation

Fired when the [*pageAnimation*](#pageAnimation) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*pageAnimation*](#pageAnimation).


### change:titleTextColor

Fired when the [*titleTextColor*](#titleTextColor) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*titleTextColor*](#titleTextColor).


### change:toolbarColor

Fired when the [*toolbarColor*](#toolbarColor) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*toolbarColor*](#toolbarColor).


### change:toolbarVisible

Fired when the [*toolbarVisible*](#toolbarVisible) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*toolbarVisible*](#toolbarVisible).


### change:topToolbarHeight

Fired when the [*topToolbarHeight*](#topToolbarHeight) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *number*
    The new value of [*topToolbarHeight*](#topToolbarHeight).


### change:win_drawerActionBackground

Fired when the [*win_drawerActionBackground*](#win_drawerActionBackground) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*win_drawerActionBackground*](#win_drawerActionBackground).


### change:win_drawerActionTheme

Fired when the [*win_drawerActionTheme*](#win_drawerActionTheme) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*win_drawerActionTheme*](#win_drawerActionTheme).


### change:win_toolbarOverflowTheme

Fired when the [*win_toolbarOverflowTheme*](#win_toolbarOverflowTheme) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*win_toolbarOverflowTheme*](#win_toolbarOverflowTheme).


### change:win_toolbarTheme

Fired when the [*win_toolbarTheme*](#win_toolbarTheme) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*win_toolbarTheme*](#win_toolbarTheme).


### topToolbarHeightChanged

Fired when the height of the top toolbar changes, e.g. if it changes visibility.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *number*
    The new height





## See also

- [Snippet with a NavigationView and Pages](https://github.com/eclipsesource/tabris-js/tree/v2.0.0-rc2/snippets/navigationview-page-stacked.js)
- [Snippet with a NavigationView and its various properties](https://github.com/eclipsesource/tabris-js/tree/v2.0.0-rc2/snippets/navigationview-properties.js)
- [Snippet with NavigationViews embedded in Tabs of a TabFolder](https://github.com/eclipsesource/tabris-js/tree/v2.0.0-rc2/snippets/navigationview-tabfolder.js)
