---
title: "Darkmode First Development"
excerpt: "Dark mode has become increasingly popular among users, and it's not just about mobile-first development anymore; it's also about considering dark mode from the very beginning of your application's creation. In this article, we'll discuss the importance of embracing dark mode in your development process."
coverImage: "/assets/blog/darkmode-first-development/more-tools.png"
date: "2023-11-29T16:17:27.000Z"
author:
  name: Tyler Alexander
  picture: "/assets/blog/authors/tyler.jpg"
ogImage:
  url: "/assets/blog/darkmode-first-development/more-tools.png"
---

# DevDiscoveries - Exploring Dark Mode Development

## Have You Considered Dark Mode First Development?

Dark mode has become increasingly popular among users, and it's not just about mobile-first development anymore; it's also about considering dark mode from the very beginning of your application's creation. In this article, we'll discuss the importance of embracing dark mode in your development process.

### The Unexpected Challenge

When I embarked on creating a new application from scratch, everything seemed to be going smoothly until I viewed it on my iPhone. To my surprise, the HTML input elements appeared black, making them barely visible. This issue caught me off guard, and I only discovered it after deploying the application to Heroku and testing it on various devices using my phone.

It was clear that I needed to start thinking about both mobile and dark mode development simultaneously. To tackle this challenge and ensure a seamless user experience, I began researching solutions that would allow me to test dark mode live during the development phase.

### A Bright Solution

My quest for a solution led me to explore Google Chrome DevTools, where I stumbled upon a valuable feature tucked away in the Settings > More Tools > Rendering Tab. 

![Chrome DevTools More Tools Setting](/assets/blog/darkmode-first-development/more-tools.png)

Within the Rendering tab, I found the option to "Enable automatic dark mode," which I promptly checked.

Now I could see (or unable to see in this case *smile cry emoji* 😂 ) what so many potential users would experience when they have dark mode selected as a setting in their operating systems!

![Rendering Tab in the Console Drawer with "Enable automatic dark mode" checked](/assets/blog/darkmode-first-development/rendering-drawer.png)

### Keyboard Shortcut for Convenience

Additionally, I discovered a handy keyboard shortcut for switching between dark and light modes within the developer tools. You can open the developer tools and press Ctrl/Cmd + Shift + P, then type "dark" or "light." Be sure to select the rendering options from the menu to switch the simulated dark/light mode without affecting the devtools' theme.

![Ctrl/Cmd + Shift + P Shortcut to Open the Command Menu](/assets/blog/darkmode-first-development/command-menu.png)

This shortcut opens a quick autocomplete search for panels, drawers, and all the features within DevTools, enhancing your development efficiency.

Make sure to visit the DevTools documentation for shortcuts at this link: [DevTools Shortcuts Documentation](https://developer.chrome.com/docs/devtools/shortcuts/)

### Further Exploration

In summary / In conclusion, I've gained valuable insight into a feature that previously kept both me and my users in the dark. 

I hope I have opened your eyes to this issue as well, or at least potentially entertained you with *schadenfreude*.

If you're interested in more articles like this, stay tuned as I continue to explore my own DevDiscoveries and uncover exciting features in DevTools.

*What other articles would you be interested in?*
I'm personally looking forward to delving deeper into my own DevDiscoveries to learn more exciting features in devtools.

**Cited Sources:**
- [Google Chrome DevTools Shortcuts](https://developer.chrome.com/docs/devtools/shortcuts/)
- [Useful Chrome and Firefox DevTools Tips and Shortcuts](https://www.smashingmagazine.com/2021/02/useful-chrome-firefox-devtools-tips-shortcuts/#:~:text=Cmd%2FCtrl%20%2B%20Shift%20%2B%20P,used%20on%20the%20current%20page.)
- [Quick Developer Tools Tip: Simulating Dark/Light Color Mode](https://dev.to/codepo8/quick-developer-tools-tip-simulating-dark-light-colour-mode-1cpg#:~:text=You%20can%20open%20the%20developer,theme%20of%20the%20devtools%20themselves.&text=Switching%20the%20simulated%20dark%2Flight%20mode%20in%20developer%20tools%20via%20keyboard.)