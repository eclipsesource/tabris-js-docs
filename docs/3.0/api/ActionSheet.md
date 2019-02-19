---
---
# Class "ActionSheet"

<span style="white-space:nowrap;">[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span> > <span style="white-space:nowrap;">[`NativeObject`](NativeObject.md)</span> > <span style="white-space:nowrap;">[`Popup`](Popup.md)</span> > <span style="white-space:nowrap;">[`ActionSheet`](ActionSheet.md)</span>

<div class="tabris-image"><figure><div><img srcset="img\android\ActionSheet.png 2x" src="img\android\ActionSheet.png" alt="ActionSheet on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img\ios\ActionSheet.png 2x" src="img\ios\ActionSheet.png" alt="ActionSheet on iOS"/></div><figcaption>iOS</figcaption></figure></div>

* Constructor: *public*
* Singleton: *No*
* Namespace: `tabris`
* JSX support:
  * Element: `<ActionSheet/>`
  * Child elements: [`<ActionSheetItem/>`](#actions)
  * Text content: *Sets [message](#message) property*
* Direct subclasses: *None*
--------
A pop up dialog that offers a selection. Is automatically disposed when closed.


## Constructor

### new ActionSheet(properties?)

Parameter|Type|Optional|Description
-|-|-|-
properties | <span style="white-space:nowrap;">`Properties<typeof ActionSheet>`</span> | Yes | Sets all key-value pairs in the properties object as widget properties.

## Static Methods

### open(actionSheet)



Parameter|Type|Optional|Description
-|-|-|-
actionSheet | <span style="white-space:nowrap;">[`ActionSheet`](ActionSheet.md)</span> | No | The action sheet to open
* Returns: <span style="white-space:nowrap;">[`ActionSheet`](ActionSheet.md)</span>

Makes the given action sheet visible. Meant to be used with inline-JSX. In TypeScript it also casts the given JSX element from `any` to an actual ActionSheet.


## Properties

### actions


* Type: <span style="white-space:nowrap;">`{title: string, image?: ImageValue, style?: 'default'` \| `'cancel'` \| `'destructive'}[]`</span>
* Settable: *Yes*
* JSX Content Type: `ActionSheetItem`



An array of objects describing the actions to be displayed. Each action must have a title and it can also have an image. Actions with the style `cancel` or `destructive` are displayed in a special way.

When using ActionSheet as an JSX element its child elements are mapped to this property. Therefore
```jsx
<ActionSheet>{actions}</ActionSheet>
```
 has the same effect as:
```jsx
<ActionSheet actions={actions} /> 
```
The `ActionSheetItem` element needs to be imported from the `tabris` module separately and has the same attributes as the property type.

### message


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *Yes*
* JSX Content Type: `string`



A descriptive message for the available actions.

When using ActionSheet as an JSX element the element content is mapped to this property. Therefore
```jsx
<ActionSheet>Hello World</ActionSheet>
```
 has the same effect as:
```jsx
<ActionSheet message='Hello World' />
```


### title


* Type: <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span>
* Settable: *Yes*



The title of the action sheet.


## Events

### close

Parameter|Type|Description
-|-|-
action | <span style="white-space:nowrap;">`{title: string, image: ImageValue, style: 'default'` \| `'cancel'` \| `'destructive'}` \| [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)</span> | A copy of the selected action as an instance of ActionSheetItem. If no action was selected the value is `null`.
index | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)</span> | The index of the selected action. If no action was selected the value is `null`.

Fired when the action sheet was closed.

### select

Parameter|Type|Description
-|-|-
action | <span style="white-space:nowrap;">`{title: string, image: ImageValue, style: 'default'` \| `'cancel'` \| `'destructive'}`</span> | A copy of the selected action as an instance of ActionSheetItem.
index | <span style="white-space:nowrap;">[`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)</span> | The index of the selected action.

Fired when an action was selected. Note: on iOS, tapping outside of an ActionSheet will also fire a `select` event. Its parameter will be an index of a button with type `cancel`. This happens despite the fact that no button has been pressed.

## Change Events

### titleChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*title*](#title).

Fired when the [*title*](#title) property has changed.

### messageChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">[`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)</span> | The new value of [*message*](#message).

Fired when the [*message*](#message) property has changed.

### actionsChanged

Parameter|Type|Description
-|-|-
value | <span style="white-space:nowrap;">`{title: string, image?: ImageValue, style?: 'default'` \| `'cancel'` \| `'destructive'}[]`</span> | The new value of [*actions*](#actions).

Fired when the [*actions*](#actions) property has changed.

