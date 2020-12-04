---
---
# Class "ColorResources"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="Resources.html" title="Resources Class Reference">Resources</a> > <a href="#" >ColorResources</a>

This is the base class for all color resource dictionaries. Instances can be obtained via the `from` method, or by subclassing. All members of a `ColorResources` (or subclass) instance will be of the type `Color`.


Type: | <code style="white-space: nowrap">ColorResources extends <a href="Resources.html" title="Resources Class Reference">Resources</a>&lt;<a href="Color.html" title="Color Class Reference">Color</a>, <a href="Color.html#colorvalue" title="Color Class Type">ColorValue</a>&gt;</code>
Constructor: | protected
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No



See also:
  
[Resource Management in Tabris.js](../resource-management.md)  
[Defining raw color resource data in a separate JSON file.](https://github.com/eclipsesource/tabris-js/blob/v3.7.0/snippets/resources/colors.json)  
[Converting raw color resource data to `ColorResources` instance.](https://github.com/eclipsesource/tabris-js/blob/v3.7.0/snippets/resources/index.ts)  
[<span class='language tsx'>TSX</span> Using a ColorResources dictionary](https://playground.tabris.com/?gitref=v3.7.0&snippet=resource-management.tsx)

## Static Methods

### from(base, data)



Creates a colors dictionary from the given raw "data" object. All colors from the given "base" dictionary are inherited unless overwritten.

Entries in the "data" object starting with "$" are considered configuration options and will not become entries in the final colors dictionary.


Parameter|Type|Description
-|-|-
base | <code style="white-space: nowrap">Base</code> | A plain object or another `ColorResources` instance containing values to inherit by the new `ColorResources` dictionary.
data | <code style="white-space: nowrap">Data</code> | The raw data (plain object) to create the dictionary from. The format must match the [Tabris.js colors JSON schema](https://github.com/eclipsesource/tabris-js/blob/v3.7.0/schema/colors.json).


Returns: <code style="white-space: nowrap"><a href="#" >ColorResources</a></code>

### from(data)



Creates a colors dictionary from the given raw "data" object. The format must match the [Tabris.js colors JSON schema](https://github.com/eclipsesource/tabris-js/blob/v3.7.0/schema/colors.json). Entries in the "data" object starting with "$" are considered configuration options and will not become entries in the final colors dictionary.


Parameter|Type|Description
-|-|-
data | <code style="white-space: nowrap">Data</code> | The raw data (plain object) to create the dictionary from. The format must match the [Tabris.js colors JSON schema](https://github.com/eclipsesource/tabris-js/blob/v3.7.0/schema/colors.json).


Returns: <code style="white-space: nowrap"><a href="#" >ColorResources</a></code>


