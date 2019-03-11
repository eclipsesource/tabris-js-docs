---
---
# Class "StackLayout"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`Layout`](Layout.md)</span> > <span style="white-space:nowrap;">[`StackLayout`](StackLayout.md)</span>

Stack based layout manager. Can be set on the `layout` property of any `Composite` or widget extending `Composite` like `Page` or `Tab` widget. The `StackComposite` uses it as the default `layout`.<br/><br/> All children of the composite are automatically arranged in one vertical stack, starting from the top. The `layoutData` on the children is currently ignored.


Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | *None*
JSX support | *No*


## Example
```js
import {Composite, StackLayout} from 'tabris';

new Composite({layout: new StackLayout({spacing: 16, alignment: 'left'})});
```

## Constructor

### new StackLayout(parameterObject?)

Parameter|Type|Optional|Description
-|-|-|-
parameterObject | <span style="white-space:nowrap;">`{padding?: BoxDimensions` \| `number, spacing?: number, alignment?: 'left'` \| `'centerX'` \| `'stretchX'` \| `'right'}`</span> | Yes | Sets the padding and spacing properties. If padding is set to a number, that value will be used for all four edge values.

## Properties

### alignment


Determines the horizontal placement of the children. For the `stretchX` value to work correctly the composite needs to be given a width either by setting `width` or by setting `left` and `right`.

Type | <span style="white-space:nowrap;">`'left'` \| `'centerX'` \| `'stretchX'` \| `'right'`</span>
Default | `'left'`
Settable | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

### spacing


Additional space to add between the children in device independent pixel.

Type | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span>
Settable | *No*




This property can only be set via constructor. Once set, it cannot change anymore.

## Static Properties

### default


Instance of StackLayout used as the default `layout` property value of `StackComposite` widgets. Equivalent to `new StackLayout()`

Type | <span style="white-space:nowrap;">[`StackLayout`](StackLayout.md)</span>
Settable | *Yes*




