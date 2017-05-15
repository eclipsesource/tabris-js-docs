---
---
# tabris.app

The object `tabris.app` provides information about the application.
Includes [Events API](Events.md)

Example:

```js
tabris.app.on("pause", function() {
  saveMyData();
});
```

## Methods

### installPatch(url, callback)


**Parameters:** 

- url: *string*, the URL to fetch a patch from.
- callback: *function*, a callback function to be called when the installation has finished or failed. In case of a failure, the callback will receive a parameter `error` that contains an Error object. If the installation succeeds, this parameter will be `undefined` and a second parameter will contain the parsed content of the file `patch.json` from the installed patch.


**Note:** this API is provisional and may change in a future release.

Installs a patch from the given URL. When the patch is successfully installed, it will remain inactive until the application is reloaded.

### reload()


**Parameters:** 



Forces the running application to reload the main module and start over.


## Events

### "backnavigation" (app, options)

**Parameters:** 

- app: `tabris.app`
- options: *Object*

Fired when the back button is pressed on Android. To suppress the default back navigation behavior, set `options.preventDefault` to `true`.

### "pause" (app)

**Parameters:** 

- app: `tabris.app`

Fired before the application goes into hibernation.

### "resume" (app)

**Parameters:** 

- app: `tabris.app`

Fired after the application returned from hibernation.

