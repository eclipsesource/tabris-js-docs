---
---
# Class "Observable"

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a> > <a href="#" >Observable</a>

An Observable represents a sequence of values which may be observed. API based on the proposed Ecma TC39 Observable standard. It can be converted to an RxJS Observable via its [`from`](https://rxjs.dev/api/index/function/from) function.


Type: | <code style="white-space: nowrap">Observable&lt;T&gt; extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" title="View &quot;Object&quot; on MDN">Object</a></code>
Generics: | <span id="generics">T: *The type of the observed value. Defaults to <code style="white-space: nowrap"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" title="View &quot;undefined&quot; on MDN">undefined</a></code>.*<br/></span>
Constructor: | public
Singleton: | No
Namespace: |<a href="../modules.html#startup" >tabris</a>
Direct subclasses: | <code style="white-space: nowrap"><a href="Listeners.html" title="Listeners Class Reference">Listeners</a></code>
JSX Support: | No



See also:
  
[<span class='language tsx'>TSX</span> observable-events.tsx](https://github.com/eclipsesource/tabris-js/tree/v3.10.0/snippets/observable-events.tsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.10.0&snippet=observable-events.tsx" style="color: cadetblue;">► Run in Playground</a>]</span>  
[<span class='language tsx'>TSX</span> observable-mutations.tsx](https://github.com/eclipsesource/tabris-js/tree/v3.10.0/snippets/observable-mutations.tsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.10.0&snippet=observable-mutations.tsx" style="color: cadetblue;">► Run in Playground</a>]</span>  
[<span class='language tsx'>TSX</span> observable.tsx](https://github.com/eclipsesource/tabris-js/tree/v3.10.0/snippets/observable.tsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.10.0&snippet=observable.tsx" style="color: cadetblue;">► Run in Playground</a>]</span>

## Constructor

### new Observable(subscribe)

Parameter|Type|Description
-|-|-
subscribe | <code style="white-space: nowrap"><a href="Observable.html#subscriptionhandler" title="Observable Class Type">SubscriptionHandler</a>&lt;<a href="#generics" title="Generic Parameter&quot;T&quot;">T</a>&gt;</code> | Invoked whenever a new subscriber is registered. Passed an [object](./Observable.md#subscriber) through which values may be passed to the subscriber.

## Methods

### subscribe(observer)



Subscribes to this observable.


Parameter|Type|Description
-|-|-
observer | <code style="white-space: nowrap"><a href="Observable.html#partialobserver" title="Observable Class Type">PartialObserver</a>&lt;<a href="#generics" title="Generic Parameter&quot;T&quot;">T</a>&gt;</code> | Object with some or all of the callbacks of [`Subscriber`](./Observable.md#subscriber).


Returns: <code style="white-space: nowrap"><a href="Observable.html#subscription" title="Observable Class Type">Subscription</a></code>

### subscribe(next, error?, complete?)



Subscribes to this observable.


Parameter|Type|Description
-|-|-
next | <code style="white-space: nowrap">(<a href="#generics" title="Generic Parameter&quot;T&quot;">value</a>) => <a title="Literally any JavaScript value">any</a></code> | Callback invoked whenever the observed value changes.
error | <code style="white-space: nowrap">(<a title="Literally any JavaScript value">error</a>) => <a title="Literally any JavaScript value">any</a></code> | Callback invoked when the subscription encounters an error. *Optional.*
complete | <code style="white-space: nowrap">() => <a title="Literally any JavaScript value">any</a></code> | Callback invoked once when the subscription closes, either by itself or by calling `unsubscribe`. No other callbacks will be invoked from then on. *Optional.*


Returns: <code style="white-space: nowrap"><a href="Observable.html#subscription" title="Observable Class Type">Subscription</a></code>

## Static Methods

### mutations(source)



Creates an observable emitting the given source object once and then again whenever it fires property change events. It can be used with any widget, NativeObject instance, or object using @property or @prop decorators.

Events are aggregated, meaning multiple subsequent property changes may result in only one notification to the observer. It is guaranteed that this notification will occur before the next frame is rendered on screen.

The observable completes if the source object is disposed.

Limitations: The observable will not detect property changes that do not trigger change events, so plain objects, arrays, objects created by third-party libraries or instances of built-in ECMAScript types (such as Map) are not supported. Also, changes of `bounds` or any built-in property giving scroll offsets will *not* trigger the observable.


Parameter|Type|Description
-|-|-
source | <code style="white-space: nowrap"><a href="#generics" title="Generic Parameter&quot;T&quot;">T</a></code> | 


Returns: <code style="white-space: nowrap"><a href="#" >Observable</a>&lt;<a href="#generics" title="Generic Parameter&quot;T&quot;">T</a>&gt;</code>

See also:
  
[<span class='language tsx'>TSX</span> observable-mutations.tsx](https://github.com/eclipsesource/tabris-js/tree/v3.10.0/snippets/observable-mutations.tsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.10.0&snippet=observable-mutations.tsx" style="color: cadetblue;">► Run in Playground</a>]</span>



## Related Types

### SubscriptionHandler<T>

* JavaScript Type: `Function`
* TypeScript Type: `tabris.ImageLikeObject`

```ts
type SubscriptionHandler<T> = (subscriber: Subscriber<T>) => TeardownLogic;
```

This function is passed to a [`Observable` constructor](#constructor) to control the behavior of the observable. It is executed every time the [`subscribe`](#subscribeobserver) method is called. It is given a [`Subscriber`](#subscriber) object to send "next", "error" and "complete" messages to the respective callbacks. It may also return a [teardown function](#teardownlogic).

Example:

```js
new Observable(subscriber => {
  subscriber.next('foo');
  return {
    unsubscribe: () => doSomething()
  }
});
```

### TeardownLogic

* JavaScript Type: `Function`, `Object`
* TypeScript Type: `tabris.TeardownLogic`

```ts
type TeardownLogic = Function | {unsubscribe: Function} | void;
```

A function or object with an `unsubscribe` method. It is called once the subscription [is closed](#subscription). This can be used to free up resources that were allocated by the [subscription handler](#subscriptionhandler). For example, it may cancel a timer or de-register a listener.

### Subscriber<T>

* JavaScript Type: `Object`
* TypeScript Type: `tabris.Subscriber`

```ts
interface Subscriber<T> {
  closed: boolean;
  next: (value: T) => void;
  error: (value: any) => void;
  complete: () => void;
}
```

When calling the methods of this object the respective `next`, `error` and `complete` callbacks given to [`subscribe()`](#subscribeobserver) will be invoked. This may happen synchronously (while the [subscription handler](#subscriptionhandler) executes) or later (i.e. asynchronously), for example in a timer.

### PartialObserver<T>

* JavaScript Type: `Object`
* TypeScript Type: `tabris.PartialObserver`

```ts
interface PartialObserver<T> {
  next?: (value: T) => any;
  error?: (ex: any) => void
  complete?: () => any
}
```

A plain object to be passed to the [`subscribe()`](#subscribeobserver) method. It may implement some or all of the methods `next()`, `error()` and `complete()`. Alternatively, the [`subscribe()`](#subscribeobserver) method may be passed some or all of these callbacks directly.

### Subscription

* JavaScript Type: `Object`
* TypeScript Type: `tabris.Subscription`

```ts
interface Subscription {
  readonly closed: boolean;
  unsubscribe: () => void;
}
```

This object is returned by the [`subscribe()`](#subscribeobserver) method. Calling its `unsubscribe()` method ends the subscription. The callbacks will not by invoked any more and any resources associated with the subscription will be freed up.

