---
---
# Setter

Defines a set attributes to use with [`apply`](./Composite.md#applyrules) or as a [JSX element](../declarative-ui.md#jsx-specifics).

> :point_right: This function was previously known as `Set`, but renamed due to the name clash with the `Set` constructor. The old name still works for backwards compatibility.



See also:
  
[<span class='language jsx'>JSX</span> Example snippet using Setter with apply](https://github.com/eclipsesource/tabris-js/tree/v3.8.0/snippets/layout-dynamic.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.8.0&snippet=layout-dynamic.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>  
[<span class='language jsx'>JSX</span> Example snippet using Setter as an JSX element](https://github.com/eclipsesource/tabris-js/tree/v3.8.0/snippets/collectionview.jsx) <span style="font-size: 75%;">[<a href="https://playground.tabris.com/?gitref=v3.8.0&snippet=collectionview.jsx" style="color: cadetblue;">► Run in Playground</a>]</span>

## Methods

### Setter(target, attributes)



Creates a attributes object for the given widget type. This is meant to be used to creates rule sets for the [`apply`](./Composite.md#applyrules) method. The benefit of using this method as opposed to passing the object directly is twofold: <br/><br/>1. The IDE and/or TypeScript compiler can check that the attributes are matching the given widget type.
2. The `apply` method will only set the attributes if the selected widget matches the type given here. If there is a mismatch an error will be thrown.


Parameter|Type|Description
-|-|-
target | <code style="white-space: nowrap">WidgetConstructor&lt;WidgetType&gt;</code> | The type of the target widget.
attributes | <code style="white-space: nowrap">Attributes&lt;WidgetType&gt;</code> | A set of attributes (properties and listeners) for the given widget type.


Returns: <code style="white-space: nowrap">Attributes&lt;WidgetType&gt;</code>

### Setter(target, selector, attributes)



Creates a type-safe [`RuleSet`](./Composite.md#ruleset) targeting widgets given the selector. Can be passed to the [`apply`](./Composite.md#applyoptions-rules) function or attribute directly or as in an array of rules sets.


Parameter|Type|Description
-|-|-
target | <code style="white-space: nowrap">WidgetConstructor&lt;WidgetType&gt;</code> | The type of the target widget.
selector | <code style="white-space: nowrap"><a href="../selector.html" title="More about selectors">SelectorString</a></code> | Selector matching the target widget(s).
attributes | <code style="white-space: nowrap">Attributes&lt;WidgetType&gt;</code> | A set of attributes (properties and listeners) for the given widget type.


Returns: <code style="white-space: nowrap"><a href="Composite.html#ruleset" title="Composite Class Type">RuleSet</a></code>



## As JSX Element

This function can also be used as a [JSX element](../declarative-ui.md#jsx-specifics) inside another element to set on of its attributes. This is equivalent to setting the attribute directly in the parent element, but allows neatly inlining a multi-line expression such as an object literal or function. (Technically a JSX attribute can be multi-line as well, but this would look rather confusing.)

As a element `Setter` itself requires the following attributes:

Attribute | type | Description
-|-|-
`target`| `Constructor` | The type of the parent element.
`attribute`| `string` | The attribute to set.

The value to be set is then contained within the `Setter` element's body. Example:

```jsx
contentView.append(
  <Stack>
    <Button text='Simple dialog'>
      <Setter target={Button} attribute='onSelect'>
        {async () => {
          await AlertDialog.open('Hello').onClose.promise();
          $().only(TextView).text = 'Dialog closed';
        }}
      </Setter>
    </Button>
    <TextView/>
  </Stack>
);
```

This is equivalent to:

```jsx
contentView.append(
  <Stack>
    <Button text='Simple dialog' onSelect={showSimpleDialog}/>
    <TextView/>
  </Stack>
);

async function showSimpleDialog() {
  await AlertDialog.open('Hello').onClose.promise();
  $().only(TextView).text = 'Dialog closed';
}
```

Which is better is a matter of taste.

If an attribute is set both directly and via `Setter` an error will be thrown. Similarly, you can not specify multiple setter for the same attribute in the same parent element.

### Apply

The `Apply` element is `Setter` for the `apply` attribute. It can be used to invoke `apply` on a `<Composite>` element (or any of its subclasses):

```jsx
<Stack>
  <Apply>{ {TextView: {font: '24px'}} }</Apply>
  <TextView>Hello</TextView>
  <TextView>World</TextView>
</Stack>
```

Alternatively it can be used with attributes to create a single rule. A single composite can contain multiple `<Apply>` elements, so this syntax still allows multiple rules.

All attributes are optional.

Attribute | type | Description
-|-|-
`target`| `Constructor` | The type of the target widget(s).
`selector`| [`SelectorString`](./../selector.md) | The selector matching the target widget(s). If omitted the `target` is also the selector.
`attr`| `Attributes` | The attributes to apply to the target widget(s). Alternatively the attributes may be put in to the elements body.

Example:

```js
<Composite padding={8}>
  <Apply target={TextView} selector='#foo' attr={ {textColor: 'white' } }/>
  <Apply target={TextView} selector='#bar' attr={ {font: '24px'} }/>
  <Apply target={TextView}>
    { {
      top: 'prev() 10',
      background: '#66E'
    } }
  </Apply>
  <TextView id='foo'>Hello</TextView>
  <TextView id='bar'>World</TextView>
</Composite>
```

