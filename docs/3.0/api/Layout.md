---
---
# Class "Layout"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`Layout`](Layout.md)</span>

* Constructor: *protected*
* Singleton: *No*
* Namespace: `tabris`
* JSX support: *No*
* Direct subclasses: <span style="white-space:nowrap;">[`ConstraintLayout`](ConstraintLayout.md)</span>, <span style="white-space:nowrap;">[`StackLayout`](StackLayout.md)</span>
--------
Base class for all layout managers.


Example:
```js
import {Composite, contentView} from 'tabris';

new Composite({
  left: 20, top: 20, width: 100, height: 100,
  background: 'red'
}).appendTo(contentView);
```
## Properties

### padding


* Type: <span style="white-space:nowrap;">[`BoxDimensions`](../types.md#boxdimensions)</span>
* Default `{left: 0, top: 0, right: 0, bottom: 0}`
* Settable: *On creation*



Additional space between the parents edges and its children.

This property can only be set via constructor. Once set, it cannot change anymore.

