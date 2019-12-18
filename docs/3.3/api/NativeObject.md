---
---
# Class "NativeObject"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >NativeObject</a>

Base class for all objects with a native implementation.


Type: | <code style="white-space: nowrap">NativeObject extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a></code>
Constructor: | protected
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | <code style="white-space: nowrap"><a href="app.html" title="App Object Reference">App</a></code>, <code style="white-space: nowrap"><a href="Camera.html" title="Camera Class Reference">Camera</a></code>, <code style="white-space: nowrap"><a href="device.html" title="Device Object Reference">Device</a></code>, <code style="white-space: nowrap"><a href="fs.html" title="FileSystem Object Reference">FileSystem</a></code>, <code style="white-space: nowrap"><a href="InactivityTimer.html" title="InactivityTimer Class Reference">InactivityTimer</a></code>, <code style="white-space: nowrap"><a href="NavigationBar.html" title="NavigationBar Object Reference">NavigationBar</a></code>, <code style="white-space: nowrap"><a href="permission.html" title="Permission Object Reference">Permission</a></code>, <code style="white-space: nowrap"><a href="Popup.html" title="Popup Class Reference">Popup</a></code>, <code style="white-space: nowrap"><a href="printer.html" title="Printer Object Reference">Printer</a></code>, <code style="white-space: nowrap"><a href="sizeMeasurement.html" title="SizeMeasurement Object Reference">SizeMeasurement</a></code>, <code style="white-space: nowrap"><a href="StatusBar.html" title="StatusBar Object Reference">StatusBar</a></code>, <code style="white-space: nowrap"><a href="Tabris.html" title="Tabris Object Reference">Tabris</a></code>, <code style="white-space: nowrap"><a href="Widget.html" title="Widget Class Reference">Widget</a></code>
JSX Support: | No


## Methods

### off(type, listener, context?)



Removes all occurrences of *listener* that are bound to *type* and *context* from this widget.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.onResize.off(listener);` instead of `widget.off('resize', listener});` The former provides more type information.


Parameter|Type|Description
-|-|-
type | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The type of events to remove listeners for.
listener | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a></code> | The listener function to remove.
context | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code> | The context of the bound listener to remove. *Optional.*


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### off(listeners)



Removes all listeners in the given object from the event type indicated by their key.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.onResize.off(listener);` instead of `widget.off({resize: listener});` The former provides more type information.


Parameter|Type|Description
-|-|-
listeners | <code style="white-space: nowrap">{[eventType]: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a>}</code> | A key-value map where the keys are event types and the values are the listeners to deregister from these events, e.g. `{tap: onTap, scroll: onScroll}`.


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### on(type, listener, context?)



Registers a *listener* function to be notified of events of the given *type*.


Parameter|Type|Description
-|-|-
type | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The type of events to listen for.
listener | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a></code> | The listener function to register. This function will be called with an [event object](./EventObject.md).

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.onResize(listener);` instead of `widget.on({resize: listener});` The former provides more type information.
context | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code> | In the listener function, `this` will point to this object. If not present, the listener will be called in the context of this object. *Optional.*


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### on(listeners)



Registers all listeners in the given object for the event type indicated by their key.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.onResize(listener);` instead of `widget.on('resize', listener);` The former provides more type information.


Parameter|Type|Description
-|-|-
listeners | <code style="white-space: nowrap">{[eventType]: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a>}</code> | A key-value map where the keys are event types and the values are the listeners to register for these events, e.g. `{tap: onTap, scroll: onScroll}`.


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### once(type, listener, context?)



Same as `on`, but removes the listener after it has been invoked by an event.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.onResize.once(listener);` instead of `widget.once('resize', listener);` The former provides more type information.


Parameter|Type|Description
-|-|-
type | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The type of the event to listen for.
listener | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a></code> | The listener function to register. This function will be called with an [event object](./EventObject.md).
context | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code> | In the listener function, `this` will point to this object. If not present, the listener will be called in the context of this object. *Optional.*


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### once(listeners)



Same as `on`, but removes the listener after it has been invoked by an event.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.onResize.once(listener);` instead of `widget.once({resize: listener});` The former provides more type information.


Parameter|Type|Description
-|-|-
listeners | <code style="white-space: nowrap">{[eventType]: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a>}</code> | A key-value map where the keys are event types and the values are the listeners to register for these events, e.g. `{tap: onTap, scroll: onScroll}`.


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### set(properties)



Sets all key-value pairs in the properties object as widget properties.

**TypeScript note:** When called on `this` from within a subclass constructor (i.e. a custom component/widget) you may have to use the generic version of this method: `this.set<MySubclass>(...);`


