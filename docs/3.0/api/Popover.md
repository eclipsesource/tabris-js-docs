---
---
# Class "Popover"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Popup`](Popup.md)</span> > <span style="white-space:nowrap;">[`Popover`](Popover.md)</span>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<Popover/>`
  * Child elements: *None*
  * Text content: *Not supported*
* Direct subclasses: *None*
--------
An `Popover` represents a modal ui container that is shown above the apps content. It provides the root element of a new layout hierarchy in the form of its `contentView` property. User provided widgets can be attached to the `contentView` similarly to the `tabris.contentView`. In order to close the `Popover` the `close()` method can be used.

The appearance of the `Popover` depends on the device size: On larger devices (like tablets) the `Popover` is shown as a floating window whereas on smaller devices it is shown as a fullscreen sheet covering the entire app. When used on larger devices, the size _has_ to be provided via the `width` and `height` properties.


Example:

```js
let popover = new Popover();
popover.contentView.append(new TextView({text: 'Hello Popover'}));
popover.open();
```

Example:
```js
import {Action, NavigationView, Page, Popover, Button, TextView, contentView, device} from 'tabris';

const button = new Button({
  left: 16, right: 16, top: 24,
  text: 'Show Popover'
}).on('select', showPopover)
  .appendTo(contentView);

function showPopover() {
  const popover = new Popover({width: 300, height: 400, anchor: button})
    .on('close', () => console.log('Popover closed'))
    .open();
  const navigationView = new NavigationView({
    layoutData: {left: 0, right: 0, top: 0, bottom: 0},
    navigationAction: new Action({
      title: 'Close',
      image: {
        src: device.platform === 'iOS' ? 'resources/close-black-24dp@3x.png' : 'resources/close-white-24dp@3x.png',
        scale: 3
      }
    }).on('select', () => popover.close())
  }).appendTo(popover.contentView);
  const page = new Page({title: 'Popover'}).appendTo(navigationView);
  new TextView({centerX: 0, centerY: 0, text: 'Hello popover'}).appendTo(page);
}
```
See also:

- [Popover snippet using a NavigationView as its header bar](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/popover.js)

## Constructor

### new Popover(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof Popover>`</span> | Yes | Sets all key-value pairs in the properties object on the `Popover`.

## Properties

### anchor
<p class="platforms"> < span class = 'ios-tag' title = 'supported on iOS' > iOS < /span></p>

* Type: <span style="white-space:nowrap;">[`Widget`](Widget.md)</span>
* Settable: *Yes*



An anchor `Widget` the `Popover` should attach to. When the anchor is given the `Popover` is positioned next to the anchor `Widget` and provides a visual indication of its relation. When omitted the `Popover` is positioned centered on the screen.

### contentView


* Type: <span style="white-space:nowrap;">[`ContentView`](ContentView.md)</span>
* Default `ContentView`
* Settable: *No*



The root widget element containing all children of Popover.

This property can only be set via constructor or JSX. Once set, it cannot change anymore.

### height


* Type: <span style="white-space:nowrap;">`dimension`</span>
* Settable: *Yes*



The height of the `Popover` when shown in windowed mode on large screen devices

### width


* Type: <span style="white-space:nowrap;">`dimension`</span>
* Settable: *Yes*



The width of the `Popover` when shown in windowed mode on large screen devices.


## Events

### close

Fired when the `Popover` was closed.

## Change Events

### widthChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`dimension`</span> | The new value of [*width*](#width).

Fired when the [*width*](#width) property has changed.

### heightChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`dimension`</span> | The new value of [*height*](#height).

Fired when the [*height*](#height) property has changed.

### anchorChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> | The new value of [*anchor*](#anchor).

Fired when the [*anchor*](#anchor) property has changed.

