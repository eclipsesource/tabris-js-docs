# app

The object `tabris.app` provides information about the application.

Example:

```js
tabris.app.on("pause", function() {
  saveMyData();
});
```

Extends [NativeObject](NativeObject.md)

## Methods

### getResourceLocation(path)

**Parameters:** 

- path: *string*, the path of a resource relative to the application root.

**Returns:** *string*

Returns the URL for a given resource that is bundled with the app. Can be used to access app resources like images, videos, etc. Note that these resources can only be accessed in read-only mode.

### installPatch(url, callback)

**Parameters:** 

- url: *string*, the URL to fetch a patch from.
- callback: *(error: Error|null, patch: any|null) => void*, a callback function to be called when the installation has finished or failed. In case of a failure, the callback will receive a parameter `error` that contains an Error object. If the installation succeeds, this parameter will be `null` and a second parameter will contain the parsed content of the file `patch.json` from the installed patch.

**Note:** this API is provisional and may change in a future release.

Installs a patch from the given URL. When the patch is successfully installed, it will remain inactive until the application is reloaded. Not supported on Windows.

### reload()

Forces the running application to reload the main module and start over.


## Properties

### id

Type: *string*

Uniquely identifies the app.

### pinnedCertificates

Type: *any[]*

Enables certificate pinning for HTTP requests. When pinned certificates are defined for a host, connections to this host will only be permitted if the server provides a matching certificate. Connections to hosts that are not in the list are not affected.

Certificate pinning affects the following components: XHR/fetch, WebSockets, image loading and app patching. It does *not* affect WebViews.

The list of pinned certificates has to be in the form of `[{host: <string>, hash: <string>, algorithm: <RSA2048|RSA4096|ECDSA256>}, ..]`.

- The `host` attribute denotes the host name (including subdomain) of the host to be pinned ([wildcards allowed](https://en.wikipedia.org/wiki/Wildcard_DNS_record)).
- The `hash` attribute is the base64 encoded sha256 fingerprint of the _subjectPublicKeyInfo_, prefixed with `sha256/`.
- The `algorithm` attribute denotes the public key algorithm of the SSL certificate and can have the values `RSA2048`, `RSA4096` or `ECDSA256`. This attribute is only required on iOS.

Example: `[{host: 'freegeoip.net', hash: 'sha256/eTPz+5X4FcoK5fW+I0Wt/9y2vOkU3UMmVnDs7yGUJf8', algorithm: 'RSA4096'}]`

For further details see https://www.owasp.org/index.php/Certificate_and_Public_Key_Pinning.

### version

Type: *string*

The user facing version number, e.g. '2.1-beta3'.

### versionCode

Type: *number*

An alternative version number used in app stores to identify different versions of an app. Usually incremented with each release. This property reflects the `versionCode` on Android and `CFBundleVersion` on iOS.


## Events

### background
Fired when the app becomes invisible. Either because another app is in the foreground or the user has returned to the home screen.


### backnavigation
Fired when the back button is pressed on Android.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **preventDefault**: *() => void*
    Call to suppress the default back navigation behavior.




### foreground
The event is fired when the app starts or when it returns from the background.


### pause
Fired when the app is not the interaction target of the user anymore. Usually preceded by `resume`.


### resume
Fired when the app is visible and ready to interact with the user. The event is preceded by either `foreground` (the app becomes visible again) or `pause` (the app regains ability to interact with user).


### terminate
Fired when the app is being destroyed. After this callback no more interaction with the app is possible.



## Example
```js
// React to application hibernation, resume and back navigation

var paused = 0;

createTextView('Id', tabris.app.id);
createTextView('Version', tabris.app.version);
createTextView('Version Code', tabris.app.versionCode);

new tabris.Composite({
  left: 0, top: 'prev() 16', right: 0,
  height: 1,
  background: '#E8E8E8'
}).appendTo(tabris.ui.contentView);

var label = new tabris.TextView({
  left: 16, top: 'prev() 16', right: 16,
  font: 'italic 14px',
  text: 'You can press home and reopen the app to it to see how long you were away.'
}).appendTo(tabris.ui.contentView);

new tabris.Button({
  left: 16, right: 16, bottom: 16,
  text: 'Reload app'
}).on('select', function() {
  tabris.app.reload();
}).appendTo(tabris.ui.contentView);


tabris.app.on('pause', function() {
  paused = Date.now();
}).on('resume', function() {
  if (paused > 0) {
    var diff = Date.now() - paused;
    label.text = ' Welcome back!\n You were gone for ' + (diff / 1000).toFixed(1) + ' seconds.';
  }
});

tabris.app.on('backnavigation', function(event) {
  event.preventDefault();
  label.text = 'Back navigation prevented.';
});

function createTextView(key, value) {
  var composite = new tabris.Composite({left: 16, top: 'prev() 8', right: 16}).appendTo(tabris.ui.contentView);
  new tabris.TextView({text: key}).appendTo(composite);
  new tabris.TextView({text: value, left: 128}).appendTo(composite);
}
```