//chrome.webNavigation.onCommitted.addListener(function (details) {
//chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
chrome.runtime.onInstalled.addListener(() => {
	console.log("GitHub Prime: Extension installed.");
});
