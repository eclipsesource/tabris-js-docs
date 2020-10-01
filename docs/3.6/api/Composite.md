---
---
# Class "Composite"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a> > <a href="Widget.html" title="Widget Class Reference">Widget</a> > <a href="#" >Composite</a>

An empty widget that can contain other widgets.


<div class="tabris-image"><figure><div><img srcset="img/android/Composite.png 2x" src="img/android/Composite.png" alt="Composite on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/Composite.png 2x" src="img/ios/Composite.png" alt="Composite on iOS"/></div><figcaption>iOS</figcaption></figure></div>

Type: | <code style="white-space: nowrap">Composite&lt;ChildType&gt; extends <a href="Widget.html" title="Widget Class Reference">Widget</a></code>
Generics: | <span id="generics">ChildType: *The common widget class of the children this composite can contain. Must be a subclass of <code style="white-space: nowrap"><a href="Widget.html" title="Widget Class Reference">Widget</a></code> and defaults to <code style="white-space: nowrap"><a href="Widget.html" title="Widget Class Reference">Widget</a></code>.*<br/></span>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | <code style="white-space: nowrap"><a href="Canvas.html" title="Canvas Class Reference">Canvas</a></code>, <code style="white-space: nowrap"><a href="Cell.html" title="Cell Class Reference">Cell</a></code>, <code style="white-space: nowrap"><a href="CollectionView.html" title="CollectionView Class Reference">CollectionView</a></code>, <code style="white-space: nowrap"><a href="ContentView.html" title="ContentView Object Reference">ContentView</a></code>, <code style="white-space: nowrap"><a href="NavigationView.html" title="NavigationView Class Reference">NavigationView</a></code>, <code style="white-space: nowrap"><a href="Page.html" title="Page Class Reference">Page</a></code>, <code style="white-space: nowrap"><a href="RefreshComposite.html" title="RefreshComposite Class Reference">RefreshComposite</a></code>, <code style="white-space: nowrap"><a href="Row.html" title="Row Class Reference">Row</a></code>, <code style="white-space: nowrap"><a href="ScrollView.html" title="ScrollView Class Reference">ScrollView</a></code>, <code style="white-space: nowrap"><a href="Stack.html" title="Stack Class Reference">Stack</a></code>, <code style="white-space: nowrap"><a href="Tab.html" title="Tab Class Reference">Tab</a></code>, <code style="white-space: nowrap"><a href="TabFolder.html" title="TabFolder Class Reference">TabFolder</a></code>
JSX Support: | Element: <code style="white-space: nowrap"><a href="#" >&lt;Composite/&gt;</a></code><br/>Parent Elements: <code style="white-space: nowrap"><a href="Canvas.html" title="Canvas Class Reference">&lt;Canvas/&gt;</a></code>, <code style="white-space: nowrap"><a href="Cell.html" title="Cell Class Reference">&lt;Cell/&gt;</a></code>, <code style="white-space: nowrap"><a href="#" >&lt;Composite/&gt;</a></code>, <code style="white-space: nowrap"><a href="Page.html" title="Page Class Reference">&lt;Page/&gt;</a></code>, <code style="white-space: nowrap"><a href="RefreshComposite.html" title="RefreshComposite Class Reference">&lt;RefreshComposite/&gt;</a></code>, <code style="white-space: nowrap"><a href="Row.html" title="Row Class Reference">&lt;Row/&gt;</a></code>, <code style="white-space: nowrap"><a href="ScrollView.html" title="ScrollView Class Reference">&lt;ScrollView/&gt;</a></code>, <code style="white-space: nowrap"><a href="Stack.html" title="Stack Class Reference">&lt;Stack/&gt;</a></code>, <code style="white-space: nowrap"><a href="Tab.html" title="Tab Class Reference">&lt;Tab/&gt;</a></code><br/>Child Elements: *Any standalone widget element*<br/>

## Examples
### JavaScript


```js
import {Composite, contentView} from 'tabris';

new Composite({left: 0, top: 0, width: 128, height: 256})
  .appendTo(contentView);
```


