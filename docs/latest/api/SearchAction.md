# SearchAction

An action that displays a search text field with dynamic proposals when selected. Add a listener on *select* to implement the action. On *input*, you may set a list of *proposals*.

Android | iOS
--- | ---
![SearchAction on Android](img/android/SearchAction.png) | ![SearchAction on iOS](img/ios/SearchAction.png)

Extends [Action](Action.md)

## Methods

### open()

Invokes the search action, i.e. displays the UI to perform a search.


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

### accept
Fired when a text input has been submitted by pressing the keyboard's search key.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **text**: *string*
    The current value of *[text](#text)*.




### input
Fired when the user inputs text.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **text**: *string*
    The new value of *[text](#text)*.





## See also

- [Search action snippet](https://github.com/eclipsesource/tabris-js/tree/v2.0.0-beta2/snippets/navigationview-searchaction.js)
