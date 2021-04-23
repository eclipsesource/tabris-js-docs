---
---
# Class "TextResources"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="Resources.html" title="Resources Class Reference">Resources</a> > <a href="#" >TextResources</a>

This is the base class for all text resource dictionaries. Instances can be obtained via the `from` method, or by subclassing. All members of a `TextResources` (or subclass) instance will be of the type `string`.


Type: | <code style="white-space: nowrap">TextResources extends <a href="Resources.html" title="Resources Class Reference">Resources</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>&gt;</code>
Constructor: | protected
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No



See also:
  
[Resource Management in Tabris.js](../resource-management.md)  
[Defining raw text resource data in a separate JSON file.](https://github.com/eclipsesource/tabris-js/blob/v3.7.2/snippets/resources/texts.json)  
[Converting raw text resource data to `TextResources` instance.](https://github.com/eclipsesource/tabris-js/blob/v3.7.2/snippets/resources/index.ts)  
[<span class='language tsx'>TSX</span> Using a TextResources dictionary](https://github.com/eclipsesource/tabris-js/tree/v3.7.2/snippets/resource-management.tsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.7.2&snippet=resource-management.tsx" style="color: cadetblue;">► Run in Playground</a>]</span>

## Static Methods

### from(base, data)



Creates a texts dictionary from the given raw "data" object. All texts from the given "base" dictionary are inherited unless overwritten.

Entries in the "data" object starting with "$" are considered configuration options and will not become entries in the final texts dictionary.


Parameter|Type|Description
-|-|-
base | <code style="white-space: nowrap">Base</code> | A plain object or another `TextResources` instance containing values to inherit by the new `TextResources` dictionary.
data | <code style="white-space: nowrap">Data</code> | The raw data (plain object) to create the dictionary from. The format must match the [Tabris.js texts JSON schema](https://github.com/eclipsesource/tabris-js/blob/v3.7.2/schema/texts.json).


Returns: <code style="white-space: nowrap"><a href="#" >TextResources</a></code>

### from(data)



Creates a texts dictionary from the given raw "data" object. The format must match the [Tabris.js texts JSON schema](https://github.com/eclipsesource/tabris-js/blob/v3.7.2/schema/texts.json). Entries in the "data" object starting with "$" are considered configuration options and will not become entries in the final texts dictionary.


Parameter|Type|Description
-|-|-
data | <code style="white-space: nowrap">Data</code> | The raw data (plain object) to create the dictionary from. The format must match the [Tabris.js texts JSON schema](https://github.com/eclipsesource/tabris-js/blob/v3.7.2/schema/texts.json).


Returns: <code style="white-space: nowrap"><a href="#" >TextResources</a></code>


