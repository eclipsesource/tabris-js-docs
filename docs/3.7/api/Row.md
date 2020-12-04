---
---
# Class "Row"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a> > <a href="Widget.html" title="Widget Class Reference">Widget</a> > <a href="Composite.html" title="Composite Class Reference">Composite</a> > <a href="#" >Row</a>

A composite with the `layout` property initialized with a `RowLayout`. All children are automatically arranged in one horizontal row, starting from the left.


Type: | <code style="white-space: nowrap">Row extends <a href="Composite.html" title="Composite Class Reference">Composite</a></code>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | Element: <code style="white-space: nowrap"><a href="#" >&lt;Row/&gt;</a></code><br/>Parent Elements: <code style="white-space: nowrap"><a href="Canvas.html" title="Canvas Class Reference">&lt;Canvas/&gt;</a></code>, <code style="white-space: nowrap"><a href="Cell.html" title="Cell Class Reference">&lt;Cell/&gt;</a></code>, <code style="white-space: nowrap"><a href="Composite.html" title="Composite Class Reference">&lt;Composite/&gt;</a></code>, <code style="white-space: nowrap"><a href="Page.html" title="Page Class Reference">&lt;Page/&gt;</a></code>, <code style="white-space: nowrap"><a href="RefreshComposite.html" title="RefreshComposite Class Reference">&lt;RefreshComposite/&gt;</a></code>, <code style="white-space: nowrap"><a href="#" >&lt;Row/&gt;</a></code>, <code style="white-space: nowrap"><a href="ScrollView.html" title="ScrollView Class Reference">&lt;ScrollView/&gt;</a></code>, <code style="white-space: nowrap"><a href="Stack.html" title="Stack Class Reference">&lt;Stack/&gt;</a></code>, <code style="white-space: nowrap"><a href="Tab.html" title="Tab Class Reference">&lt;Tab/&gt;</a></code><br/>Child Elements: *Any standalone widget element*<br/>

## Examples
### JavaScript


```js
import {Row, contentView, TextView} from 'tabris';

const row = new Row({
  layoutData: 'stretch',
  spacing: 16
}).appendTo(contentView);

row.append(
  new TextView({text: 'one'}),
  new TextView({text: 'two'}),
  new TextView({text: 'three'})
);
```



See also:
  
[<span class='language jsx'>JSX</span> Creating a simple `Row`](https://playground.tabris.com/?gitref=v3.7.0&snippet=row.jsx)  
[<span class='language jsx'>JSX</span> Creating a `Row` with vertical alignment](https://playground.tabris.com/?gitref=v3.7.0&snippet=row-alignment.jsx)  
[<span class='language jsx'>JSX</span> Creating a `Row` with horizontal alignment](https://playground.tabris.com/?gitref=v3.7.0&snippet=row-halign.jsx)

## Constructor

### new Row(properties?)

Parameter|Type|Description
-|-|-
properties | <code style="white-space: nowrap"><a href="Widget.html#propertieswidget" title="Widget Class Type">Properties</a>&lt;<a href="#" >Row</a>&gt;</code> | Sets all key-value pairs in the properties object as widget properties. *Optional.*

## Properties

### alignment


Determines the vertical placement of the children.

 For `stretchY` to work correctly the `Row` needs to be given a height either by setting `height` or by setting `top` and `bottom`.

If `baseline` is set the first widget in the row will determine where that baseline is. By setting `top`, `bottom` or `centerY` on that widget the baseline can be shifted.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'top'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'centerY'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'stretchY'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'bottom'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'baseline'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'top'</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >By Constructor or JSX</a>
Change Event: | Not supported




This property can only be set via constructor or JSX. Once set, it cannot change anymore.


See also:
  
[<span class='language jsx'>JSX</span> row-alignment.jsx](https://playground.tabris.com/?gitref=v3.7.0&snippet=row-alignment.jsx)


### layout


The row layout manager responsible for interpreting the [`layoutData`](./Widget.md#layoutdata) of the child widgets of this Composite.

Type: |<code style="white-space: nowrap"><a href="RowLayout.html" title="RowLayout Class Reference">RowLayout</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">RowLayout</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >By Constructor or JSX</a>
Change Event: | Not supported




This property can only be set via constructor or JSX. Once set, it cannot change anymore.



### spacing


The space between the children in device independent pixel.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">0</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >By Constructor or JSX</a>
Change Event: | Not supported




This property can only be set via constructor or JSX. Once set, it cannot change anymore.




