---
---
# Timer

This API is available in the global namespace. You do not need to import it explicitly.

## Methods

### clearInterval(id)


**Parameters:** 

- id: *any*
  - the ID that was returned by `setInterval`.

Cancels the running interval associated with the given ID. When given an invalid ID, nothing happens.

### clearTimeout(id)


**Parameters:** 

- id: *any*
  - the ID that was returned by `setTimeout`.

Cancels the running timeout associated with the given ID. When given an invalid ID, nothing happens.

### setInterval(callback, delay, ...params)


**Parameters:** 

- callback: *Function*
  - the function to call.
- delay: *number* [**Optional**]
  - the delay in milliseconds.
- ...params: *any[]*
  - one or more values passed on to the callback.

**Returns:** *any*

Calls the given function repeatedly, each times waiting the given delay. The actual delay may be slightly longer than the given one.

### setTimeout(callback, delay, ...params)


**Parameters:** 

- callback: *Function*
  - the function to call.
- delay: *number* [**Optional**]
  - the delay in milliseconds.
- ...params: *any[]*
  - one or more values passed on to the callback.

**Returns:** *any*

Calls the given function with `param` (and all following parameters) after the specified delay. The actual delay may be slightly longer than the given one.


## Example
```js
const {Button, ui} = require('tabris');

new Button({
  centerX: 0, centerY: 0,
  text: 'Press me!'
}).on('select', ({target}) => {
  target.text = 'Please wait...';
  setTimeout(sayThanks, 2000, target);
}).appendTo(ui.contentView);

function sayThanks(widget) {
  widget.text = 'Thank you!';
}
```