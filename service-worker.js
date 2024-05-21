async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}




chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({}, function (tabs) {
    tabs.forEach(function (tab) {
      console.log(tab);
    });
  })
  if (command === "open-popup") {
    // focus on search bar using omnibar api

    getCurrentTab().then((tab) => {
      console.log("tab id", tab.id);
      let id = tab.id;
      // do all the things here now that we have the current tab.
      chrome.scripting.executeScript({
        target: { tabId: id },
        files: ["overlay.js"]
      });
      chrome.scripting.insertCSS({
        files: ["styles.css"],
        target: { tabId: tab.id },
      });

    });
  }
});
