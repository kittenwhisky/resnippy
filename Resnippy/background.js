console.log("background is running.");

// this console.log will not appear in the browser's console console.log()
// it's available in chrome://extensions - Inspect views background page

chrome.browserAction.onClicked.addListener(buttonClicked);
// above function requires "browser_action" : {} in manifest!

function buttonClicked(tab) {
  // console.log("button clicked.");
  let msg = {
    txt: "resnippy"
  }
  chrome.tabs.sendMessage(tab.id, msg);
}
