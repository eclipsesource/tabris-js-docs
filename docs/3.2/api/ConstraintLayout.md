---
---
# Class "ConstraintLayout"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="Layout.html" title="Layout Class Reference">Layout</a> > <a href="#" >ConstraintLayout</a>

The default, constraints-based layout.


Type: | <code style="white-space: nowrap">ConstraintLayout extends <a href="Layout.html" title="Layout Class Reference">Layout</a></code>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


## Examples
### JavaScript


```js
import {Composite, ConstraintLayout, contentView} from 'tabris';

contentView.append(
  new Composite({layout: new ConstraintLayout()})
);
```


## Constructor

### new ConstraintLayout(options?)

Parameter|Type|Description
-|-|-
options | <code style="white-space: nowrap">{}</code> | *Optional.*

## Static Properties

### default


Instance of ConstraintLayout used as the default `layout` property value of `Composite`, `Page`, `Tab` and `Canvas`. Equivalent to `new ConstraintLayout()`

Type: |<code style="white-space: nowrap"><a href="#" >ConstraintLayout</a></code>
Settable: | Yes



