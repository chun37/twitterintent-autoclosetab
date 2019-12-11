browser.tabs.onUpdated.addListener(closeTab);

function closeTab (tabId, changeInfo, tab) {
    if (tab.url.indexOf('twitter.com/intent/tweet/complete') !== -1) {
        browser.tabs.remove(tabId);
    }
}