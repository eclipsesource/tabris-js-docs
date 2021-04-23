---
---
# Class "Listeners"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="Observable.html" title="Observable Class Reference">Observable</a> > <a href="#" >Listeners</a>

Objects of the type `Listeners` provide methods to manage listeners and trigger events. They encapsulate the tabris event system in a way that is more convenient to use with TypeScript, `async`/`await` and RxJS.


Type: | <code style="white-space: nowrap">Listeners&lt;EventData&gt; extends <a href="Observable.html" title="Observable Class Reference">Observable</a>&lt;<a href="#generics" title="Generic Parameter&quot;EventData&quot;">EventData</a>&gt;</code>
Generics: | <span id="generics">EventData: *A plain object containing the data to be passed to the listeners in addition to `target`, `type` and `timeStamp`. Must be a subclass of <code style="white-space: nowrap">{target: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a>}</code> and defaults to <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>.*<br/></span>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | <code style="white-space: nowrap"><a href="ChangeListeners.html" title="ChangeListeners Class Reference">ChangeListeners</a></code>
JSX Support: | No


## Constructor

### new Listeners(target, type)

Parameter|Type|Description
-|-|-
target | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code> | 
type | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | 

## Methods

### addListener(listener)



Registers a listener to be notified by new events. Each listener can only be added once. Returns the target object. **Instances of  `Listeners` can also be called directly as a function to register a new listener.** I.e. `widget.onResize(listener);` is the same as `widget.onResize.addListener(listener);` It is also the same as `widget.on('resize', listener');`, but with better TypeScript support. 


Parameter|Type|Description
-|-|-
listener | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a></code> | The listener function called with the [event object](./EventObject.md)


Returns: <code style="white-space: nowrap">this.target</code>

### once(listener)



Notifies the given listener the next time an event is issued, but not afterwards. Returns the target object.


Parameter|Type|Description
-|-|-
listener | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a></code> | The listener function called with the [event object](./EventObject.md)


Returns: <code style="white-space: nowrap">this.target</code>

### promise()



Returns a promise that resolves the next time an event is issued. The dispatched event object will be used as the resolved value.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="EventObject.html" title="EventObject Class Reference">EventObject</a>&gt;</code>

### removeListener(listener)



Deregisters a listener, it will not be notified of future events. Returns the target object.


Parameter|Type|Description
-|-|-
listener | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a></code> | 


Returns: <code style="white-space: nowrap">this.target</code>

### trigger()



Issues a plain event object to all registered listeners with a newly constructed event object.

Returns: <code style="white-space: nowrap">this.target</code>

### trigger(eventData?)



Issues an event object to all registered listeners. If an _uninitialized_ (not previously issued) instance of `EventObject` is given as the argument it will be issued directly as-is. Any other type of object (including an already initialized/previously issued event object) will be copied to create a new event object. This allows for simple event re-routing.


Parameter|Type|Description
-|-|-
eventData | <code style="white-space: nowrap"><a href="#generics" title="Generic Parameter&quot;EventData&quot;">EventData</a></code> | *Optional.*


Returns: <code style="white-space: nowrap">this.target</code>

### triggerAsync(eventData?)



Like `trigger`, but returns a promise. The promise will resolve when all asynchronous listeners (if any) have resolved. If none of the listeners are asynchronous (return a promise) this method works just like `trigger()`. Useful for unit testing.


Parameter|Type|Description
-|-|-
eventData | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code> | *Optional.*


Returns: <code style="white-space: nowrap">Promise<this.target></code>


## Properties

### target


The object that issues the events, e.g. a widget.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code>
Settable: | No




### type


The event type. This value will be set in the `type` field of the event object given to the listener. It is the same value used by the [on](./NativeObject.md#ontype-listener-context) and [trigger](./NativeObject.md#triggertype) methods.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code>
Settable: | No





