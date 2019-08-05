---
---
# Class "NativeObject"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span>

Base class for all objects with a native implementation.


Constructor | *protected*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | <span style="white-space:nowrap;">[`App`](app.md)</span>, <span style="white-space:nowrap;">[`Device`](device.md)</span>, <span style="white-space:nowrap;">[`FileSystem`](fs.md)</span>, <span style="white-space:nowrap;">[`InactivityTimer`](InactivityTimer.md)</span>, <span style="white-space:nowrap;">[`NavigationBar`](NavigationBar.md)</span>, <span style="white-space:nowrap;">[`Permission`](permission.md)</span>, <span style="white-space:nowrap;">[`Popup`](Popup.md)</span>, <span style="white-space:nowrap;">[`Printer`](printer.md)</span>, <span style="white-space:nowrap;">[`StatusBar`](StatusBar.md)</span>, <span style="white-space:nowrap;">[`Tabris`](Tabris.md)</span>, <span style="white-space:nowrap;">[`Widget`](Widget.md)</span>
JSX support | *No*


## Methods

### off(type, listener, context?)



Removes all occurrences of *listener* that are bound to *type* and *context* from this widget.

In TypeScript you should use the alternative `Listeners` API, e.g. `widget.onResize.off(listener);` instead of `widget.off('resize', listener});` The former provides more type information.


Parameter|Type|Optional|Description
-|-|-|-
type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The type of events to remove listeners for.
listener | <span style="white-space:nowrap;">`(event: EventObject&lt;NativeObject&gt;) =&gt; void`</span> | No | The listener function to remove.
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
listener | <span style="white-space:nowrap;">`(event: EventObject) =&gt; void`</span> | No | The listener function to register. This function will be called with an event object.

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
listener | <span style="white-space:nowrap;">`(event: EventObject&lt;NativeObject&gt;) =&gt; void`</span> | No | The listener function to register. This function will be called with an event object.
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

**Important TypeScript note:** When called on `this` you may need to specify your custom type like this: `this.set<MyComponent>({propA: valueA});`


Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties&lt;T&gt;`</span> | No | 


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

## Protected Methods

These methods are accessible only in classes extending *NativeObject*.

### _checkDisposed()



A helper function that throws if the instance has already been marked as disposed.

Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### _dispose(skipNative?)



Called by the framework to dispose a `NativeObject` instance. (The `dispose` is only used by application code.) The method should never be called directly, but it may be overwritten to prevent dispose for objects that are not disposable.


Parameter|Type|Optional|Description
-|-|-|-
skipNative | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | Yes | 


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### _getStoredProperty(propertyName)



Returns a value stored via `_storeProperty`, or undefined.


Parameter|Type|Optional|Description
-|-|-|-
propertyName | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 


Returns <span style="white-space:nowrap;">`unknown`</span>

### _getXMLAttributes()



Used by `console.dirxml()` to produce part of the XML representation of this object. May be overwritten to modify the output. The return value should be an array of tuples consisting of the attribute name and string representation. The new implementation may make a super call to obtain the default list of attributes printed for this object.

Returns <span style="white-space:nowrap;">`Array&lt;[string, any]&gt;`</span>

### _getXMLContent()



Used by `console.dirxml()` to produce part of the XML representation of this object. May be overwritten to modify the output. The return value should be an array of strings each representing on of the children of this instance.

Returns <span style="white-space:nowrap;">[`string[]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>

### _getXMLElementName()



Used by `console.dirxml()` to produce part of the XML representation of this object. May be overwritten to modify the output. The default implementation returns the name of the constructor of this object.

Returns <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>

### _getXMLFooter(hasChild)



Used by `console.dirxml()` to produce part of the XML representation of this object. May be overwritten to modify the output. The default implementation the closing tag if `hasChild` is true, otherwise returns an empty string. The `hasChild` parameter is `true` if `_getXMLContent` returns a non-empty array. It is usually not necessary to call or override this method.


Parameter|Type|Optional|Description
-|-|-|-
hasChild | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | No | 


Returns <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>

### _getXMLHeader(hasChild)



Used by `console.dirxml()` to produce part of the XML representation of this object. May be overwritten to modify the output. The default implementation crates the opening tag including the element name given by `_getXMLElementName` and attributes given by `_getXMLAttributes`. The `hasChild` parameter is `true` if `_getXMLContent` returns a non-empty array in which case the tag is not self-closing. It is preferable to override these individual method instead of this one.


Parameter|Type|Optional|Description
-|-|-|-
hasChild | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | No | 


Returns <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>

