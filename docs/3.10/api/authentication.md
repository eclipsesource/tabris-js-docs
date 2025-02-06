---
---
# Object "authentication"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a> > <a href="#" >Authentication</a>

Allows to request authentication from the user. The means of authentication depends on the device configuration. For example, the authentication could be performed via credentials like pin or password or via a biometric authentication like fingerprint or face.


Type: | <code style="white-space: nowrap">Authentication extends <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a></code>
Constructor: | private
Singleton: | `authentication`
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


In order to enable face authentication on iOS an instructive message has to be added to the _Info.plist_ file via the _config.xml_ file.

```xml
<edit-config file="*-Info.plist" target="NSFaceIDUsageDescription" mode="overwrite">
  <string>Use FaceID to login to your account.</string>
</edit-config>
```


## Examples
### JSX


```jsx
import {authentication} from 'tabris';

authentication.authenticate()
  .then((result) => console.log(result));
```



See also:
  
[<span class='language jsx'>JSX</span> Require user to authenticate](https://github.com/eclipsesource/tabris-js/tree/v3.10.0/snippets/authentication.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.10.0&snippet=authentication.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>

## Methods

### authenticate(options?)



Request the user to authenticate using the device default mechanism. The resolved promise returns a result object with `'status'` and optionally `'message'`. The `'status'` Informs about the result of the authentication operation. In case of non-authentication flow errors like a incorrectly configured client, the promise is rejected.


Parameter|Type|Description
-|-|-
options | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;title: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>, // The title shown in the authentication ui. optional<br/>&nbsp;&nbsp;subtitle: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>, // The subtitle shown in the authentication ui. optional<br/>&nbsp;&nbsp;message: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>, // The message shown in the authentication ui. optional<br/>&nbsp;&nbsp;allowCredentials: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a>, // Configure whether to allow another authentication mechanism other than biometric authentication. For example, when a fingerprint would be the device default, the user could choose to fallback to use a pin instead. When non-biometric credentials are used, no fallback is available. . defaults to true<br/>&nbsp;&nbsp;confirmationRequired: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a> // When a fast authentication mechanism like face unlock is used, this option allows to configure whether a successful authorization has to be confirmed by the user via a button press. defaults to true<br/>}</code> | A set of options to apply when authenticating. *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;{status: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'success'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'canceled'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'userCanceled'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'limitExceeded'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'lockout'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'biometricsNotEnrolled'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'credentialsNotEnrolled'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'error'</a>, message: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>}&gt;</code>

### canAuthenticate(options?)



Checks whether the device has any authentication mechanism configured. If the device does not require any authentication `false` is returned.


Parameter|Type|Description
-|-|-
options | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;allowCredentials: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a> // Configure whether to check another authentication mechanism other than biometric authentication. For example, when a fingerprint would be the device default, the user could choose to fallback to use a pin instead. When non-biometric credentials are used, no fallback is available. . defaults to true<br/>}</code> | A set of options to apply when authenticating. *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

### cancel()



Closes a potentially open authentication ui.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>


## Properties

### availableBiometrics
<p class="platforms"><span class='ios-tag' title='supported on iOS'>iOS</span></p>

The biometric authentication mechanisms available on the device. Currently supported values are `'fingerprint'` and `'face'`.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>[]</code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | [`availableBiometricsChanged`](#availablebiometricschanged)





## Change Events

### availableBiometricsChanged

Fired when the [availableBiometrics](#availablebiometrics) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="ChangeListeners.html#propertychangedeventtargettype-valuetype" title="ChangeListeners Class Type">PropertyChangedEvent</a>&lt;<a href="#" >Authentication</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="View &quot;Array&quot; on MDN">Array</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>[]</code> | The new value of [availableBiometrics](#availablebiometrics).


