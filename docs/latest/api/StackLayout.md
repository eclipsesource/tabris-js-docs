---
---
# Class "StackLayout"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="Layout.html" title="Layout Class Reference">Layout</a> > <a href="#" >StackLayout</a>

Stack based layout manager. Can be set on the `layout` property of any `Composite` or widget extending `Composite` like `Page` or `Tab` widget. The `Stack` uses it as the default `layout`. <br/><br/> All children of the composite are automatically arranged in one vertical stack, starting from the top.


Type: | <code style="white-space: nowrap">StackLayout extends <a href="Layout.html" title="Layout Class Reference">Layout</a></code>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


## Examples
### JavaScript


```js
import {Composite, StackLayout, contentView} from 'tabris';

contentView.append(
  new Composite({layout: new StackLayout({spacing: 16, alignment: 'left'})})
);
```



See also:
  
[<span class='language jsx'>JSX</span> Creating a simple `Stack` with an included `StackLayout`](https://github.com/eclipsesource/tabris-js/tree/v3.10.0/snippets/stack.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.10.0&snippet=stack.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>

## Constructor

### new StackLayout(options?)

Parameter|Type|Description
-|-|-
options | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;spacing: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>, // optional<br/>&nbsp;&nbsp;alignment: // optional<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'left'</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'centerX'</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'stretchX'</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'right'</a><br/>}</code> | Sets the alignment and spacing properties. *Optional.*

## Properties

### alignment


Determines the horizontal placement of the children. For the `stretchX` value to work correctly the composite needs to be given a width either by setting `width` or by setting `left` and `right`.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'left'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'centerX'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'stretchX'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'right'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'left'</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### spacing


The space between the children in device independent pixel.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">0</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



## Static Properties

### default


Instance of StackLayout used as the default `layout` property value of `Stack` widgets. Equivalent to `new StackLayout()`

Type: |<code style="white-space: nowrap"><a href="#" >StackLayout</a></code>
Settable: | Yes





