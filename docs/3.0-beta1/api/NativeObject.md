---
---
# Type "NativeObject"

Base class for all objects with a native implementation.

You can import this type like this:
```js
import {NativeObject} from 'tabris';
```
Or reference it directly form anywhere as "`tabris.NativeObject`".
## Methods

### off(type, listener, context)


**Parameters:** 

- type: *string*
  - the type of events to remove listeners for.
- listener: *(event: EventObject<NativeObject>) => void*
  - the listener function to remove.
- context: *object* [**Optional**]
  - the context of the bound listener to remove.

**Returns:** *this*

Removes all occurrences of *listener* that are bound to *type* and *context* from this widget.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.onResize.off(listener);` instead of `widget.off('resize', listener});` The former provides more type information.

### off(listeners)


**Parameters:** 

- listeners: *EventsObject*
  - a key-value map where the keys are event types and the values are the listeners to deregister from these events, e.g. `{tap: onTap, scroll: onScroll}`.

**Returns:** *this*

Removes all listeners in the given object from the event type indicated by their key.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.onResize.off(listener);` instead of `widget.off({resize: listener});` The former provides more type information.

### on(type, listener, context)


**Parameters:** 

- type: *string*
  - the type of events to listen for.
- listener: *(event: EventObject) => void*
  - the listener function to register. This function will be called with an event object.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.onResize(listener);` instead of `widget.on({resize: listener});` The former provides more type information.
- context: *object* [**Optional**]
  - in the listener function, `this` will point to this object. If not present, the listener will be called in the context of this object.

**Returns:** *this*

Registers a *listener* function to be notified of events of the given *type*.

### on(listeners)


**Parameters:** 

- listeners: *{event: Listener}*
  - a key-value map where the keys are event types and the values are the listeners to register for these events, e.g. `{tap: onTap, scroll: onScroll}`.

**Returns:** *this*

Registers all listeners in the given object for the event type indicated by their key.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.onResize(listener);` instead of `widget.on('resize', listener);` The former provides more type information.

### once(type, listener, context)


**Parameters:** 

- type: *string*
  - the type of the event to listen for.
- listener: *(event: EventObject<NativeObject>) => void*
  - the listener function to register. This function will be called with an event object.
- context: *object* [**Optional**]
  - in the listener function, `this` will point to this object. If not present, the listener will be called in the context of this object.

**Returns:** *this*

Same as `on`, but removes the listener after it has been invoked by an event.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.onResize.once(listener);` instead of `widget.once('resize', listener);` The former provides more type information.

### once(listeners)


**Parameters:** 

- listeners: *EventsObject*
  - a key-value map where the keys are event types and the values are the listeners to register for these events, e.g. `{tap: onTap, scroll: onScroll}`.

**Returns:** *this*

Same as `on`, but removes the listener after it has been invoked by an event.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.onResize.once(listener);` instead of `widget.once({resize: listener});` The former provides more type information.

### set(properties)


**Parameters:** 

- properties: *PropertiesObject*

**Returns:** *this*

Sets all key-value pairs in the properties object as widget properties.

### trigger(type)


**Parameters:** 

- type: *string*
  - the type of event to trigger

**Returns:** *this*

Notifies all registered listeners for the given *type*.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.myEvent.trigger();` instead of `widget.trigger('myEvent');` The former provides more type information.

### trigger(type, object)


**Parameters:** 

- type: *string*
  - the type of event to trigger
- object: *object*
  - the data to pass to listener functions.

**Returns:** *this*

Passes the fields of the given *object* to all listeners registered for this event *type*.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.myEvent.trigger(eventData);` instead of `widget.trigger('myEvent', eventData});` The former provides more type information.

### trigger(type, eventObject)


**Parameters:** 

- type: *string*
  - the type of event to trigger
- eventObject: *[EventObject](EventObject.md)*
  - an instance of `EventObject` (or a subclass) to pass to listener functions.

**Returns:** *this*

Initializes the given *eventObject* and passes it to all listeners registered for this event *type*. If *eventObject* was already initialized its fields are copied to a new event object.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.myEvent.trigger(eventObject);` instead of `widget.trigger('myEvent', eventObject});` The former provides more type information.


## Properties

### cid


**read-only**<br/>
Type: *string*

An application-wide unique identifier automatically assigned to all native objects on creation.<br/>This property can only be set on widget creation. Once set, it cannot be changed anymore.

