---
---
# RefreshComposite

Extends [Composite](Composite.md)

A composite allowing to use a pull-to-refresh gesture to trigger and visualize a long running operation.

Import this type with "`const {RefreshComposite} = require('tabris');`"

## Properties

### refreshEnabled


Type: *boolean*, default: `true`

Whether the pull-to-refresh gesture can be performed by the user. When disabled, the `RefreshComposite` behaves like a regular `Composite`.

### refreshIndicator


Type: *boolean*

Whether to visualize a long running operation. After the user has triggered a manual refresh, this property is `true` and should be set to `false` when the operation ended.

### refreshMessage
<p class="platforms"><span class="ios-tag" title="supported on iOS">iOS</span><span class="windows-tag" title="supported on Windows 10">Windows 10</span></p>

Type: *string*

A message to show to the user during the refresh operation.


## Events

### refresh

Fired when a refresh is triggered by the user.
### refreshEnabledChanged

Fired when the [*refreshEnabled*](#refreshEnabled) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*refreshEnabled*](#refreshEnabled).


### refreshIndicatorChanged

Fired when the [*refreshIndicator*](#refreshIndicator) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *boolean*
    The new value of [*refreshIndicator*](#refreshIndicator).


### refreshMessageChanged

Fired when the [*refreshMessage*](#refreshMessage) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*refreshMessage*](#refreshMessage).





## Example
```js
const {RefreshComposite, CheckBox, ScrollView, TextView, ui} = require('tabris');

let refreshComposite = new RefreshComposite({
  left: 0, right: 0, top: 0, bottom: 0,
}).on('refresh', ({target}) => setTimeout(() => {
  target.refreshIndicator = false;
  textView.text = `last refresh: ${new Date()}\n${textView.text}`;
}, 1000)).appendTo(ui.contentView);

let scrollView = new ScrollView({
  left: 0, right: 0, top: 0, bottom: 0,
}).appendTo(refreshComposite);

new TextView({
  left: 0, right: 0, top: 32,
  alignment: 'center',
  font: 'black 24px',
  text: 'pull to refresh'
}).appendTo(scrollView);

const textView = new TextView({
  left: 0, right: 0, top: 'prev() 32',
  alignment: 'center',
  lineSpacing: 1.4,
}).appendTo(scrollView);

new CheckBox({
  left: 16, right: 16, bottom: 16,
  text: 'Enable pull to refresh',
  checked: true
}).on('checkedChanged', ({value: checked}) => refreshComposite.refreshEnabled = checked)
  .appendTo(ui.contentView);
```
## See also

- [Simple RefreshComposite snippet](https://github.com/eclipsesource/tabris-js/tree/v2.9.0/snippets/refreshcomposite.js)
