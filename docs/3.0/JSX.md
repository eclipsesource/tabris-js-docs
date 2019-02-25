---
---
# JSX

JSX is a proprietary extension to the JavaScript/TypeScript syntax that allows mixing code with XML-like declarations. Tabris 3 supports JSX out of the box in `.jsx` and `.tsx` files with any TypeScript compiler based projects. The only requirement is that in `tsconfig.json` the
`jsx` property is set to `"react"` and `jsxFactory` to `"JSX.createElement"`.

## Usage

In Tabris, JSX is used to create UI elements in a declarative manner. Every constructor for a Widget, WidgetCollection or Popup based class can be used as an JSX element.

Action | JavaScript/TypeScript | JSX
---|---|---
Create an instance|`new TextView()`|`<TextView />`
Set a string property*|`new TextView({text: 'foo'})`|`<TextView text='foo' />`
Set non-string property*|`new TextView({elevation: 3})`|`<TextView elevation={3} />`
Set property to true|`new TextView({markupEnabled: true})`|`<TextView markupEnabled />`
Register listener|`new TextView().onResize(cb)`|`<TextView onResize={cb} />`
Set properties object|`new TextView(props)`|`<TextView {...props} />`
Mix in properties object|`new TextView({text: 'foo', ...props})`|`<TextView text='foo' {...props} />`
Add new children|`new Composite().append(new TextView())`|`<Composite><TextView /></Composite>`
Add existing children|`new Composite().append(children)`|`<Composite>{children}</Composite>`

\* Some properties can also be set by putting the value between the opening and closing tag, like children. For `<TextView>foo</TextView>` sets the `text` property to `'foo'`. Properties that support this are marked as such in the API reference.

> :warning: In TypeScript JSX expressions themselves are type-safe, but their return type is `any`! So be extra careful when you assign them to a variable to give it the proper type.

To add multiple children to an existing parent you group them using `WidgetCollection`:

```jsx
// JavaScript/TypeScript:
contentView.append(
  new Button(),
  new TextView()
);

// JSX:
contentView.append(
  <WidgetCollection>
    <Button />
    <TextView />
  </WidgetCollection>
);
```

This is not necessary inside JSX elements:

```xml
<Composite>
  <Button />
  <TextView />
</Composite>
```

## Custom JSX Elements

JSX becomes a lot more powerful when creating your own elements. There are two ways to do this.

### Stateless Functional Components

A "stateless function component" (SFC) is essentially a factory that can be used as an JSX element. This can be any function that fits the following pattern:

* Name starts with an upper case.
* Returns a JSX supported value, e.g. a widget or array of widgets.
* Takes a plain object as the first parameter. (This represents the attributes.)
* Takes am array as the second parameter. (This represents the child elements.)

A SFC that initializes an existing widget with new default values could look like this:

```jsx
const StyledText = properties => <TextView textColor='red' {...properties} />;

// example usage:
contentView.append(<StyledText>Hello World!</StyledText>);
```

In TypeScript you need to give the proper type of the properties object and children:

```tsx
const StyledText = (properties: TextView['jsxProperties']) =>
  <TextView textColor='red' {...properties} />;
```

> :point-right: `TextView['jsxProperties']` resolves to the attributes supported by `TextView`. Explained in the next section.

### Custom Components

Any custom component (a user-defined class extending a built-in widget) can be used as a JSX element right away. The only requirement is that the constructor takes the properties object and passes it on to the base class in a `super()` call. All attributes are interpreted as either a property or a listener as you would expect.

In TypeScript the attributes that are available on the element are derived from the properties and events of the component:

* All public, writable properties except functions (methods) are valid attributes.
* All events defined via `Listeners` properties are also valid attributes.
* All child types accepted by the super type are still accepted.

This behavior can be modified by declaring a special (TypeScript-only) property called `jsxProperties`. The *type* of this property defines what JSX attributes are accepted. It must be an interface that includes some or all properties and event listeners supported by the class.

You best declare the property by extending the `jsxProperties` type of the base class (referenced as `BaseClass['jsxProperties']`) using the `&` type operator and  `JSXProperties` helper interface. It's a generic type based on your custom component class and a list (union type) of APIs you want to support as JSX attributes, e.g. `JSXProperties<BaseClass, 'prop1' | 'prop2' | 'prop3'>`.

This example adds JSX support for a property 'foo' and an event 'myEvent':

```ts
import {Composite, Listeners, JSXProperties} from 'tabris';

class CustomComponent extends Composite {

  // New API:
  public set foo(value: number) { /* ... */ }
  public get foo() { /* ... */ }
  public readonly onMyEvent: Listeners = new Listeners(this, 'myEvent');

  // Extend jsxProperties:
  protected readonly jsxProperties: Composite['jsxProperties'] & JSXProperties<CustomComponent, 'foo' | 'onMyEvent'>;

  // constructor, methods...

}
```
