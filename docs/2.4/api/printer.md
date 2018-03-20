---
---
# printer

Extends [NativeObject](NativeObject.md)

Allows to print PDF documents from the device. A printer object is always available from tabris.printer.

Import this object with "`const {printer} = require('tabris');`"

## Methods

### print(data, options)
<p class="platforms"><span class="ios-tag" title="supported on iOS">iOS</span><span class="android-tag" title="supported on Android">Android</span></p>

**Parameters:** 

- data: *any*
  - the bytes of the document to print. The value can either be an ArrayBuffer or a typed array.
- options: *{jobName?: string}* [**Optional**]
  - an optional set of configuration parameters. Setting the `jobName` allows to provide the document name shown the user.

**Returns:** *Promise<any>*

Prints a PDF document using the native printing capabilities of the device. The data has to be provided as an `ArrayBuffer` or typed array. The method returns a promise which resolves to an event object with the property `result`. The `result` can either be `completed` or `canceled`. When printing fails the promise is rejected with an `Error` parameter containing additional information about the error. Supported on iOS and Android 4.4+.


## Example
```js
const {Button, printer, ui, app} = require('tabris');

// Print a bundled PDF

new Button({
  left: 16, right: 16, top: 16,
  text: 'Print PDF'
}).on('select', () => {
  fetch(app.getResourceLocation('resources/example.pdf'))
    .then(res => res.arrayBuffer())
    .then(data => printer.print(data, {jobName: 'tabris print example'}))
    .then(event => console.log('Printing finished', event))
    .catch(err => console.error(err));
}).appendTo(ui.contentView);
```
## See also

- [Snippet showing how to print a PDF document bundled in the app](https://github.com/eclipsesource/tabris-js/tree/v2.4.1/snippets/printer.js)
