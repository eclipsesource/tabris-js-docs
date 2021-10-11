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
[<span class='language tsx'>TSX</span> module-addpath.tsx](https://github.com/eclipsesource/tabris-js/tree/v3.8.0/snippets/module-addpath.tsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.8.0&snippet=module-addpath.tsx" style="color: cadetblue;">► Run in Playground</a>]</span>  
[<span class='language tsx'>TSX</span> module-define.tsx](https://github.com/eclipsesource/tabris-js/tree/v3.8.0/snippets/module-define.tsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.8.0&snippet=module-define.tsx" style="color: cadetblue;">► Run in Playground</a>]</span>

## Constructor

### new Module(id, parent, content)

Parameter|Type|Description
-|-|-
id | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | 
parent | <code style="white-space: nowrap"><a href="#" >Module</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null_type" title="View &quot;null&quot; on MDN">null</a></code> | 
content | <code style="white-space: nowrap">ModuleLoader &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code> | 

## Methods

### require(request)



Finds a module relative to the id of this module and returns the exports object of that module. Throws if no matching module can be found.


Parameter|Type|Description
-|-|-
request | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code>

## Static Methods

### addPath(options)



Maps imports matching the given patterns to the associated paths. Patterns may contain exactly one wildcard ('*') and must not start with '/' or '.'. Paths are relative to 'baseUrl', may contain one wildcard and must start with '.'. The order of the paths determines the order of the path lookup. The 'baseUrl' must start with '/', which refers to the project root directory.


Parameter|Type|Description
-|-|-
options | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;baseUrl: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>, // optional<br/>&nbsp;&nbsp;paths: {[pattern]: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>[]}<br/>}</code> | Contains the paths and baseUrl. If omitted, 'baseUrl' defaults to '/'.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

See also:
  
[<span class='language tsx'>TSX</span> module-addpath.tsx](https://github.com/eclipsesource/tabris-js/tree/v3.8.0/snippets/module-addpath.tsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.8.0&snippet=module-addpath.tsx" style="color: cadetblue;">► Run in Playground</a>]</span>

### addPath(pattern, paths)



Maps imports matching the given patterns to the associated paths. Short for `addPath({baseUrl: '/', paths: {[pattern]: paths});


Parameter|Type|Description
-|-|-
pattern | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | That import pattern to match.
paths | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>[]</code> | The module paths to look up for the given pattern


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

See also:
  
[<span class='language tsx'>TSX</span> module-addpath.tsx](https://github.com/eclipsesource/tabris-js/tree/v3.8.0/snippets/module-addpath.tsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.8.0&snippet=module-addpath.tsx" style="color: cadetblue;">► Run in Playground</a>]</span>

### createLoader(url)



Loads the given JavaScript file from the given (local or http) url and wraps it as a module loader function.


Parameter|Type|Description
-|-|-
url | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | 


Returns: <code style="white-space: nowrap">ModuleLoader</code>

### createRequire(path)



Creates a "require" function that finds a module relative to the given path. If found the exports are returned. Throws if no matching module can be found.


Parameter|Type|Description
-|-|-
path | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | An absolute path, beginning with "/". The path does not have to point to an existing file.


Returns: <code style="white-space: nowrap">(<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">request</a>) => <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">exports</a></code>

### define(path, exports)



Defines a module at the given path. It will be available for import as though there was a file at that location. Can also be used to override an actual module if it was not imported yet.


Parameter|Type|Description
-|-|-
path | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | The path of the new module. Must start with a `/`, which is the directory of the project's `package.json`. Keep in mind that the source directory may not be the same at runtime if the code is pre-processed.
exports | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code> | The exports of the new module. This can be any type, though typically it is an object.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

See also:
  
[<span class='language tsx'>TSX</span> module-define.tsx](https://github.com/eclipsesource/tabris-js/tree/v3.8.0/snippets/module-define.tsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.8.0&snippet=module-define.tsx" style="color: cadetblue;">► Run in Playground</a>]</span>

### execute(code, url)



Evaluates the given JavaScript code and returns the result of the last expression. The url is used to identify the source in stack traces.


Parameter|Type|Description
-|-|-
code | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | 
url | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | 


Returns: <code style="white-space: nowrap">unknown</code>

### getSourceMap(url)



Returns the source map object (decoded from base64 and parsed from JSON) for the JavaScript file of the given url. Returns `null` if no source map can be found. This method only works with code side-loaded via the tabris CLI `serve` command.


Parameter|Type|Description
-|-|-
url | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | 


Returns: <code style="white-space: nowrap">unknown</code>

### load(url)



Loads a text from the given (local or http) url and returns its content. File is expected to be utf-8 encoded. This is a blocking operation, in almost all cases it is preferable to use `fetch()` or the file system API to read a text file.


Parameter|Type|Description
-|-|-
url | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code>

### readJSON(url)



Loads the JSON file from the given (local or http) url, parses it and returns the result. This is a blocking operation, in almost all cases it is preferable to use `fetch()` or the file system API to obtain and parse a JSON file.


Parameter|Type|Description
-|-|-
url | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | 


Returns: <code style="white-space: nowrap">unknown</code>


## Properties

### exports



Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### id


Full id (path) of the module

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### parent


The module that first required this module

Type: |<code style="white-space: nowrap"><a href="#" >Module</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.




