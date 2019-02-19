---
---
# Class "TabFolder"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`Composite`](Composite.md)</span> > <span style="white-space:nowrap;">[`TabFolder`](TabFolder.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\TabFolder.png 2x" src="img\android\TabFolder.png" alt="TabFolder on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\TabFolder.png 2x" src="img\ios\TabFolder.png" alt="TabFolder on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* TypeScript type: `TabFolder extends Composite<Tab>`
* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<TabFolder/>`
  * Parent element: [`<Composite/>`](Composite.md) and any widget extending <span style="white-space:nowrap;">[`Composite`](Composite.md)</span>
  * Child elements: `<Tab/>`
  * Text content: *Not supported*
* Direct subclasses: *None*
--------
A widget that can switch between [tabs](Tab). Only children of type `Tab` are supported. Since the TabFolder does not compute its own size, the width and height must be defined by the respective layout properties (e.g. either `width` or `left` and `right` must be specified).


Example:
```js
import {Tab, TabFolder, TextView, contentView} from 'tabris';

// Create a swipe enabled tab folder with 3 tabs

const tabFolder = new TabFolder({
  left: 0, top: 0, right: 0, bottom: 0,
  paging: true // enables swiping. To still be able to open the developer console in iOS, swipe from the bottom right.
}).appendTo(contentView);

createTab('Cart', 'resources/cart.png', 'resources/cart-filled.png');
createTab('Pay', 'resources/card.png', 'resources/card-filled.png');
createTab('Statistic', 'resources/chart.png', 'resources/chart-filled.png');

tabFolder.on('selectionChanged', ({value: tab}) => console.log(`selectionChanged to ${tab.title}`));
tabFolder.on('select', ({value: tab}) => console.log(`select event`));

function createTab(title, image, seletedImage) {
  const tab = new Tab({
    title, // converted to upper-case on Android
    image: {src: image, scale: 2},
    selectedImage: {src: seletedImage, scale: 2}
  }).on({
    appear: ({target}) => console.log(`${target.title} appeared`),
    disappear: ({target}) => console.log(`${target.title} disappeared`)
  }).appendTo(tabFolder);
  new TextView({
    centerX: 0, centerY: 0,
    text: 'Content of Tab ' + title
  }).appendTo(tab);
}
```
See also:

- [Snippet with a TabFolder and Tabs](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/tabfolder.js)

## Constructor

### new TabFolder(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof TabFolder>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### paging


* Type: <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
* Settable: *Yes*



Enables swiping through tabs.

### selectedTabIndicatorTintColor
<p class="platforms"> < span class = 'android-tag' title = 'supported on Android' > Android < /span></p>

* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



The color used for the underline strip of the selected tab. Only applies on Android when the `tabBarLocation` is `top`.

### selectedTabTintColor


* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



The color used for the text and icon of a selected tab.

### selection


* Type: <span style="white-space:nowrap;">[`Tab`](Tab.md)</span>
* Settable: *Yes*



The currently selected tab.

### tabBarBackground


* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



The color used for the background of the bar containing the tabs.

### tabBarElevation
<p class="platforms"> < span class = 'android-tag' title = 'supported on Android' > Android < /span></p>

* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *Yes*



The elevation of the tab bar. Depending on the `tabBarLocation` different defaults are applied.

### tabBarLocation


* Type: `'top'` | `'bottom'` | `'hidden'` | `'auto'`
* Default `'auto'`
* Settable: *On creation*



The placement of the tab titles. When set to `"hidden"`, the tab bar will not be visible. When set to `"auto"`, the position is platform dependent.

This property can only be set via constructor or JSX. Once set, it cannot change anymore.

### tabMode
<p class="platforms"> < span class = 'android-tag' title = 'supported on Android' > Android < /span></p>

* Type: `'fixed'` | `'scrollable'`
* Default `'fixed'`
* Settable: *On creation*



Controls how the tabs make use of the available horizontal space. Setting the `tabMode` to `"fixed"` makes the tabs span the entire available space. In case of a very wide `TabFolder` the `"fixed"` mode centers the tabs. The mode `"scrollable"` left aligns the tabs and allows to scroll the tabs if there are more tabs than would fit in the available space. Available on Android only.

This property can only be set via constructor or JSX. Once set, it cannot change anymore.

### tabTintColor


* Type: <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
* Settable: *Yes*



The color used for the text and icon of a tab.

When the `tabBarLocation` is `top` on iOS, this property affects the entire appearance of the bar. No other color properties have an effect in that configuration.


## Events

### select

Parameter|Type|Description
-|-|-
selection | <span style="white-space:nowrap;">[`Tab`](Tab.md)</span> | The `Tap` selected by the user.

Fired when the user taps on a tab. The event also fires when the same tab is tapped multiple times.

### scroll

Parameter|Type|Description
-|-|-
offset | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | Number of pixels the current tab has scrolled horizontally.
selection | <span style="white-space:nowrap;">[`Tab`](Tab.md)</span> | The current value of the `selection` property.

Fired when `paging` is enabled and a tab is scrolled. The `event` parameter contains position information relative to the currently selected `Tab`. Eg.: scrolling a 500px wide tab 10% to the left sets `offset` to `50`. Scrolling 10% to the right sets `offset` to `-50`.

## Change Events

### pagingChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*paging*](#paging).

Fired when the [*paging*](#paging) property has changed.

### selectionChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`Tab`](Tab.md)</span> | The new value of [*selection*](#selection).

Fired when the [*selection*](#selection) property has changed.

### tabTintColorChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*tabTintColor*](#tabTintColor).

Fired when the [*tabTintColor*](#tabTintColor) property has changed.

### selectedTabTintColorChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*selectedTabTintColor*](#selectedTabTintColor).

Fired when the [*selectedTabTintColor*](#selectedTabTintColor) property has changed.

### tabBarBackgroundChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*tabBarBackground*](#tabBarBackground).

Fired when the [*tabBarBackground*](#tabBarBackground) property has changed.

### selectedTabIndicatorTintColorChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*selectedTabIndicatorTintColor*](#selectedTabIndicatorTintColor).

Fired when the [*selectedTabIndicatorTintColor*](#selectedTabIndicatorTintColor) property has changed.

### tabBarElevationChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*tabBarElevation*](#tabBarElevation).

Fired when the [*tabBarElevation*](#tabBarElevation) property has changed.

