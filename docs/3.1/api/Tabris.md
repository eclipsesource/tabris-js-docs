---
---
# Object "tabris"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Tabris`](Tabris.md)</span>

The main object exported by the `tabris` module hosting all the classes and singletons it provides (not listed here). It also provides low-level framework API required for bootstrapping and for some extensions/plug-ins. <b>Caution!</b>: These APIs interact with the internals of the framework. Only use them if you know what you are doing.

This object is also available in the global namespace as `tabris`. For technical reasons the low-level API is available in TypeScript only when the object is explicitly imported.


Constructor | *private*
Singleton | `tabris`
Namespace |`tabris`
Direct subclasses | *None*
JSX support | *No*


See also:
  
[Modules](../modules.md)

## Methods

### _defineModule(id, loaderFunction)



Adds a module to the internal module registry with an id relative to the app directory.


Parameter|Type|Optional|Description
-|-|-|-
id | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
loaderFunction | <span style="white-space:nowrap;">`ModuleLoader`</span> | No | 


Returns <span style="white-space:nowrap;">[`Module`](Module.md)</span>

### _init(client, options?)



Initializes the framework and triggers the 'start' event.


Parameter|Type|Optional|Description
-|-|-|-
client | <span style="white-space:nowrap;">[`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)</span> | No | The client bridge provided by the native client.
options | <span style="white-space:nowrap;">`{headless: boolean}`</span> | Yes | 


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### _notify(cid, eventType, eventData)



Callback for the native client to issue JavaScript events to the `NativeObject` with the given `cid`. Triggers a flush event afterwards. Errors are caught and logged to the console. Returns true if the event object has a `defaultPrevented` field set to true.


Parameter|Type|Optional|Description
-|-|-|-
cid | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
eventType | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
eventData | <span style="white-space:nowrap;">[`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> | No | 


Returns <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>

### flush()



Sends all queued native operations to the native client and triggers the 'flush' event.

Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>


## Properties

### started


Indicates that the framework has been fully initialized. This happens before the main application module is parsed and executed, so it is only relevant for framework and plug-in developers.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Default | `false`
Settable | *No*
Change events | *Yes*




### version


The version of the tabris module.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.




## Events

### start

Fired after the client bridge has been installed but before `started` has been set to `true`.

### flush

Fired after a native event has been processed.

### log

Fired when a message is about to be printed to the console.

Parameter|Type|Description
-|-|-
level | <span style="white-space:nowrap;">`'debug'` \| `'info'` \| `'log'` \| `'warn'` \| `'error'`</span> | 
message | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | 

### layout

Fired before certain native operations to render all modified layoutData objects.

## Change Events

### startedChanged

Fired when the [*started*](#started) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*started*](#started).

