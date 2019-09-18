// script that runs on page-load in chrome
// https://developer.chrome.com/extensions/getstarted
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is light green.");
    });
  });