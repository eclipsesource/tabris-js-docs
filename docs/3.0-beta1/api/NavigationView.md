---
---
# Widget "NavigationView"

Extends [Composite](Composite.md)

A widget that displays a stack of [pages](Page) with a toolbar that allows to navigate back. The toolbar also displays the current page's title and the highest priority [actions](Action) that are added to the NavigationView. Only children of type `Page`, `Action` and `SearchAction` are supported. Since the NavigationView does not compute its own size, the width and height must be defined by the respective layout properties (e.g. either `width` or `left` and `right` must be specified).

You can import this type like this:
```js
import {NavigationView} from 'tabris';
```
Or reference it directly form anywhere as "`tabris.NavigationView`".
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
<p class="platforms"> < span class = 'android-tag' title = 'supported on Android' > Android < /span></p>

Type: *[Color](../types.md#color)*

The color used for action texts. Only applied on Android, IOS uses the `actionColor` to colorize the action text.

### drawerActionVisible


Type: *boolean*

Whether to display the so-called "Burger menu" to open the drawer.

### navigationAction


Type: *[Action](Action.md)*, default: `null`

Action that replaces back button and arrow. When it is replaced the developer is responsible for providing a way to go back on the page stack. Setting the action to null restores back button and arrow.

### pageAnimation


Type: *string*, supported values: `default`, `none`, default: `default`

Controls what animation to use when animating a page transition.

### titleTextColor


Type: *[Color](../types.md#color)*

The text color used for page titles.

### toolbarColor


Type: *[Color](../types.md#color)*

The background color of the toolbar.

### toolbarHeight


Type: *number*

The height of the toolbar. Is 0 if not visible.

### toolbarVisible


Type: *boolean*, default: `true`

Whether the toolbar is visible.


## Events

### actionColorChanged

Fired when the [*actionColor*](#actionColor) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*actionColor*](#actionColor).


### actionTextColorChanged

Fired when the [*actionTextColor*](#actionTextColor) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*actionTextColor*](#actionTextColor).


### drawerActionVisibleChanged

Fired when the [*drawerActionVisible*](#drawerActionVisible) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*drawerActionVisible*](#drawerActionVisible).


### navigationActionChanged

Fired when the [*navigationAction*](#navigationAction) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Action](Action.md)*
    The new value of [*navigationAction*](#navigationAction).


### pageAnimationChanged

Fired when the [*pageAnimation*](#pageAnimation) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*pageAnimation*](#pageAnimation).


### titleTextColorChanged

Fired when the [*titleTextColor*](#titleTextColor) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*titleTextColor*](#titleTextColor).


### toolbarColorChanged

Fired when the [*toolbarColor*](#toolbarColor) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Color](../types.md#color)*
    The new value of [*toolbarColor*](#toolbarColor).


### toolbarHeightChanged

Fired when the height of the toolbar changes, e.g. if it changes visibility.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *number*
    The new value of [*toolbarHeight*](#toolbarHeight).


### toolbarVisibleChanged

Fired when the [*toolbarVisible*](#toolbarVisible) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*toolbarVisible*](#toolbarVisible).





## See also

- [Snippet with a NavigationView and Pages](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta1/snippets/navigationview-page-stacked.js)
- [Snippet with a NavigationView and its various properties](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta1/snippets/navigationview-properties.js)
- [Snippet with NavigationViews embedded in Tabs of a TabFolder](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta1/snippets/navigationview-tabfolder.js)
