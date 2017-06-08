---
---
# AlertDialog

An `AlertDialog` represents a native dialog pop-up showing a message and up to three buttons. It is placed on top of any other API, but is not a widget itself.

Extends [NativeObject](NativeObject.md)

## Methods

### close()

**Returns:** *this*

Hides the dialog permanently. It can not be made visible anymore.

### open()

**Returns:** *this*

Makes the dialog visible.


## Properties

### buttons

Type: *{ok?: string, cancel?: string, neutral?: string}*

An object with the texts of the buttons to display. There are up to three buttons: `ok`, `cancel` and `neutral`. If no text is given for a button it will not be displayed. Example: `{ok: 'Yes', cancel: 'No'}` shows 'Yes' and 'No', but no 'neutral' button.

### message

Type: *string*

The message to display inside the dialog.

### title

Type: *string*

The title of the dialog.


## Events

### change:buttons

Fired when the [*buttons*](#buttons) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *{ok?: string, cancel?: string, neutral?: string}*
    The new value of [*buttons*](#buttons).


### change:message

Fired when the [*message*](#message) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*message*](#message).


### change:title

Fired when the [*title*](#title) property changes.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*title*](#title).


### close

Fired when the dialog was closed for any reason.

#### Event Parameters 

- **target**: *this*
    The widget the event was fired on.

- **button**: *'ok'|'cancel'|'neutral'|''*
    The type of button that was used to close the dialog. Can also be an empty string, e.g. when the global back button was pressed.


### closeCancel

Fired when the dialog was closed by pressing the 'cancel' button.
### closeNeutral

Fired when the dialog was closed by pressing the 'neutral' button.
### closeOk

Fired when the dialog was closed by pressing the 'ok' button.



## Example

```js
const {AlertDialog, Button, ui} = require('tabris');

// AlertDialog example

new Button({
  left: 16, top: 'prev() 16', right: 16,
  text: 'Show simple dialog'
}).on('select', () => {
  new AlertDialog({
    message: 'Your comment has been saved.',
    buttons: {ok: 'Acknowledge'}
  }).open();
}).appendTo(ui.contentView);

new Button({
  left: 16, top: 'prev() 16', right: 16,
  text: 'Show full featured dialog'
}).on('select', () => {
  new AlertDialog({
    title: 'Conflict while saving',
    message: 'How do you want to resolve the conflict?',
    buttons: {
      ok: 'Replace',
      cancel: 'Discard',
      neutral: 'Keep editing'
    }
  }).on({
    closeOk: () => console.log('Replace'),
    closeNeutral: () => console.log('Keep editing'),
    closeCancel: () => console.log('Discard'),
    close: ({button}) => console.log('Dialog closed: ' + button)
  }).open();
}).appendTo(ui.contentView);

new Button({
  left: 16, top: 'prev() 16', right: 16,
  text: 'Show self closing dialog'
}).on('select', () => {
  let alertDialog = new AlertDialog({
    message: 'This dialogs closes in 3 seconds.',
    buttons: {ok: 'OK'}
  }).open();
  setTimeout(() => alertDialog.close(), 3000);
}).appendTo(ui.contentView);
```
## See also

- [Simple AlertDialog snippet](https://github.com/eclipsesource/tabris-js/tree/v2.0.0-rc2/snippets/alertdialog.js)
