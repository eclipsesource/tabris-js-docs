---
---
# Class "Stack"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`Composite`](Composite.md)</span> > <span style="white-space:nowrap;">[`Stack`](Stack.md)</span>

A composite with the `layout` property initialized with a `Stack`. All children are automatically arranged in one vertical stack, starting from the top. The `layoutData` on the children is ignored.


Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | Element: `<Stack/>`<br/>Parent element: [`<Composite/>`](Composite.md) *and any widget extending* <span style="white-space:nowrap;">[`Composite`](Composite.md)</span><br/>Child elements: *Widgets*<br/>Text content: *Not supported*<br/>

## Example
```js
import {Stack, contentView} from 'tabris';

const stack = new Stack({
  layoutData: 'stretch',
  spacing: 16
}).appendTo(contentView);

stack.append(
   new TextView({text: 'top'}),
   new TextView({text: 'center'}),
   new TextView({text: 'bottom'})
);
```

See also:
  
[<span class='language jsx'>JSX</span> Creating a simple `Stack`](https://playground.tabris.com/?gitref=v3.1.0&snippet=stack.jsx)  
[<span class='language jsx'>JSX</span> Creating a `Stack` with horizontal alignment](https://playground.tabris.com/?gitref=v3.1.0&snippet=stack-alignment.jsx)  
[<span class='language jsx'>JSX</span> Creating a `Stack` with vertical alignment](https://playground.tabris.com/?gitref=v3.1.0&snippet=stack-valign.jsx)

## Constructor

### new Stack(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties&lt;Stack&gt;`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### alignment


Determines the horizontal placement of the children. For the `stretchX` value to work correctly the `Stack` needs to be given a width either by setting `width` or by setting `left` and `right`.

Type | <span style="white-space:nowrap;">`'left'` \| `'centerX'` \| `'stretchX'` \| `'right'`</span>
Default | `'left'`
Settable | *On creation*
Change events | *No*




This property can only be set via constructor or JSX. Once set, it cannot change anymore.

See also:
  
[<span class='language jsx'>JSX</span> stack-alignment.jsx](https://playground.tabris.com/?gitref=v3.1.0&snippet=stack-alignment.jsx)


### layout


The stack layout manager responsible for interpreting the [`layoutData`](./Widget.md#layoutdata) of the child widgets of this Composite.

Type | <span style="white-space:nowrap;">[`StackLayout`](StackLayout.md)</span>
Default | `StackLayout`
Settable | *On creation*
Change events | *No*




This property can only be set via constructor or JSX. Once set, it cannot change anymore.



### spacing


Additional space to add between the children in device independent pixel.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Default | `16`
Settable | *On creation*
Change events | *No*




This property can only be set via constructor or JSX. Once set, it cannot change anymore.



