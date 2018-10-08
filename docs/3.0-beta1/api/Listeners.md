---
---
# Type "Listeners"

Objects of the type `Listeners` provide methods to manage listeners and trigger events. They encapsulate the tabris event system in a way that is more convenient to use with TypeScript and the ES2017 `async`/`await` feature.

You can import this type like this:
```js
import {Listeners} from 'tabris';
```
Or reference it directly form anywhere as "`tabris.Listeners`".
## Methods

### addListener(listener)


**Parameters:** 

- listener: *(event: EventObject) => void*

**Returns:** *this.target*

Registers a listener to be notified by new events. Each listener can only be added once. Returns the target object. **Instances of  `Listeners` can also be called directly as a function to register a new listener.** I.e. `widget.onResize(listener);` is the same as `widget.onResize.addListener(listener);` It is also the same as `widget.on('resize', listener');`, but with better TypeScript support. 

### once(listener)


**Parameters:** 

- listener: *(event: EventObject) => void*

**Returns:** *this.target*

Notifies the given listener the next time an event is issued, but not afterwards. Returns the target object.

### reject()


Returns a promise that rejects the next time an event is issued. The rejection value will be an instance of `Error` merged with the dispatched event object.

### reject(constructor)


**Parameters:** 

- constructor: *function*

Returns a promise that rejects the next time an event is issued. The rejection value will be an instance of the given `Error` constructor.

### reject(error)


**Parameters:** 

- error: *Error*

Returns a promise that rejects the next time an event is issued. The rejection value will be the given `Error` instance

### reject(data)


**Parameters:** 

- data: *object*

Returns a promise that rejects the next time an event is issued. The rejection value will  be an instance of `Error` merged with the given data object.

### reject(message)


**Parameters:** 

- message: *string*

Returns a promise that rejects the next time an event is issued. The rejection value will always be an instance of `Error with the given string as the message.

### removeListener(listener)


**Parameters:** 

- listener: *(event: EventObject) => void*

**Returns:** *this.target*

Deregisters a listener, it will not be notified of future events. Returns the target object.

### resolve()


**Returns:** *Promise*

Returns a promise that resolves the next time an event is issued. The dispatched event object will be used as the resolved value.

### resolve(value)


**Parameters:** 

- value: *any*

**Returns:** *Promise*

Returns a promise that resolves the next time an event is issued. The given value will passed to the promise.

### trigger()


**Returns:** *this.target*

Issues a plain event object to all registered listeners with a newly constructed event object.

### trigger(eventData)


**Parameters:** 

- eventData: *object* [**Optional**]

**Returns:** *this.target*

Issues an event object to all registered listeners. If an _uninitialized_ (not previously issued) instance of `EventObject` is given as the argument it will be issued directly as-is. Any other type of object (including an already initialized/previously issued event object) will be copied to create a new event object. This allows for simple event re-routing.


## Properties

### target


**read-only**<br/>
Type: *object*

The object that issues the events, e.g. a widget.

### type


**read-only**<br/>
Type: *string*

The event type. This value will be set in the `type` field of the event object given to the listener. It is the same value used by the [on](NativeObject#ontype-listener-context) and [trigger](http://docs.tabris.com/latest/api/NativeObject.html#triggertype) methods.

