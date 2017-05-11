# Events API

Event handling API supported by widgets and various other objects.

## Methods

### off()



**Parameters:** 



**Returns:** *this*

Removes all listeners for all events from this widget. Supports chaining.


### off(event)



**Parameters:** 

- event: *string*

**Returns:** *this*

Removes all listeners for *event* from this widget. Supports chaining.


### off(event, listener)



**Parameters:** 

- event: *string*
- listener: *Function*

**Returns:** *this*

Removes all occurrences of *listener* that are bound to *event* from this widget, regardless of their *context* parameter. Supports chaining.


### off(event, listener, context)



**Parameters:** 

- event: *string*
- listener: *Function*
- context: *this*

**Returns:** *this*

Removes all occurrences of *listener* that are bound to *event* and *context* from this widget. Supports chaining.


### on(event, listener, context?)



**Parameters:** 

- event: *string*
- listener: *Function*
- context?: *this*, in the listener function, `this` will point to this object.

**Returns:** *this*

Adds a *listener* to the list of functions to be notified when *event* is fired. If the context parameter is not present, the listener will be called in the context of this object. Supports chaining.


### once(event, listener)



**Parameters:** 

- event: *string*
- listener: *Function*

**Returns:** *this*

Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.


### once(event, listener, context)



**Parameters:** 

- event: *string*
- listener: *Function*
- context: *this*, in the listener function, `this` will point to this object.

**Returns:** *this*

Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.


### trigger(event, ...params)



**Parameters:** 

- event: *string*
- ...params: *any[]*

**Returns:** *this*

Triggers an event of the given type. All registered listeners will be notified. Additional parameters will be passed to the listeners.


