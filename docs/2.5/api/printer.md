---
---
# printer

Extends [NativeObject](NativeObject.md)

Allows to print PDF documents or images from the device. A printer object is always available from tabris.printer.

Import this object with "`const {printer} = require('tabris');`"

## Methods

### print(data, options)
<p class="platforms"><span class="ios-tag" title="supported on iOS">iOS</span><span class="android-tag" title="supported on Android">Android</span></p>

**Parameters:** 

- data: *any*
  - the bytes of the document to print. The value can either be an ArrayBuffer or a typed array containing the bytes of a PDF document or image.
- options: *{jobName?: string, contentType?: string}* [**Optional**]
  - an optional set of configuration parameters. Setting the `jobName` allows to provide the document name shown the user. The `contentType` is required when printing a specific document format. By default `application/pdf` is used but it needs to be changed to `image/*` when printing an image

**Returns:** *Promise<any>*

Prints a PDF document using the native printing capabilities of the device. The data has to be provided as an `ArrayBuffer` or typed array. The method returns a promise which resolves to an event object with the property `result`. The `result` can either be `completed` or `canceled`. When printing fails the promise is rejected with an `Error` parameter containing additional information about the error. Supported on iOS and Android 4.4+.


## Example
```js
const {Button, printer, ui, app} = require('tabris');

// Print a bundled PDF

new Button({
  left: 16, right: 16, top: 16,
  text: 'Print PDF'
}).on('select', () => print('resources/example.pdf', 'application/pdf', 'Example PDF'))
  .appendTo(ui.contentView);

new Button({
  left: 16, right: 16, top: 'prev() 16',
  text: 'Print Image'
}).on('select', () => print('resources/salad.jpg', 'image/jpg', 'Salad image'))
  .appendTo(ui.contentView);

function print(file, contentType, jobName) {
  fetch(app.getResourceLocation(file))
    .then(res => res.arrayBuffer())
    .then(data => printer.print(data, {jobName: jobName, contentType: contentType}))
    .then(event => console.log('Printing finished', event))
    .catch(err => console.error(err));
}
```
## See also

- [Snippet showing how to print a PDF document bundled in the app](https://github.com/eclipsesource/tabris-js/tree/v2.5.0/snippets/printer.js)
