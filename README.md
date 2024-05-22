# chrome extension boilerplate simple

## Installation 🛠️

prerequisites:

- Developer Mode: Ensure developer mode is enabled in Chrome settings

1. Clone this repo
   `git clone ...`

1. Go to `chrome://extensions/` in Chrome

1. Click on `Load unpacked extension`

```text
🗒️ note: there's no build process here, so we can just select the whole directory
```

## how to pack and publish this extension

confusingly, `Pack`'ing the extension is not what's required for publishing. We actually have to zip the extension, which we can do as follows:

`Note that: we're not zipping the whole directory - but only the contents, since the zip file will be unpacked by the browser`

Now that we have this `.zip` file containing our project, we can

1. Navigate to Chrome Web Store Developer Dashboard [https://chrome.google.com/webstore/devconsole/](https://chrome.google.com/webstore/devconsole/)
2. Choose `New Item`, and upload our `.zip` file.

## prepping for publishing to the app store

- [ ] Update the `manifest.json` file with the correct information
