---
---
# Class "DateDialog"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Popup`](Popup.md)</span> > <span style="white-space:nowrap;">[`DateDialog`](DateDialog.md)</span>

A `DateDialog` represents a native dialog pop-up allowing the user to pick a date. Properties can only be set before open() is called. The dialog is automatically disposed when closed.


<div class="tabris-image"><figure><div><img srcset="img/android/DateDialog.png 2x" src="img/android/DateDialog.png" alt="DateDialog on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/DateDialog.png 2x" src="img/ios/DateDialog.png" alt="DateDialog on iOS"/></div><figcaption>iOS</figcaption></figure></div>

Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | Element: `<DateDialog/>`<br/>Child elements: *None*<br/>Text content: *Not supported*<br/>

## Example
```js
import {DateDialog} from 'tabris';

new DateDialog()
  .onSelect(({date}) => console.log(`Selected ${date}`))
  .open();
```

See also:
  
[<span class='language jsx'>JSX</span> Creating a simple `DateDialog`](https://playground.tabris.com/?gitref=v3.1.0&snippet=datedialog.jsx)

## Constructor

### new DateDialog(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties&lt;DateDialog&gt;`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Static Methods

### open(dateDialog)



Makes the given date dialog visible. Meant to be used with inline-JSX. In TypeScript it also casts the given JSX element from `any` to an actual DateDialog.


Parameter|Type|Optional|Description
-|-|-|-
dateDialog | <span style="white-space:nowrap;">[`DateDialog`](DateDialog.md)</span> | No | The date dialog to open


Returns <span style="white-space:nowrap;">[`DateDialog`](DateDialog.md)</span>

### open(date?)



Creates and opens a date dialog.


Parameter|Type|Optional|Description
-|-|-|-
date | <span style="white-space:nowrap;">`Date`</span> | Yes | The date to be displayed in the dialog. The current date is used when no date is provided.


Returns <span style="white-space:nowrap;">[`DateDialog`](DateDialog.md)</span>


## Properties

### date


The date to be displayed in the dialog. The current date is used when no date is provided.

Type | <span style="white-space:nowrap;">`Date`</span>
Settable | *Yes*
Change events | *Yes*




### maxDate


Limits the selectable date range to the given future date. No limit is applied when not set.

Type | <span style="white-space:nowrap;">`Date`</span>
Settable | *Yes*
Change events | *Yes*




### minDate


Limits the selectable date range to the given past date. No limit is applied when not set.

Type | <span style="white-space:nowrap;">`Date`</span>
Settable | *Yes*
Change events | *Yes*





## Events

### close

Fired when the date dialog was closed.

Parameter|Type|Description
-|-|-
date | <span style="white-space:nowrap;">`Date` \| [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)</span> | The selected date. Can be `null` when no date was selected.

### select

Fired when a date was selected by the user.

Parameter|Type|Description
-|-|-
date | <span style="white-space:nowrap;">`Date`</span> | The selected date. Only the date components reflect the users selection. The time component values are undefined.

## Change Events

### dateChanged

Fired when the [*date*](#date) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`Date`</span> | The new value of [*date*](#date).

### minDateChanged

Fired when the [*minDate*](#mindate) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`Date`</span> | The new value of [*minDate*](#mindate).

### maxDateChanged

Fired when the [*maxDate*](#maxdate) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`Date`</span> | The new value of [*maxDate*](#maxdate).

