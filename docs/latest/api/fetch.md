---
---
# fetch

The Fetch function can be used to make HTTP request and to read resources that are part of the application.

When a relative URL is given, Tabris.js will interpret it as a path relative to the application's main `package.json`. This allows you to read static resources, i.e. the files residing in your project folder and not excluded via [`.tabrisignore`](../build.md#the-tabrisignore-file). You can also use URLs relative to the current [module](../modules.md) by using the `__dirname` variable, e.g. `fetch(__dirname + "/foo.txt");`.

> :point_right: To enable access to SSL protected resources that use self signed certificates add them to [`app.trustedCertificates`](./app.md). Alternatively you can disable the `UseStrictSSL` preference in the config.xml to accept all certificates. See [Building a Tabris.js App](../build.md#preferences).


See also:
  
[Class `Request`](./Request.md)  
[Class `Response`](./Response.md)  
[Class `Headers`](./Headers.md)  
[<span class='language jsx'>JSX</span> fetch.jsx](https://github.com/eclipsesource/tabris-js/tree/v3.10.0/snippets/fetch.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.10.0&snippet=fetch.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>

## Methods

### fetch(url, init?)




Parameter|Type|Description
-|-|-
url | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a> &#124; <a href="Request.html" title="Request Class Reference">Request</a></code> | 
init | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">object</a></code> | *Optional.*
init.body | <code style="white-space: nowrap"><a href="Blob.html" title="Blob Class Reference">Blob</a><br/>&#124; <a href="FormData.html" title="FormData Class Reference">FormData</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | The body of the request. GET or HEAD requests can not have a body. *Optional.*
init.cache | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | *Optional.*
init.credentials | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | *Optional.*
init.headers | <code style="white-space: nowrap"><a href="Headers.html" title="Headers Class Reference">Headers</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="View &quot;Array&quot; on MDN">Array</a>&lt;[<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>]&gt;<br/>&#124; {[header]: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>}</code> | The headers to add to the request. *Optional.*
init.method | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | The request method, e.g., `'GET'`, `'POST'`. *Optional.*
init.mode | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | *Optional.*
init.timeout | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The network request timeout in milliseconds *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="Response.html" title="Response Class Reference">Response</a>&gt;</code>


