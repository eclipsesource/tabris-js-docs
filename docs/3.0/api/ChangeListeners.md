---
---
# Class "ChangeListeners"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`Listeners`](Listeners.md)</span> > <span style="white-space:nowrap;">[`ChangeListeners`](ChangeListeners.md)</span>

A convenience type that extends the `Listeners` type to perform some additional checks when handling change events.


TypeScript type | `ChangeListeners<Target extends object, Property extends keyof Target> extends Listeners<PropertyChangedEvent<Target, Target[Property]>>`
Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | *No*


## Constructor

### new ChangeListeners(target, property)

Parameter|Type|Optional|Description
-|-|-|-
target | <span style="white-space:nowrap;">[`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> | No | 
property | <span style="white-space:nowrap;">`Property`</span> | No | 
