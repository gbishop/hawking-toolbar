## Tutorials and References ##
This is an excellent tutorial on making a toolbar. Comprehensive an concise
  * [Born Geek Toolbar Tutorial](http://www.borngeek.com/firefox/toolbar-tutorial/)
This will be useful when we're making/saving preferences for the toolbar
  * [Toolbar Preferences](http://www.rietta.com/firefox/Tutorial/prefs.html)
These are references on using XUL, the structure the toolbar will be defined with
  * [XUL Reference on Mozilla](http://developer.mozilla.org/en/docs/XUL_Reference)
  * [XUL Planet](http://www.xulplanet.com/references/elemref/)
This is a site to download the "Extension Developers Extension" for Firefox which allows real-time editing.
  * [Extension Developers Extension](http://ted.mielczarek.org/code/mozilla/extensiondev/index.html)

I could use some help finding JavaScript references on specific things like detecting if an element is visible to the browser's current frame of view. I think GMail does something like this, because if you have an ongoing conversation, and expand each message (so it requres scrolling) a little box in the bottom right corner of your screen will appear with the name of the person who the next message is from, and it instantly updates once that message is in view (either disappears if nothing is after that or updates to the next person's name) If you have such a message, try it. I haven't had time to go through all of Google's external JavaScript functions to find where it's happening or even if they're doing it with javascript.

## Accessing Mozilla Browser Components ##
Mozilla Firefox uses XUL components to implement the GUI of its browser. All the components have ID's that can be found in the browser.xul file in the mozilla directory. You can access almost any mozilla component. In windows, the jar files can be found at C:\Program Files\Mozilla Firefox\chrome and for instance browser.jar->browser.xul contains the main browser gui in XUL.