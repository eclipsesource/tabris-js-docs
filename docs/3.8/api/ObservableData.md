---
---
# Class "ObservableData"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >ObservableData</a>

Instances of ObservableData automatically emit change events for all their properties with no need for custom setter, decorators or custom configuration. Even properties that are not defined in the constructor do work. Excluded are properties that do not start with a lower case letter, such as `_myPrivateProp`. 

Change events can be observed individually by subscribing to the observable provided via `Symbol.observable`, or - aggregated - using [`Observable.mutations`](./Observable.md#mutationssource).

Instances of `ObservableData` can also be nested. Any change event emitted by an object attached to an `ObservableData` instance will be forwarded to the parent object and cause a new change event to be fired with the original event attached to the [`PropertyChangedEvent`](./ChangeListeners.md#propertychangedeventtargettype-valuetype) object as `originalEvent`. 

The initial value of a widget's [`data`](./Widget.md#data) property is an instance of `ObservableData`, and therefore manipulating this object may be used by the widget [to update itself](../functional-components.md).

The `ObservableData` constructor can be called without `new`. This is especially useful when also providing a set of initial property values, as the resulting object will have the expected type in TypeScript and some IDEs. Alternatively `ObservableData` can be subclassed to declare its properties and make it type-safe.


Type: | <code style="white-space: nowrap">ObservableData extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a></code>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


## Constructor

### new ObservableData(properties?)

Parameter|Type|Description
-|-|-
properties | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code> | A set of initial properties assigned to the resulting object. *Optional.*


