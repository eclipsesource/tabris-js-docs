---
---
# Object "tabris"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a> > <a href="#" >Tabris</a>

The main object exported by the `tabris` module hosting all the classes and singletons it provides (not listed here). It also provides low-level framework API required for bootstrapping and for some extensions/plug-ins. <b>Caution!</b>: These APIs interact with the internals of the framework. Only use them if you know what you are doing.

This object is also available in the global namespace as `tabris`. For technical reasons the low-level API is available in TypeScript only when the object is explicitly imported.


Type: | <code style="white-space: nowrap">Tabris extends <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a></code>
Constructor: | private
Singleton: | `tabris`
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


See also:
  
[Modules](../modules.md)

## Methods

### _defineModule(id, loaderFunction)



Adds a module to the internal module registry with an id relative to the app directory.


Parameter|Type|Description
-|-|-
id | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 
loaderFunction | <code style="white-space: nowrap">ModuleLoader</code> | 


Returns: <code style="white-space: nowrap"><a href="Module.html" title="Module Class Reference">Module</a></code>

### _init(client, options?)



Initializes the framework and triggers the 'start' event.


Parameter|Type|Description
-|-|-
client | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code> | The client bridge provided by the native client.
options | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;headless: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a> // optional<br/>}</code> | *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### _notify(cid, eventType, eventData)



Callback for the native client to issue JavaScript events to the `NativeObject` with the given `cid`. Triggers a flush event afterwards. Errors are caught and logged to the console. Returns true if the event object has a `defaultPrevented` field set to true.


Parameter|Type|Description
-|-|-
cid | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 
eventType | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 
eventData | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

### flush()



Sends all queued native operations to the native client and triggers the 'flush' event.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>


## Properties

### started


Indicates that the framework has been fully initialized. This happens before the main application module is parsed and executed, so it is only relevant for framework and plug-in developers.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">false</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | [`startedChanged`](#startedchanged)




### symbols



Type: |<code style="white-space: nowrap">{[symbol]: Symbol}</code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`symbolsChanged`](#symbolschanged)




### version


The version of the tabris module.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | Not supported





## Events

### start

Fired after the client bridge has been installed but before `started` has been set to `true`.

EventObject Type: <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a>&lt;<a href="#" >Tabris</a>&gt;</code>

This event has no additional parameter.
### flush

Fired after a native event has been processed.

EventObject Type: <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a>&lt;<a href="#" >Tabris</a>&gt;</code>

This event has no additional parameter.
### log

Fired when a message is about to be printed to the console.

EventObject Type: <code style="white-space: nowrap">TabrisLogEvent&lt;<a href="#" >Tabris</a>&gt;</code>

Property|Type|Description
-|-|-
level | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'debug'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'info'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'log'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'warn'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'error'</a></code> | 
message | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 

### layout

Fired before certain native operations to render all modified layoutData objects.

EventObject Type: <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a>&lt;<a href="#" >Tabris</a>&gt;</code>

This event has no additional parameter.
## Change Events

### startedChanged

Fired when the [started](#started) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >Tabris</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | The new value of [started](#started).

### symbolsChanged

Fired when the [symbols](#symbols) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >Tabris</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap">{[symbol]: Symbol}</code> | The new value of [symbols](#symbols).