### _isListening(eventType)



Returns `true` if there is currently one or more listeners registers for the given event type.


Parameter|Type|Optional|Description
-|-|-|-
eventType | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 


Returns <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>

### _listen(eventName, listening)



Called by the framework when the first listener of a given event type is registered on the instance (`listening` is `true`), and when the last listener of a given event type is removed (`listening` is `false`). Typically overwritten to make calls to `_nativeListen` when the given event type is issues by native code. The new implementation must make a super call if it does not handle the given event type itself.


Parameter|Type|Optional|Description
-|-|-|-
eventName | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
listening | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | No | 


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### _nativeCall(methodName, parameters)



Sends a 'call' operation to the native client and returns the result.


Parameter|Type|Optional|Description
-|-|-|-
methodName | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
parameters | <span style="white-space:nowrap;">[`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> | No | 


Returns <span style="white-space:nowrap;">`unknown`</span>

### _nativeCreate(param?)



Sends a 'create' operation to the native client. Called once by the constructor and should not be called again. May be overwritten to check the constructor parameter or perform any kind of initialization code prior to creating the native object. The new implementation must make a super call.


Parameter|Type|Optional|Description
-|-|-|-
param | <span style="white-space:nowrap;">`{[prop: string]: any}`</span> | Yes | The first argument (if any) given in the constructor call. Will be forwarded to the `set` method after the native object was created.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### _nativeGet(propertyName)



Sends a 'get' operation to the native client and returns the result.


Parameter|Type|Optional|Description
-|-|-|-
propertyName | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 


Returns <span style="white-space:nowrap;">`unknown`</span>

### _nativeListen(eventType)



Sends a 'listen' operation to the native client.


Parameter|Type|Optional|Description
-|-|-|-
eventType | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### _nativeSet(propertyName, value)



Sends a 'set' operation to the native client.


Parameter|Type|Optional|Description
-|-|-|-
propertyName | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
value | <span style="white-space:nowrap;">[`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)</span> | No | 


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### _onoff(eventType, listening, listener)



A helper function that register the given listener if `listening` is true and de-registers it if `listening` is false.


Parameter|Type|Optional|Description
-|-|-|-
eventType | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
listening | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | No | 
listener | <span style="white-space:nowrap;">`Function`</span> | No | 


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### _release()



Called during the dispose process, after the 'dispose' event has fired, but before the native code has be executed. Native operations (`_nativeSet`, `_nativeGet`, `_nativeCall`, `_nativeListen`) on this object are still possible at this point. May be overwritten to perform any kind of clean-up code. The new implementation must perform a super call at some point, typically at the last command.

Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### _reorderProperties(propertyNames)



Used by the `set` method to determined in which order the given property values are applied. May be overwritten, but the new implementation must pass the propertyNames through a super call at one point.


Parameter|Type|Optional|Description
-|-|-|-
propertyNames | <span style="white-space:nowrap;">[`string[]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | List of properties to be set to a new value


Returns <span style="white-space:nowrap;">[`string[]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>

### _storeProperty(propertyName, encodedValue)



Stores the given value internally and triggers a matching change event.


Parameter|Type|Optional|Description
-|-|-|-
propertyName | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
encodedValue | <span style="white-space:nowrap;">[`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)</span> | No | 


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### _trigger(eventType, eventData?)



Called by the native client to trigger a JavaScript event on this instance. May be overwritten to pre-process the eventData object. The return value indicates whether `defaultPrevented` on the event object was set to `true`. The new implementation must forward the parameters to a super call and return that calls return value.


Parameter|Type|Optional|Description
-|-|-|-
eventType | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
eventData | <span style="white-space:nowrap;">[`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> | Yes | 


Returns <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>

### _wasSet(propertyName)



Returns `true` if _storeProperty was ever called with the given property propertyName


Parameter|Type|Optional|Description
-|-|-|-
propertyName | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 


Returns <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>


## Properties

### cid


An application-wide unique identifier automatically assigned to all native objects on creation. It follows the pattern '$<number>', where the number is incremented for each new NativeObject instance.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.



### jsxAttributes


When using JSX with TypeScript (`.tsx` files), the type of this property determines which JSX attributes are valid for this object.

Type | <span style="white-space:nowrap;">`JSXAttributes&lt;this&gt;`</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.



## Protected Properties

These properties are accessible only in classes extending *NativeObject*.

### _isDisposed



Type | <span style="white-space:nowrap;">`true` \| [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type)</span>
Settable | *Yes*
Change events | *No*




### _nativeType



Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *No*
Change events | *No*




