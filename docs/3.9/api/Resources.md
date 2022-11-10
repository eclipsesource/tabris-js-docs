---
---
# Class "Resources"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >Resources</a>

This is the base class for all typed resource dictionaries. Instances can be obtained from one of its subclasses, or via the `build` method, which crates an intermediate `ResourceBuilder` object.  All members of a `Resources` (or subclass) instance must be of the same type (`ResourceType`).


Type: | <code style="white-space: nowrap">Resources&lt;ResourceType, RawType&gt;<br/>extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a></code>
Generics: | <span id="generics">ResourceType: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code><br/>RawType: <code style="white-space: nowrap"><a href="#generics" title="Generic Parameter&quot;ResourceType&quot;">ResourceType</a></code><br/></span>
Constructor: | protected
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | <code style="white-space: nowrap"><a href="ColorResources.html" title="ColorResources Class Reference">ColorResources</a></code>, <code style="white-space: nowrap"><a href="FontResources.html" title="FontResources Class Reference">FontResources</a></code>, <code style="white-space: nowrap"><a href="TextResources.html" title="TextResources Class Reference">TextResources</a></code>
JSX Support: | No


## Static Methods

### build(options)



Generates a `ResourceBuilder`, which is a factory for resource dictionaries. The options given here determine the type of the resource, as well as the "raw" type from which to create the resource values from.

* The validator function receives a "raw" resource value (unconverted, as provided in the input data object) and must return a boolean indicating whether it is accepted. This means it either is a value that will be accepted by the converter, or if no converter is present it must be the final format of the resource value.
* The converter if a function that receives the raw input value and returns the value as it will be present on the final resource dictionary. If no converter is given this is the same type as the resource type.
* The "type" may be a constructor of the type of the final resource value as returned by the converter. For primitives this option must not be given.


Parameter|Type|Description
-|-|-
options | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;validator: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a>, // optional<br/>&nbsp;&nbsp;converter: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a>, // optional<br/>&nbsp;&nbsp;type: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a> // optional<br/>}</code> | The configuration of the new `ResourceBuilder`. Requires either a validator or a converter function, or both.


Returns: <code style="white-space: nowrap"><a href="ResourceBuilder.html" title="ResourceBuilder Class Reference">ResourceBuilder</a>&lt;<a href="#generics" title="Generic Parameter&quot;ResourceType&quot;">ResourceType</a>, <a href="#generics" title="Generic Parameter&quot;RawType&quot;">RawType</a>&gt;</code>


