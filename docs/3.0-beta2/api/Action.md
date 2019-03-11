---
---
# Class "Action"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Widget`](Widget.md)</span> > <span style="white-space:nowrap;">[`Action`](Action.md)</span>

An executable item that is integrated in the application's navigation menu. Add a *select* listener to react to action taps.


<div class="tabris-image"><figure><div><img srcset="img/android/Action.png 2x" src="img/android/Action.png" alt="Action on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/Action.png 2x" src="img/ios/Action.png" alt="Action on iOS"/></div><figcaption>iOS</figcaption></figure></div>

Constructor | *public*
Singleton | *No*
Namespace |`tabris`
Direct subclasses | <span style="white-space:nowrap;">[`SearchAction`](SearchAction.md)</span>
JSX support | Element: `<Action/>`<br/>Parent element: [`<NavigationView/>`](NavigationView.md)<br/>Child elements: *None*<br/>Text content: *Sets [title](#title) property*<br/>

## Example
```js
import {Action, NavigationView, contentView} from 'tabris';

const navigationView = new NavigationView({layoutData: 'fill'})
  .appendTo(contentView);

new Action({
  title: 'Settings',
  image: 'resources/settings.png'
}).onSelect(() => console.log('Settings selected'))
  .appendTo(navigationView);
```

See also:

- [Snippet for creating actions](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190311+1537/snippets/navigationview-action.js)
- [Actions - placement priorities](https://github.com/eclipsesource/tabris-js/tree/v3.0.0-beta2-dev.20190311+1537/snippets/navigationview-action-placementpriority.js)

## Constructor

### new Action(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<Action>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Properties

### image


Icon image for the action.

On iOS the `image` is tinted with the apps default accent color whereas on Android the `image` is shown as is. When an action is placed into a `NavigationView`, the `NavigationView` property `actionColor` can be used to adjust the action tint color.

Type | <span style="white-space:nowrap;">[`ImageValue`](../types.md#imagevalue)</span>
Settable | *Yes*




### placementPriority


Actions with higher placement priority will be placed at a more significant position in the UI, e.g. low priority actions could go into a menu instead of being included in a toolbar.

Type | `'low'` \| `'high'` \| `'normal'`
Default | `'normal'`
Settable | *Yes*




### title


The text to be displayed for the action.

When an action is placed into a `NavigationView`, the `NavigationView` property `actionTextColor` can be used to adjust the action title color on Android.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *Yes*
JSX content type | `string`




When using Action as an JSX element the element content is mapped to this property. Therefore
```jsx
<Action>Hello World</Action>
```
 has the same effect as:
```jsx
<Action title='Hello World' />
```



## Events

### select

Fired when the action is invoked.

## Change Events

### imageChanged

Fired when the [*image*](#image) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`ImageValue`](../types.md#imagevalue)</span> | The new value of [*image*](#image).

### placementPriorityChanged

Fired when the [*placementPriority*](#placementPriority) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*placementPriority*](#placementPriority).

### titleChanged

Fired when the [*title*](#title) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*title*](#title).

