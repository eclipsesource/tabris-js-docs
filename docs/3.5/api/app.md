---
---
# Object "app"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a> > <a href="#" >App</a>

Provides information about the application and allows to handle global application ui events.


Type: | <code style="white-space: nowrap">App extends <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a></code>
Constructor: | private
Singleton: | `app`
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


See also:
  
[<span class='language jsx'>JSX</span> Displaying app properties](https://playground.tabris.com/?gitref=v3.5.0&snippet=app-info.jsx)  
[<span class='language jsx'>JSX</span> Displaying app events](https://playground.tabris.com/?gitref=v3.5.0&snippet=app-events.jsx)  
[<span class='language jsx'>JSX</span> Launching an url](https://playground.tabris.com/?gitref=v3.5.0&snippet=app-launch.jsx)  
[<span class='language js'>JS</span> Register and use an external font](https://playground.tabris.com/?gitref=v3.5.0&snippet=textview-font-external.js)  
[<span class='language jsx'>JSX</span> Share various types of data with the `share()` API](https://playground.tabris.com/?gitref=v3.5.0&snippet=share.jsx)

## Methods

### close()
<p class="platforms"><span class='android-tag' title='supported on Android'>Android</span></p>


Shuts down the running application and closes the UI.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### getResourceLocation(path)



Returns the URL for a given resource that is bundled with the app. Can be used to access app resources like images, videos, etc. Note that these resources can only be accessed in read-only mode.


Parameter|Type|Description
-|-|-
path | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The path of a resource relative to the application root.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>

### launch(url)



Asks the operating system to open the given URL in an external app. Operating systems usually support a variety of URL schemes including `http`, `https`, `mailto`, `tel`, and `sms`. Apps can also register for custom URL schemes.


Parameter|Type|Description
-|-|-
url | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The URL to launch.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a></code>
See also:
  
[<span class='language jsx'>JSX</span> app-launch.jsx](https://playground.tabris.com/?gitref=v3.5.0&snippet=app-launch.jsx)

### registerFont(alias, file)



Allows to register a font to use throughout the app. Once a font is registered its alias can be used to apply the font where ever a font can be configured, e.g. in `TextView` or `GraphicalContext`. Tabris.js supports TrueType fonts (*.ttf) and OpenType fonts (*.otf).


Parameter|Type|Description
-|-|-
alias | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | An identifier for the registered font. The alias can be used as a font family, e.g. in the `font` properties of `TextView` and `Button`.
file | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The font file to register for later use. Similar to images paths, the file path can be absolute, relative or an URL.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### reload(url?)



Closes the running application and either loads a different app at the given `url` or reloads the current app when no `url` is given.


Parameter|Type|Description
-|-|-
url | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | An optional url to an app to launch *Optional.*


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### share(data)



Asks the operating system to share data with another installed app. The returned promise resolves successfully when the data was shared with another app. The resolved promise contains a string providing platform specific information about the share target. In case sharing was not possible or the share operation has been canceled by the user, the promise is rejected with an appropriate error message.

The behavior of this API follows the [W3C Web Share API](https://www.w3.org/TR/web-share/).

In order to be able to share an image to the photo app on iOS, the Tabris.js app has to include the text string `NSPhotoLibraryAddUsageDescription` in its plist file. The string is used in the native permission dialog. See the [`'camera' permissions`](../permissions.md#category-camera) docs for examples on how to configure the string.


Parameter|Type|Description
-|-|-
data | <code style="white-space: nowrap">{<br/>&nbsp;&nbsp;title: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a>, // An informative text to show in the share dialog. optional<br/>&nbsp;&nbsp;text: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a>, // A piece of text to share with another app. optional<br/>&nbsp;&nbsp;url: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a>, // A url to share with another app. On iOS the content of the `url` is previewed in the native share dialog. On Android it is treated as regular text. When both `text` and `url` are given on Android the two strings are concatenated with a blank space as defined in the [W3C Web Share API](https://www.w3.org/TR/web-share/). optional<br/>&nbsp;&nbsp;files: <a href="File.html" title="File Class Reference">File</a>[] // An array of `File` objects to share with another app. The files need to have a `name` and mime `type` set. optional<br/>}</code> | The data to share. The object must contain at least one of the properties: `title`, `text`, `url` or `files`.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" title="View &quot;Promise&quot; on MDN">Promise</a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a>&gt;</code>


## Properties

### debugBuild


Returns `false` if this app was build build in production mode, otherwise `true`. In production mode no debugger can be attached to the JavaScript VM or native runtime.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | Not supported




### id


Uniquely identifies the app.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | Not supported




### idleTimeoutEnabled


Allows to control the device idle timout. When disabled the device will not go into sleep mode and turn off the screen to safe battery power.

The `idleTimeoutEnabled` will disable any system wide enabled idle settings while the app is in the foreground.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>
Default: | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">true</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`idleTimeoutEnabledChanged`](#idletimeoutenabledchanged)




### pinnedCertificates


Enables certificate pinning for HTTP requests. When pinned certificates are defined for a host, connections to this host will only be permitted if the server provides a matching certificate. Connections to hosts that are not in the list are not affected.

Certificate pinning affects the following components: XHR/fetch, WebSockets and image loading. It does *not* affect WebViews.

The list of pinned certificates has to be in the form of `[{host: <string>, hash: <string>, algorithm: <RSA2048|RSA4096|ECDSA256>}, ..]`.

- The `host` attribute denotes the host name (including subdomain) of the host to be pinned ([wildcards allowed](https://en.wikipedia.org/wiki/Wildcard_DNS_record)).
- The `hash` attribute is the base64 encoded sha256 fingerprint of the _subjectPublicKeyInfo_, prefixed with `sha256/`.
- The `algorithm` attribute denotes the public key algorithm of the SSL certificate and can have the values `RSA2048`, `RSA4096` or `ECDSA256`. This attribute is only required on iOS.

Example: `[{host: 'freegeoip.net', hash: 'sha256/+SVYjThgePRQxQ0e8bWTQDRtPYR/xBRufqyMoeaWteo=', algorithm: 'ECDSA256'}]`

For further details see https://www.owasp.org/index.php/Certificate_and_Public_Key_Pinning.

Type: |<code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a>[]</code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`pinnedCertificatesChanged`](#pinnedcertificateschanged)




### trustedCertificates


Adds a set of certificates to validated ssl connections against. The certificates are applied in addition to the system wide default certificates.

The `ArrayBuffer` entries of the `trustedCertificates` array consist of the bytes of the certificate files. On Android the certificate file has to be a _*.pem_ (Privacy Enhanced Mail) file whereas on iOS  it has to be _*.der_ (Distinguished Encoding Rules) file.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a>[]</code>
Settable: | <a href="../widget-basics.html#widget-properties" >Yes</a>
Change Event: | [`trustedCertificatesChanged`](#trustedcertificateschanged)




### version


The user facing version number of the app.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | Not supported




### versionCode


An alternative version number used in app stores to identify different versions of an app. Usually incremented with each release. This property reflects the `versionCode` on Android and `CFBundleVersion` on iOS.

Type: |<code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code>
Settable: | <a href="../widget-basics.html#widget-properties" >No</a>
Change Event: | Not supported





## Events

### foreground

The event is fired when the app starts or when it returns from the background.

EventObject Type: <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a>&lt;<a href="#" >App</a>&gt;</code>

This event has no additional parameter.
### resume

Fired when the app is visible and ready to interact with the user. The event is preceded by either `foreground` (the app becomes visible again) or `pause` (the app regains ability to interact with user).

EventObject Type: <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a>&lt;<a href="#" >App</a>&gt;</code>

This event has no additional parameter.
### pause

Fired when the app is not the interaction target of the user anymore. Usually preceded by `resume`.

EventObject Type: <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a>&lt;<a href="#" >App</a>&gt;</code>

This event has no additional parameter.
### background

Fired when the app becomes invisible. Either because another app is in the foreground or the user has returned to the home screen.

EventObject Type: <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a>&lt;<a href="#" >App</a>&gt;</code>

This event has no additional parameter.
### terminate

Fired when the app is being destroyed. After this callback no more interaction with the app is possible.

 On Android the terminate event is fired when closing the app via the back navigation or when the system shuts down the app to reclaim memory. In case the app is hard killed by eg. clearing it from the app switcher, the event is not fired.

 On iOS the event might not always be fired reliably due to the scheduling behavior of the underlying operating system.

It is therefore recommended to use the event to clean up resources but not to rely on it for mission critical operations.

EventObject Type: <code style="white-space: nowrap"><a href="EventObject.html" title="EventObject Class Reference">EventObject</a>&lt;<a href="#" >App</a>&gt;</code>

This event has no additional parameter.
### keyPress

<p class="platforms"><span class='android-tag' title='supported on Android'>Android</span></p>Fired when a hardware key is pressed. Note that these events stem from physical hardware, not from the virtual keyboard.

When invoking `event.preventDefault()` the key event is not propagated to the widget hierarchy. However, a `TextInput` with focus will still receive the key event.

EventObject Type: <code style="white-space: nowrap">AppKeyPressEvent&lt;<a href="#" >App</a>&gt;</code>

Property|Type|Description
-|-|-
action | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'up'</a> &#124; <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">'down'</a></code> | The action of this key event.
altKey | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | The pressed state of the ALT key.
character | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type" title="View &quot;string&quot; on MDN">string</a></code> | The character generated by the specified key and modifier key state combination.
ctrlKey | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | The pressed state of the CTRL key.
deviceId | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The id for the device that this event came from. An id of zero indicates that the event didn't come from a physical device and maps to the default keymap. The other numbers are arbitrary and you shouldn't depend on the values.
functionKey | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | The pressed state of the FUNCTION key.
keyCode | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The key code of the key event. It represents the physical key that was pressed, not the Unicode character.
preventDefault | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a></code> | Call to suppress the key events to be dispatched to the apps widget hierarchy. Note that a `TextInput` with focus will still receive the event and add a character to its text accordingly.
shiftKey | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | The pressed state of the SHIFT key.
time | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" title="View &quot;number&quot; on MDN">number</a></code> | The time this event occurred, in the android.os.SystemClock#uptimeMillis time base.

### backNavigation

<p class="platforms"><span class='android-tag' title='supported on Android'>Android</span></p>Fired when a back navigation is invoked by the user.

EventObject Type: <code style="white-space: nowrap">AppBackNavigationEvent&lt;<a href="#" >App</a>&gt;</code>

Property|Type|Description
-|-|-
preventDefault | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" title="View &quot;Function&quot; on MDN">Function</a></code> | Call to suppress the default back navigation behavior.

## Change Events

### pinnedCertificatesChanged

Fired when the [pinnedCertificates](#pinnedcertificates) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >App</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="View &quot;Array&quot; on MDN">Array</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a title="Literally any JavaScript value">any</a>[]</code> | The new value of [pinnedCertificates](#pinnedcertificates).

### trustedCertificatesChanged

Fired when the [trustedCertificates](#trustedcertificates) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >App</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="View &quot;Array&quot; on MDN">Array</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" title="View &quot;ArrayBuffer&quot; on MDN">ArrayBuffer</a>[]</code> | The new value of [trustedCertificates](#trustedcertificates).

### idleTimeoutEnabledChanged

Fired when the [idleTimeoutEnabled](#idletimeoutenabled) property has changed.

EventObject Type: <code style="white-space: nowrap"><a href="../types.html#propertychangedeventtargettype-valuetype" title="PropertyChangedEvent&lt;TargetType, ValueType&gt;">PropertyChangedEvent</a>&lt;<a href="#" >App</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a>&gt;</code>

Property|Type|Description
-|-|-
value | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code> | The new value of [idleTimeoutEnabled](#idletimeoutenabled).

