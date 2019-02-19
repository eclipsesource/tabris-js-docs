---
---
# Object "tabris"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Tabris`](Tabris.md)</span>

* Constructor: *private*
* Singleton: `tabris`
* Namespace: `tabris`
* JSX support: *No*
* Direct subclasses: *None*
--------
The object exported by the `tabris` module hosting all the classes and singletons it provides (not listed here). Is also available in the global namespace as `tabris`.


See also:

- [Modules](../modules.md)

## Properties

### started


* Type: <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
* Settable: *No*



Indicates that the framework has been fully initialized. This happens before the main application module is parsed and executed, so it is only relevant for framework and plug-in developers.

### version


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *No*



The version of the tabris module.

This property can only be set via constructor or JSX. Once set, it cannot change anymore.


## Change Events

### startedChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*started*](#started).

Fired when the [*started*](#started) property has changed.

