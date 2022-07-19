

// let pageLoaded = false;
const button = document.createElement('button');
button.id = "copy-font-link-button";
button.innerText = 'copy';
button.addEventListener('click', copyText)

const observer = new MutationObserver(onCollectionDrawChanged)
const config = { childList: true}

function copyText() {
  navigator.clipboard
    .writeText(document.querySelector('[class*="embed-code"]').innerText)
    .then(() => {
    console.log("copied!")
  })
}

function createButton() {
  const embedCodeNode = document.querySelector('gf-selection-embed-code');
  console.log("create button fired")

  if(embedCodeNode){
    embedCodeNode.append(button)
  }
}

function onCollectionDrawChanged() {
  console.log('sideDrawContainer changed')
  const codeContainer = document.querySelector('gf-selection-embed-code');
  if(codeContainer){
    console.log('container exists') // now add button
    createButton()
  } else {
    console.log('container does not exist')
  }
}

function run(){
  const targetNode = document.querySelector('.collection-drawer-layout-container');
  observer.observe(targetNode, config)
  // pageLoaded = true;
  //can't rely on this button
  // const shoppingBagButton = document.querySelector('.shopping-bag__toggle')
  // console.log(shoppingBagButton)
  // shoppingBagButton.addEventListener('click', createButton)
}

chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { loaded } = obj;
  if (loaded){
    run()
  }
})
