---
---
# Object "sizeMeasurement"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a> > <a href="#" >SizeMeasurement</a>

Allows to measure Text.


Type: | <code style="white-space: nowrap">SizeMeasurement extends <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a></code>
Constructor: | private
Singleton: | `sizeMeasurement`
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No



See also:
  
[<span class='language jsx'>JSX</span> How to measure text with various parameters](https://github.com/eclipsesource/tabris-js/tree/v3.10.0/snippets/sizemeasurement.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.10.0&snippet=sizemeasurement.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>

## Methods

### measureTexts(configs)



**Note:** this API is provisional and may change in a future release.

Measures the given text. The method returns a `Promise` which resolves to an array of `{width: number, height: number}`.


Parameter|Type|Description
-|-|-
configs | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="View &quot;Array&quot; on MDN">Array</a>&lt;{text: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>, font: <a href="Font.html#fontvalue" title="Font Class Type">FontValue</a>, maxWidth: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, markupEnabled: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a>}&gt;</code> | The text configurations to measure. A text configuration has to provide at least a `text` and `fontSize` property.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;{width: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, height: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}&gt;</code>

### measureTextsSync(configs)



**Note:** this API is provisional and may change in a future release.

Measures the given text. The method returns an array of `{width: number, height: number}`.


Parameter|Type|Description
-|-|-
configs | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="View &quot;Array&quot; on MDN">Array</a>&lt;{text: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>, font: <a href="Font.html#fontvalue" title="Font Class Type">FontValue</a>, maxWidth: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, markupEnabled: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a>}&gt;</code> | The text configurations to measure. A text configuration has to provide at least a `text` and `fontSize` property.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="View &quot;Array&quot; on MDN">Array</a>&lt;{width: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, height: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>}&gt;</code>


