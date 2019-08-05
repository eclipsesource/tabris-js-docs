---
---
# Object "permission"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Permission`](permission.md)</span>

Allows to request runtime permissions which are required to access certain device features. Trying to access a Tabris.js API without a required permission will throw an `Error`.

A permission can be either a category (supported on Android and iOS) or a specific Android permission name.

 See the [permissions documentation](../permissions.md) for full details on how to handle runtime permissions.


Constructor | *private*
Singleton | `permission`
Namespace |`tabris`
Direct subclasses | *None*
JSX support | *No*


## Example
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
  
[<span class='language jsx'>JSX</span> Simple approach to check and request permissions](https://playground.tabris.com/?gitref=v3.1.0&snippet=permission.jsx)  
[<span class='language tsx'>TSX</span> Full featured example with multiple permissions and states](https://playground.tabris.com/?gitref=v3.1.0&snippet=permission-advanced.tsx)

## Methods

### getAuthorizationStatus(...permissions)



Checks the authorization status for a given set of permissions.

Since an app permission can change during the apps lifecycle or when it is changed in the app settings, it is recommended to check the permissions status before making API calls that require a granted permission.


Parameter|Type|Optional|Description
-|-|-|-
...permissions | <span style="white-space:nowrap;">[`string[]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | A list of permissions to get the authorization status for.


Returns <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>

### isAuthorizationPossible(...permissions)



Checks if any of the given permissions allow to request authorization. A permission is regarded as allowed to authorize when its status is either `'undetermined'` or `'declined'`.


Parameter|Type|Optional|Description
-|-|-|-
...permissions | <span style="white-space:nowrap;">[`string[]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | A list of permissions to check if authorization is possible.


Returns <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>

### isAuthorized(...permissions)



Checks whether the given set of permissions is authorized. A set of permissions is regarded as authorized when the status of all permissions is `'granted'`.


Parameter|Type|Optional|Description
-|-|-|-
...permissions | <span style="white-space:nowrap;">[`string[]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | A list of permissions to check its authorization status.


Returns <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>

### requestAuthorization(...permissions)



Request authorization for a set of permissions.

If any of the permissions allow to request authorization, the method call will prompt the user to grant the permission and returns the result in the resolved promise. If the status can not be changed, the current status is returned by the resolved promise.


Parameter|Type|Optional|Description
-|-|-|-
...permissions | <span style="white-space:nowrap;">[`string[]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | A list of permissions to request authorization for.


Returns <span style="white-space:nowrap;">`Promise&lt;string&gt;`</span>

### withAuthorization(permissions, onAuthorized, onUnauthorized, onError)



Tries to authorize access to the given permissions, either by already holding the permissions or by requesting authorization for the given permissions. When the result is `'granted' the `onAuthorized` callback will be invoked. If any other state is determined the `onUnauthorized` callback will be invoked. In case of an `Error` the `onError` callback will be invoked.


Parameter|Type|Optional|Description
-|-|-|-
permissions | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [`string[]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | An individual permission or a list of permissions to gain authorization for.
onAuthorized | <span style="white-space:nowrap;">`Function`</span> | No | A callback to be invoked if the desired permissions could be granted. The permissions will have the status `'granted`'.
onUnauthorized | <span style="white-space:nowrap;">`Function`</span> | No | A callback to be invoked when the desired permissions could not be granted.
onError | <span style="white-space:nowrap;">`Function`</span> | No | A callback to be invoked if the request failed.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

