## Why?

The native Microsoft Teams application for Linux is not well maintained, so we switched to the PWA in Google Chrome, which works rather well.
We still want to use firefox as our default browser and not maintain active login sessions in multiple browsers.

## How does it work?

This little experiment introduces two new schemes for (ftl and ftls for **f**irefox **t**eams **l**inks) and an browser extension for chrome. Clicked links in the Teams PWA are opened in Chrome and the extension modifies https to flts and http to flt, which causes Chrome to prompt for approval to open the app asigned to this scheme, in our case firefox.

## Installation

1. clone this repo
1. make the firefox-ftl.desktop file available in your system: `sudo cp ubuntu/firefox-ftl.desktop /usr/share/applications/`
1. install the chrome extension
1. associate the schemes with the desktop file:
```BASH
xdg-mime default firefox-ftl.desktop x-scheme-handler/ftl
xdg-mime default firefox-ftl.desktop x-scheme-handler/ftls
```