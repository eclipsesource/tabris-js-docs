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

## Events

### "pause" (app)

**Parameters:** 

- app: `tabris.app`

Fired before the application goes into hibernation.

### "resume" (app)

**Parameters:** 

- app: `tabris.app`

Fired after the application returned from hibernation.

