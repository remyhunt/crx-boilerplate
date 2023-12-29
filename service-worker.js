async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

chrome.commands.onCommand.addListener((command) => {
  if (command === "open-popup") {
    getCurrentTab().then((tab) => {
      console.log("tab id", tab.id);
      let id = tab.id;
      chrome.scripting.executeScript({
        target: { tabId: id },
        files: ["overlay.js"]
      });
    });
  }
});
