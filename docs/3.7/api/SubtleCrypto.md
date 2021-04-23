---
---
# Class "SubtleCrypto"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >SubtleCrypto</a>

Provides a subset of the [cryptographic functions](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) in the SubtleCrypto W3C standard.


Type: | <code style="white-space: nowrap">SubtleCrypto extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a></code>
Constructor: | private
Singleton: | No
Namespace: |<a href="../modules.html#startup" >global</a>
Direct subclasses: | None
JSX Support: | No


## Methods

### digest(algorithm, data)



Provides the digest value of the given data as an ArrayBuffer. Fo this the method uses the hashing algorithms provided by the operating system.


Parameter|Type|Description
-|-|-
algorithm | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'SHA-1'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'SHA-256'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'SHA-384'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'SHA-512'</a></code> | A string defining the hash function to use.
data | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays" title="View &quot;typed arrays&quot; on MDN">TypedArray</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a></code> | The data to be digested.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a>&gt;</code>


