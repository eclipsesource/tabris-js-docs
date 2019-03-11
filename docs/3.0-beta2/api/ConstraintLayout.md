---
---
# Class "ConstraintLayout"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`Layout`](Layout.md)</span> > <span style="white-space:nowrap;">[`ConstraintLayout`](ConstraintLayout.md)</span>

The default, constraints-based layout.


Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | *No*


## Example
```js
import {Composite, ConstraintLayout} from 'tabris';

new Composite({layout: new ConstraintLayout({padding: 16})});
```

## Constructor

### new ConstraintLayout(parameterObject?)

Parameter|Type|Optional|Description
-|-|-|-
parameterObject | <span style="white-space:nowrap;">`{padding?: BoxDimensions` \| `number}`</span> | Yes | Sets the padding property. If set to a number, this value will be used for all four edge values. Defaults to 0.

## Static Properties

### default


Instance of ConstraintLayout used as the default `layout` property value of `Composite`, `Page`, `Tab` and `Canvas`. Equivalent to `new ConstraintLayout()`

Type | <span style="white-space:nowrap;">[`ConstraintLayout`](ConstraintLayout.md)</span>
Settable | *Yes*