Parameter|Type|Description
-|-|-
properties | <code style="white-space: nowrap"><a href="../types.html#propertieswidget" title="Properties&lt;Widget&gt;">Properties</a>&lt;<a href="#" title="This object">this</a>&gt;</code> | 


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### trigger(type)



Notifies all registered listeners for the given *type*.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.myEvent.trigger();` instead of `widget.trigger('myEvent');` The former provides more type information.


Parameter|Type|Description
-|-|-
type | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The type of event to trigger


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### trigger(type, eventData)



Passes the fields of the given *object* to all listeners registered for this event *type*.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.myEvent.trigger(eventData);` instead of `widget.trigger('myEvent', eventData});` The former provides more type information.


Parameter|Type|Description
-|-|-
type | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The type of event to trigger
eventData | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code> | The data to pass to listener functions.


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### trigger(type, eventObject)



Initializes the given *eventObject* and passes it to all listeners registered for this event *type*. If *eventObject* was already initialized its fields are copied to a new event object.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.myEvent.trigger(eventObject);` instead of `widget.trigger('myEvent', eventObject});` The former provides more type information.


Parameter|Type|Description
-|-|-
type | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The type of event to trigger
eventObject | <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a></code> | An instance of `EventObject` (or a subclass) to pass to listener functions.


Returns: <code style="white-space: nowrap"><a href="#" title="This object">this</a></code>

### triggerAsync(type)



Like `trigger`, but returns a promise. The promise will resolve when all asynchronous listeners (if any) have resolved. If none of the listeners are asynchronous (return a promise) this method works just like `trigger()`. Useful for unit testing.


Parameter|Type|Description
-|-|-
type | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The type of event to trigger


Returns: <code style="white-space: nowrap">Promise<this></code>

### triggerAsync(type, object)



Notifies all registered listeners for the given *type* with the given data. Unlike `trigger` each asynchronous listener will be awaited, meaning that if a listener returns a promise that will pause event processing until it resolves. Returns a promise that resolves once all listeners have been notified. If any listener returns a rejecting promise the even processing is aborted and the returned promise rejects with the error value. If none of the listeners return a promise this method works just like `trigger()`. 

In TypeScript you should use `widget.myEvent.triggerAsync();` instead


Parameter|Type|Description
-|-|-
type | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The type of event to trigger
object | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code> | The data to pass to listener functions.


Returns: <code style="white-space: nowrap">Promise<this></code>

### triggerAsync(type, eventObject)



Notifies all registered listeners for the given *type* with the given `EventObject`. Unlike `trigger` each asynchronous listener will be awaited, meaning that if a listener returns a promise that will pause event processing until it resolves. Returns a promise that resolves once all listeners have been notified. If any listener returns a rejecting promise the even processing is aborted and the returned promise rejects with the error value. If none of the listeners return a promise this method works just like `trigger()`. 

In TypeScript you should use `widget.myEvent.triggerAsync();` instead


Parameter|Type|Description
-|-|-
type | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The type of event to trigger
eventObject | <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a></code> | An instance of `EventObject` (or a subclass) to pass to listener functions.


Returns: <code style="white-space: nowrap">Promise<this></code>

## Protected Methods

These methods are accessible only in classes extending <code style="white-space: nowrap">NativeObject</code>.

### _checkDisposed()



A helper function that throws if the instance has already been marked as disposed.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### _dispose(skipNative?)



Called by the framework to dispose a `NativeObject` instance. (The `dispose` is only used by application code.) The method should never be called directly, but it may be overwritten to prevent dispose for objects that are not disposable.


Parameter|Type|Description
-|-|-
skipNative | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### _getStoredProperty(propertyName)



Returns a value stored via `_storeProperty`, or undefined.


Parameter|Type|Description
-|-|-
propertyName | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 


Returns: <code style="white-space: nowrap">unknown</code>

### _getXMLAttributes()



Used by `console.dirxml()` to produce part of the XML representation of this object. May be overwritten to modify the output. The return value should be an array of tuples consisting of the attribute name and string representation. The new implementation may make a super call to obtain the default list of attributes printed for this object.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="View &quot;Array&quot; on MDN">Array</a>&lt;[<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a>, <a title="Literally any JavaScript value">any</a>]&gt;</code>

### _getXMLContent()



Used by `console.dirxml()` to produce part of the XML representation of this object. May be overwritten to modify the output. The return value should be an array of strings each representing on of the children of this instance.

Returns: <code style="white-space: nowrap">string[]</code>

### _getXMLElementName()



Used by `console.dirxml()` to produce part of the XML representation of this object. May be overwritten to modify the output. The default implementation returns the name of the constructor of this object.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>

### _getXMLFooter(hasChild)



Used by `console.dirxml()` to produce part of the XML representation of this object. May be overwritten to modify the output. The default implementation the closing tag if `hasChild` is true, otherwise returns an empty string. The `hasChild` parameter is `true` if `_getXMLContent` returns a non-empty array. It is usually not necessary to call or override this method.


Parameter|Type|Description
-|-|-
hasChild | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>

### _getXMLHeader(hasChild)



Used by `console.dirxml()` to produce part of the XML representation of this object. May be overwritten to modify the output. The default implementation crates the opening tag including the element name given by `_getXMLElementName` and attributes given by `_getXMLAttributes`. The `hasChild` parameter is `true` if `_getXMLContent` returns a non-empty array in which case the tag is not self-closing. It is preferable to override these individual method instead of this one.


Parameter|Type|Description
-|-|-
hasChild | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>

### _isListening(eventType)



Returns `true` if there is currently one or more listeners registers for the given event type.


Parameter|Type|Description
-|-|-
eventType | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

### _listen(eventName, listening)



Called by the framework when the first listener of a given event type is registered on the instance (`listening` is `true`), and when the last listener of a given event type is removed (`listening` is `false`). Typically overwritten to make calls to `_nativeListen` when the given event type is issues by native code. The new implementation must make a super call if it does not handle the given event type itself.


Parameter|Type|Description
-|-|-
eventName | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 
listening | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### _nativeCall(methodName, parameters)



Sends a 'call' operation to the native client and returns the result.


Parameter|Type|Description
-|-|-
methodName | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 
parameters | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code> | 


Returns: <code style="white-space: nowrap">unknown</code>

### _nativeCreate(param?)



Sends a 'create' operation to the native client. Called once by the constructor and should not be called again. May be overwritten to check the constructor parameter or perform any kind of initialization code prior to creating the native object. The new implementation must make a super call.


Parameter|Type|Description
-|-|-
param | <code style="white-space: nowrap">{[property]: <a title="Literally any JavaScript value">any</a>}</code> | The first argument (if any) given in the constructor call. Will be forwarded to the `set` method after the native object was created. *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### _nativeGet(propertyName)



Sends a 'get' operation to the native client and returns the result.


Parameter|Type|Description
-|-|-
propertyName | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 


Returns: <code style="white-space: nowrap">unknown</code>

### _nativeListen(eventType)



Sends a 'listen' operation to the native client.


Parameter|Type|Description
-|-|-
eventType | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### _nativeSet(propertyName, value)



Sends a 'set' operation to the native client.


Parameter|Type|Description
-|-|-
propertyName | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 
value | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### _onoff(eventType, listening, listener)



A helper function that register the given listener if `listening` is true and de-registers it if `listening` is false.


Parameter|Type|Description
-|-|-
eventType | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 
listening | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | 
listener | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### _release()



Called during the dispose process, after the 'dispose' event has fired, but before the native code has be executed. Native operations (`_nativeSet`, `_nativeGet`, `_nativeCall`, `_nativeListen`) on this object are still possible at this point. May be overwritten to perform any kind of clean-up code. The new implementation must perform a super call at some point, typically at the last command.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### _reorderProperties(propertyNames)



Used by the `set` method to determined in which order the given property values are applied. May be overwritten, but the new implementation must pass the propertyNames through a super call at one point.


Parameter|Type|Description
-|-|-
propertyNames | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a>[]</code> | List of properties to be set to a new value


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a>[]</code>

### _storeProperty(propertyName, encodedValue)



Stores the given value internally and triggers a matching change event.


Parameter|Type|Description
-|-|-
propertyName | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 
encodedValue | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### _trigger(eventType, eventData?)



Called by the native client to trigger a JavaScript event on this instance. May be overwritten to pre-process the eventData object. The return value indicates whether `defaultPrevented` on the event object was set to `true`. The new implementation must forward the parameters to a super call and return that calls return value.


Parameter|Type|Description
-|-|-
eventType | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 
eventData | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code> | *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

### _wasSet(propertyName)



Returns `true` if _storeProperty was ever called with the given property propertyName


Parameter|Type|Description
-|-|-
propertyName | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>


## Properties

### cid


An application-wide unique identifier automatically assigned to all native objects on creation. It follows the pattern '$<number>', where the number is incremented for each new NativeObject instance.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | Not supported




This property can only be set via constructor. Once set, it cannot change anymore.



### jsxAttributes


When using JSX with TypeScript (`.tsx` files), the type of this property determines which JSX attributes are valid for this object.

Type: |<code style="white-space: nowrap">JSXAttributes<this></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | Not supported




This property can only be set via constructor. Once set, it cannot change anymore.



## Protected Properties

These properties are accessible only in classes extending <code style="white-space: nowrap">NativeObject</code>.

### _isDisposed



Type: |<code style="white-space: nowrap">true &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | Not supported




### _nativeType



Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | Not supported




