## Why?

The native Microsoft Teams application for Linux is not well maintained, so we switched to the [Teams PWA in Google Chrome](https://techcommunity.microsoft.com/t5/microsoft-teams-blog/microsoft-teams-progressive-web-app-now-available-on-linux/bc-p/3674458/highlight/true#M11387%2309), which works rather well.
We still want to use firefox as our default browser without maintaining active login sessions in multiple browsers. Clicking links in teams therefor becomes a bit annoying.

## How does it work?

This little experiment introduces two new schemes for (ftl and ftls for **f**irefox **t**eams **l**inks) and an browser extension for chrome. Clicked links in the Teams PWA are opened in Chrome and the extension modifies https to flts and http to flt, which causes Chrome to prompt for approval to open the `FTL Handler`. The FTL Handler is defined by the `firefox-ftl.desktop` file, which reverts the http/https replacement and opens the links in firefox. 

## Installation

1. clone this repo `git clone git@github.com:frederic-klein/teams-pwa-link-redirect.git`
1. make the firefox-ftl.desktop file available in your system: `sudo cp ubuntu/firefox-ftl.desktop /usr/share/applications/`
1. install the chrome extension
    1. open chrome
    1. go to [chrome://extensions/](chrome://extensions/)
    1. enable developer mode
    1. select Load unpacked
    1. select the cloned repo folder
    1. reopen the teams pwa or `ctrl+f5`
1. associate the schemes with the desktop file:
```BASH
xdg-mime default firefox-ftl.desktop x-scheme-handler/ftl
xdg-mime default firefox-ftl.desktop x-scheme-handler/ftls
```