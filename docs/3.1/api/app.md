---
---
# Object "app"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`App`](app.md)</span>

Provides information about the application.


Constructor | *private*
Singleton | `app`
Namespace |`tabris`
Direct subclasses | *None*
JSX support | *No*


See also:
  
[<span class='language jsx'>JSX</span> Displaying app properties](https://playground.tabris.com/?gitref=v3.1.0&snippet=app-info.jsx)  
[<span class='language jsx'>JSX</span> Displaying app events](https://playground.tabris.com/?gitref=v3.1.0&snippet=app-events.jsx)  
[<span class='language jsx'>JSX</span> Launching an url](https://playground.tabris.com/?gitref=v3.1.0&snippet=app-launch.jsx)  
[<span class='language js'>JS</span> Register and use an external font](https://playground.tabris.com/?gitref=v3.1.0&snippet=textview-font-external.js)

## Methods

### close()
<p class="platforms"><span class='android-tag' title='supported on Android'>Android</span></p>


Shuts down the running application and closes the UI.

Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### getResourceLocation(path)



Returns the URL for a given resource that is bundled with the app. Can be used to access app resources like images, videos, etc. Note that these resources can only be accessed in read-only mode.


Parameter|Type|Optional|Description
-|-|-|-
path | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The path of a resource relative to the application root.


Returns <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>

### launch(url)



Asks the operating system to open the given URL in an external app. Operating systems usually support a variety of URL schemes including `http`, `https`, `mailto`, `tel`, and `sms`. Apps can also register for custom URL schemes.


Parameter|Type|Optional|Description
-|-|-|-
url | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The URL to launch.


Returns <span style="white-space:nowrap;">`Promise&lt;void&gt;`</span>
See also:
  
[<span class='language jsx'>JSX</span> app-launch.jsx](https://playground.tabris.com/?gitref=v3.1.0&snippet=app-launch.jsx)

### registerFont(alias, file)



Allows to register a font to use throughout the app. Once a font is registered its alias can be used to apply the font where ever a font can be configured, e.g. in `TextView` or `GraphicalContext`. Tabris.js supports TrueType fonts (*.ttf) and OpenType fonts (*.otf).


Parameter|Type|Optional|Description
-|-|-|-
alias | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | An identifier for the registered font. The alias can be used as a font family, e.g. in the `font` properties of `TextView` and `Button`.
file | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | No | The font file to register for later use. Similar to images paths, the file path can be absolute, relative or an URL.


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>

### reload(url?)



Closes the running application and either loads a different app at the given `url` or reloads the current app when no `url` is given.


Parameter|Type|Optional|Description
-|-|-|-
url | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | Yes | An optional url to an app to launch


Returns <span style="white-space:nowrap;">[`void`](https://www.typescriptlang.org/docs/handbook/basic-types.html#void)</span>


## Properties

### debugBuild


Returns `false` if this app was build build in production mode, otherwise `true`. In production mode no debugger can be attached to the JavaScript VM.

Type | <span style="white-space:nowrap;">[`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.



### id


Uniquely identifies the app.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.



### pinnedCertificates


Enables certificate pinning for HTTP requests. When pinned certificates are defined for a host, connections to this host will only be permitted if the server provides a matching certificate. Connections to hosts that are not in the list are not affected.

Certificate pinning affects the following components: XHR/fetch, WebSockets and image loading. It does *not* affect WebViews.

The list of pinned certificates has to be in the form of `[{host: <string>, hash: <string>, algorithm: <RSA2048|RSA4096|ECDSA256>}, ..]`.

- The `host` attribute denotes the host name (including subdomain) of the host to be pinned ([wildcards allowed](https://en.wikipedia.org/wiki/Wildcard_DNS_record)).
- The `hash` attribute is the base64 encoded sha256 fingerprint of the _subjectPublicKeyInfo_, prefixed with `sha256/`.
- The `algorithm` attribute denotes the public key algorithm of the SSL certificate and can have the values `RSA2048`, `RSA4096` or `ECDSA256`. This attribute is only required on iOS.

Example: `[{host: 'freegeoip.net', hash: 'sha256/+SVYjThgePRQxQ0e8bWTQDRtPYR/xBRufqyMoeaWteo=', algorithm: 'ECDSA256'}]`

For further details see https://www.owasp.org/index.php/Certificate_and_Public_Key_Pinning.

Type | <span style="white-space:nowrap;">`any[]`</span>
Settable | *Yes*
Change events | *Yes*




### trustedCertificates


Adds a set of certificates to validated ssl connections against. The certificates are applied in addition to the system wide default certificates.

The `ArrayBuffer` entries of the `trustedCertificates` array consist of the bytes of the certificate files. On Android the certificate file has to be a _*.pem_ (Privacy Enhanced Mail) file whereas on iOS  it has to be _*.der_ (Distinguished Encoding Rules) file.

Type | <span style="white-space:nowrap;">`ArrayBuffer[]`</span>
Settable | *Yes*
Change events | *Yes*




### version


The user facing version number, e.g. '2.1-beta3'.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *No*
Change events | *No*




This property can only be set via constructor. Once set, it cannot change anymore.



### versionCode


An alternative version number used in app stores to identify different versions of an app. Usually incremented with each release. This property reflects the `versionCode` on Android and `CFBundleVersion` on iOS.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *No*
Change events | *No*




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

Fired when the back button is pressed on Android.

Parameter|Type|Description
-|-|-
preventDefault | <span style="white-space:nowrap;">`() =&gt; void`</span> | Call to suppress the default back navigation behavior.

## Change Events

### pinnedCertificatesChanged

Fired when the [*pinnedCertificates*](#pinnedcertificates) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`any[]`</span> | The new value of [*pinnedCertificates*](#pinnedcertificates).

### trustedCertificatesChanged

Fired when the [*trustedCertificates*](#trustedcertificates) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`ArrayBuffer[]`</span> | The new value of [*trustedCertificates*](#trustedcertificates).

