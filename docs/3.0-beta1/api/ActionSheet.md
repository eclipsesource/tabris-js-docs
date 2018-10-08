---
---
# Type "ActionSheet"

Extends [Popup](Popup.md)

A pop up dialog that offers a selection. Is automatically disposed when closed.

You can import this type like this:
```js
import {ActionSheet} from 'tabris';
```
Or reference it directly form anywhere as "`tabris.ActionSheet`".
## Properties

### actions


Type: *{title: string, image?: Image, style?: 'default'\|'cancel'\|'destructive'}[]*

An array of objects describing the actions to be displayed. Each action must have a title and it can also have an image. Actions with the style `cancel` or `destructive` are displayed in a special way.

In JSX the child elements of the *ActionSheet* element are mapped to this property. Therefore `<ActionSheet>{actions}</ActionSheet>` would be the same as `<ActionSheet actions={actions} />`. You can also import `ActionSheetItem` from the `tabris` module and use it as an JSX element to represent actions.

### message


Type: *string*

A descriptive message for the available actions.

In JSX the text content of the *ActionSheet* element is mapped to this property. Therefore `<ActionSheet>Hello World</ActionSheet>` would be the same as `<ActionSheet message='Hello World' />`.

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




