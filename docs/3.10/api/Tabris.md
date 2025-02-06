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
id | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | 
loaderFunction | <code style="white-space: nowrap">ModuleLoader</code> | 


Returns: <code style="white-space: nowrap"><a href="Module.html" title="Module Class Reference">Module</a></code>

### _init(client, options?)



Initializes the framework and triggers the 'start' event.


Parameter|Type|Description
-|-|-
client | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code> | The client bridge provided by the native client.
options | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;headless: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a> // optional<br/>}</code> | *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### _notify(cid, eventType, eventData)



Callback for the native client to issue JavaScript events to the `NativeObject` with the given `cid`. Triggers a flush event afterwards. Errors are caught and logged to the console. Returns true if the event object has a `defaultPrevented` field set to true.


Parameter|Type|Description
-|-|-
cid | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | 
eventType | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | 
eventData | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

### flush()



Sends all queued native operations to the native client and triggers the 'flush' event.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>


## Properties

### logPushInterval


Set this property to a positive number to see the log output from the current worker on a connected [CLI](../tabris-cli.md). Has no effect in the main UI thread.

Defines the maximum delay (in milliseconds) between the call of a [`Console`](./Console.md) function (e.g. `console.log()`) <em>from inside a [`Worker`](https://developer.mozilla.org/en-US/docs/Web/API/Worker)</em> and the matching [log event](#log) in the parent thread. Since this interrupts the UI thread smaller values could impact UI responsiveness.

The feature is disabled by default (value `-1`), except for debug builds, where the default is `2000`.

<b>Note:</b> You do <em>not</em> need to set this property to see the console output on the built-in developer console, this is only for the CLI, or in cases where you record the log events in the UI thread. It also has <em>no</em> effect on the log output of the main thread.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">-1</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | Not supported




### propertyTypes



Type: |<code style="white-space: nowrap">{[type]: PropertyType<unknown>}</code>
Settable: | <a href="../widget-basics.html#widget-properties" >By Constructor or JSX</a>
Change Event: | Not supported




### started


Indicates that the framework has been fully initialized. This happens before the main application module is parsed and executed, so it is only relevant for framework and plug-in developers.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">false</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | Not supported




### symbols



Type: |<code style="white-space: nowrap">{[symbol]: Symbol}</code>
Settable: | <a href="../widget-basics.html#widget-properties" >By Constructor or JSX</a>
Change Event: | Not supported




### version


The version of the tabris module.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code>
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
level | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'debug'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'info'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'log'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'warn'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'error'</a></code> | 
message | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | 

### layout

Fired before certain native operations to render all modified layoutData objects.

EventObject Type: <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a>&lt;<a href="#" >Tabris</a>&gt;</code>

This event has no additional parameter.

