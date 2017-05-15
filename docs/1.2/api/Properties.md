---
---
# Properties API

Properties API supported by all widgets and various other objects.

## Methods

### get(property)


**Parameters:** 

- property: *string*

**Returns:** *mixed*

Gets the current value of the given *property*.

### set(property, value)


**Parameters:** 

- property: *string*
- value: *mixed*

**Returns:** *Object*

Sets the given property. Supports chaining.

### set(property, value, options)


**Parameters:** 

- property: *string*
- value: *mixed*
- options: *Object*, this object is given in the change event resulting from this method call.

**Returns:** *Object*

Sets the given property. Supports chaining.

### set(properties)


**Parameters:** 

- properties: *Object*

**Returns:** *Object*

Sets all key-value pairs in the properties object as widget properties. Supports chaining.

### set(properties, options)


**Parameters:** 

- properties: *Object*
- options: *Object*, this object is given in the change event(s) resulting from this method call.

**Returns:** *Object*

Sets all key-value pairs in the properties object as widget properties. Supports chaining.


## Events

### "change:{property}" (target, value, options)

**Parameters:** 

- target: *Object*, the object that fired the change event.
- value: *mixed*, the new value of the given property.
- options: *Object*, this is the options object given to the [`set`](#set) method.

Fired when the given property has changed. Change events for specific properties will only be documented separately if they may be triggered without calling `set`. 

