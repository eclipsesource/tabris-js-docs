---
---
# Class "Popover"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a> > <a href="Popup.html" title="Popup Class Reference">Popup</a> > <a href="#" >Popover</a>

An `Popover` represents a modal ui container that is shown above the apps content. It provides the root element of a new layout hierarchy in the form of its `contentView` property. User provided widgets can be attached to the `contentView` similarly to the `tabris.contentView`. In order to close the `Popover` the `close()` method can be used.

The appearance of the `Popover` depends on the device size: On larger devices (like tablets) the `Popover` is shown as a floating window whereas on smaller devices it is shown as a fullscreen sheet covering the entire app.


Type: | <code style="white-space: nowrap">Popover extends <a href="Popup.html" title="Popup Class Reference">Popup</a></code>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | Element: <code style="white-space: nowrap"><a href="#" >&lt;Popover/&gt;</a></code><br/>Parent Elements: *Not supported*<br/>Child Elements: *Not Supported*<br/>

## Examples
### JavaScript


```js
import {Popover, TextView} from 'tabris';

const popover = new Popover();
popover.contentView.append(new TextView({text: 'Hello Popover'}));
popover.open();
```



See also:
  
[<span class='language jsx'>JSX</span> Creating a `Popover` containing a `NavigationView`](https://github.com/eclipsesource/tabris-js/tree/v3.8.0/snippets/popover.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.8.0&snippet=popover.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>

## Constructor

### new Popover(properties?)

Parameter|Type|Description
-|-|-
properties | <code style="white-space: nowrap"><a href="Widget.html#propertieswidget" title="Widget Class Type">Properties</a>&lt;<a href="#" >Popover</a>&gt;</code> | Sets all key-value pairs in the properties object on the `Popover`. *Optional.*

## Static Methods

### open(popover)



Makes the given popover visible. Meant to be used with inline-JSX. In TypeScript it also casts the given JSX element from `any` to an actual Popover.


Parameter|Type|Description
-|-|-
popover | <code style="white-space: nowrap"><a href="#" >Popover</a></code> | The popover to open


Returns: <code style="white-space: nowrap"><a href="#" >Popover</a></code>


## Properties

### anchor
<p class="platforms"><span class='ios-tag' title='supported on iOS'>iOS</span></p>

An anchor `Widget` the `Popover` should attach to. When the anchor is given the `Popover` is positioned next to the anchor `Widget` and provides a visual indication of its relation. When omitted the `Popover` is positioned centered on the screen.

Type: |<code style="white-space: nowrap"><a href="Widget.html" title="Widget Class Reference">Widget</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`anchorChanged`](#anchorchanged)




### contentView


The root widget element containing all children of Popover.

Type: |<code style="white-space: nowrap"><a href="ContentView.html" title="ContentView Object Reference">ContentView</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">ContentView</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | Not supported




This property can only be set via constructor or JSX. Once set, it cannot change anymore.



### height


The height of the `Popover` when shown in windowed mode on large screen devices. Will be a platform specific default if set to null.

Type: |<code style="white-space: nowrap"><a href="Widget.html#dimension" title="Widget Class Type">Dimension</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">null</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`heightChanged`](#heightchanged)




### width


The width of the `Popover` when shown in windowed mode on large screen devices. Will be a platform specific default if set to null.

Type: |<code style="white-space: nowrap"><a href="Widget.html#dimension" title="Widget Class Type">Dimension</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">null</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`widthChanged`](#widthchanged)





## Events

### close

Fired when the `Popover` was closed.

EventObject Type: <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a>&lt;<a href="#" >Popover</a>&gt;</code>

This event has no additional parameter.
## Change Events

### widthChanged

Fired when the [width](#width) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Popover</a>, <a href="Widget.html#dimension" title="Widget Class Type">Dimension</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="Widget.html#dimension" title="Widget Class Type">Dimension</a></code> | The new value of [width](#width).

### heightChanged

Fired when the [height](#height) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Popover</a>, <a href="Widget.html#dimension" title="Widget Class Type">Dimension</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="Widget.html#dimension" title="Widget Class Type">Dimension</a></code> | The new value of [height](#height).

### anchorChanged

Fired when the [anchor](#anchor) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Popover</a>, <a href="Widget.html" title="Widget Class Reference">Widget</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="Widget.html" title="Widget Class Reference">Widget</a></code> | The new value of [anchor](#anchor).


