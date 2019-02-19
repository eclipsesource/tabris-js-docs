---
---
# Object "app"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`App`](App.md)</span>

* Constructor: *private*
* Singleton: `app`
* Namespace: `tabris`
* JSX support: *No*
* Direct subclasses: *None*
--------
Provides information about the application.


Example:

```js
app.on("pause", () => pauseVideo());
```

Example:
```js
import {Composite, TextView, Button, app, contentView, device} from 'tabris';

// React to application hibernation, resume and back navigation

let paused = 0;

createTextView('Id', app.id);
createTextView('Version', app.version);
createTextView('Version Code', app.versionCode);

new Composite({
  left: 0, top: 'prev() 16', right: 0,
  height: 1,
  background: '#E8E8E8'
}).appendTo(contentView);

const label = new TextView({
  left: 16, top: 'prev() 16', right: 16,
  font: 'italic 14px',
  text: 'You can press home and reopen the app to it to see how long you were away.'
}).appendTo(contentView);

new Button({
  left: 16, right: 16, bottom: 16,
  text: 'Reload app'
}).on('select', () => app.reload())
  .appendTo(contentView);

if (device.platform === 'Android') {
  new Button({
    left: 16, right: 16, bottom: 'prev() 16',
    text: 'Close app'
  }).on('select', () => app.close())
    .appendTo(contentView);
}

app.on('pause', () => paused = Date.now())
  .on('resume', () => {
    if (paused > 0) {
      const diff = Date.now() - paused;
      label.text = ' Welcome back!\n You were gone for ' + (diff / 1000).toFixed(1) + ' seconds.';
    }
  });

app.on('backNavigation', (event) => {
  event.preventDefault();
  label.text = 'Back navigation prevented.';
});

function createTextView(key, value) {
  const composite = new Composite({left: 16, top: 'prev() 8', right: 16}).appendTo(contentView);
  new TextView({text: key}).appendTo(composite);
  new TextView({text: value, left: 128}).appendTo(composite);
}
```
See also:

- [Snippet showing various capabilities of the `App` object](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/app.js)
- [Snippet to register and use an external font](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190219+1046/snippets/textview-font-external.js)

## Methods

### close()<p class="platforms"> < span class = 'android-tag' title = 'supported on Android' > Android < /span></p>

* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Shuts down the running application and closes the UI.

### getResourceLocation(path)



Parameter|Type|Optional|Description
-|-|-|-
path | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The path of a resource relative to the application root.
* Returns: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>

Returns the URL for a given resource that is bundled with the app. Can be used to access app resources like images, videos, etc. Note that these resources can only be accessed in read-only mode.

### launch(url)



Parameter|Type|Optional|Description
-|-|-|-
url | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The URL to launch.
* Returns: <span style="white-space:nowrap;">`Promise<void>`</span>

Asks the operating system to open the given URL in an external app. Operating systems usually support a variety of URL schemes including `http`, `https`, `mailto`, `tel`, and `sms`. Apps can also register for custom URL schemes.

### registerFont(alias, file)



Parameter|Type|Optional|Description
-|-|-|-
alias | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | An identifier for the registered font. The alias can then be used as a font family, e.g. in the `font` properties of `TextView` and `Button`.
file | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The font file to register for later use. Similar to images paths, the file path can be absolute, relative or an URL.
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Allows to register a font to use throughout the app. Once a font is registered its alias can be used to apply the font where ever a font can be configured, e.g. in `TextView` or `GraphicalContext`. Tabris.js supports TrueType fonts (*.ttf) and OpenType fonts (*.otf).

### reload(url?)



Parameter|Type|Optional|Description
-|-|-|-
url | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | Yes | An optional url to an app to launch
* Returns: <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

Closes the running application and either loads a different app at the given `url` or reloads the current app when no `url` is given.


## Properties

### id


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *No*



Uniquely identifies the app.

This property can only be set via constructor. Once set, it cannot change anymore.

### pinnedCertificates


* Type: <span style="white-space:nowrap;">`any[]`</span>
* Settable: *Yes*



Enables certificate pinning for HTTP requests. When pinned certificates are defined for a host, connections to this host will only be permitted if the server provides a matching certificate. Connections to hosts that are not in the list are not affected.

Certificate pinning affects the following components: XHR/fetch, WebSockets and image loading. It does *not* affect WebViews.

The list of pinned certificates has to be in the form of `[{host: <string>, hash: <string>, algorithm: <RSA2048|RSA4096|ECDSA256>}, ..]`.

- The `host` attribute denotes the host name (including subdomain) of the host to be pinned ([wildcards allowed](https://en.wikipedia.org/wiki/Wildcard_DNS_record)).
- The `hash` attribute is the base64 encoded sha256 fingerprint of the _subjectPublicKeyInfo_, prefixed with `sha256/`.
- The `algorithm` attribute denotes the public key algorithm of the SSL certificate and can have the values `RSA2048`, `RSA4096` or `ECDSA256`. This attribute is only required on iOS.

Example: `[{host: 'freegeoip.net', hash: 'sha256/+SVYjThgePRQxQ0e8bWTQDRtPYR/xBRufqyMoeaWteo=', algorithm: 'ECDSA256'}]`

For further details see https://www.owasp.org/index.php/Certificate_and_Public_Key_Pinning.

### trustedCertificates


* Type: <span style="white-space:nowrap;">`ArrayBuffer[]`</span>
* Settable: *Yes*



Adds a set of certificates to validated ssl connections against. The certificates are applied in addition to the system wide default certificates.

The `ArrayBuffer` entries of the `trustedCertificates` array consist of the bytes of the certificate files. On Android the certificate file has to be a _*.pem_ (Privacy Enhanced Mail) file whereas on iOS  it has to be _*.der_ (Distinguished Encoding Rules) file.

### version


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *No*



The user facing version number, e.g. '2.1-beta3'.

This property can only be set via constructor. Once set, it cannot change anymore.

### versionCode


* Type: <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
* Settable: *No*



An alternative version number used in app stores to identify different versions of an app. Usually incremented with each release. This property reflects the `versionCode` on Android and `CFBundleVersion` on iOS.

This property can only be set via constructor. Once set, it cannot change anymore.


## Events

### foreground

The event is fired when the app starts or when it returns from the background.

### resume

Fired when the app is visible and ready to interact with the user. The event is preceded by either `foreground` (the app becomes visible again) or `pause` (the app regains ability to interact with user).

### pause

Fired when the app is not the interaction target of the user anymore. Usually preceded by `resume`.

### background

Fired when the app becomes invisible. Either because another app is in the foreground or the user has returned to the home screen.

### terminate

Fired when the app is being destroyed. After this callback no more interaction with the app is possible.

### backNavigation

Parameter|Type|Description
-|-|-
preventDefault | <span style="white-space:nowrap;">`() => void`</span> | Call to suppress the default back navigation behavior.

Fired when the back button is pressed on Android.

## Change Events

### pinnedCertificatesChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`any[]`</span> | The new value of [*pinnedCertificates*](#pinnedCertificates).

Fired when the [*pinnedCertificates*](#pinnedCertificates) property has changed.

### trustedCertificatesChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`ArrayBuffer[]`</span> | The new value of [*trustedCertificates*](#trustedCertificates).

Fired when the [*trustedCertificates*](#trustedCertificates) property has changed.

