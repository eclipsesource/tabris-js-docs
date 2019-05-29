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

const navigationView = new NavigationView({layoutData: 'stretch'})
  .appendTo(contentView);

new Action({
  title: 'Settings',
  image: 'resources/settings.png'
}).onSelect(() => console.log('Settings selected'))
  .appendTo(navigationView);
```

See also:
  
[<span class='language jsx'>JSX</span> Creating a simple `Action`](https://playground.tabris.com/?gitref=v3.0.0&snippet=navigationview-action.jsx)  
[<span class='language jsx'>JSX</span> Using placement property](https://playground.tabris.com/?gitref=v3.0.0&snippet=navigationview-action-placement.jsx)

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
Change events | *Yes*




### placement


Actions with 'default' placement will be visible in the toolbar if enough space is available, otherwise moved to the overflow section. Setting the property to 'overflow' makes the action appear there exclusively. Lastly, 'navigation' puts the action in the position normally occupied by the drawer/back button. If multiple actions have this value only the first one is displayed.

Type | `'default'` \| `'overflow'` \| `'navigation'`
Default | `'default'`
Settable | *Yes*
Change events | *Yes*




### title


The text to be displayed for the action.

When an action is placed into a `NavigationView`, the `NavigationView` property `actionTextColor` can be used to adjust the action title color on Android.

Type | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
Settable | *Yes*
Change events | *Yes*
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

### placementChanged

Fired when the [*placement*](#placement) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*placement*](#placement).

### titleChanged

Fired when the [*title*](#title) property has changed.

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*title*](#title).

