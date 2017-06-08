---
---
# Migration Guide 1.x to 2.0

Tabris.js 2.0 introduces a number of API changes that require adjustments in your app code.
This guide explains how to migrate your app from Tabris.js 1.x to 2.0.

We recommend using ES6 or Typescript for Tabris.js apps and importing Tabris types instead of accessing the global `tabris` object. You can import types using the ES6 object destructor syntax:

```js
const {Button, NavigationView, ui} from 'tabris';
```

However, the global `tabris` object is still available. If your app refers to Tabris API using the `tabris` object, e.g. `tabris.Button`, this code will continue to work.

## Navigation and pages

Tabris 2.x has a new navigation concept that does not require pages as top-level containers anymore. Widgets can now be appended to the top-level `ui.contentView`. If you use pages, they need to be appended to a `NavigationView`. See [Navigation Patterns](https://tabrisjs.com/documentation/2.0/ui) for more information.

For a simple migration, you could include this snippet:

```js
let navigationView = new NavigationView({
  left: 0, top: 0, right: 0, bottom: 0
}).appendTo(ui.contentView);
Page.prototype.open = function() {
  this.appendTo(navigationView);
}
Page.prototype.close = function() {
  this.dispose();
}
```

The changes in detail:

#### Page and PageSelector

* `Page.open()` has been removed. Append the page to a `NavigationView` instead.
* `Page.close()` has been removed. Use `dispose()` or `detach()` to close a page.
* `Page.topLevel` property has been removed.
* `PageSelector` has been removed. For a sample page selector implementation, see the [drawer pages snippet](https://github.com/eclipsesource/tabris-js/blob/master/snippets/drawer-pages.js).

### Actions

* Instances of `Action` and `SearchAction` must now be appended to a `NavigationView`.

### Drawer

* The type `Drawer` can not be instantiated anymore. A singleton instance is now available as `ui.drawer`.
* The drawer is disabled by default. The property `enabled` must be set to `true` before the drawer can be used.

### UI

* `ui.statusBarTheme` has been removed. Use `ui.statusBar.theme` instead.
* `ui.displayMode` has been removed. Use `ui.statusBar.displayMode` instead.
* `ui.activePage` has been removed. Get the top most page of a `NavigationView` by calling `navigationView.pages().last()`.
* `ui.background` has been removed. Use the `NavigationView` property `toolbarColor` instead.
* `ui.textColor` has been removed. Use the `NavigationView` properties `titleTextColor`, `actionColor` and `actionTextColor` instead.
* `ui.toolbarVisible` has been removed. Use the `NavigationView` property `toolbarVisible` instead.

## Events

The API for event listeners has changed. Most notably, event listeners are now called with a single event parameter. All event objects have a `target` field that contains the object that received the event. Other properties of the event object are event-specific. Refer to the [documentation](https://tabrisjs.com/documentation/2.0/) for the properties available on the respective events.

For example, the following snippet:

```js
// Tabris 1.x
checkBox.on('select', (target, selection) => {
  target.text = selection ? 'checked' : 'not checked';
});
```

would have to be rewritten to:

```js
// Tabris 2.0
checkBox.on('select', (event) => {
  event.target.text = event.checked ? 'checked' : 'not checked';
});
```

or, a bit more concise, using ES6 object destructors:

```js
// Tabris 2.0
checkBox.on('select', ({target, checked}) => {
  target.text = checked ? 'checked' : 'not checked';
});
```

More changes to events:

* Calling `off()` without arguments or with a single argument is not supported anymore.
* Calling `on(event, listener)` or `once(event, listener)` multiple times with identical parameters will register the listener only once.

### Event names and properties

* Gesture events have been renamed to camel case, so that e.g. `swipe:left` becomes `swipeLeft`, `pan:horizontal` becomes `panHorizontal` etc.
* Touch events have been renamed to camel case as well, e.g. `touchstart` becomes `touchStart`.
* The events `addchild` and `removechild` have been renamed to camel case, i.e. `addChild` and `removeChild`.
* The event `backnavigation` on `tabris.app` has been renamed to `backNavigation`.
* Change events are now named after the pattern `<property>Changed`. For example, the event `change:text` becomes `textChanged` etc.
* The variants of the `close` event on `AlertDialog` have been renamed from `close:ok`, `close:cancel` and `close:neutral` to `closeOk`, `closeCancel`, and `closeNeutral`.
* The events `animationstart` and `animationend` have been removed, use the Promise returned by `animate()`.
* On touch events, the properties `pageX` and `pageY` have been renamed to `absoluteX` and `absoluteY`. Moreover, `time` has been replaced by `timeStamp`.
* On pan events, the property `translation` has been replaced by individual properties `translationX` and `translationY`. Likewise, `velocity` has been replaced by `velocityX` and `velocityY`.

## Widgets

* The `tabris.create()` method has been removed. Widget constructors are now available under the `tabris` namespace. [Create widgets](https://tabrisjs.com/documentation/2.0/widget-basics#creating-native-widgets) using `new` instead, e.g. use:

```js
new Button({centerX: 0, centerY: 0})
```

* The property `Widget.type` has been removed. This property used to contain the widget type, e.g. `'Button'`. Use `widget.constructor.name` instead. The `toString()` method now also returns the widget constructor name.

### New CollectionView API

The CollectionView has a new API based on item *indexes* instead of the items itself.
This gives the developer more control over binding different types of models to a CollectionView.

To begin with, the `items` property has been replaced by a new property `itemCount` that controls the number of items to be displayed.
To add or remove items at runtime, the methods `insert()` and `remove()` can be used, however, `insert()` now expects and item count instead of an array.

The cells of a CollectionView must now be created by the application in the callback `createCell`, which replaces the `initializeCell` callback.
Any type of widget can be used as a cell. The type Cell has become obsolete and was removed. Example:

```js
function createCell(type) {
  return new TextView({
    font: type === 'header' ? 'bold 18px' : '14px'
  });
}
```

Instead of the `change:item` event, the cells are now populated in a dedicated `updateCell` callback that receives the cell view and the item index to show:

```js
function updateCell(cell, index) {
  cell.text = items[index].name;
}
```

The property `itemHeight` has been renamed to `cellHeight` for consistency.

### New Picker API

The Picker API now follows the same approach as CollectionView, it works on item count and indexes rather than an array of strings.

The property `items` has been replaced by `itemCount`.
The property `selection` that accepted the selected item has been removed in favor of the existing property `selectionIndex`.
The `select` event does not contain a `selection` property anymore, only `index`.

The `itemText` callback is now required to provide a text for a given item. This callback is now called with an `index` instead of an item.

Example:
```js
let items = ['Apples', 'Oranges', 'Banana'];
new Picker({
  itemCount: items.length,
  itemText: index => items[index]
});
```

### Stateful buttons

* On `CheckBox`, `RadioButton`, `Switch` and `ToggleButton`, the property `selection` has been renamed to `checked`.

### ScrollView

* The properties `scrollX` and `scrollY` have been renamed to `offsetX` and `offsetY`, respectively. They are now read-only, use the method `scrollToX()` or `scrollToY()` to scroll.
* The event `scroll` has been replaced by `scrollX` and `scrollY`.

## Access to properties

Widget properties can now be accessed directly, without `get()` and `set()`. For example:

```
// Tabris 1.x
textView.set('text', 'foo');
let text = textView.get('text');
```

can now be written as:

```
// Tabris 2.0
textView.text = 'foo';
let text = textView.text;
```

However, the `get()` and `set()` methods continue to work with a small adjustment:

* Calling `get()` on a disposed object now returns `undefined`.
* Calling `set()` on a disposed object is a [NOOP](https://en.wikipedia.org/wiki/NOP).

## Custom widgets

Custom widget API has changed. Refer to the [custom widget documentation](https://tabrisjs.com/documentation/2.0/custom-widgets) for more information.
