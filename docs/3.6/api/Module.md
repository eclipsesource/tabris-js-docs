---
---
# Class "Module"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >Module</a>

Represents a JavaScript module as outlined in the commonJS standard.


Type: | <code style="white-space: nowrap">Module extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a></code>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


See also:
  
[Modules](../modules.md)

## Constructor

### new Module(id, parent, content)

Parameter|Type|Description
-|-|-
id | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 
parent | <code style="white-space: nowrap"><a href="#" >Module</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type" title="View &quot;null&quot; on MDN">null</a></code> | 
content | <code style="white-space: nowrap">ModuleLoader &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code> | 

## Methods

### require(request)



Finds a module relative to the id of this module and returns the exports object of that module. Throws if no matching module can be found.


Parameter|Type|Description
-|-|-
request | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code>

## Static Methods

### createLoader(url)



Loads the given JavaScript file from the given (local or http) url and wraps it as a module loader function.


Parameter|Type|Description
-|-|-
url | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 


Returns: <code style="white-space: nowrap">ModuleLoader</code>

### createRequire(path)



Creates a "require" function that finds a module relative to the given path. If found the exports are returned. Throws if no matching module can be found.


Parameter|Type|Description
-|-|-
path | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | An absolute path, beginning with "/". The path does not have to point to an existing file.


Returns: <code style="white-space: nowrap">(<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">request</a>) => <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">exports</a></code>

### execute(code, url)



Evaluates the given JavaScript code and returns the result of the last expression. The url is used to identify the source in stack traces.


Parameter|Type|Description
-|-|-
code | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 
url | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 


Returns: <code style="white-space: nowrap">unknown</code>

### getSourceMap(url)



Returns the source map object (decoded from base64 and parsed from JSON) for the JavaScript file of the given url. Returns `null` if no source map can be found. This method only works with code side-loaded via the tabris CLI `serve` command.


Parameter|Type|Description
-|-|-
url | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 


Returns: <code style="white-space: nowrap">unknown</code>

### load(url)



Loads a text from the given (local or http) url and returns its content. File is expected to be utf-8 encoded. This is a blocking operation, in almost all cases it is preferable to use `fetch()` or the file system API to read a text file.


Parameter|Type|Description
-|-|-
url | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>

### readJSON(url)



Loads the JSON file from the given (local or http) url, parses it and returns the result. This is a blocking operation, in almost all cases it is preferable to use `fetch()` or the file system API to obtain and parse a JSON file.


Parameter|Type|Description
-|-|-
url | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | 


Returns: <code style="white-space: nowrap">unknown</code>


## Properties

### exports



Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### id


Full id (path) of the module

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### parent


The module that first required this module

Type: |<code style="white-space: nowrap"><a href="#" >Module</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



