---
---
# app

The object `tabris.app` provides information about the application.
Includes [Events API](Events.md)

Example:

```js
tabris.app.on("pause", function() {
  saveMyData();
});
```

## Methods

### getResourceLocation(path)



**Parameters:**

- path: *string*, the path of a resource relative to the application root.

**Returns:** *string*

Returns the URL for a given resource that is bundled with the app. Can be used to access app resources like images, videos, etc. Note that these resources can only be accessed in read-only mode.


### installPatch(url, callback)



**Parameters:**

- url: *string*, the URL to fetch a patch from.
- callback: *Function*, a callback function to be called when the installation has finished or failed. In case of a failure, the callback will receive a parameter `error` that contains an Error object. If the installation succeeds, this parameter will be `undefined` and a second parameter will contain the parsed content of the file `patch.json` from the installed patch.


**Note:** this API is provisional and may change in a future release.

Installs a patch from the given URL. When the patch is successfully installed, it will remain inactive until the application is reloaded.


### reload()



**Parameters:**



Forces the running application to reload the main module and start over.



## Events

### "background" (app)

**Parameters:**

- app: *[App](app.md)*

Fired when the app becomes invisible. Either because the user has another app in the foreground or he returned to the home screen.


### "backnavigation" (app, event)

**Parameters:**

- app: *[App](app.md)*
- event: *Object*

Fired when the back button is pressed on Android. To suppress the default back navigation behavior, call `event.preventDefault()`.


### "foreground" (app)

**Parameters:**

- app: *[App](app.md)*

Fired when the app becomes visible. The event is only fired after the app has been brought to the background. Not during app startup.


### "pause" (app)

**Parameters:**

- app: *[App](app.md)*

Fired when the app is not the interaction target of the user anymore. Usually preceded by `resume`.


### "resume" (app)

**Parameters:**

- app: *[App](app.md)*

Fired when the app is visible and ready to interact with the user. The event is preceded by either `foreground` (the app becomes visible again) or `pause` (the app regains ability to interact with user).


### "terminate" (app)

**Parameters:**

- app: *[App](app.md)*

Fired when the app is being destroyed. After this callback no more interaction with the app is possible.


