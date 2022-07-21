
const sideDrawerObserver = new MutationObserver(onCollectionDrawChanged)

function onCssRuleClicked(e){
  let text = e.currentTarget.innerText;
  navigator.clipboard.writeText(text).then(() => {console.log('copied css rule! ' + text)})
}

function onHtmlCodeClicked(e) {
  let text = e.currentTarget.innerText;
  navigator.clipboard.writeText(text).then(() => {console.log('copied html code! ' + text)})
}

function createClickEvents() {
  const clickToCopy = 'click-to-copy'
  // create html code click
  const htmlCodeContainer = document.querySelector('gf-selection-embed-code [class*="embed-code"]')
  if(htmlCodeContainer && !htmlCodeContainer.classList.contains(clickToCopy)){
    // console.log("adding html click event")
    htmlCodeContainer.classList.add(clickToCopy)
    htmlCodeContainer.addEventListener('click', onHtmlCodeClicked)
  }
  
  // for each font create css code click
  const cssRules = document.querySelectorAll('gf-selection-sample-css li')
  if(cssRules){
    cssRules.forEach((rule) => {
      if(!rule.classList.contains(clickToCopy)){
        // console.log('adding a css rule click')
        rule.classList.add(clickToCopy)
        rule.addEventListener('click', onCssRuleClicked)
      }
    })
  }
}

function onCollectionDrawChanged() {
  // console.log('sideDrawContainer changed')
  createClickEvents()
}

function run(){
  const targetDrawerNode = document.querySelector('.collection-drawer-layout-container');
  sideDrawerObserver.observe(targetDrawerNode, { childList: true, subtree: true})
  createClickEvents()
}

chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { loaded } = obj;
  if (loaded){
    run()
  }
})
