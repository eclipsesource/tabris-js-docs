---
---
# ActionSheet

Extends [Popup](Popup.md)

A pop up dialog that offers a selection. Is automatically disposed when closed.

Import this type with "`const {ActionSheet} = require('tabris');`"

## Properties

### actions


Type: *{title: string, image?: Image, style?: 'default'\|'cancel'\|'destructive'}[]*

An array of objects describing the actions to be displayed. Each action must have a title and it can also have an image. Actions with the style `cancel` or `destructive` are displayed in a special way.

### message


Type: *string*

A descriptive message for the available actions.

### title


Type: *string*

The title of the action sheet.


## Events

### actionsChanged

Fired when the [*actions*](#actions) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *{title: string, image?: Image, style?: 'default'\|'cancel'\|'destructive'}[]*
    The new value of [*actions*](#actions).


### close

Fired when the action sheet was closed.
### messageChanged

Fired when the [*message*](#message) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*message*](#message).


### select

Fired when an action was selected.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **index**: *number*
    The index of the selected action.


### titleChanged

Fired when the [*title*](#title) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*title*](#title).





## Example
```js
const {ActionSheet, TextView, Button, ui} = require('tabris');

new Button({
  left: 16, right: 16, top: 16,
  text: 'Show ActionSheet'
}).on({select: showActionSheet})
  .appendTo(ui.contentView);

let selectionTextView = new TextView({
  left: 16, right: 16, top: ['prev()', 16],
  alignment: 'center'
}).appendTo(ui.contentView);

function showActionSheet() {
  new ActionSheet({
    title: 'Actions',
    message: 'Select any of the actions below to proceed.',
    actions: [
      {title: 'Search', image: {src: 'images/search-black-24dp@3x.png', scale: 3}},
      {title: 'Share', image: {src: 'images/share-black-24dp@3x.png', scale: 3}},
      {title: 'Settings', image: {src: 'images/settings-black-24dp@3x.png', scale: 3}},
      {title: 'Delete', image: {src: 'images/delete-black-24dp@3x.png', scale: 3}, style: 'destructive'},
      {title: 'Cancel', image: {src: 'images/close-black-24dp@3x.png', scale: 3}, style: 'cancel'},
    ]
  }).on({
    select: ({target: actionSheet, index}) => selectionTextView.text = `"${actionSheet.actions[index].title}" selected`,
    close: () => console.log('ActionSheet closed')
  }).open();
}
```