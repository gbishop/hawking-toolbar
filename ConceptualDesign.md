## Conceptual Architecture Notes ##
The basic conceptual architecture of Hawking Tool is an event/input driven model. This model follows from the fact that the approach to building the Hawking Toolbar is a User Action Approach. Since the user's actions and ability to perform actions guide the basic design and implementation, the conceptual design approach is taken from the same angle.

## Input Mechanisms ##
The basic Hawking Toolbar input mechanism will consist of two main input switches mapped two keyboard keys as specified by the user and/or the hardware devices. These two switches will support

**Move** - The move switch will allow the user to move from the currently selected hyperlink, button, or feature to the next in order.

**Engage** - The engage switch allows the user to select the currently highlighted hyperlink, button, or feature as if clicking on it to prompt an action event to occur.

## Feature Modules ##
The Hawking Toolbar will implement a module interface that supports the creation of new code/feature modules that can easily be added to the toolbar. A few of the basic modules are:
  1. **Move Into Page Hyperlinks** - Allows the user to move down into the page from the toolbar to begin iterating through hyperlinks
  1. **Scrolling** - Supports user scrolling
  1. **Navigation** - Supports using Foward, Back, Refresh, Stop, Homepage, etc. buttons
  1. **Toggle Auto Iteration** - Toggle auto iteration on and off
  1. **Favorites** - Allows user to have bookmarked favorites
  1. **Text Size** - Allows user to change page Text Size
  1. **Help** - Takes the user to a local HTML Help page

In order to implement these and other modules, they must be build in an easily navigable way much like a heirachical menu in a cell phone but more user friendly and limited to only two input mechanism. Thus, basic module requirements have been made. The basic idea is that the Hawking Toolbar is the "home base" for the user. From there, he or she can move to access features as well as view and interact with page content.

**The Module Requirements are:**
  1. The module must be logically and easily navigable by using Move and Engage input switches.
  1. The module must have a visual component that can be placed on the Hawking Toolbar. This visual button/component may be one or more buttons that perform actions with the user presses the Engage switch.
  1. If the module must have an easy Exit mechanism that the user can access using the Move and Engage switches that returns them to the main Hawking Toolbar.

This architecture makes it very easy to create the Literacy Center Toolbar from the normal toolbar. In fact, all that is needed is to implement the basic "Move Into Page Hyperlinks" feature automatically upon page loading and possible the "Toggle Auto Iteration" feature.