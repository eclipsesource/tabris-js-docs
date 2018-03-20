---
---
# app

Extends [NativeObject](NativeObject.md)

Provides information about the application.

Import this object with "`const {app} = require('tabris');`"

Example:

```js
app.on("pause", () => pauseVideo());
```

## Methods

### close()
<p class="platforms"><span class="android-tag" title="supported on Android">Android</span></p>

Shuts down the running application and closes the UI.

### getResourceLocation(path)


**Parameters:** 

- path: *string*
  - the path of a resource relative to the application root.

**Returns:** *string*

Returns the URL for a given resource that is bundled with the app. Can be used to access app resources like images, videos, etc. Note that these resources can only be accessed in read-only mode.

### installPatch(url, callback)


**Parameters:** 

- url: *string*
  - the URL to fetch a patch from.
- callback: *(error: Error\|null, patch: any\|null) => void*
  - a callback function to be called when the installation has finished or failed. In case of a failure, the callback will receive a parameter `error` that contains an Error object. If the installation succeeds, this parameter will be `null` and a second parameter will contain the parsed content of the file `patch.json` from the installed patch.

**Note:** this API is provisional and may change in a future release.

Installs a patch from the given URL. When the patch is successfully installed, it will remain inactive until the application is reloaded. Not supported on Windows. For more information see [Patching a Tabris.js App](../patch.md)

### launch(url)


**Parameters:** 

- url: *string*
  - the URL to launch.

**Returns:** *Promise<void>*

Asks the operating system to open the given URL in an external app. Operating systems usually support a variety of URL schemes including `http`, `https`, `mailto`, `tel`, and `sms`. Apps can also register for custom URL schemes.

### registerFont(alias, file)


**Parameters:** 

- alias: *string*
  - an identifier for the registered font. The alias can be used in places where a font can be configures, e.g.: `TextView` or `GraphicalContext`
- file: *string*
  - the font file to register for later use. Similar to images paths, the file path can be absolute, relative or an URL.

On the Windows platform it is required to provide the font-family name to reference the font in the given file. The font-family name is provided as a fragment postfix to the file name. For example `arial.ttf#Arial` can be used the load a font named 'Arial' from the file 'arial.ttf'. The file also has to be bundled with the app to work, loading it remotely (e.g. via the developer app) will not work.

Allows to register a font to use throughout the app. Once a font is registered its alias can be used to apply the font where ever a font can be configured, e.g. in `TextView` or `GraphicalContext`. Tabris.js currently supports TrueType fonts (*.ttf) and OpenType fonts (*.otf).

### reload()
<p class="platforms"><span class="ios-tag" title="supported on iOS">iOS</span><span class="android-tag" title="supported on Android">Android</span></p>

Forces the running application to reload the main module and start over.


## Properties

### id


**read-only**<br/>
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

Example: `[{host: 'freegeoip.net', hash: 'sha256/+SVYjThgePRQxQ0e8bWTQDRtPYR/xBRufqyMoeaWteo=', algorithm: 'ECDSA256'}]`

For further details see https://www.owasp.org/index.php/Certificate_and_Public_Key_Pinning.

### version


**read-only**<br/>
Type: *string*

The user facing version number, e.g. '2.1-beta3'.

### versionCode


**read-only**<br/>
Type: *number*

An alternative version number used in app stores to identify different versions of an app. Usually incremented with each release. This property reflects the `versionCode` on Android and `CFBundleVersion` on iOS.


## Events

### background

Fired when the app becomes invisible. Either because another app is in the foreground or the user has returned to the home screen.
### backNavigation

Fired when the back button is pressed on Android.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **preventDefault**: *() => void*
    Call to suppress the default back navigation behavior.


### foreground

The event is fired when the app starts or when it returns from the background.
### idChanged

Fired when the [*id*](#id) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*id*](#id).


### pause

Fired when the app is not the interaction target of the user anymore. Usually preceded by `resume`.
### pinnedCertificatesChanged

Fired when the [*pinnedCertificates*](#pinnedCertificates) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *any[]*
    The new value of [*pinnedCertificates*](#pinnedCertificates).


### resume

Fired when the app is visible and ready to interact with the user. The event is preceded by either `foreground` (the app becomes visible again) or `pause` (the app regains ability to interact with user).
### terminate
<p class="platforms"><span class="ios-tag" title="supported on iOS">iOS</span><span class="android-tag" title="supported on Android">Android</span></p>
Fired when the app is being destroyed. After this callback no more interaction with the app is possible.
### versionChanged

Fired when the [*version*](#version) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *string*
    The new value of [*version*](#version).


### versionCodeChanged

Fired when the [*versionCode*](#versionCode) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *number*
    The new value of [*versionCode*](#versionCode).





## Example
```js
const {Composite, TextView, Button, app, ui, device} = require('tabris');

// React to application hibernation, resume and back navigation

let paused = 0;

createTextView('Id', app.id);
createTextView('Version', app.version);
createTextView('Version Code', app.versionCode);

new Composite({
  left: 0, top: 'prev() 16', right: 0,
  height: 1,
  background: '#E8E8E8'
}).appendTo(ui.contentView);

let label = new TextView({
  left: 16, top: 'prev() 16', right: 16,
  font: 'italic 14px',
  text: 'You can press home and reopen the app to it to see how long you were away.'
}).appendTo(ui.contentView);

new Button({
  left: 16, right: 16, bottom: 16,
  text: 'Reload app'
}).on('select', () => app.reload())
  .appendTo(ui.contentView);

if (device.platform === 'Android') {
  new Button({
    left: 16, right: 16, bottom: 'prev() 16',
    text: 'Close app'
  }).on('select', () => app.close())
    .appendTo(ui.contentView);
}

app.on('pause', () => paused = Date.now())
  .on('resume', () => {
    if (paused > 0) {
      let diff = Date.now() - paused;
      label.text = ' Welcome back!\n You were gone for ' + (diff / 1000).toFixed(1) + ' seconds.';
    }
  });

app.on('backNavigation', (event) => {
  event.preventDefault();
  label.text = 'Back navigation prevented.';
});

function createTextView(key, value) {
  let composite = new Composite({left: 16, top: 'prev() 8', right: 16}).appendTo(ui.contentView);
  new TextView({text: key}).appendTo(composite);
  new TextView({text: value, left: 128}).appendTo(composite);
}
```
## See also

- [Snippet showing various capabilities of the `App` object](https://github.com/eclipsesource/tabris-js/tree/v2.4.1/snippets/app.js)
- [Snippet to register and use an external font](https://github.com/eclipsesource/tabris-js/tree/v2.4.1/snippets/textview-font-external.js)
