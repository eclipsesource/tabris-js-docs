---
---
# Composite

An empty widget that can contain other widgets.
Includes [Widget API](Widget.md)

## Methods

### append(child, child*)


**Parameters:** 

- child: *[Widget](Widget.md)*
- child*: *[Widget](Widget.md)*

**Returns:** *[Widget](Widget.md)*

Adds the given widget(s) in the given order to the composite.

### append(collection)


**Parameters:** 

- collection: *[WidgetCollection](WidgetCollection.md)*

**Returns:** *[Widget](Widget.md)*

Adds all widgets in the given collection to the composite.


## Events

### "addchild" (widget, child, options)

**Parameters:** 

- widget: *[Composite](Composite.md)*
- child: *[Widget](Widget.md)*, the widget that was added as a child.
- options: *Object*

Fired when a child is added to this widget.

### "removechild" (widget, child, options)

**Parameters:** 

- widget: *[Composite](Composite.md)*
- child: *[Widget](Widget.md)*, the widget that was removed.
- options: *Object*, contains the index of the removed child widget: `{index: number})`

Fired when a child is removed from this widget.

