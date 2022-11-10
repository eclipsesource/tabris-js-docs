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

### decrypt(algorithm, key, data)



Decrypts the given raw data. Currently only supports the AES-GCM algorithm.


Parameter|Type|Description
-|-|-
algorithm | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;name: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'AES-GCM'</a>,<br/>&nbsp;&nbsp;iv:<br/><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays" title="View &quot;typed arrays&quot; on MDN">TypedArray</a>,<br/>&nbsp;&nbsp;tagLength: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a> // optional<br/>}</code> | 
key | <code style="white-space: nowrap"><a href="CryptoKey.html" title="CryptoKey Class Reference">CryptoKey</a></code> | 
data | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays" title="View &quot;typed arrays&quot; on MDN">TypedArray</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a>&gt;</code>

### deriveBits(algorithm, baseKey, length)



Takes a base key and derives an array of bits from it using the Elliptic Curve Diffie-Hellman (ECDH) algorithm.


Parameter|Type|Description
-|-|-
algorithm | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;name: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'ECDH'</a>,<br/>&nbsp;&nbsp;namedCurve: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'P-256'</a>,<br/>&nbsp;&nbsp;public: <a href="CryptoKey.html" title="CryptoKey Class Reference">CryptoKey</a><br/>}</code> | 
baseKey | <code style="white-space: nowrap"><a href="CryptoKey.html" title="CryptoKey Class Reference">CryptoKey</a></code> | 
length | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a>&gt;</code>

### deriveBits(algorithm, baseKey, length)



Takes a base key and derives an array of bits from it using the HKDF algorithm.


Parameter|Type|Description
-|-|-
algorithm | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;name: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'HKDF'</a>,<br/>&nbsp;&nbsp;hash:<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'SHA-1'</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'SHA-256'</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'SHA-384'</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'SHA-512'</a>,<br/>&nbsp;&nbsp;salt:<br/><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays" title="View &quot;typed arrays&quot; on MDN">TypedArray</a>,<br/>&nbsp;&nbsp;info:<br/><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays" title="View &quot;typed arrays&quot; on MDN">TypedArray</a><br/>}</code> | 
baseKey | <code style="white-space: nowrap"><a href="CryptoKey.html" title="CryptoKey Class Reference">CryptoKey</a></code> | 
length | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a>&gt;</code>

### deriveKey(algorithm, baseKey, derivedKeyAlgorithm, extractable, keyUsages)



Takes a base key and derives a secret key from it using the Elliptic Curve Diffie-Hellman (ECDH) algorithm.


Parameter|Type|Description
-|-|-
algorithm | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;name: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'ECDH'</a>,<br/>&nbsp;&nbsp;namedCurve: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'P-256'</a>,<br/>&nbsp;&nbsp;public: <a href="CryptoKey.html" title="CryptoKey Class Reference">CryptoKey</a><br/>}</code> | 
baseKey | <code style="white-space: nowrap"><a href="CryptoKey.html" title="CryptoKey Class Reference">CryptoKey</a></code> | 
derivedKeyAlgorithm | <code style="white-space: nowrap">{name: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'AES-GCM'</a>, length: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}</code> | 
extractable | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | 
keyUsages | <code style="white-space: nowrap">string[]</code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="CryptoKey.html" title="CryptoKey Class Reference">CryptoKey</a>&gt;</code>

### deriveKey(algorithm, baseKey, derivedKeyAlgorithm, extractable, keyUsages)



Takes a base key and derives a secret key from it using the HKDF algorithm.


Parameter|Type|Description
-|-|-
algorithm | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;name: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'HKDF'</a>,<br/>&nbsp;&nbsp;hash:<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'SHA-1'</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'SHA-256'</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'SHA-384'</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'SHA-512'</a>,<br/>&nbsp;&nbsp;salt:<br/><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays" title="View &quot;typed arrays&quot; on MDN">TypedArray</a>,<br/>&nbsp;&nbsp;info:<br/><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays" title="View &quot;typed arrays&quot; on MDN">TypedArray</a><br/>}</code> | 
baseKey | <code style="white-space: nowrap"><a href="CryptoKey.html" title="CryptoKey Class Reference">CryptoKey</a></code> | 
derivedKeyAlgorithm | <code style="white-space: nowrap">{name: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'AES-GCM'</a>, length: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}</code> | 
extractable | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | 
keyUsages | <code style="white-space: nowrap">string[]</code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="CryptoKey.html" title="CryptoKey Class Reference">CryptoKey</a>&gt;</code>

### digest(algorithm, data)



Provides the digest value of the given data as an ArrayBuffer. Fo this the method uses the hashing algorithms provided by the operating system.


Parameter|Type|Description
-|-|-
algorithm | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'SHA-1'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'SHA-256'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'SHA-384'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'SHA-512'</a></code> | A string defining the hash function to use.
data | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays" title="View &quot;typed arrays&quot; on MDN">TypedArray</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a></code> | The data to be digested.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a>&gt;</code>

### encrypt(algorithm, key, data)



Encrypts the given raw data. Currently only supports the AES-GCM algorithm.


Parameter|Type|Description
-|-|-
algorithm | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;name: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'AES-GCM'</a>,<br/>&nbsp;&nbsp;iv:<br/><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays" title="View &quot;typed arrays&quot; on MDN">TypedArray</a>,<br/>&nbsp;&nbsp;tagLength: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a> // optional<br/>}</code> | 
key | <code style="white-space: nowrap"><a href="CryptoKey.html" title="CryptoKey Class Reference">CryptoKey</a></code> | 
data | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays" title="View &quot;typed arrays&quot; on MDN">TypedArray</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a>&gt;</code>

### exportKey(format, key)



Converts a CryptoKey instances into a portable format. To export a key, the key must have extractable set to true. Supports the spki format or raw bytes.


Parameter|Type|Description
-|-|-
format | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'raw'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'spki'</a></code> | 
key | <code style="white-space: nowrap"><a href="CryptoKey.html" title="CryptoKey Class Reference">CryptoKey</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a>&gt;</code>

### generateKey(algorithm, extractable, keyUsages)



Generates new keys. Currently only supports the Elliptic Curve Diffie-Hellman (ECDH) algorithm to generate key pairs.


Parameter|Type|Description
-|-|-
algorithm | <code style="white-space: nowrap">{name: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'ECDH'</a>, namedCurve: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'P-256'</a>}</code> | 
extractable | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | 
keyUsages | <code style="white-space: nowrap">string[]</code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;{privateKey: <a href="CryptoKey.html" title="CryptoKey Class Reference">CryptoKey</a>, publicKey: <a href="CryptoKey.html" title="CryptoKey Class Reference">CryptoKey</a>}&gt;</code>

### importKey(format, keyData, algorithm, extractable, keyUsages)



Takes an external key in a portable format and returns a CryptoKey object that can be used with the SubtleCrypto API. Keys may be in spki or pkcs8 format.


Parameter|Type|Description
-|-|-
format | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'spki'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'pkcs8'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'raw'</a></code> | 
keyData | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays" title="View &quot;typed arrays&quot; on MDN">TypedArray</a></code> | 
algorithm | <code style="white-space: nowrap">{name: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'ECDH'</a>, namedCurve: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'P-256'</a>}<br/>&#124; {name: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'AES-GCM'</a>}<br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'HKDF'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'AES-GCM'</a></code> | 
extractable | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | 
keyUsages | <code style="white-space: nowrap">string[]</code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="CryptoKey.html" title="CryptoKey Class Reference">CryptoKey</a>&gt;</code>


