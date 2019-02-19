---
---
# Class "EventObject"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`EventObject`](EventObject.md)</span>

* TypeScript type: `EventObject<T> extends Object`
* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support: *No*
* Direct subclasses: *None*
--------
Base class for all events fired by the framework. Instances may include additional properties, which are documented together with the event type. Change events also have a `value` property. 

 When the trigger method is called with a new instance of `EventObject`, `type`, `target` and `timeStamp` are initialized automatically.

In TypeScript this is a generic class, with the parameter `T` defining the type of the `target` property.


## Constructor

### new EventObject()

Parameter|Type|Optional|Description
-|-|-|-


## Properties

### target


* Type: <span style="white-space:nowrap;">[`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span>
* Settable: *No*



The object that fired the event.

### timeStamp


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *No*



The time at which the event was created, in milliseconds.

### type


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *No*



The event type.


## Change Events

### typeChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*type*](#type).

Fired when the [*type*](#type) property has changed.

### targetChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> | The new value of [*target*](#target).

Fired when the [*target*](#target) property has changed.

### timeStampChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*timeStamp*](#timeStamp).

Fired when the [*timeStamp*](#timeStamp) property has changed.

