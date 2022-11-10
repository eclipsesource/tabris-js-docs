---
---
# Class "TextView"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a> > <a href="Widget.html" title="Widget Class Reference">Widget</a> > <a href="#" >TextView</a>

A widget to display a text. For images, use ImageView.


<div class="tabris-image"><figure><div><img srcset="img/android/TextView.png 2x" src="img/android/TextView.png" alt="TextView on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/TextView.png 2x" src="img/ios/TextView.png" alt="TextView on iOS"/></div><figcaption>iOS</figcaption></figure></div>

Type: | <code style="white-space: nowrap">TextView extends <a href="Widget.html" title="Widget Class Reference">Widget</a></code>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | Element: <code style="white-space: nowrap"><a href="#" >&lt;TextView/&gt;</a></code><br/>Parent Elements: <code style="white-space: nowrap"><a href="Canvas.html" title="Canvas Class Reference">&lt;Canvas/&gt;</a></code>, <code style="white-space: nowrap"><a href="Cell.html" title="Cell Class Reference">&lt;Cell/&gt;</a></code>, <code style="white-space: nowrap"><a href="Composite.html" title="Composite Class Reference">&lt;Composite/&gt;</a></code>, <code style="white-space: nowrap"><a href="Page.html" title="Page Class Reference">&lt;Page/&gt;</a></code>, <code style="white-space: nowrap"><a href="RefreshComposite.html" title="RefreshComposite Class Reference">&lt;RefreshComposite/&gt;</a></code>, <code style="white-space: nowrap"><a href="Row.html" title="Row Class Reference">&lt;Row/&gt;</a></code>, <code style="white-space: nowrap"><a href="ScrollView.html" title="ScrollView Class Reference">&lt;ScrollView/&gt;</a></code>, <code style="white-space: nowrap"><a href="Stack.html" title="Stack Class Reference">&lt;Stack/&gt;</a></code>, <code style="white-space: nowrap"><a href="Tab.html" title="Tab Class Reference">&lt;Tab/&gt;</a></code><br/>Child Elements: *Not Supported*<br/>Element content sets: [<code style="white-space: nowrap">text</code>](#text)

## Examples
### JavaScript


```js
import {TextView, contentView} from 'tabris';

new TextView({
  left: 16, right: 16,
  text: 'Content'
}).appendTo(contentView);
```



See also:
  
[<span class='language jsx'>JSX</span> Creating a simple `TextView`](https://github.com/eclipsesource/tabris-js/tree/v3.9.0/snippets/textview.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.9.0&snippet=textview.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>  
[<span class='language jsx'>JSX</span> Creating a `TextView` with support for markup](https://github.com/eclipsesource/tabris-js/tree/v3.9.0/snippets/textview-markupenabled.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.9.0&snippet=textview-markupenabled.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>  
[<span class='language jsx'>JSX</span> Creating a `TextView` with support for text links](https://github.com/eclipsesource/tabris-js/tree/v3.9.0/snippets/textview-link.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.9.0&snippet=textview-link.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>  
[<span class='language jsx'>JSX</span> Demonstrating various line spacing values on a `TextView`](https://github.com/eclipsesource/tabris-js/tree/v3.9.0/snippets/textview-link.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.9.0&snippet=textview-link.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>  
[<span class='language js'>JS</span> Creating a `TextView` with an external font](https://github.com/eclipsesource/tabris-js/tree/v3.9.0/snippets/textview-font-external.js) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.9.0&snippet=textview-font-external.js" style="color: cadetblue;">► Run in Playground</a>]</span>  
[<span class='language js'>JS</span> textview-font-bundled.js](https://github.com/eclipsesource/tabris-js/tree/v3.9.0/snippets/textview-font-bundled.js) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.9.0&snippet=textview-font-bundled.js" style="color: cadetblue;">► Run in Playground</a>]</span>  
[<span class='language js'>JS</span> textview-linespacing.js](https://github.com/eclipsesource/tabris-js/tree/v3.9.0/snippets/textview-linespacing.js) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.9.0&snippet=textview-linespacing.js" style="color: cadetblue;">► Run in Playground</a>]</span>

## Constructor

### new TextView(properties?)

Parameter|Type|Description
-|-|-
properties | <code style="white-space: nowrap"><a href="Widget.html#propertieswidget" title="Widget Class Type">Properties</a>&lt;<a href="#" >TextView</a>&gt;</code> | Sets all key-value pairs in the properties object as widget properties. *Optional.*

## Properties

### alignment


The horizontal alignment of the text.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'left'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'right'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'centerX'</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'left'</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`alignmentChanged`](#alignmentchanged)




### font


The font used for the text.

Type: |<code style="white-space: nowrap"><a href="Font.html#fontvalue" title="Font Class Type">FontValue</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`fontChanged`](#fontchanged)



See also:
  
[<span class='language js'>JS</span> textview-font-bundled.js](https://github.com/eclipsesource/tabris-js/tree/v3.9.0/snippets/textview-font-bundled.js) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.9.0&snippet=textview-font-bundled.js" style="color: cadetblue;">► Run in Playground</a>]</span>  
[<span class='language js'>JS</span> textview-font-external.js](https://github.com/eclipsesource/tabris-js/tree/v3.9.0/snippets/textview-font-external.js) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.9.0&snippet=textview-font-external.js" style="color: cadetblue;">► Run in Playground</a>]</span>


### lineSpacing


The amount of space between each line of text. The `lineSpacing` property is a factor with a default value of `1.0`.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">1.0</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`lineSpacingChanged`](#linespacingchanged)



See also:
  
[<span class='language js'>JS</span> textview-linespacing.js](https://github.com/eclipsesource/tabris-js/tree/v3.9.0/snippets/textview-linespacing.js) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.9.0&snippet=textview-linespacing.js" style="color: cadetblue;">► Run in Playground</a>]</span>


### markupEnabled


Allows for a subset of HTML tags in the text. Supported tags are: `a`, `del`, `ins`, `b`, `i`, `strong`, `em`, `big`, `small`, `br`.

All tags except `<br/>` support the attributes "font" and "textColor" with the same values as the `TextView` itself. IOS does not support to colorize links (`<a>`) with the `textColor` attribute.

All tags must be closed (e.g. use `<br/>` instead of `<br>`). Nesting tags is not supported on iOS. A platform might allow to use additional tags but cross-platform compatibility is only guaranteed for the tags listed above.

When the text is given as the content of a `<TextView>` JSX element, `markupEnabled` will parse the text more like HTML, i.e. consecutive white spaces will be merged.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`markupEnabledChanged`](#markupenabledchanged)



See also:
  
[<span class='language jsx'>JSX</span> textview-markupenabled.jsx](https://github.com/eclipsesource/tabris-js/tree/v3.9.0/snippets/textview-markupenabled.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.9.0&snippet=textview-markupenabled.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>


### maxLines


Limit the number of lines to be displayed to the given maximum. `null` disables this limit.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null_type" title="View &quot;null&quot; on MDN">null</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">null</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`maxLinesChanged`](#maxlineschanged)




### selectable
<p class="platforms"><span class='android-tag' title='supported on Android'>Android</span></p>

Whether the text can be selected or not.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`selectableChanged`](#selectablechanged)




### text


The text to display.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`textChanged`](#textchanged)
JSX Content Type: | [Text](../declarative-ui.md#jsx-specifics)





When using TextView as an JSX element the elements Text content is mapped to this property.

### textColor


The color of the text.

Type: |<code style="white-space: nowrap"><a href="Color.html#colorvalue" title="Color Class Type">ColorValue</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`textColorChanged`](#textcolorchanged)





## Events

### tapLink

Fires when the user clicks on a link in an html text. Requires to set `markupEnabled` to true and to provide a text containing an anchor (`<a>`) with an `href` attribute. Eg. `textView.text = 'Website: <a href="http://example.com>example.com</a>'`. The event object contains a property `url` which provides the anchors `href` url.

EventObject Type: <code style="white-space: nowrap">TextViewTapLinkEvent&lt;<a href="#" >TextView</a>&gt;</code>

Property|Type|Description
-|-|-
url | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | The url referenced by the `href` attribute of the anchor.

## Change Events

### alignmentChanged

Fired when the [alignment](#alignment) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >TextView</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | The new value of [alignment](#alignment).

### selectableChanged

Fired when the [selectable](#selectable) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >TextView</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | The new value of [selectable](#selectable).

### markupEnabledChanged

Fired when the [markupEnabled](#markupenabled) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >TextView</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | The new value of [markupEnabled](#markupenabled).

### textChanged

Fired when the [text](#text) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >TextView</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code> | The new value of [text](#text).

### textColorChanged

Fired when the [textColor](#textcolor) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >TextView</a>, <a href="Color.html#colorvalue" title="Color Class Type">ColorValue</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="Color.html#colorvalue" title="Color Class Type">ColorValue</a></code> | The new value of [textColor](#textcolor).

### maxLinesChanged

Fired when the [maxLines](#maxlines) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >TextView</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null_type" title="View &quot;null&quot; on MDN">null</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null_type" title="View &quot;null&quot; on MDN">null</a></code> | The new value of [maxLines](#maxlines).

### lineSpacingChanged

Fired when the [lineSpacing](#linespacing) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >TextView</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" title="View &quot;number&quot; on MDN">number</a></code> | The new value of [lineSpacing](#linespacing).

### fontChanged

Fired when the [font](#font) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >TextView</a>, <a href="Font.html#fontvalue" title="Font Class Type">FontValue</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="Font.html#fontvalue" title="Font Class Type">FontValue</a></code> | The new value of [font](#font).


