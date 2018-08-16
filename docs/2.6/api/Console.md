---
---
# console

The console object provides access to the debugging console

This object is available in the global namespace. You do not need to import it explicitly.

## Methods

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
const {Button, TextInput, ui} = require('tabris');

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