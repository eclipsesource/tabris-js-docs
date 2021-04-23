---
---
# Global object "crypto"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >Crypto</a>

The global `crypto` object provides an implementation of the `RandomSource` interface that can be used to generate cryptographically secure random numbers.


Type: | <code style="white-space: nowrap">Crypto extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a></code>
Constructor: | private
Singleton: | `crypto`
Namespace: |<a href="../modules.html#startup" >global</a>
Direct subclasses: | None
JSX Support: | No



See also:
  
[<span class='language ts'>TS</span> crypto.ts](https://github.com/eclipsesource/tabris-js/tree/v3.7.2/snippets/crypto.ts) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.7.2&snippet=crypto.ts" style="color: cadetblue;">► Run in Playground</a>]</span>

## Methods

### getRandomValues(typedArray)



Generates random numbers.


Parameter|Type|Description
-|-|-
typedArray | <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays" title="View &quot;typed arrays&quot; on MDN">TypedArray</a></code> | A typed array which will be filled with random numbers. The *same* array is also returned by this method.


Returns: <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays" title="View &quot;typed arrays&quot; on MDN">TypedArray</a></code>


## Properties

### subtle



Type: |<code style="white-space: nowrap"><a href="SubtleCrypto.html" title="SubtleCrypto Class Reference">SubtleCrypto</a></code>
Settable: | No





