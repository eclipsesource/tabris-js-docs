---
---
# Global object "console"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`Console`](Console.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\Console.png 2x" src="img\android\Console.png" alt="Console on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\Console.png 2x" src="img\ios\Console.png" alt="Console on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *private*
* Singleton: `console`
* Namespace: `global`
* JSX support: *No*
* Direct subclasses: *None*
--------
The console object provides access to the debugging console


Example:
```js
import {Button, TextInput, contentView} from 'tabris';

const logTextInput = new TextInput({
  left: 10, top: 20, right: 10,
  text: 'Message',
  message: 'Log message'
}).appendTo(contentView);

['debug', 'log', 'info', 'warn', 'error', 'trace'].forEach((method) => {
  new Button({
    left: 10, right: 10, top: 'prev() 10',
    text: method
  }).on('select', () => {
    console[method](logTextInput.text);
  }).appendTo(contentView);
});
```
## Methods

### assert(expression, ...objects)



Parameter|Type|Optional|Description
-|-|-|-
expression | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | No | Any boolean expression. If the assertion is false, the error message is written to the console.
...objects | <span style="white-space:nowrap;">`any[]`</span> | No | A list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Outputs an error message to the console if the first argument is false.

### assert(expression, message?, ...substitutions)



Parameter|Type|Optional|Description
-|-|-|-
expression | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | No | Any boolean expression. If the assertion is false, the error message is written to the console.
message | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | Yes | A JavaScript string containing zero or more substitution strings.
...substitutions | <span style="white-space:nowrap;">`any[]`</span> | No | JavaScript objects with which to replace substitution strings within message
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Outputs an error message to the console if the first argument is false.

### count(label?)



Parameter|Type|Optional|Description
-|-|-|-
label | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | Yes | If supplied, count() outputs the number of times it has been called with that label.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Logs the number of times that this particular call to count() has been called.

### countReset(label?)



Parameter|Type|Optional|Description
-|-|-|-
label | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | Yes | If label supplied, this function resets the count associated with that particular label.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Resets the counter.

### debug(...objects)



Parameter|Type|Optional|Description
-|-|-|-
...objects | <span style="white-space:nowrap;">`any[]`</span> | No | A list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Outputs a debug message to the console.

### debug(message?, ...substitutions)



Parameter|Type|Optional|Description
-|-|-|-
message | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | Yes | A JavaScript string containing zero or more substitution strings.
...substitutions | <span style="white-space:nowrap;">`any[]`</span> | No | JavaScript objects with which to replace substitution strings within message
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Outputs a debug message to the console.

### dirxml(object)



Parameter|Type|Optional|Description
-|-|-|-
object | <span style="white-space:nowrap;">[`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)</span> | No | A JavaScript object
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

XML tree representation of a given object, if available. Supported types include all widgets and `localStorage`. 

*The output is NOT JSX, it is a human-readable summary that displays XML-conforming string representations of some select property values.

### error(...objects)



Parameter|Type|Optional|Description
-|-|-|-
...objects | <span style="white-space:nowrap;">`any[]`</span> | No | A list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Outputs an error message to the console.

### error(message?, ...substitutions)



Parameter|Type|Optional|Description
-|-|-|-
message | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | Yes | A JavaScript string containing zero or more substitution strings.
...substitutions | <span style="white-space:nowrap;">`any[]`</span> | No | JavaScript objects with which to replace substitution strings within message
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Outputs an error message to the console.

### group(...objects)



Parameter|Type|Optional|Description
-|-|-|-
...objects | <span style="white-space:nowrap;">`any[]`</span> | No | A list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Creates a new inline group in the console output. This indents following console messages by an additional spaces, until console.groupEnd() is called.

### group(message?, ...substitutions)



Parameter|Type|Optional|Description
-|-|-|-
message | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | Yes | A JavaScript string containing zero or more substitution strings.
...substitutions | <span style="white-space:nowrap;">`any[]`</span> | No | JavaScript objects with which to replace substitution strings within message
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Creates a new inline group in the console output. This indents following console messages by an additional spaces, until console.groupEnd() is called.

### groupEnd()

* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Exits the current inline group in the console.

### groupEnd()

* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Exits the current inline group in the console.

### info(...objects)



Parameter|Type|Optional|Description
-|-|-|-
...objects | <span style="white-space:nowrap;">`any[]`</span> | No | A list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Outputs an info message to the console.

### info(message?, ...substitutions)



Parameter|Type|Optional|Description
-|-|-|-
message | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | Yes | A JavaScript string containing zero or more substitution strings.
...substitutions | <span style="white-space:nowrap;">`any[]`</span> | No | JavaScript objects with which to replace substitution strings within message
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Outputs an info message to the console.

### log(...objects)



Parameter|Type|Optional|Description
-|-|-|-
...objects | <span style="white-space:nowrap;">`any[]`</span> | No | A list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Outputs a message to the console.

### log(message?, ...substitutions)



Parameter|Type|Optional|Description
-|-|-|-
message | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | Yes | A JavaScript string containing zero or more substitution strings.
...substitutions | <span style="white-space:nowrap;">`any[]`</span> | No | JavaScript objects with which to replace substitution strings within message
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Outputs a message to the console.

### trace()

* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Prints a stack trace in a platform-independent format. Framework internals are omitted.

Source maps are supported when side-loading code via the tabris CLI.

### warn(...objects)



Parameter|Type|Optional|Description
-|-|-|-
...objects | <span style="white-space:nowrap;">`any[]`</span> | No | A list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Outputs a warning message to the console.

### warn(message?, ...substitutions)



Parameter|Type|Optional|Description
-|-|-|-
message | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | Yes | A JavaScript string containing zero or more substitution strings.
...substitutions | <span style="white-space:nowrap;">`any[]`</span> | No | JavaScript objects with which to replace substitution strings within message
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Outputs a warning message to the console.

