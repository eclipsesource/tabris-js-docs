---
---
# Class "ActionSheetItem"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >ActionSheetItem</a>

Describes an entry in an [`ActionSheet`](./ActionSheet.md).


Type: | <code style="white-space: nowrap">ActionSheetItem extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a></code>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | Element: <code style="white-space: nowrap"><a href="#" >&lt;ActionSheetItem/&gt;</a></code><br/>Parent Elements: <code style="white-space: nowrap"><a href="ActionSheet.html" title="ActionSheet Class Reference">&lt;ActionSheet/&gt;</a></code><br/>Child Elements: *Not Supported*<br/>Element content sets: [<code style="white-space: nowrap">title</code>](#title)

## Constructor

### new ActionSheetItem(properties?)

Parameter|Type|Description
-|-|-
properties | <code style="white-space: nowrap"><a href="#" >ActionSheetItem</a></code> | Either an instance of `ActionSheetItem` *or a plain object* with some or all of the same properties, e.g. `{title: 'MyTitel'}` *Optional.*

## Properties

### image


An image to be displayed for this item in the `ActionSheet`

Type: |<code style="white-space: nowrap"><a href="../types.html#imagevalue" title="ImageValue Type Reference">ImageValue</a></code>
Settable: | Yes




This property can only be set via constructor. Once set, it cannot change anymore.



### style


The style of presentation for this item in the `ActionSheet`. With the style `cancel` or `destructive` are displayed in a special way.

Note: On iPad, an action with style `cancel` will not be shown in the ActionSheet as per [Apple's design approach](https://developer.apple.com/documentation/uikit/windows_and_screens/getting_the_user_s_attention_with_alerts_and_action_sheets). If such button is added tapping outside of ActionSheet is equivalent to pressing the `cancel` action on iPad. In case of tapping outside an appropriate event will be sent by the native side as if such button was pressed

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'default'</a><br/> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'cancel'</a><br/> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'destructive'</a></code>
Settable: | Yes




This property can only be set via constructor. Once set, it cannot change anymore.



### title


The text to be displayed for this item in the `ActionSheet`.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>
Settable: | Yes
JSX Content Type: | [Text](../JSX.md)





When using ActionSheetItem as an JSX element the elements Text content is mapped to this property.

This property can only be set via constructor. Once set, it cannot change anymore.



