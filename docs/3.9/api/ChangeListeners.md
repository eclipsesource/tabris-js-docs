---
---
# Class "ChangeListeners"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="Observable.html" title="Observable Class Reference">Observable</a> > <a href="Listeners.html" title="Listeners Class Reference">Listeners</a> > <a href="#" >ChangeListeners</a>

Represents a collection of listeners for a property change event. Differs from its superclass in the constructor signature and the additional [`values`](#values) property.


Type: | <code style="white-space: nowrap">ChangeListeners&lt;Target, Property&gt;<br/>extends <a href="Listeners.html" title="Listeners Class Reference">Listeners</a>&lt;<a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#generics" title="Generic Parameter&quot;Target&quot;">Target</a>, Target[Property]&gt;&gt;</code>
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

## Properties

### values


An observable instance that directly provides the changed values instead of the event object. Also, the current value will be emitted immediately upon subscription. Completes when the target is disposed.

Type: |<code style="white-space: nowrap"><a href="Observable.html" title="Observable Class Reference">Observable</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.





## Related Types

### PropertyChangedEvent&lt;TargetType, ValueType&gt;

* JavaScript Type: `tabris.EventObject`
* TypeScript Type: `PropertyChangedEvent`

```ts
interface PropertyChangedEvent<TargetType, ValueType> extends EventObject<TargetType>{
  readonly value: ValueType;
  readonly originalEvent: PropertyChangedEvent<object, unknown> | null;
}
```

An event object fired when an object property changes. It is an instance of [`EventObject`](./EventObject.md) that provides an additional property `value` containing the new value.

The TypeScript interface is generic with two type parameters, the first is the type of the target and the second is the type of the value that changed.

A `PropertyChangedEvent` event may also be issued for a property change on a child object. This is supported by the widget [`data`](./Widget.md#data) property, and by all properties on [`ObservableData`](./ObservableData.md). In that case the change event on the parent will contain a reference to the change event fired by the child in `originalEvent`.

Example:

```js
widget.onDataChanged(ev => console.log(ev.originalEvent?.value));
widget.data.foo = 1; // print "1"
```

