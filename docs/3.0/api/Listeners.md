---
---
# Class "Listeners"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`Listeners`](Listeners.md)</span>

* TypeScript type: `Listeners<EventData extends object = MinimalEventObject<object>> extends Object`
* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support: *No*
* Direct subclasses: *None*
--------
Objects of the type `Listeners` provide methods to manage listeners and trigger events. They encapsulate the tabris event system in a way that is more convenient to use with TypeScript and the ES2017 `async`/`await` feature.


## Constructor

### new Listeners(target, type)

Parameter|Type|Optional|Description
-|-|-|-
target | <span style="white-space:nowrap;">[`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> | No | 
type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 

## Methods

### addListener(listener)



Parameter|Type|Optional|Description
-|-|-|-
listener | <span style="white-space:nowrap;">`(event: EventObject) => void`</span> | No | 
* Returns: <span style="white-space:nowrap;">`this.target`</span>

Registers a listener to be notified by new events. Each listener can only be added once. Returns the target object. **Instances of  `Listeners` can also be called directly as a function to register a new listener.** I.e. `widget.onResize(listener);` is the same as `widget.onResize.addListener(listener);` It is also the same as `widget.on('resize', listener');`, but with better TypeScript support. 

### once(listener)



Parameter|Type|Optional|Description
-|-|-|-
listener | <span style="white-space:nowrap;">`(event: EventObject) => void`</span> | No | 
* Returns: <span style="white-space:nowrap;">`this.target`</span>

Notifies the given listener the next time an event is issued, but not afterwards. Returns the target object.

### promise()

* Returns: <span style="white-space:nowrap;">`Promise`</span>

Returns a promise that resolves the next time an event is issued. The dispatched event object will be used as the resolved value.

### removeListener(listener)



Parameter|Type|Optional|Description
-|-|-|-
listener | <span style="white-space:nowrap;">`(event: EventObject) => void`</span> | No | 
* Returns: <span style="white-space:nowrap;">`this.target`</span>

Deregisters a listener, it will not be notified of future events. Returns the target object.

### trigger()

* Returns: <span style="white-space:nowrap;">`this.target`</span>

Issues a plain event object to all registered listeners with a newly constructed event object.

### trigger(eventData?)



Parameter|Type|Optional|Description
-|-|-|-
eventData | <span style="white-space:nowrap;">[`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> | Yes | 
* Returns: <span style="white-space:nowrap;">`this.target`</span>

Issues an event object to all registered listeners. If an _uninitialized_ (not previously issued) instance of `EventObject` is given as the argument it will be issued directly as-is. Any other type of object (including an already initialized/previously issued event object) will be copied to create a new event object. This allows for simple event re-routing.


## Properties

### target


* Type: <span style="white-space:nowrap;">[`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span>
* Settable: *No*



The object that issues the events, e.g. a widget.

### type


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *No*



The event type. This value will be set in the `type` field of the event object given to the listener. It is the same value used by the [on](NativeObject#ontype-listener-context) and [trigger](http://docs.tabris.com/latest/api/NativeObject.html#triggertype) methods.


## Change Events

### typeChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*type*](#type).

Fired when the [*type*](#type) property has changed.

### targetChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> | The new value of [*target*](#target).

Fired when the [*target*](#target) property has changed.

