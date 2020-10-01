---
---
# Class "RowLayout"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="Layout.html" title="Layout Class Reference">Layout</a> > <a href="#" >RowLayout</a>

Row based layout manager. Can be set on the `layout` property of any `Composite` or widget extending `Composite` like `Page` or `Tab` widget. The `Row` uses it as the default `layout`. <br/><br/> All children of the composite are automatically arranged in one horizontal row, starting from the left.


Type: | <code style="white-space: nowrap">RowLayout extends <a href="Layout.html" title="Layout Class Reference">Layout</a></code>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


## Examples
### JavaScript


```js
import {Composite, RowLayout, contentView} from 'tabris';

contentView.append(
  new Composite({layout: new RowLayout({spacing: 16, alignment: 'top'})})
);
```


See also:
  
[<span class='language jsx'>JSX</span> Creating a simple `Row` with an included `RowLayout`](https://playground.tabris.com/?gitref=v3.6.1&snippet=row.jsx)

## Constructor

### new RowLayout(options?)

Parameter|Type|Description
-|-|-
options | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;spacing: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a>, // optional<br/>&nbsp;&nbsp;alignment: // optional<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'top'</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'centerY'</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'stretchY'</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'bottom'</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'baseline'</a><br/>}</code> | Sets the alignment and spacing properties. *Optional.*

## Properties

### alignment


Determines the vertical placement of the children.

 For `stretchY` to work correctly the `Row` needs to be given a height either by setting `height` or by setting `top` and `bottom`.

If `baseline` is set the first widget in the row will determine where that baseline is. By setting `top`, `bottom` or `centerY` on that widget the baseline can be shifted.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'top'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'centerY'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'stretchY'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'bottom'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'baseline'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'top'</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### spacing


The Space between the children in device independent pixel.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">0</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



## Static Properties

### default


Instance of RowLayout used as the default `layout` property value of `Row` widgets. Equivalent to `new RowLayout()`

Type: |<code style="white-space: nowrap"><a href="#" >RowLayout</a></code>
Settable: | Yes




