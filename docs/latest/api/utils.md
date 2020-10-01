---
---
# Utility Functions

A collection of general-purpose utilities. These can be imported directly form the `tabris` module.


## Methods

### Set(target, attributes)



Creates a attributes object for the given widget type. This is meant to be used to creates rule sets for the [`apply`](./Composite##applyrules) method. The benefit of using this method as opposed to passing the object directly is twofold: <br/><br/>1 - The IDE and/or TypeScript compiler can check that the attributes are matching the given widget type. <br/>2 - The `apply` method will only set the attributes if the selected widget matches the type given here. If there is a mismatch an error will be thrown.


Parameter|Type|Description
-|-|-
target | <code style="white-space: nowrap">WidgetConstructor&lt;WidgetType&gt;</code> | The type of the target widget.
attributes | <code style="white-space: nowrap">Attributes&lt;WidgetType&gt;</code> | A set of attributes (properties and listeners) for the given widget type.


Returns: <code style="white-space: nowrap">Attributes&lt;WidgetType&gt;</code>

### asFactory(constructor)



Wraps the given widget constructor so that it can also be called like a normal function (factory) without the "new" keyword. When used like this the first parameter may not only contain all settable properties, but also listener (e.g. `{onTap: ev => console.log(ev)}` and children (`{children: [...]}`). A second parameter may be given to the factory, which should be a functional component. It will not be invoked, but becomes usable as a selector to obtain the instance created by this factory call.

All built-in widgets are already callable like this, so this function is only useful for user-defined widget subclasses/custom components.

In TypeScript the wrapped constructor will not have any static members declared, though they are still available at runtime.


Parameter|Type|Description
-|-|-
constructor | <code style="white-space: nowrap">OriginalConstructor</code> | 


Returns: <code style="white-space: nowrap">CallableConstructor&lt;OriginalConstructor&gt;</code>

### checkType(value, type, options?)



Checks that the given value is of the expected type. If the check fails a `TypeError` will be thrown. The `name` option may be used to change how the error message refers to the value.

 If the given value is of the expected type the function will simply return the value. In TypeScript files and some JavaScript editors the IDE will recognize the return value as being of the expected type.

Some values will never pass the check regardless of given type: `NaN`, `Infinity`, `-Infinity` and any boxed primitive. The values `null` and `undefined` will pass only if the `nullable` option is explicitly set to true.


Parameter|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code> | The value to check the type of.
type | <code style="white-space: nowrap">Constructor&lt;T&gt;</code> | The constructor function (class) of the expected type. May also be a subclass. Primitive types are represented by their respective boxed type constructors `String`, `Number` and `Boolean`.
options | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;name: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a>, // optional<br/>&nbsp;&nbsp;nullable: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a> // defaults to false<br/>}</code> | *Optional.*


Returns: <code style="white-space: nowrap">T</code>

### checkType(value, type, callback)



Checks that the given value is of the expected type. If the check fails a `TypeError` will be thrown. If the value is of the expected type the given callback will be called (synchronously) with the checked value as the only argument. In TypeScript files and some JavaScript editors the IDE will recognize that argument being of the expected type.

Some values will never pass the check regardless of given type: `NaN`, `Infinity`, `-Infinity`, boxed primitives, `null` and `undefined`.


Parameter|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a></code> | The value to check the type of.
type | <code style="white-space: nowrap">Constructor&lt;T&gt;</code> | The constructor function (class) of the expected type. May also be a subclass. Primitive types are represented by their respective boxed type constructors `String`, `Number` and `Boolean`.
callback | <code style="white-space: nowrap">(value) => <a title="Literally any JavaScript value">any</a></code> | A callback called with the value if it is of the expected type.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### format(...data)



Formats the given value(s) in the same manner the [console](./Console.md) does.


Parameter|Type|Description
-|-|-
...data | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a>[]</code> | 


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>

### format(message, ...data)



Formats the given value(s) in the same manner the [console](./Console.md) does.
The any placeholders in the message are replaced by the additional data parameters. Valid placeholders are "%d" for decimals, "%i" for integers, "%f" for floats, "%j" for any number, "%j" for any objects (including arrays) and "%s" for strings. To print the percentage sign itself use "%%".


Parameter|Type|Description
-|-|-
message | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The main message.
...data | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a>[]</code> | Data to be inserted in to the main message.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>

