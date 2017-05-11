---
---
# SearchAction
An action that displays a search text field with dynamic proposals when selected. Add a listener on *select* to implement the action. On *input*, you may set a list of *proposals*.
Includes [Action](Action.md)

## Methods
### open()


**Parameters:** 



Invokes the search action, i.e. displays the ui to perform a search.


## Properties
### message
Type: *string*

A hint text that is displayed when the search input is empty.
### proposals
Type: *string[]*, default: `[]`

The list of proposals to display.
### text
Type: *string*

The text in the search input field.

## Events
### "accept" (widget, text, options)

**Parameters:** 

- widget: *[SearchAction](SearchAction.md)*
- text: *string*, the current value of *[text](#text)*.
- options: *Object*

Fired when a text input has been submitted by pressing the keyboard's search key.

### "input" (widget, text, options)

**Parameters:** 

- widget: *[SearchAction](SearchAction.md)*
- text: *string*, the new value of *[text](#text)*.
- options: *Object*

Fired the user inputs text.


## See also
- [Search action snippet](https://github.com/eclipsesource/tabris-js/blob/master/snippets/action-search/search-action.js)