See also:
  
[<span class='language jsx'>JSX</span> Creating a simple `Composite`](https://playground.tabris.com/?gitref=v3.6.1&snippet=composite.jsx)

## Constructor

### new Composite(properties?)

Parameter|Type|Description
-|-|-
properties | <code style="white-space: nowrap"><a href="../types.html#propertieswidget" title="Properties&lt;Widget&gt;">Properties</a>&lt;<a href="#" >Composite</a>&gt;</code> | Sets all key-value pairs in the properties object as widget properties. *Optional.*

## Methods

### append(...widgets)



Adds the given widgets to the composite.


Parameter|Type|Description
-|-|-
...widgets | <code style="white-space: nowrap"><a href="Widget.html" title="Widget Class Reference">Widget</a>[]</code> | 


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### append(widgets)



Adds all widgets in the given array to the composite.


Parameter|Type|Description
-|-|-
widgets | <code style="white-space: nowrap"><a href="Widget.html" title="Widget Class Reference">Widget</a>[]</code> | 


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### append(widgets)



Adds all widgets in the given collection to the composite.


Parameter|Type|Description
-|-|-
widgets | <code style="white-space: nowrap"><a href="WidgetCollection.html" title="WidgetCollection Class Reference">WidgetCollection</a></code> | 


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### apply(options, rules)



Applies the given attributes to all descendants that match the associated selector(s). Each attributes object may contain properties to be set and listeners to be registered. An entry will be treated as a listener if it follows the naming scheme "onEventType". IMPORTANT: Listeners previously registered (for the same type) via the `apply` method, a [JSX](../declarative-ui.md) element attribute or a [widget factory](./utils.md#asfactoryconstructor) call will be de-registered. This means you can call apply repeatedly and have a deterministic outcome. Listeners registered programmatically (e.g. `widget.onTap(...)` are not affected by this.) <br/><br/>For better type safety enable [strict mode](#applymode-rules) and use the [`Set`](./utils.md#settarget-attributes) to create properties objects.

If you wish to always exclude specific "internal" children from this, overwrite the `children` method on their parent. See "[Encapsulation](../selector.md#encapsulation)".


Parameter|Type|Description
-|-|-
options | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;mode?: 'default'&#124;'strict',<br/>&nbsp;&nbsp;trigger?: string<br/>}</code> | If mode is set to `'strict'` the function checks that all selector match at least one widget, and that id selector match exactly one widget. <br/>A `trigger` is string to be associated with the given rulset. If set to `'update'`, the ruleset will be applied once immediately and then again every time `apply('update')` is called. If set to any event-attribute name, such as `'onTap'`, it will automatically re-apply the ruleset when this event is triggered.
rules | <code style="white-space: nowrap">{[selector]: Attributes} <br/>&#124; (widget) => {[selector]: Attributes}</code> | The ruleset to apply. May also be given as a callback which is passed to the widget instance and must return the actual ruleset. This parameter can also be `null` if the `trigger` option is set. This will stop re-applying the ruleset previously associated with that trigger.


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### apply(rules)



Shorthand for `apply({mode: 'default'}, rules)`


Parameter|Type|Description
-|-|-
rules | <code style="white-space: nowrap">{[selector]: Attributes} <br/>&#124; (widget) => {[selector]: Attributes}</code> | The ruleset to apply. May also be given as a callback which is passed to the widget instance and must return the actual ruleset.


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### apply(mode, rules)



Shorthand for `apply({mode: mode}, rules})`


Parameter|Type|Description
-|-|-
mode | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'default'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'strict'</a></code> | If this is set to `'strict'` the function checks that all selector match at least one widget, and that id selector match exactly one widget.
rules | <code style="white-space: nowrap">{[selector]: Attributes} <br/>&#124; (widget) => {[selector]: Attributes}</code> | The ruleset to apply. May also be given as a callback which is passed to the widget instance and must return the actual ruleset.


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### apply(trigger)



Applies the ruleset from the last call with `trigger` set to `'update'`.


Parameter|Type|Description
-|-|-
trigger | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'update'</a></code> | 


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### children(selector?)



Returns a (possibly empty) collection of all children of this widget that match the given selector.

When writing custom UI components it may be useful to overwrite this method to prevent access to the internal children by external code. Doing so also affects `find` and `apply`, on this widget as well as on all parents, thereby preventing accidental clashes of widget id or class values. See "[Encapsulation](../selector.md#encapsulation)".


Parameter|Type|Description
-|-|-
selector | <code style="white-space: nowrap"><a href="../selector.html" title="More about selectors">Selector</a></code> | A selector expression or a predicate function to filter the results. *Optional.*


Returns: <code style="white-space: nowrap"><a href="WidgetCollection.html" title="WidgetCollection Class Reference">WidgetCollection</a>&lt;<a href="#generics" title="Generic Parameter&quot;ChildType&quot;">ChildType</a>&gt;</code>

### find(selector?)



Returns a collection containing all descendants of all widgets in this collection that match the given selector.

If you wish to always exclude specific "internal" children from the result, overwrite the [`children`](#childrenselector) method ([details](#childrenselector)) to return an empty `WidgetCollection`, or use the [`@component`](../databinding/@component.md) decorator. **These children will then only be visible via the protected `_find` method.** See "[Encapsulation](../selector.md#encapsulation)"


Parameter|Type|Description
-|-|-
selector | <code style="white-space: nowrap"><a href="../selector.html" title="More about selectors">Selector</a></code> | A selector expression or a predicate function to filter the results. *Optional.*


Returns: <code style="white-space: nowrap"><a href="WidgetCollection.html" title="WidgetCollection Class Reference">WidgetCollection</a></code>

## Protected Methods

These methods are accessible only in classes extending <code style="white-space: nowrap">Composite</code>.

### _acceptChild(child)



Called by the framework with each widget that is about to be added as a child of this composite. May be overwritten to reject some or all children by returning `false`.


Parameter|Type|Description
-|-|-
child | <code style="white-space: nowrap"><a href="Widget.html" title="Widget Class Reference">Widget</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

### _addChild(child, index?)



Called by the framework with a child to be assigned to this composite. Triggers the 'addChild' event. May be overwritten to run any code prior or after the child is inserted.


Parameter|Type|Description
-|-|-
child | <code style="white-space: nowrap"><a href="Widget.html" title="Widget Class Reference">Widget</a></code> | 
index | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### _apply(options, rules)



Identical to the `apply(options, rules)` method, but intended to be used by subclasses in case the `children` method was overwritten . See "[Encapsulation](../selector.md#encapsulation)"


Parameter|Type|Description
-|-|-
options | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;mode?: 'default'&#124;'strict',<br/>&nbsp;&nbsp;trigger?: string<br/>}</code> | If mode is set to `'strict'` the function checks that all selector match at least one widget, and that id selector match exactly one widget. <br/>A `trigger` is string to be associated with the given rulset. If set to `'update'`, the ruleset will be applied once immediately and then again every time `apply('update')` is called. If set to any event-attribute name, such as `'onTap'`, it will automatically re-apply the ruleset when this event is triggered.
rules | <code style="white-space: nowrap">{[selector]: Attributes} <br/>&#124; (widget) => {[selector]: Attributes}</code> | The ruleset to apply. May also be given as a callback which is passed to the widget instance and must return the actual ruleset.


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### _apply(rules)



Identical to the `apply(rules)` method, but intended to be used by subclasses in case the `children` method was overwritten . See "[Encapsulation](../selector.md#encapsulation)"


Parameter|Type|Description
-|-|-
rules | <code style="white-space: nowrap">{[selector]: Attributes} <br/>&#124; (widget) => {[selector]: Attributes}</code> | The ruleset to apply. May also be given as a callback which is passed to the widget instance and must return the actual ruleset.


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### _apply(mode, rules)



Identical to the `apply(mode, rules)` method, but intended to be used by subclasses in case the `children` method was overwritten . See "[Encapsulation](../selector.md#encapsulation)"


Parameter|Type|Description
-|-|-
mode | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'default'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'strict'</a></code> | If this is set to `'strict'` the function checks that all selector match at least one widget, and that id selector match exactly one widget.
rules | <code style="white-space: nowrap">{[selector]: Attributes} <br/>&#124; (widget) => {[selector]: Attributes}</code> | The ruleset to apply. May also be given as a callback which is passed to the widget instance and must return the actual ruleset.


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### _apply(trigger)



Applies the ruleset from the last call with `trigger` set to `'update'`.


Parameter|Type|Description
-|-|-
trigger | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'update'</a></code> | 


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### _checkLayout(value)



Called by the framework with the layout about to be assigned to this composite. May be overwritten to reject a layout by throwing an Error.


Parameter|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="Layout.html" title="Layout Class Reference">Layout</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### _children(selector?)



Identical to the `children` method, but intended to be used by subclasses in case the `children` method was overwritten. See "[Encapsulation](../selector.md#encapsulation)".


Parameter|Type|Description
-|-|-
selector | <code style="white-space: nowrap"><a href="../selector.html" title="More about selectors">Selector</a></code> | A selector expression or a predicate function to filter the results. *Optional.*


Returns: <code style="white-space: nowrap"><a href="WidgetCollection.html" title="WidgetCollection Class Reference">WidgetCollection</a></code>

### _find(selector?)



Identical to the `find` method, but intended to be used only by subclasses (custom components) that encapsulate their children. This is the case if the `children` method was overwritten or the `@component` decorator is used on the subclass.


Parameter|Type|Description
-|-|-
selector | <code style="white-space: nowrap"><a href="../selector.html" title="More about selectors">Selector</a></code> | A selector expression or a predicate function to filter the results. *Optional.*


Returns: <code style="white-space: nowrap"><a href="WidgetCollection.html" title="WidgetCollection Class Reference">WidgetCollection</a></code>

### _initLayout(props?)



Called with the constructor paramter (if any) to initialize the composite's layout manager. May be overwritten to customize/replace the layout. The new implementation must make a super call to initialize the layout.


Parameter|Type|Description
-|-|-
props | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;layout: <a href="Layout.html" title="Layout Class Reference">Layout</a> // optional<br/>}</code> | *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### _removeChild(child)



Called by the framework with a child to be removed from this composite. Triggers the 'removeChild' event. May be overwritten to run any code prior or after the child is removed.


Parameter|Type|Description
-|-|-
child | <code style="white-space: nowrap"><a href="Widget.html" title="Widget Class Reference">Widget</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>


## Properties

### layout


The layout manager responsible for interpreting the [`layoutData`](./Widget.md#layoutdata) of the child widgets of this Composite.

Type: |<code style="white-space: nowrap"><a href="Layout.html" title="Layout Class Reference">Layout</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type" title="View &quot;null&quot; on MDN">null</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">Layout</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >By Constructor or JSX</a>
Change Event: | Not supported




This property can only be set via constructor or JSX. Once set, it cannot change anymore.




## Events

### addChild

Fired when a child is added to this widget.

EventObject Type: <code style="white-space: nowrap">CompositeAddChildEvent&lt;<a href="#" >Composite</a>&gt;</code>

Property|Type|Description
-|-|-
child | <code style="white-space: nowrap"><a href="Widget.html" title="Widget Class Reference">Widget</a></code> | The widget that is added as a child.
index | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | Denotes the position in the children list at which the child widget is added.

### removeChild

Fired when a child is removed from this widget.

EventObject Type: <code style="white-space: nowrap">CompositeRemoveChildEvent&lt;<a href="#" >Composite</a>&gt;</code>

Property|Type|Description
-|-|-
child | <code style="white-space: nowrap"><a href="Widget.html" title="Widget Class Reference">Widget</a></code> | The widget that is removed.
index | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The property `index` denotes the removed child widget's position in the children list.`

