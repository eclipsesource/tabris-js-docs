---
---
# Class "AlertDialog"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Popup`](Popup.md)</span> > <span style="white-space:nowrap;">[`AlertDialog`](AlertDialog.md)</span>

An `AlertDialog` represents a native dialog pop-up showing a message and up to three buttons.  Is automatically disposed when closed.


<div class="tabris-image"><figure><div><img srcset="img/android/AlertDialog.png 2x" src="img/android/AlertDialog.png" alt="AlertDialog on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/AlertDialog.png 2x" src="img/ios/AlertDialog.png" alt="AlertDialog on iOS"/></div><figcaption>iOS</figcaption></figure></div>

Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | Element: `<AlertDialog/>`<br/>Child elements: *None*<br/>Text content: *Sets [message](#message) property*<br/>

## Example
```js
import {AlertDialog} from 'tabris';

new AlertDialog({
  title: 'Document saved',
  buttons: {ok: 'OK'}
}).open();
```

See also:
  
[<span class='language jsx'>JSX</span> Creating various types of alert dialogs](https://playground.tabris.com/?gitref=v3.0.0&snippet=alertdialog.jsx)

## Constructor

### new AlertDialog(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<AlertDialog>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Static Methods

### open(alertDialog)



Makes the given alert dialog visible. Meant to be used with inline-JSX. In TypeScript it also casts the given JSX element from `any` to an actual AlertDialog.


Parameter|Type|Optional|Description
-|-|-|-
alertDialog | <span style="white-space:nowrap;">[`AlertDialog`](AlertDialog.md)</span> | No | The alert dialog to open


Returns <span style="white-space:nowrap;">[`AlertDialog`](AlertDialog.md)</span>

### open(message)



Creates and opens an alert dialog with one 'OK' button and the given message.


Parameter|Type|Optional|Description
-|-|-|-
message | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The message to display


Returns <span style="white-space:nowrap;">[`AlertDialog`](AlertDialog.md)</span>


## Properties

### buttons


An object with the texts of the buttons to display. There are up to three buttons: `ok`, `cancel` and `neutral`. If no text is given for a button it will not be displayed. Example: `{ok: 'Yes', cancel: 'No'}` shows 'Yes' and 'No', but no 'neutral' button.

Type | <span style="white-space:nowrap;">`{ok?: string, cancel?: string, neutral?: string}`</span>
Settable | *Yes*
Change events | *Yes*




### message


The message to display inside the dialog.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *Yes*
Change events | *Yes*
JSX content type | `string`




When using AlertDialog as an JSX element the element content is mapped to this property. Therefore
```jsx
<AlertDialog>Hello World</AlertDialog>
```
 has the same effect as:
```jsx
<AlertDialog message='Hello World' />
```


### textInputs


A composite that may contain `TextInput` widgets to be displayed alongside the `title` and `message`. The text values inserted by the user can be read in the dialogs `close` event via its `texts` property. Eg.: `dialog.on('close', (e) => e.texts[0])`

In an AlertDialog JSX element the TextInput widgets may be given as child elements.

Type | <span style="white-space:nowrap;">[`ContentView`](ContentView.md)</span>
Default | `ContentView`
Settable | *No*
Change events | *No*




This property can only be set via constructor or JSX. Once set, it cannot change anymore.

### title


The title of the dialog.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *Yes*
Change events | *Yes*





## Events

### close

Fired when the dialog was closed for any reason.

Parameter|Type|Description
-|-|-
button | <span style="white-space:nowrap;">`'ok'` \| `'cancel'` \| `'neutral'` \| [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)</span> | The type of button that was used to close the dialog. Can also be null, e.g. when the global back button was pressed.
texts | <span style="white-space:nowrap;">[`string[]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | An array containing the corresponding `text` values of all `textInputs` elements.

### closeOk

Fired when the dialog was closed by pressing the 'ok' button.

### closeCancel

Fired when the dialog was closed by pressing the 'cancel' button.

### closeNeutral

Fired when the dialog was closed by pressing the 'neutral' button.

## Change Events

### titleChanged

Fired when the [*title*](#title) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*title*](#title).

### messageChanged

Fired when the [*message*](#message) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*message*](#message).

### buttonsChanged

Fired when the [*buttons*](#buttons) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`{ok?: string, cancel?: string, neutral?: string}`</span> | The new value of [*buttons*](#buttons).

