---
---
# Class "ChangeListeners"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="Listeners.html" title="Listeners Class Reference">Listeners</a> > <a href="#" >ChangeListeners</a>

A convenience type that extends the `Listeners` type to perform some additional checks when handling change events.


Type: | <code style="white-space: nowrap">ChangeListeners&lt;Target, Property&gt;<br/>extends <a href="Listeners.html" title="Listeners Class Reference">Listeners</a>&lt;<a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#generics" title="Generic Parameter&quot;Target&quot;">Target</a>, Target[Property]&gt;&gt;</code>
Generics: | <span id="generics">Target: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code><br/>Property: <code style="white-space: nowrap">keyof Target</code><br/></span>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


## Constructor

### new ChangeListeners(target, property)

Parameter|Type|Description
-|-|-
target | <code style="white-space: nowrap"><a href="#generics" title="Generic Parameter&quot;Target&quot;">Target</a></code> | 
property | <code style="white-space: nowrap"><a href="#generics" title="Generic Parameter&quot;Property&quot;">Property</a></code> | 
