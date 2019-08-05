---
---
# Object "printer"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Printer`](printer.md)</span>

Allows to print PDF documents or images from the device. A printer object is always available from tabris.printer.


<div class="tabris-image"><figure><div><img srcset="img/android/printer.png 2x" src="img/android/printer.png" alt="Printer on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/printer.png 2x" src="img/ios/printer.png" alt="Printer on iOS"/></div><figcaption>iOS</figcaption></figure></div>

Constructor | *private*
Singleton | `printer`
Namespace |`tabris`
Direct subclasses | *None*
JSX support | *No*


## Example
```js
import {printer} from 'tabris';

const imageData = new Uint8Array([]);
printer.print(imageData, {jobName: 'Image', contentType: 'image/jpg'})
  .then(({result}) => console.log('Printing finished with result ${result}'))
  .catch(err => console.error(err));
```

See also:
  
[<span class='language js'>JS</span> How to print a PDF document bundled with an app](https://playground.tabris.com/?gitref=v3.1.0&snippet=printer.js)

## Methods

### print(data, options?)



Prints a PDF document using the native printing capabilities of the device. The data has to be provided as an `ArrayBuffer` or typed array. The method returns a promise which resolves to an event object with the property `result`. The `result` can either be `completed` or `canceled`. When printing fails the promise is rejected with an `Error` parameter containing additional information about the error. Supported on iOS and Android 4.4+.


Parameter|Type|Optional|Description
-|-|-|-
data | <span style="white-space:nowrap;">[`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)</span> | No | The bytes of the document to print. The value can either be an ArrayBuffer or a typed array containing the bytes of a PDF document or image.
options | <span style="white-space:nowrap;">`{jobName?: string, contentType?: string}`</span> | Yes | An optional set of configuration parameters. Setting the `jobName` allows to provide the document name shown the user. The `contentType` is required when printing a specific document format. By default `application/pdf` is used but it needs to be changed to `image/*` when printing an image


Returns <span style="white-space:nowrap;">`Promise&lt;any&gt;`</span>

