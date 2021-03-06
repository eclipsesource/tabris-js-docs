---
---
# NativeObject

Base class for all objects with a native implementation.

Import this type with "`const {NativeObject} = require('tabris');`"

## Methods

### get(property)


**Parameters:** 

- property: *string*

**Returns:** *Properties<this>[T]*

Gets the current value of the given *property*.

### off(type, listener, context)


**Parameters:** 

- type: *string*
  - the type of events to remove listeners for.
- listener: *(event: any) => void*
  - the listener function to remove.
- context: *object* [**Optional**]
  - the context of the bound listener to remove.

**Returns:** *this*

Removes all occurrences of *listener* that are bound to *type* and *context* from this widget.

### off(listeners)


**Parameters:** 

- listeners: *EventsObject*
  - a key-value map where the keys are event types and the values are the listeners to deregister from these events, e.g. `{tap: onTap, scroll: onScroll}`.

**Returns:** *this*

Removes all listeners in the given object from the event type indicated by their key.

### on(type, listener, context)


**Parameters:** 

- type: *string*
  - the type of events to listen for.
- listener: *(event: any) => void*
  - the listener function to register. This function will be called with an event object.
- context: *object* [**Optional**]
  - in the listener function, `this` will point to this object. If not present, the listener will be called in the context of this object.

**Returns:** *this*

Registers a *listener* function to be notified of events of the given *type*.

### on(listeners)


**Parameters:** 

- listeners: *EventsObject*
  - a key-value map where the keys are event types and the values are the listeners to register for these events, e.g. `{tap: onTap, scroll: onScroll}`.

**Returns:** *this*

Registers all listeners in the given object for the event type indicated by their key.

### once(type, listener, context)


**Parameters:** 

- type: *string*
  - the type of the event to listen for.
- listener: *(event: any) => void*
  - the listener function to register. This function will be called with an event object.
- context: *object* [**Optional**]
  - in the listener function, `this` will point to this object. If not present, the listener will be called in the context of this object.

**Returns:** *this*

Same as `on`, but removes the listener after it has been invoked by an event.

### once(listeners)


**Parameters:** 

- listeners: *EventsObject*
  - a key-value map where the keys are event types and the values are the listeners to register for these events, e.g. `{tap: onTap, scroll: onScroll}`.

**Returns:** *this*

Same as `on`, but removes the listener after it has been invoked by an event.

### set(property, value)


**Parameters:** 

- property: *string*
- value: *any*

**Returns:** *this*

Sets the given property.

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

### trigger(type, object)


**Parameters:** 

- type: *string*
  - the type of event to trigger
- object: *object*
  - the object to pass to listener functions.

**Returns:** *this*

Passes the given *object* it to all listeners registered for this event *type*.

### trigger(type, eventObject)


**Parameters:** 

- type: *string*
  - the type of event to trigger
- eventObject: *[EventObject](EventObject.md)*
  - an instance of `EventObject` (or a subclass) to pass to listener functions.

**Returns:** *this*

Initializes the given *eventObject*  and passes it to all listeners registered for this event *type*.


## Properties

### cid


**read-only**<br/>
Type: *string*

An application-wide unique identifier automatically assigned to all native objects on creation.<br/>This property can only be set on widget creation. Once set, it cannot be changed anymore.

