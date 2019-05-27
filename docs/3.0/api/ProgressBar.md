---
---
# Class "ProgressBar"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`ProgressBar`](ProgressBar.md)</span>

A widget representing a numeric value as a horizontal bar with a growing indicator.


<div class="tabris-image"><figure><div><img srcset="img/android/ProgressBar.png 2x" src="img/android/ProgressBar.png" alt="ProgressBar on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/ProgressBar.png 2x" src="img/ios/ProgressBar.png" alt="ProgressBar on iOS"/></div><figcaption>iOS</figcaption></figure></div>

Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | Element: `<ProgressBar/>`<br/>Parent element: [`<Composite/>`](Composite.md) *and any widget extending* <span style="white-space:nowrap;">[`Composite`](Composite.md)</span><br/>Child elements: *None*<br/>Text content: *Not supported*<br/>

## Example
```js
import {ProgressBar, contentView} from 'tabris';

new ProgressBar({
  left: 16, right: 16,
  selection: 50
}).appendTo(contentView);
```

See also:

- [Demo JavaScript/JSX Snippet: Creating a simple `ProgressBar`](https://playground.tabris.com/?gitref=v3.0.0&snippet=progressbar.jsx)

## Constructor

### new ProgressBar(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<ProgressBar>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### maximum


The value that represents a progress of 100%.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Default | `100`
Settable | *Yes*
Change events | *Yes*




### minimum


The value that represents a progress of 0%.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Default | `0`
Settable | *Yes*
Change events | *Yes*




### selection


The actual progress to be displayed.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Default | `0`
Settable | *Yes*
Change events | *Yes*




### state
<p class="platforms"><span class='android-tag' title='supported on Android'>Android</span></p>

This property affects the color of the progress indicator. Not supported on iOS.

Type | `'normal'` \| `'paused'` \| `'error'`
Default | `'normal'`
Settable | *Yes*
Change events | *Yes*




### tintColor


The color used to display the current progress.

Type | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
Settable | *Yes*
Change events | *Yes*





## Change Events

### minimumChanged

Fired when the [*minimum*](#minimum) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*minimum*](#minimum).

### maximumChanged

Fired when the [*maximum*](#maximum) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*maximum*](#maximum).

### tintColorChanged

Fired when the [*tintColor*](#tintcolor) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*tintColor*](#tintcolor).

### selectionChanged

Fired when the [*selection*](#selection) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The new value of [*selection*](#selection).

### stateChanged

Fired when the [*state*](#state) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*state*](#state).

