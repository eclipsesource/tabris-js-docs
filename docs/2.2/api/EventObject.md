---
---
# EventObject

Base class for all events fired by the framework. Instances may include additional properties, which are documented together with the event type. Change events also have a `value` property. 

 When the trigger method is called with a new instance of `EventObject`, `type`, `target` and `timeStamp` are initialized automatically.

In TypeScript this is a generic class, with the parameter `T` defining the type of the `target` property.

Import this type with "`const {EventObject} = require('tabris');`"

## Properties

### target


**read-only**<br/>
Type: *object*

The object that fired the event.

### timeStamp


**read-only**<br/>
Type: *number*

The time at which the event was created, in milliseconds.

### type


**read-only**<br/>
Type: *string*

The event type.

