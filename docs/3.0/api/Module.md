---
---
# Class "Module"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`Module`](Module.md)</span>

Represents a JavaScript module as outlined in the commonJS standard.


Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | *No*


See also:

- [Modules](../modules.md)

## Constructor

### new Module(id, parent, content)

Parameter|Type|Optional|Description
-|-|-|-
id | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
parent | <span style="white-space:nowrap;">[`Module`](Module.md) \| [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)</span> | No | 
content | <span style="white-space:nowrap;">`ModuleLoader` \| [`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> | No | 

## Methods

### require(request)



Finds a module relative to the id of this module and returns the exports object of that module. Throws if no matching module can be found.


Parameter|Type|Optional|Description
-|-|-|-
request | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 


Returns <span style="white-space:nowrap;">[`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span>

## Static Methods

### createLoader(url)



Loads the given JavaScript file from the given (local or http) url and wraps it as a module loader function.


Parameter|Type|Optional|Description
-|-|-|-
url | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 


Returns <span style="white-space:nowrap;">`ModuleLoader`</span>

### execute(code, url)



Evaluates the given JavaScript code and returns the result of the last expression. The url is used to identify the source in stack traces.


Parameter|Type|Optional|Description
-|-|-|-
code | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 
url | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 


Returns <span style="white-space:nowrap;">`unknown`</span>

### getSourceMap(url)



Returns the source map object (decoded from base64 and parsed from JSON) for the JavaScript file of the given url. Returns `null` if no source map can be found. This method only works with code side-loaded via the tabris CLI `serve` command.


Parameter|Type|Optional|Description
-|-|-|-
url | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 


Returns <span style="white-space:nowrap;">`unknown`</span>

### load(url)



Loads a text from the given (local or http) url and returns its content. File is expected to be utf-8 encoded. This is a blocking operation, in almost all cases it is preferable to use `fetch()` or the file system API to read a text file.


Parameter|Type|Optional|Description
-|-|-|-
url | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 


Returns <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>

### readJSON(url)



Loads the JSON file from the given (local or http) url, parses it and returns the result. This is a blocking operation, in almost all cases it is preferable to use `fetch()` or the file system API to obtain and parse a JSON file.


Parameter|Type|Optional|Description
-|-|-|-
url | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | 


Returns <span style="white-space:nowrap;">`unknown`</span>


## Properties

### exports



Type | <span style="white-space:nowrap;">[`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### id


Full id (path) of the module

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### parent


The module that first required this module

Type | <span style="white-space:nowrap;">[`Module`](Module.md)</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

