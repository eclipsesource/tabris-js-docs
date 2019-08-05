---
---
# Class "ActivityIndicator"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`ActivityIndicator`](ActivityIndicator.md)</span>

A widget representing a spinning indicator for indeterminate loading / processing time.


<div class="tabris-image"><figure><div><img srcset="img/android/ActivityIndicator.png 2x" src="img/android/ActivityIndicator.png" alt="ActivityIndicator on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/ActivityIndicator.png 2x" src="img/ios/ActivityIndicator.png" alt="ActivityIndicator on iOS"/></div><figcaption>iOS</figcaption></figure></div>

Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | Element: `<ActivityIndicator/>`<br/>Parent element: [`<Composite/>`](Composite.md) *and any widget extending* <span style="white-space:nowrap;">[`Composite`](Composite.md)</span><br/>Child elements: *None*<br/>Text content: *Not supported*<br/>

## Example
```js
import {ActivityIndicator, contentView} from 'tabris';

new ActivityIndicator()
  .appendTo(contentView);
```

See also:
  
[<span class='language jsx'>JSX</span> Creating a simple `ActivityIndicator`](https://playground.tabris.com/?gitref=v3.1.0&snippet=activityindicator.jsx)

## Constructor

### new ActivityIndicator(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties&lt;ActivityIndicator&gt;`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### tintColor


The color of the indicator.

Type | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span>
Settable | *Yes*
Change events | *Yes*





## Change Events

### tintColorChanged

Fired when the [*tintColor*](#tintcolor) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ColorValue`](../types.md#colorvalue)</span> | The new value of [*tintColor*](#tintcolor).

