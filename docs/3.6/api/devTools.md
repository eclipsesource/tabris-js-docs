---
---
# Object "devTools"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a> > <a href="#" >DevTools</a>

The `devTools` object provides methods that can assist in App development.


Type: | <code style="white-space: nowrap">DevTools extends <a href="NativeObject.html" title="NativeObject Class Reference">NativeObject</a></code>
Constructor: | private
Singleton: | `devTools`
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | None
JSX Support: | No


See also:
  
[<span class='language jsx'>JSX</span> devtools.jsx](https://playground.tabris.com/?gitref=v3.6.1&snippet=devtools.jsx)

## Methods

### hideUi()



Hides the developer tools UI if currently visible. Note that this can cause a re-layout since the [`contentView`](./ContentView.md) grows.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>

### isUiVisible()



Returns `true` if the developer tools UI is currently visible.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

### showUi()



Shows the developer tools UI if available and not already visible. Returns `true` if the UI is now visible. Returns `false` if the UI can not be shown [because `EnableDeveloperConsole` is not set to `true` in `config.xml`](../build.md#preferences).

Note this causes a re-layout since the [`contentView`](./ContentView.md) shrinks.

Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type" title="View &quot;boolean&quot; on MDN">boolean</a></code>

