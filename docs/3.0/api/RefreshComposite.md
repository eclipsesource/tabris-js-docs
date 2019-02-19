---
---
# Class "RefreshComposite"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`Composite`](Composite.md)</span> > <span style="white-space:nowrap;">[`RefreshComposite`](RefreshComposite.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\RefreshComposite.png 2x" src="img\android\RefreshComposite.png" alt="RefreshComposite on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\RefreshComposite.png 2x" src="img\ios\RefreshComposite.png" alt="RefreshComposite on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<RefreshComposite/>`
  * Parent element: [`<Composite/>`](Composite.md) and any widget extending <span style="white-space:nowrap;">[`Composite`](Composite.md)</span>
  * Child elements: *Widgets*
  * Text content: *Not supported*
* Direct subclasses: *None*
--------
A composite allowing to use a pull-to-refresh gesture to trigger and visualize a long running operation.


Example:
```js
import {RefreshComposite, CheckBox, ScrollView, TextView, contentView} from 'tabris';

const refreshComposite = new RefreshComposite({
  left: 0, right: 0, top: 0, bottom: 0
}).on('refresh', ({target}) => setTimeout(() => {
  target.refreshIndicator = false;
  textView.text = `last refresh: ${new Date()}\n${textView.text}`;
}, 1000)).appendTo(contentView);

const scrollView = new ScrollView({
  left: 0, right: 0, top: 0, bottom: 0
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
  lineSpacing: 1.4
}).appendTo(scrollView);

new CheckBox({
  left: 16, right: 16, bottom: 16,
  text: 'Enable pull to refresh',
  checked: true
}).on('checkedChanged', ({value: checked}) => refreshComposite.refreshEnabled = checked)
  .appendTo(contentView);
```
See also:

- [Simple RefreshComposite snippet](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/refreshcomposite.js)

## Constructor

### new RefreshComposite(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof RefreshComposite>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### refreshEnabled


* Type: <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
* Default `true`
* Settable: *Yes*



Whether the pull-to-refresh gesture can be performed by the user. When disabled, the `RefreshComposite` behaves like a regular `Composite`.

### refreshIndicator


* Type: <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
* Settable: *Yes*



Whether to visualize a long running operation. After the user has triggered a manual refresh, this property is `true` and should be set to `false` when the operation ended.

### refreshMessage
<p class="platforms"> < span class = 'ios-tag' title = 'supported on iOS' > iOS < /span></p>

* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *Yes*



A message to show to the user during the refresh operation.


## Events

### refresh

Fired when a refresh is triggered by the user.

## Change Events

### refreshEnabledChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*refreshEnabled*](#refreshEnabled).

Fired when the [*refreshEnabled*](#refreshEnabled) property has changed.

### refreshIndicatorChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*refreshIndicator*](#refreshIndicator).

Fired when the [*refreshIndicator*](#refreshIndicator) property has changed.

### refreshMessageChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*refreshMessage*](#refreshMessage).

Fired when the [*refreshMessage*](#refreshMessage) property has changed.

