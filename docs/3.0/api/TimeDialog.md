---
---
# Class "TimeDialog"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Popup`](Popup.md)</span> > <span style="white-space:nowrap;">[`TimeDialog`](TimeDialog.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\TimeDialog.png 2x" src="img\android\TimeDialog.png" alt="TimeDialog on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\TimeDialog.png 2x" src="img\ios\TimeDialog.png" alt="TimeDialog on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<TimeDialog/>`
  * Child elements: *None*
  * Text content: *Not supported*
* Direct subclasses: *None*
--------
A `TimeDialog` represents a native dialog pop-up allowing the user to pick a time of day. Properties can only be set before open() is called. The dialog is automatically disposed when closed.


Example:
```js
import {TimeDialog, TextView, Button, contentView} from 'tabris';

new Button({
  left: 16, right: 16, top: 16,
  text: 'Show TimeDialog'
}).on({select: showTimeDialog})
  .appendTo(contentView);

const selectionTextView = new TextView({
  left: 16, right: 16, top: ['prev()', 16],
  alignment: 'center'
}).appendTo(contentView);

function showTimeDialog() {
  return new TimeDialog({
    date: new Date()
  }).on({
    select: ({date}) => selectionTextView.text = date.toString(),
    close: () => console.log('TimeDialog closed')
  }).open();
}
```
See also:

- [Simple TimeDialog snippet](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/timedialog.js)

## Constructor

### new TimeDialog(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof TimeDialog>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### date


* Type: <span style="white-space:nowrap;">`Date`</span>
* Settable: *Yes*



The time to be displayed in the dialog. The current date is used when no date is provided.


## Events

### close

Parameter|Type|Description
-|-|-
date | <span style="white-space:nowrap;">`Date` \| [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)</span> | The selected time. Can be `null` when no date was selected.

Fired when the time dialog was closed.

### select

Parameter|Type|Description
-|-|-
date | <span style="white-space:nowrap;">`Date`</span> | The selected time. Only the time components reflect the users selection. The date component values are undefined.

Fired when a time was selected by the user.

## Change Events

### dateChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`Date`</span> | The new value of [*date*](#date).

Fired when the [*date*](#date) property has changed.

