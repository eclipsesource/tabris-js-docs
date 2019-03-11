---
---
# Class "NativeObject"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span>

Base class for all objects with a native implementation.


Constructor | *protected*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | <span style="white-space:nowrap;">[`App`](App.md)</span>, <span style="white-space:nowrap;">[`Device`](Device.md)</span>, <span style="white-space:nowrap;">[`FileSystem`](FileSystem.md)</span>, <span style="white-space:nowrap;">[`InactivityTimer`](InactivityTimer.md)</span>, <span style="white-space:nowrap;">[`Popup`](Popup.md)</span>, <span style="white-space:nowrap;">[`Printer`](Printer.md)</span>, <span style="white-space:nowrap;">[`NavigationBar`](NavigationBar.md)</span>, <span style="white-space:nowrap;">[`StatusBar`](StatusBar.md)</span>, <span style="white-space:nowrap;">[`Tabris`](Tabris.md)</span>, <span style="white-space:nowrap;">[`Widget`](Widget.md)</span>
JSX support | *No*


## Methods

### off(type, listener, context?)



Removes all occurrences of *listener* that are bound to *type* and *context* from this widget.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.onResize.off(listener);` instead of `widget.off('resize', listener});` The former provides more type information.


Parameter|Type|Optional|Description
-|-|-|-
type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The type of events to remove listeners for.
listener | <span style="white-space:nowrap;">`(event: EventObject<NativeObject>) => void`</span> | No | The listener function to remove.
context | <span style="white-space:nowrap;">[`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> | Yes | The context of the bound listener to remove.


Returns <span style="white-space:nowrap;">[`this`](#)</span>

### off(listeners)



Removes all listeners in the given object from the event type indicated by their key.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.onResize.off(listener);` instead of `widget.off({resize: listener});` The former provides more type information.


Parameter|Type|Optional|Description
-|-|-|-
listeners | <span style="white-space:nowrap;">`EventsObject`</span> | No | A key-value map where the keys are event types and the values are the listeners to deregister from these events, e.g. `{tap: onTap, scroll: onScroll}`.


Returns <span style="white-space:nowrap;">[`this`](#)</span>

### on(type, listener, context?)



Registers a *listener* function to be notified of events of the given *type*.


Parameter|Type|Optional|Description
-|-|-|-
type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The type of events to listen for.
listener | <span style="white-space:nowrap;">`(event: EventObject) => void`</span> | No | The listener function to register. This function will be called with an event object.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.onResize(listener);` instead of `widget.on({resize: listener});` The former provides more type information.
context | <span style="white-space:nowrap;">[`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> | Yes | In the listener function, `this` will point to this object. If not present, the listener will be called in the context of this object.


Returns <span style="white-space:nowrap;">[`this`](#)</span>

### on(listeners)



Registers all listeners in the given object for the event type indicated by their key.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.onResize(listener);` instead of `widget.on('resize', listener);` The former provides more type information.


Parameter|Type|Optional|Description
-|-|-|-
listeners | <span style="white-space:nowrap;">`{event: Listener}`</span> | No | A key-value map where the keys are event types and the values are the listeners to register for these events, e.g. `{tap: onTap, scroll: onScroll}`.


Returns <span style="white-space:nowrap;">[`this`](#)</span>

### once(type, listener, context?)



Same as `on`, but removes the listener after it has been invoked by an event.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.onResize.once(listener);` instead of `widget.once('resize', listener);` The former provides more type information.


Parameter|Type|Optional|Description
-|-|-|-
type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The type of the event to listen for.
listener | <span style="white-space:nowrap;">`(event: EventObject<NativeObject>) => void`</span> | No | The listener function to register. This function will be called with an event object.
context | <span style="white-space:nowrap;">[`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> | Yes | In the listener function, `this` will point to this object. If not present, the listener will be called in the context of this object.


Returns <span style="white-space:nowrap;">[`this`](#)</span>

### once(listeners)



Same as `on`, but removes the listener after it has been invoked by an event.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.onResize.once(listener);` instead of `widget.once({resize: listener});` The former provides more type information.


Parameter|Type|Optional|Description
-|-|-|-
listeners | <span style="white-space:nowrap;">`EventsObject`</span> | No | A key-value map where the keys are event types and the values are the listeners to register for these events, e.g. `{tap: onTap, scroll: onScroll}`.


Returns <span style="white-space:nowrap;">[`this`](#)</span>

### set(properties)



Sets all key-value pairs in the properties object as widget properties.


Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<this>`</span> | No | 


Returns <span style="white-space:nowrap;">[`this`](#)</span>

### trigger(type)



Notifies all registered listeners for the given *type*.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.myEvent.trigger();` instead of `widget.trigger('myEvent');` The former provides more type information.


Parameter|Type|Optional|Description
-|-|-|-
type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The type of event to trigger


Returns <span style="white-space:nowrap;">[`this`](#)</span>

### trigger(type, object)



Passes the fields of the given *object* to all listeners registered for this event *type*.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.myEvent.trigger(eventData);` instead of `widget.trigger('myEvent', eventData});` The former provides more type information.


Parameter|Type|Optional|Description
-|-|-|-
type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The type of event to trigger
object | <span style="white-space:nowrap;">[`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> | No | The data to pass to listener functions.


Returns <span style="white-space:nowrap;">[`this`](#)</span>

### trigger(type, eventObject)



Initializes the given *eventObject* and passes it to all listeners registered for this event *type*. If *eventObject* was already initialized its fields are copied to a new event object.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.myEvent.trigger(eventObject);` instead of `widget.trigger('myEvent', eventObject});` The former provides more type information.


Parameter|Type|Optional|Description
-|-|-|-
type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The type of event to trigger
eventObject | <span style="white-space:nowrap;">[`EventObject`](EventObject.md)</span> | No | An instance of `EventObject` (or a subclass) to pass to listener functions.


Returns <span style="white-space:nowrap;">[`this`](#)</span>


## Properties

### cid


An application-wide unique identifier automatically assigned to all native objects on creation.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### jsxProperties


When using JSX with TypeScript (`.tsx` files), the type of this property determines which JSX attributes are valid for this object.

Type | <span style="white-space:nowrap;">`JSXProperties<this>`</span>
Settable | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

