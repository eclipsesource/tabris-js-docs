---
---
# Class "EventObject"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`EventObject`](EventObject.md)</span>

Base class for all events fired by the framework. Instances may include additional properties, which are documented together with the event type. Change events also have a `value` property. 

 When the trigger method is called with a new instance of `EventObject`, `type`, `target` and `timeStamp` are initialized automatically.

In TypeScript this is a generic class, with the parameter `T` defining the type of the `target` property.


TypeScript type | `EventObject<T> extends Object`
Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | *No*


## Constructor

### new EventObject()

Parameter|Type|Optional|Description
-|-|-|-


## Properties

### target


The object that fired the event.

Type | <span style="white-space:nowrap;">[`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.



### timeStamp


The time at which the event was created, in milliseconds.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.



### type


The event type.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.



