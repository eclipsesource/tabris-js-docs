---
---
# Class "Tab"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a> > <a href="Widget.html" title="Widget Class Reference">Widget</a> > <a href="Composite.html" title="Composite Class Reference">Composite</a> > <a href="#" >Tab</a>

A container representing a single tab of a TabFolder widget.


<div class="tabris-image"><figure><div><img srcset="img/android/Tab.png 2x" src="img/android/Tab.png" alt="Tab on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/Tab.png 2x" src="img/ios/Tab.png" alt="Tab on iOS"/></div><figcaption>iOS</figcaption></figure></div>

Type: | <code style="white-space: nowrap">Tab extends <a href="Composite.html" title="Composite Class Reference">Composite</a></code>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | Element: <code style="white-space: nowrap"><a href="Tab.html" title="Tab Class Reference">&lt;Tab/&gt;</a></code><br/>Parent Elements: <code style="white-space: nowrap"><a href="TabFolder.html" title="TabFolder Class Reference">&lt;TabFolder/&gt;</a></code><br/>Child Elements: *Any standalone widget element*<br/>Text Content: *Not supported*

## Examples
### JavaScript


```js
import {Tab, TabFolder, contentView} from 'tabris';

new TabFolder({left: 0, top: 0, right: 0, bottom: 0})
  .append(new Tab({title: 'Albums'}))
  .append(new Tab({title: 'Artists'}))
  .onSelect(({selection}) => console.log(`Tab changed to ${selection}`))
  .appendTo(contentView);
```


See also:
  
[<span class='language jsx'>JSX</span> Creating a `Tab` inside a `TabFolder`](https://playground.tabris.com/?gitref=v3.2.0&snippet=tabfolder.jsx)

## Constructor

### new Tab(properties?)

Parameter|Type|Description
-|-|-
properties | <code style="white-space: nowrap"><a href="../types.html#propertieswidget" title="Properties&lt;Widget&gt;">Properties</a>&lt;<a href="#" >Tab</a>&gt;</code> | Sets all key-value pairs in the properties object as widget properties. *Optional.*

## Methods

### insertBefore(widget)



Inserts this widget directly before the given `Tab`.


Parameter|Type|Description
-|-|-
widget | <code style="white-space: nowrap"><a href="#" >Tab</a></code> | 


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>


## Properties

### badge


A badge to attach on the tab. The property only has an effect when the parent `TabFolder` has its `tabBarLocation` set to `bottom`. Setting the `badge` to `0` hides the badge. The background color of the badge can be controlled with the `badgeColor` property.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`badgeChanged`](#badgechanged)




### badgeColor


The background color used for the `badge` indicator.

Type: |<code style="white-space: nowrap"><a href="../types.html#colorvalue" title="ColorValue Type Reference">ColorValue</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`badgeColorChanged`](#badgecolorchanged)




### image


An image to be displayed on the tab.  Will not be shown on iOS if the `TabFolder`'s `tabBarLocation` is set to `top`

Type: |<code style="white-space: nowrap"><a href="../types.html#imagevalue" title="ImageValue Type Reference">ImageValue</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`imageChanged`](#imagechanged)




### selectedImage


An image to be displayed on the currently active tab.

Type: |<code style="white-space: nowrap"><a href="../types.html#imagevalue" title="ImageValue Type Reference">ImageValue</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`selectedImageChanged`](#selectedimagechanged)




### title


The title to be displayed on the tab.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`titleChanged`](#titlechanged)





## Events

### appear

Fired when the tab will become visible, i.e. the selection of its TabFolder.

EventObject Type: <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a>&lt;<a href="#" >Tab</a>&gt;</code>

This event has no additional parameter.
### disappear

Fired when the tab is no longer visible, i.e. it no longer is the selection of its TabFolder.

EventObject Type: <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a>&lt;<a href="#" >Tab</a>&gt;</code>

This event has no additional parameter.
### select

Fired when the tab is tapped by the user. The event is fired either when the tab is first selected or when it is already visible and tapped.

EventObject Type: <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a>&lt;<a href="#" >Tab</a>&gt;</code>

This event has no additional parameter.
### reselect

Fired when the tab is tapped by the user while it is already visible.

EventObject Type: <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a>&lt;<a href="#" >Tab</a>&gt;</code>

This event has no additional parameter.
## Change Events

### titleChanged

Fired when the [title](#title) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >Tab</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The new value of [title](#title).

### imageChanged

Fired when the [image](#image) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >Tab</a>, <a href="../types.html#imagevalue" title="ImageValue Type Reference">ImageValue</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="../types.html#imagevalue" title="ImageValue Type Reference">ImageValue</a></code> | The new value of [image](#image).

### selectedImageChanged

Fired when the [selectedImage](#selectedimage) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >Tab</a>, <a href="../types.html#imagevalue" title="ImageValue Type Reference">ImageValue</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="../types.html#imagevalue" title="ImageValue Type Reference">ImageValue</a></code> | The new value of [selectedImage](#selectedimage).

### badgeChanged

Fired when the [badge](#badge) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >Tab</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The new value of [badge](#badge).

### badgeColorChanged

Fired when the [badgeColor](#badgecolor) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >Tab</a>, <a href="../types.html#colorvalue" title="ColorValue Type Reference">ColorValue</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="../types.html#colorvalue" title="ColorValue Type Reference">ColorValue</a></code> | The new value of [badgeColor](#badgecolor).

