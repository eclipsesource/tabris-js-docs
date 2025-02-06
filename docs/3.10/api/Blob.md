---
---
# Class "Blob"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >Blob</a>

Represents raw data of a given type.


Type: | <code style="white-space: nowrap">Blob extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a></code>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >global</a>
Direct subclasses: | <code style="white-space: nowrap"><a href="File.html" title="File Class Reference">File</a></code>
JSX Support: | No


## Constructor

### new Blob(blobParts?, options?)

Parameter|Type|Description
-|-|-
blobParts | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a>[]</code> | Array of ArrayBuffer, Blob, string, or any typed array. Any other type will be stringified. Strings are encoded as UTF-8. *Optional.*
options | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;type: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a> // optional<br/>}</code> | `type` represents the MIME type of the blob content. Defaults to empty string. *Optional.*

## Methods

### arrayBuffer()



Reads the blob data into an ArrayBuffer and returns it in a promise. Each call creates a new in-memory copy of the data.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a>&gt;</code>

### text()



Decodes the blob data as a string and returns it in a promise.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>&gt;</code>


## Properties

### size


Size of the blob data in bytes

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">0</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### type


The MIME type of the blob data

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code>
Default: | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">(empty string)</a>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.




