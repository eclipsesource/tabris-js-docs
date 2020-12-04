---
---
# Class "EventObject"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >EventObject</a>

Base class for all events fired by the framework. Instances may include additional properties, which are documented together with the event type. Change events also have a `value` property. 

 When the trigger method is called with a new instance of `EventObject`, `type`, `target` and `timeStamp` are initialized automatically.


Type: | <code style="white-space: nowrap">EventObject&lt;TargetType&gt; extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a></code>
Generics: | <span id="generics">TargetType: *The type of the target. Defaults to <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>.*<br/></span>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


## Constructor

### new EventObject()


## Properties

### target


The object that fired the event.

Type: |<code style="white-space: nowrap"><a href="#generics" title="Generic Parameter&quot;TargetType&quot;">TargetType</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### timeStamp


The time at which the event was created, in milliseconds.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.



### type


The event type.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>
Settable: | No




This property can only be set via constructor. Once set, it cannot change anymore.




