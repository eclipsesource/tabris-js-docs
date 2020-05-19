---
---
# Object "printer"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a> > <a href="#" >Printer</a>

Allows to print PDF documents or images from the device. A printer object is always available from tabris.printer.


<div class="tabris-image"><figure><div><img srcset="img/android/printer.png 2x" src="img/android/printer.png" alt="Printer on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/printer.png 2x" src="img/ios/printer.png" alt="Printer on iOS"/></div><figcaption>iOS</figcaption></figure></div>

Type: | <code style="white-space: nowrap">Printer extends <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a></code>
Constructor: | private
Singleton: | `printer`
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


## Examples
### JavaScript


```js
import {printer} from 'tabris';

const imageData = new Uint8Array([]);
printer.print(imageData, {jobName: 'Image', contentType: 'image/jpg'})
  .then(({result}) => console.log(`Printing finished with result ${result}`))
  .catch(err => console.error(err));
```


See also:
  
[<span class='language js'>JS</span> How to print a PDF document bundled with an app](https://playground.tabris.com/?gitref=v3.5.0&snippet=printer.js)

## Methods

### print(data, options?)



Prints a PDF document using the native printing capabilities of the device. The data has to be provided as an `ArrayBuffer` or typed array. The method returns a promise which resolves to an event object with the property `result`. The `result` can either be `completed` or `canceled`. When printing fails the promise is rejected with an `Error` parameter containing additional information about the error. Supported on iOS and Android 4.4+.


Parameter|Type|Description
-|-|-
data | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code> | The bytes of the document to print. The value can either be an ArrayBuffer or a typed array containing the bytes of a PDF document or image.
options | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;jobName: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a>, // The document name shown the user. optional<br/>&nbsp;&nbsp;contentType: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a> // Format of the document. Should be set to `image/*` when printing an image. defaults to application/pdf<br/>}</code> | An optional set of configuration parameters. *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a></code>

