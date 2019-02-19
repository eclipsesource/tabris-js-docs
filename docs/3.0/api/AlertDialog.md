---
---
# Class "AlertDialog"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Popup`](Popup.md)</span> > <span style="white-space:nowrap;">[`AlertDialog`](AlertDialog.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\AlertDialog.png 2x" src="img\android\AlertDialog.png" alt="AlertDialog on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\AlertDialog.png 2x" src="img\ios\AlertDialog.png" alt="AlertDialog on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<AlertDialog/>`
  * Child elements: [`<TextInput/>`](#textInputs)
  * Text content: *Sets [message](#message) property*
* Direct subclasses: *None*
--------
An `AlertDialog` represents a native dialog pop-up showing a message and up to three buttons.  Is automatically disposed when closed.


See also:

- [AlertDialog snippet](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/alertdialog.js)

## Constructor

### new AlertDialog(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof AlertDialog>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Static Methods

### open(alertDialog)



Parameter|Type|Optional|Description
-|-|-|-
alertDialog | <span style="white-space:nowrap;">[`AlertDialog`](AlertDialog.md)</span> | No | The alert dialog to open
* Returns: <span style="white-space:nowrap;">[`AlertDialog`](AlertDialog.md)</span>

Makes the given alert dialog visible. Meant to be used with inline-JSX. In TypeScript it also casts the given JSX element from `any` to an actual AlertDialog.

### open(message)



Parameter|Type|Optional|Description
-|-|-|-
message | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The message to display
* Returns: <span style="white-space:nowrap;">[`AlertDialog`](AlertDialog.md)</span>

Creates and opens an alert dialog with one 'OK' button and the given message.


## Properties

### buttons


* Type: <span style="white-space:nowrap;">`{ok?: string, cancel?: string, neutral?: string}`</span>
* Settable: *Yes*



An object with the texts of the buttons to display. There are up to three buttons: `ok`, `cancel` and `neutral`. If no text is given for a button it will not be displayed. Example: `{ok: 'Yes', cancel: 'No'}` shows 'Yes' and 'No', but no 'neutral' button.

### message


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *Yes*
* JSX Content Type: `string`



The message to display inside the dialog.

When using AlertDialog as an JSX element the element content is mapped to this property. Therefore
```jsx
<AlertDialog>Hello World</AlertDialog>
```
 has the same effect as:
```jsx
<AlertDialog message='Hello World' />
```


### textInputs


* Type: <span style="white-space:nowrap;">`TextInput[]`</span>
* Settable: *Yes*
* JSX Content Type: `TextInput`



A list of `TextInput` widgets to be displayed alongside the `title` and `message`. The text values inserted by the user can be read in the dialogs `close` event from the respective `TextInputs`. Eg.: `dialog.on('close', (e) => e.target.textInputs[0].text)`

When using AlertDialog as an JSX element its child elements are mapped to this property. Therefore
```jsx
<AlertDialog>{textInputs}</AlertDialog>
```
 has the same effect as:
```jsx
<AlertDialog textInputs={textInputs} /> 
```
The `TextInput` element needs to be imported from the `tabris` module separately and has the same attributes as the property type.

### title


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *Yes*



The title of the dialog.


## Events

### close

Parameter|Type|Description
-|-|-
button | <span style="white-space:nowrap;">`'ok'` \| `'cancel'` \| `'neutral'` \| [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)</span> | The type of button that was used to close the dialog. Can also be null, e.g. when the global back button was pressed.
texts | <span style="white-space:nowrap;">[`string[]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | An array containing the corresponding `text` values of all `textInputs` elements.

Fired when the dialog was closed for any reason.

### closeOk

Fired when the dialog was closed by pressing the 'ok' button.

### closeCancel

Fired when the dialog was closed by pressing the 'cancel' button.

### closeNeutral

Fired when the dialog was closed by pressing the 'neutral' button.

## Change Events

### titleChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*title*](#title).

Fired when the [*title*](#title) property has changed.

### messageChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*message*](#message).

Fired when the [*message*](#message) property has changed.

### textInputsChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`TextInput[]`</span> | The new value of [*textInputs*](#textInputs).

Fired when the [*textInputs*](#textInputs) property has changed.

### buttonsChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`{ok?: string, cancel?: string, neutral?: string}`</span> | The new value of [*buttons*](#buttons).

Fired when the [*buttons*](#buttons) property has changed.

