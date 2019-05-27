---
---
# Class "Popover"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Popup`](Popup.md)</span> > <span style="white-space:nowrap;">[`Popover`](Popover.md)</span>

An `Popover` represents a modal ui container that is shown above the apps content. It provides the root element of a new layout hierarchy in the form of its `contentView` property. User provided widgets can be attached to the `contentView` similarly to the `tabris.contentView`. In order to close the `Popover` the `close()` method can be used.

The appearance of the `Popover` depends on the device size: On larger devices (like tablets) the `Popover` is shown as a floating window whereas on smaller devices it is shown as a fullscreen sheet covering the entire app.


Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | Element: `<Popover/>`<br/>Child elements: *None*<br/>Text content: *Not supported*<br/>

## Example
```js
const popover = new Popover();
popover.contentView.append(new TextView({text: 'Hello Popover'}));
popover.open();
```

See also:

- [Demo JavaScript/JSX Snippet: Creating a `Popover` containing a `NavigationView`](https://playground.tabris.com/?gitref=v3.0.0&snippet=popover.jsx)

## Constructor

### new Popover(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<Popover>`</span> | Yes | Sets all key-value pairs in the properties object on the `Popover`.

## Static Methods

### open(popover)



Makes the given popover visible. Meant to be used with inline-JSX. In TypeScript it also casts the given JSX element from `any` to an actual Popover.


Parameter|Type|Optional|Description
-|-|-|-
popover | <span style="white-space:nowrap;">[`Popover`](Popover.md)</span> | No | The popover to open


Returns <span style="white-space:nowrap;">[`Popover`](Popover.md)</span>


## Properties

### anchor
<p class="platforms"><span class='ios-tag' title='supported on iOS'>iOS</span></p>

An anchor `Widget` the `Popover` should attach to. When the anchor is given the `Popover` is positioned next to the anchor `Widget` and provides a visual indication of its relation. When omitted the `Popover` is positioned centered on the screen.

Type | <span style="white-space:nowrap;">[`Widget`](Widget.md)</span>
Settable | *Yes*
Change events | *Yes*




### contentView


The root widget element containing all children of Popover.

Type | <span style="white-space:nowrap;">[`ContentView`](ContentView.md)</span>
Default | `ContentView`
Settable | *No*
Change events | *No*




This property can only be set via constructor or JSX. Once set, it cannot change anymore.

### height


The height of the `Popover` when shown in windowed mode on large screen devices

Type | <span style="white-space:nowrap;">`dimension`</span>
Settable | *Yes*
Change events | *Yes*




### width


The width of the `Popover` when shown in windowed mode on large screen devices.

Type | <span style="white-space:nowrap;">`dimension`</span>
Settable | *Yes*
Change events | *Yes*





## Events

### close

Fired when the `Popover` was closed.

## Change Events

### widthChanged

Fired when the [*width*](#width) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`dimension`</span> | The new value of [*width*](#width).

### heightChanged

Fired when the [*height*](#height) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`dimension`</span> | The new value of [*height*](#height).

### anchorChanged

Fired when the [*anchor*](#anchor) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> | The new value of [*anchor*](#anchor).

