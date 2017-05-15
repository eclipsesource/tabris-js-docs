---
---
# Events API

Event handling API supported by widgets and various other objects.

## Methods

### off()


**Parameters:** 



**Returns:** *Object*

Removes all listeners for all events from this widget. Supports chaining.

### off(event)


**Parameters:** 

- event: *string*

**Returns:** *Object*

Removes all listeners for *event* from this widget. Supports chaining.

### off(event, listener)


**Parameters:** 

- event: *string*
- listener: *Function*

**Returns:** *Object*

Removes all occurrences of *listener* that are bound to *event* from this widget, regardless of their *context* parameter. Supports chaining.

### off(event, listener, context)


**Parameters:** 

- event: *string*
- listener: *Function*
- context: *Object*

**Returns:** *Object*

Removes all occurrences of *listener* that are bound to *event* and *context* from this widget. Supports chaining.

### on(event, listener)


**Parameters:** 

- event: *string*
- listener: *Function*

**Returns:** *Object*

Adds the *listener* to the list of functions to be notified when *event* is fired. In the listener function, `this` will point to the object itself. Supports chaining.

### on(event, listener, context)


**Parameters:** 

- event: *string*
- listener: *Function*
- context: *Object*, in the listener function, `this` will point to this object.

**Returns:** *Object*

Adds a *listener* to the list of functions to be notified when *event* is fired. Supports chaining.

### once(event, listener)


**Parameters:** 

- event: *string*
- listener: *Function*

**Returns:** *Object*

Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.

### once(event, listener, context)


**Parameters:** 

- event: *string*
- listener: *Function*
- context: *Object*, in the listener function, `this` will point to this object.

**Returns:** *Object*

Same as `on`, but removes the listener after it has been invoked by an event. Supports chaining.

