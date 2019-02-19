---
---
# Class "DateDialog"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Popup`](Popup.md)</span> > <span style="white-space:nowrap;">[`DateDialog`](DateDialog.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\DateDialog.png 2x" src="img\android\DateDialog.png" alt="DateDialog on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\DateDialog.png 2x" src="img\ios\DateDialog.png" alt="DateDialog on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<DateDialog/>`
  * Child elements: *None*
  * Text content: *Not supported*
* Direct subclasses: *None*
--------
A `DateDialog` represents a native dialog pop-up allowing the user to pick a date. Properties can only be set before open() is called. The dialog is automatically disposed when closed.


Example:
```js
import {DateDialog, TextView, Button, contentView} from 'tabris';

const FIVE_DAYS = 432000000;

new Button({
  left: 16, right: 16, top: 16,
  text: 'Show DateDialog'
}).on({select: showDateDialog})
  .appendTo(contentView);

const selectionTextView = new TextView({
  left: 16, right: 16, top: ['prev()', 16],
  alignment: 'center'
}).appendTo(contentView);

function showDateDialog() {
  const date = new Date();
  new DateDialog({
    date,
    minDate: new Date(date.getTime() - FIVE_DAYS),
    maxDate: new Date(date.getTime() + FIVE_DAYS)
  }).on({
    select: ev => selectionTextView.text = ev.date,
    close: () => console.log('DateDialog closed')
  }).open();
}
```
See also:

- [Simple DateDialog snippet](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/datedialog.js)

## Constructor

### new DateDialog(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof DateDialog>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### date


* Type: <span style="white-space:nowrap;">`Date`</span>
* Settable: *Yes*



The date to be displayed in the dialog. The current date is used when no date is provided.

### maxDate


* Type: <span style="white-space:nowrap;">`Date`</span>
* Settable: *Yes*



Limits the selectable date range to the given future date. No limit is applied when not set.

### minDate


* Type: <span style="white-space:nowrap;">`Date`</span>
* Settable: *Yes*



Limits the selectable date range to the given past date. No limit is applied when not set.


## Events

### close

Parameter|Type|Description
-|-|-
date | <span style="white-space:nowrap;">`Date` \| [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)</span> | The selected date. Can be `null` when no date was selected.

Fired when the date dialog was closed.

### select

Parameter|Type|Description
-|-|-
date | <span style="white-space:nowrap;">`Date`</span> | The selected date. Only the date components reflect the users selection. The time component values are undefined.

Fired when a date was selected by the user.

## Change Events

### dateChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`Date`</span> | The new value of [*date*](#date).

Fired when the [*date*](#date) property has changed.

### minDateChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`Date`</span> | The new value of [*minDate*](#minDate).

Fired when the [*minDate*](#minDate) property has changed.

### maxDateChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`Date`</span> | The new value of [*maxDate*](#maxDate).

Fired when the [*maxDate*](#maxDate) property has changed.

