# Composite
An empty widget that can contain other widgets.
Includes [Widget](Widget.md)

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


## Events
### "addchild" (widget, child, options)

**Parameters:** 

- widget: *this*
- child: *[Widget](Widget.md)*, the widget that was added as a child.
- options: *any*

Fired when a child is added to this widget.

### "removechild" (widget, child, options)

**Parameters:** 

- widget: *this*
- child: *[Widget](Widget.md)*, the widget that was removed.
- options: *{index: number}*, contains the index of the removed child widget, e.g. `{index: number}`

Fired when a child is removed from this widget.

