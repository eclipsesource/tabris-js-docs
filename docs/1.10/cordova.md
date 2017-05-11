# Cordova Plug-Ins Support
The Tabris.js API is primarily a UI/widget library, with some [additional browser-inspired APIs](w3c-api.md). To provide features not covered by either of these, Tabris.js can be extended with [Apache Cordova](http://cordova.apache.org/) plug-ins.

The JavaScript API documentation of a Cordova plug-ins is also valid in Tabris.js, with one minor exception: It is **not** necessary to listen to the `deviceready` event before accessing plug-in API. All plug-ins will be ready when the applications main module is loaded.

## Default Plug-Ins
While using the [Tabris.js Developer App](getting-started.md), your application can directly access the following pre-packaged plug-ins:

* [Badge](https://www.npmjs.com/package/de.appplant.cordova.plugin.badge)
* [Camera](https://www.npmjs.com/package/cordova-plugin-camera)
* [Device Motion](https://www.npmjs.com/package/cordova-plugin-device-motion)
* [Dialogs](https://www.npmjs.com/package/cordova-plugin-dialogs)
* [Network Information](https://www.npmjs.com/package/cordova-plugin-network-information)
* [Toast](https://www.npmjs.com/package/cordova-plugin-x-toast)
* [BarcodeScanner](https://www.npmjs.com/package/phonegap-plugin-barcodescanner)
* [Google Analytics](https://www.npmjs.com/package/com.cmackay.plugins.googleanalytics)
* [Google Play Services](https://www.npmjs.com/package/cordova-plugin-googleplayservices)

These plug-ins have been tested with Tabris.js and a [demo](https://github.com/eclipsesource/tabris-js/tree/master/examples/cordova) can be found among the Tabris.js examples.

Please note, default plug-ins are only included in the debug version of an app. If you want to use them in the release version, you should add them via `<plugin>` tags in the Cordova `config.xml` file: [Adding Plug-Ins](build.md#adding-plugins).

## Other Cordova Plug-Ins
To use Cordova Plug-Ins not part of the Tabris.js developer app you need to add them during the [build](build.md) process. You can either create a release-ready version of your own app, or a enhanced version of the developer app that contains the additional Plug-Ins (set *debug* mode to `ON`).

Most of the Plug-Ins will work out of the box but not all. This is because Tabris.js uses a **native UI** and **no HTML5**. As a result all Plug-Ins that manipulate the DOM will not work.

Plug-Ins that have been tested with Tabris.js are tracked as [GitHub issues](https://github.com/eclipsesource/tabris-js/issues?utf8=%E2%9C%93&q=label%3A%22compatibility+cordova%22). If the Plug-In is confirmed to work the issue is closed. Please feel free to add issues for Plug-Ins that you tested.
