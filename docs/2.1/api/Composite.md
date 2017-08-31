---
---
# Composite

Extends [Widget](Widget.md)

An empty widget that can contain other widgets.

Import this type with "`const {Composite} = require('tabris');`"

## Methods

### append(...widgets)


**Parameters:** 

- ...widgets: *Widget[]*

**Returns:** *this*

Adds the given widgets to the composite.

### append(widgets)


**Parameters:** 

- widgets: *Widget[]*

**Returns:** *this*

Adds all widgets in the given array to the composite.

### append(widgets)


**Parameters:** 

- widgets: *[WidgetCollection](WidgetCollection.md)*

**Returns:** *this*

Adds all widgets in the given collection to the composite.


## Properties

### padding


Type: *BoxDimensions|number*, default: `0`

Additional space to add inside the widget's bounds. If set to a number, this padding will be applied on all four sides.


## Events

### addChild

Fired when a child is added to this widget.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **child**: *[Widget](Widget.md)*
    The widget that is added as a child.

- **index**: *number*
    Denotes the position in the children list at which the child widget is added.


### paddingChanged

Fired when the [*padding*](#padding) property has changed.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **value**: *BoxDimensions|number*
    The new value of [*padding*](#padding).


### removeChild

Fired when a child is removed from this widget.

#### Event Parameters 
- **target**: *this*
    The widget the event was fired on.

- **child**: *[Widget](Widget.md)*
    The widget that is removed.

- **index**: *number*
    The property `index` denotes the removed child widget's position in the children list.`





## Example
```js
const {Composite, TextView, ui} = require('tabris');

// Create composites and append children to them

let composite1 = new Composite({
  left: 0, top: 0, bottom: 0, right: '50%',
  background: '#f3f3f3'
}).appendTo(ui.contentView);

new TextView({
  left: 0, right: 0, top: '50%',
  alignment: 'center',
  text: 'Composite 1'
}).appendTo(composite1);

let composite2 = new Composite({
  left: '50%', top: 0, bottom: 0, right: 0,
  background: '#eaeaea'
}).appendTo(ui.contentView);

new TextView({
  left: 0, right: 0, top: '50%',
  alignment: 'center',
  text: 'Composite 2'
}).appendTo(composite2);
```