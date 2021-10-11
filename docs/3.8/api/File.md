---
---
# Class "File"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="Blob.html" title="Blob Class Reference">Blob</a> > <a href="#" >File</a>

Represents raw data of a given type and name.


Type: | <code style="white-space: nowrap">File extends <a href="Blob.html" title="Blob Class Reference">Blob</a></code>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >global</a>
Direct subclasses: | None
JSX Support: | No


## Constructor

### new File(blobParts, name, options?)

Parameter|Type|Description
-|-|-
blobParts | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a>[]</code> | Array of ArrayBuffer, Blob, string, or any typed array. Any other type will be stringified. Strings are encoded as UTF-8.
name | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | The name or path of the file
options | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;type: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>, // optional<br/>&nbsp;&nbsp;lastModified: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a> // optional<br/>}</code> | `type` represents the MIME type of the blob content. Defaults to empty string. <br/><br/>`lastModified` is a unix timestamp of the last known modification of the file. Defaults to the current time. *Optional.*

## Properties

### lastModified


Unix timestamp of the last known modification of the file

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### name


The name or path of the file

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.




