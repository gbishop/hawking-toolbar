## Primary Functions and Objectives ##
  * Provide a simple, limited-input navigation mechanism between linked web pages based on document hyperlinks
  * Provide a simple, limited-input mechanism for viewing all the content on web pages

## General Design Principles ##
  * Visual Accessibility
    * When links are highlighted, they should be easily seen while not disturbing the content of the page.
    * Consider color schemes, blinking, etc. to meet visual accesibility needs of users
  * Creation of two types of toolbars:
    * simple toolbar for highly disabled users that navigates proprietary fixed size pages based on two input keys
    * An advanced toolbar that has added functionality to allow navigation of normal Internet pages based on 1-3 input keys


## Requirements (prioritized) ##
### Primary Requirements ###
_The Primary Requirements are those necessary to create the Simple Toolbar for the UNC Literacy Center_
  1. DONE - Easily accessible mechanism for iterating through all the hyperlinks of a web document
  1. DONE - Visually accessible highlighting of hyperlinks on screen
  1. DONE - Simple mechanism for selecting a highlighted link to "click" on
  1. DONE - Functionality with limited input (1 or 2 keys)
  1. DONE - Logical usage and input sequences based on limited input ability (1 or 2 keys)
  1. DONE - A simple, intuitive design, user interface, and interaction
  1. DONE - Implement an "auto iteration" mode that automatically iterates through the links of a page when the page is loaded
  1. DONE - Implement a mechanism to toggle between auto iteration and manual iteration of links.
  1. DONE - Implement trapping functionality, where trapping is defined as limiting the user to accessing only the hyperlinks in a page and not the additional toolbar functionality. Thus, the user is "trapped" in the page to navigate and does not access functionality such as the browser history, homepage, etc.
  1. DONE - Have the ability to parse these types of links (Prioritized):
    1. <a href=''> tags surrounding text or <img> tags<br>
<ol><li><div> tags and other html elements with onClick properties<br>
</li><li>Buttons with onClick properties<br>
</li><li>Any other objects/elements with clickable properties where CSS may affect the display attribute of the object.<br>
</li></ol><ol><li>DONE - There should be a preferences and settings menu from which a non-disabled user can customize the toolbar to fit the individual needs of the disabled user. The preferences and settings menu should allow the customization of:<br>
<ul><li>Hyperlink highlighting (visual nature of how the link will be displayed)<br>
</li><li>Whether or not the links are automatically stepped through when the page is loaded<br>
</li><li>Customizing mapping of input keys corresponding to all actions needed to navigate or view a page.<br>
</li><li>Stepping speed of hyperlink selection (how fast it goes to the next link)<br>
</li><li>Overall should really be focused on trying to customize the toolbar for anyone’s reaction and or usage abilities<br>
</li></ul></li><li>DONE - Allow the administrator to customize the number of input switches needed to use the toolbar (this may require additional logic scenarios).</li></ol>

<h3>Secondary Requirements</h3>
<i>The Secondary Requirements are those necessary to implement the Advanced Hawking Toolbar</i>
<ol><li>Functionality allowing the user to scroll through and read a page even if there are no links on the page defined as "scrolling mode"<br>
</li><li>Ability of the user to access browser history such as back, foward, homepage, favorites, etc.<br>
</li><li>Implement a mechanism to toggle between auto iteration and scrolling mode where scrolling mode is simply activated by turning auto iteration mode off</li></ol>

<h2>User Types</h2>
<ul><li>UNC Literacy Center User<br>
</li><li>Disabled User<br>
</li><li>Administrator</li></ul>

<h2>Toolbar Layouts and Design</h2>
<i>Two types of toolbars will be created in this project:</i>
<ul><li>Literacy Center Toolbar<br>
<ul><li>Purpose: To provide UNC Literacy Center Users with the simplest functionality toolbar with an extremely simple 2 button input interface to the toolbar.<br>
</li><li>Design Goal: Make the toolbar have only able to iterate through the hyperlinks on the page. No scrolling functionality is needed here. The user will be trapped within a page that fits their browser and will only need to navigate between 2-3 links. The toolbar would also support the user only haveing one switch for input which could be acheived via auto iteration.</li></ul></li></ul>

<ul><li>Hawking Toolbar<br>
<ul><li>Purpose: To provide disabled users with more functionality and scrolling capabilities with a more advanced yet still intuitive button set on the toolbar.<br>
</li><li>Design Goal: Implement more features such as scrolling and text size changing or printing options that emulate a more robust browser experience. The user will still be using two input switches to operate the toolbar but the design will include a more extensive feature set to allow for a richer browsing experience. It should enable them to get out on the web and explore.</li></ul></li></ul>

<h2>Use Cases</h2>
User<br>
<ol><li>Toggle between Auto/Manual Iteration Mode<br>
</li><li>Selection of Hyperlink<br>
</li><li>Page Scrolling</li></ol>

Administrator<br>
<ol><li>Setup<br>
</li><li>Activate or deactivate the toolbar<br>
</li><li>Change the auto iteration speed<br>
</li><li>Turn off auto-iteration mode<br>
</li><li>Change the Link Appearance<br>
</li><li>Map keys to toolbar/navigation actions</li></ol>

<h2>Use Case Details</h2>
<i>These use case details describe the functionality of the toolbar</i>

<b>U1: Toggle between Auto/Manual Iteration Mode<br>
<blockquote>Through a well defined method, the user will be able to turn off automatic iteration mode in order to enter manual iteration mode. Likewise, the user shall be able to enable automatic iteration mode while in manual mode.</blockquote></b>

<b>U2: Selection of Hyperlink</b>
<blockquote>Once a user highlights a hyperlink using auto or manual iteration, the use of a control switch shall allow them to select this hyperlink as if they clicked on it with a mouse in order to navigate to that page.</blockquote>

<b>U3: Page Scrolling</b>
<blockquote>Page scrolling allows the user to scroll down a page without Hyperlinks using one or more control switches. If the user has only one control switch, then page scrolling will scroll a defined screen width each time until the bottom is reached, at which time the next press of the switch returns them to the top of the page. Users with two switches may pick up the added functionality of scrolling up and down with the switches.</blockquote>

<b>A1: Activate or Deactivate the toolbar</b>
<blockquote>In the preferences popup menu, there will be a "General" tab that has a check box to activate or deactivate the toolbar. Deactivating the toolbar will disable scanning of hyperlinks while saving the user configuration and not forcing  a restart of firefox to disable the system.</blockquote>

<b>A1: Toggle between Manual and Auto Scanning</b>
<blockquote>On the "Scanning" tab in the preferences menu, there will be an option to choose between Manual and Auto Scanning or Iteration of hyperlinks.</blockquote>

<b>A3: Change the Link Appearance</b>
<blockquote>On the "Appearance" tab in the user preferences menu, the administrator can choose the highlight color and width and the border color and width for the box that will highlight links on the page. Also, the administrator can turn off highlighting or bordering.</blockquote>

<b>A4: Map keys to toolbar/navigation actions</b>
<blockquote>The User often uses special hardware called "switches" that emulate keystrokes. The "Switch Configuration" tab will allow the administrator to map keystrokes to certain actions on the toolbar to set up this special hardware.</blockquote>

<b>A5: Change the auto iteration speed</b>
<blockquote>On the "Scanning" tab, the administrator can change the speed that the plug-in iterates through the links on a page in either milliseconds or seconds.