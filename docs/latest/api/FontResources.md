---
---
# Class "FontResources"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="Resources.html" title="Resources Class Reference">Resources</a> > <a href="#" >FontResources</a>

This is the base class for all font resource dictionaries. Instances can be obtained via the `from` method, or by subclassing. All members of a `FontResources` (or subclass) instance will be of the type `Font`.


Type: | <code style="white-space: nowrap">FontResources extends <a href="Resources.html" title="Resources Class Reference">Resources</a>&lt;<a href="Font.html" title="Font Class Reference">Font</a>, <a href="../types.html#fontvalue" title="FontValue Type Reference">FontValue</a>&gt;</code>
Constructor: | protected
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


See also:
  
[Resource Management in Tabris.js](../resource-management.md)  
[Defining raw font resource data in a separate JSON file.](https://github.com/eclipsesource/tabris-js/blob/v3.5.0/snippets/resources/fonts.json)  
[Converting raw font resource data to `FontResources` instance.](https://github.com/eclipsesource/tabris-js/blob/v3.5.0/snippets/resources/index.ts)  
[<span class='language tsx'>TSX</span> Using a FontResources dictionary](https://playground.tabris.com/?gitref=v3.5.0&snippet=resource-management.tsx)

## Static Methods

### from(base, data)



Creates a fonts dictionary from the given raw "data" object. All fonts from the given "base" dictionary are inherited unless overwritten.

Entries in the "data" object starting with "$" are considered configuration options and will not become entries in the final fonts dictionary.


Parameter|Type|Description
-|-|-
base | <code style="white-space: nowrap">Base</code> | A plain object or another `FontResources` instance containing values to inherit by the new `FontResources` dictionary.
data | <code style="white-space: nowrap">Data</code> | The raw data (plain object) to create the dictionary from. The format must match the [Tabris.js fonts JSON schema](https://github.com/eclipsesource/tabris-js/blob/v3.5.0/schema/fonts.json).


Returns: <code style="white-space: nowrap"><a href="#" >FontResources</a></code>

### from(data)



Creates a fonts dictionary from the given raw "data" object. The format must match the [Tabris.js fonts JSON schema](https://github.com/eclipsesource/tabris-js/blob/v3.5.0/schema/fonts.json). Entries in the "data" object starting with "$" are considered configuration options and will not become entries in the final fonts dictionary.


Parameter|Type|Description
-|-|-
data | <code style="white-space: nowrap">Data</code> | The raw data (plain object) to create the dictionary from. The format must match the [Tabris.js fonts JSON schema](https://github.com/eclipsesource/tabris-js/blob/v3.5.0/schema/fonts.json).


Returns: <code style="white-space: nowrap"><a href="#" >FontResources</a></code>

