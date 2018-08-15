---
---
# Popover

Extends [Popup](Popup.md)

An `Popover` represents a modal ui container that is shown above the apps content. It provides the root element of a new layout hierarchy in the form of its `contentView` property. User provided widgets can be attached to the `contentView` similarly to the `tabris.ui.contentView`. In order to close the `Popover` the `close()` method can be used.

The appearance of the `Popover` depends on the device size: On larger devices (like tablets) the `Popover` is shown as a floating window whereas on smaller devices it is shown as a fullscreen sheet covering the entire app. When used on larger devices, the size _has_ to be provided via the `width` and `height` properties.

Import this type with "`const {Popover} = require('tabris');`"

Example:

```js
let popover = new Popover();
popover.contentView.append(new TextView({text: 'Hello Popover'}));
popover.open();
```

## Properties

### anchor
<p class="platforms"><span class="ios-tag" title="supported on iOS">iOS</span><span class="windows-tag" title="supported on Windows 10">Windows 10</span></p>

Type: *[Widget](Widget.md)*

An anchor `Widget` the `Popover` should attach to. When the anchor is given the `Popover` is positioned next to the anchor `Widget` and provides a visual indication of its relation. When omitted the `Popover` is positioned centered on the screen.

### height


Type: *dimension*

The height of the `Popover` when shown in windowed mode on large screen devices

### width


Type: *dimension*

The width of the `Popover` when shown in windowed mode on large screen devices.


## Events

### anchorChanged

Fired when the [*anchor*](#anchor) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *[Widget](Widget.md)*
    The new value of [*anchor*](#anchor).


### close

Fired when the `Popover` was closed.
### heightChanged

Fired when the [*height*](#height) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *dimension*
    The new value of [*height*](#height).


### widthChanged

Fired when the [*width*](#width) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *dimension*
    The new value of [*width*](#width).





## Example
```js
const {Action, NavigationView, Page, Popover, Button, TextView, ui, device} = require('tabris');

let button = new Button({
  left: 16, right: 16, top: 24,
  text: 'Show Popover'
}).on('select', showPopover)
  .appendTo(ui.contentView);

function showPopover() {
  let popover = new Popover({width: 300, height: 400, anchor: button})
    .on('close', () => console.log('Popover closed'))
    .open();
  let navigationView = new NavigationView({
    layoutData: {left: 0, right: 0, top: 0, bottom: 0},
    navigationAction: new Action({
      title: 'Close',
      image: {
        src: device.platform === 'iOS' ? 'resources/close-black-24dp@3x.png' : 'resources/close-white-24dp@3x.png',
        scale: 3
      }
    }).on('select', () => popover.close())
  }).appendTo(popover.contentView);
  let page = new Page({title: 'Popover'}).appendTo(navigationView);
  new TextView({centerX: 0, centerY: 0, text: 'Hello popover',}).appendTo(page);
}
```
## See also

- [Popover snippet using a NavigationView as its header bar](https://github.com/eclipsesource/tabris-js/tree/v2.6.1/snippets/popover.js)
