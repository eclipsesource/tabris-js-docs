---
---
# Class "RefreshComposite"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`Composite`](Composite.md)</span> > <span style="white-space:nowrap;">[`RefreshComposite`](RefreshComposite.md)</span>

A composite allowing to use a pull-to-refresh gesture to trigger and visualize a long running operation.


<div class="tabris-image"><figure><div><img srcset="img/android/RefreshComposite.png 2x" src="img/android/RefreshComposite.png" alt="RefreshComposite on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/RefreshComposite.png 2x" src="img/ios/RefreshComposite.png" alt="RefreshComposite on iOS"/></div><figcaption>iOS</figcaption></figure></div>

Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | Element: `<RefreshComposite/>`<br/>Parent element: [`<Composite/>`](Composite.md) *and any widget extending* <span style="white-space:nowrap;">[`Composite`](Composite.md)</span><br/>Child elements: *Widgets*<br/>Text content: *Not supported*<br/>

## Example
```js
import {RefreshComposite, contentView} from 'tabris';

new RefreshComposite({layoutData: 'stretch'})
  .onRefresh(() => console.log('Refreshing...'))
  .appendTo(contentView);
```

See also:
  
[<span class='language jsx'>JSX</span> Creating a simple `RefreshComposite`](https://playground.tabris.com/?gitref=v3.1.0&snippet=refreshcomposite.jsx)

## Constructor

### new RefreshComposite(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties&lt;RefreshComposite&gt;`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### refreshEnabled


Whether the pull-to-refresh gesture can be performed by the user. When disabled, the `RefreshComposite` behaves like a regular `Composite`.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Default | `true`
Settable | *Yes*
Change events | *Yes*




### refreshIndicator


Whether to visualize a long running operation. After the user has triggered a manual refresh, this property is `true` and should be set to `false` when the operation ended.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Settable | *Yes*
Change events | *Yes*




### refreshMessage
<p class="platforms"><span class='ios-tag' title='supported on iOS'>iOS</span></p>

A message to show to the user during the refresh operation.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *Yes*
Change events | *Yes*





## Events

### refresh

Fired when a refresh is triggered by the user.

## Change Events

### refreshEnabledChanged

Fired when the [*refreshEnabled*](#refreshenabled) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*refreshEnabled*](#refreshenabled).

### refreshIndicatorChanged

Fired when the [*refreshIndicator*](#refreshindicator) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span> | The new value of [*refreshIndicator*](#refreshindicator).

### refreshMessageChanged

Fired when the [*refreshMessage*](#refreshmessage) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*refreshMessage*](#refreshmessage).

