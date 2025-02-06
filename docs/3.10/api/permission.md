---
---
# Object "permission"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a> > <a href="#" >Permission</a>

Allows to request runtime permissions which are required to access certain device features. Trying to access a Tabris.js API without a required permission will throw an `Error`.

A permission can be either a category (supported on Android and iOS) or a specific Android permission name.

 See the [permissions documentation](../permissions.md) for full details on how to handle runtime permissions.


Type: | <code style="white-space: nowrap">Permission extends <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a></code>
Constructor: | private
Singleton: | `permission`
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


## Examples
### JavaScript


```js
import {permission} from 'tabris';

if (permission.isAuthorized('camera')) {
  console.log('Camera permission is available');
} else {
  (async () => {
    const status = await permission.requestAuthorization('camera');
    console.log(`Camera permission has been ${status}.`);
  })();
}
```



See also:
  
[<span class='language jsx'>JSX</span> Simple approach to check and request permissions](https://github.com/eclipsesource/tabris-js/tree/v3.10.0/snippets/permission.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.10.0&snippet=permission.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>  
[<span class='language tsx'>TSX</span> Full featured example with multiple permissions and states](https://github.com/eclipsesource/tabris-js/tree/v3.10.0/snippets/permission-advanced.tsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.10.0&snippet=permission-advanced.tsx" style="color: cadetblue;">► Run in Playground</a>]</span>

## Methods

### getAuthorizationStatus(...permissions)



Checks the authorization status for a given set of permissions.

Since an app permission can change during the apps lifecycle or when it is changed in the app settings, it is recommended to check the permissions status before making API calls that require a granted permission.


Parameter|Type|Description
-|-|-
...permissions | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>[]</code> | A list of permissions to get the authorization status for.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a></code>

### isAuthorizationPossible(...permissions)



Checks if any of the given permissions allow to request authorization. A permission is regarded as allowed to authorize when its status is either `'undetermined'` or `'declined'`.


Parameter|Type|Description
-|-|-
...permissions | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>[]</code> | A list of permissions to check if authorization is possible.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

### isAuthorized(...permissions)



Checks whether the given set of permissions is authorized. A set of permissions is regarded as authorized when the status of all permissions is `'granted'`.


Parameter|Type|Description
-|-|-
...permissions | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>[]</code> | A list of permissions to check its authorization status.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

### requestAuthorization(...permissions)



Request authorization for a set of permissions.

If any of the permissions allow to request authorization, the method call will prompt the user to grant the permission and returns the result in the resolved promise. If the status can not be changed, the current status is returned by the resolved promise.


Parameter|Type|Description
-|-|-
...permissions | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>[]</code> | A list of permissions to request authorization for.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'undetermined'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'granted'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'declined'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'denied'</a><br/>&#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">'rejected'</a>&gt;</code>

### withAuthorization(permissions, onAuthorized, onUnauthorized, onError)



Tries to authorize access to the given permissions, either by already holding the permissions or by requesting authorization for the given permissions. When the result is `'granted'` the `onAuthorized` callback will be invoked. If any other state is determined the `onUnauthorized` callback will be invoked. In case of an `Error` the `onError` callback will be invoked.


Parameter|Type|Description
-|-|-
permissions | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" title="View &quot;string&quot; on MDN">string</a>[]</code> | An individual permission or a list of permissions to gain authorization for.
onAuthorized | <code style="white-space: nowrap">() => any</code> | A callback to be invoked if the desired permissions could be granted. The permissions will have the status `'granted`'.
onUnauthorized | <code style="white-space: nowrap">() => any</code> | A callback to be invoked when the desired permissions could not be granted.
onError | <code style="white-space: nowrap">(error: Error) => any</code> | A callback to be invoked if the request failed.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>


