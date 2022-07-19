
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if(tab.url && tab.url.includes('fonts.google.com') && changeInfo.status === 'complete'){
    // console.log('google fonts loaded')
    chrome.tabs.sendMessage(tabId, {
      loaded: true
    })
  }
})