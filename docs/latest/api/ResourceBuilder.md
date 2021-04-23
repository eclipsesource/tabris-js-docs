---
---
# Class "ResourceBuilder"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >ResourceBuilder</a>

A factory for generic resource dictionaries. Instances can be obtained from `Resource.build()` or by invoking the constructor.

Do not use for resource dictionaries of the types `Color`, `Font` and `string`. Instead use the respective factories `ColorResources.from()`, `FontResources.from()` and `TextResources.from()`.


Type: | <code style="white-space: nowrap">ResourceBuilder&lt;ResourceType, RawType&gt;<br/>extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a></code>
Generics: | <span id="generics">ResourceType: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code><br/>RawType: <code style="white-space: nowrap"><a href="#generics" title="Generic Parameter&quot;ResourceType&quot;">ResourceType</a></code><br/></span>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


## Constructor

### new ResourceBuilder(options)

Parameter|Type|Description
-|-|-
options | <code style="white-space: nowrap">ResourceBuilderConstructorOptions&lt;<a href="#generics" title="Generic Parameter&quot;ResourceType&quot;">ResourceType</a>, <a href="#generics" title="Generic Parameter&quot;RawType&quot;">RawType</a>&gt;</code> | 

## Methods

### from(base, data)



Creates a resource dictionary from the given raw "data" object. All values from the given "base" dictionary are inherited unless overwritten.

Entries in the "data" object starting with "$" are considered configuration options and will not become part of the final resource dictionary.


Parameter|Type|Description
-|-|-
base | <code style="white-space: nowrap">Base</code> | 
data | <code style="white-space: nowrap">Data</code> | 


Returns: <code style="white-space: nowrap">NamedResources&lt;<a href="#generics" title="Generic Parameter&quot;ResourceType&quot;">ResourceType</a>, keyof (Base & Data)&gt;</code>

### from(data)




Parameter|Type|Description
-|-|-
data | <code style="white-space: nowrap">Data</code> | 


Returns: <code style="white-space: nowrap"><a href="Resources.html" title="Resources Class Reference">Resources</a>&lt;<a href="#generics" title="Generic Parameter&quot;ResourceType&quot;">ResourceType</a>&gt;</code>


