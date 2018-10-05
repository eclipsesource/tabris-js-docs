---
---
# Global object "console"

The console object provides access to the debugging console

This object can be used anywhere without importing it.
## Methods

### assert(expression, ...objects)


**Parameters:** 

- expression: *boolean*
  - any boolean expression. If the assertion is false, the error message is written to the console.
- ...objects: *any[]*
  - a list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.

Outputs an error message to the console if the first argument is false.

### assert(expression, message, ...substitutions)


**Parameters:** 

- expression: *boolean*
  - any boolean expression. If the assertion is false, the error message is written to the console.
- message: *string* [**Optional**]
  - a JavaScript string containing zero or more substitution strings.
- ...substitutions: *any[]*
  - javaScript objects with which to replace substitution strings within message

Outputs an error message to the console if the first argument is false.

### count(label)


**Parameters:** 

- label: *string* [**Optional**]
  - if supplied, count() outputs the number of times it has been called with that label.

Logs the number of times that this particular call to count() has been called.

### countReset(label)


**Parameters:** 

- label: *string* [**Optional**]
  - if label supplied, this function resets the count associated with that particular label.

Resets the counter.

### debug(...objects)


**Parameters:** 

- ...objects: *any[]*
  - a list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.

Outputs a debug message to the console.

### debug(message, ...substitutions)


**Parameters:** 

- message: *string* [**Optional**]
  - a JavaScript string containing zero or more substitution strings.
- ...substitutions: *any[]*
  - javaScript objects with which to replace substitution strings within message

Outputs a debug message to the console.

### dirxml(object)


**Parameters:** 

- object: *any*
  - a JavaScript object

XML tree representation of a given object if it has 'toXML' method, otherwise prints as log method.

### error(...objects)


**Parameters:** 

- ...objects: *any[]*
  - a list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.

Outputs an error message to the console.

### error(message, ...substitutions)


**Parameters:** 

- message: *string* [**Optional**]
  - a JavaScript string containing zero or more substitution strings.
- ...substitutions: *any[]*
  - javaScript objects with which to replace substitution strings within message

Outputs an error message to the console.

### group(...objects)


**Parameters:** 

- ...objects: *any[]*
  - a list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.

Creates a new inline group in the console output. This indents following console messages by an additional spaces, until console.groupEnd() is called.

### group(message, ...substitutions)


**Parameters:** 

- message: *string* [**Optional**]
  - a JavaScript string containing zero or more substitution strings.
- ...substitutions: *any[]*
  - javaScript objects with which to replace substitution strings within message

Creates a new inline group in the console output. This indents following console messages by an additional spaces, until console.groupEnd() is called.

### groupEnd()


Exits the current inline group in the console.

### groupEnd()


Exits the current inline group in the console.

### info(...objects)


**Parameters:** 

- ...objects: *any[]*
  - a list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.

Outputs an info message to the console.

### info(message, ...substitutions)


**Parameters:** 

- message: *string* [**Optional**]
  - a JavaScript string containing zero or more substitution strings.
- ...substitutions: *any[]*
  - javaScript objects with which to replace substitution strings within message

Outputs an info message to the console.

### log(...objects)


**Parameters:** 

- ...objects: *any[]*
  - a list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.

Outputs a message to the console.

### log(message, ...substitutions)


**Parameters:** 

- message: *string* [**Optional**]
  - a JavaScript string containing zero or more substitution strings.
- ...substitutions: *any[]*
  - javaScript objects with which to replace substitution strings within message

Outputs a message to the console.

### warn(...objects)


**Parameters:** 

- ...objects: *any[]*
  - a list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.

Outputs a warning message to the console.

### warn(message, ...substitutions)


**Parameters:** 

- message: *string* [**Optional**]
  - a JavaScript string containing zero or more substitution strings.
- ...substitutions: *any[]*
  - javaScript objects with which to replace substitution strings within message

Outputs a warning message to the console.


## Example
```js
import {Button, TextInput, ui} from 'tabris';

let logTextInput = new TextInput({
  left: 10, top: 20, right: 10,
  text: 'Message',
  message: 'Log message'
}).appendTo(ui.contentView);

['debug', 'log', 'info', 'warn', 'error'].forEach((method) => {
  new Button({
    left: 10, right: 10, top: 'prev() 10',
    text: method
  }).on('select', () => console[method](logTextInput.text))
    .appendTo(ui.contentView);
});
```