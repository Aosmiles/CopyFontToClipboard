

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

function appendButton() {
  const codeContainer = document.querySelector('gf-selection-embed-code');
  const currentButton = document.querySelector('#copy-font-link-button');
  if(codeContainer && !currentButton){
    codeContainer.append(button)
    console.log("button appended")
  }
}

function onCollectionDrawChanged() {
  console.log('sideDrawContainer changed')
  const codeContainer = document.querySelector('gf-selection-embed-code');
  // if(codeContainer){
  //   console.log('container exists')
  appendButton()
  // } else {
  //   console.log('container does not exist')
  // }
}

function run(){
  const targetNode = document.querySelector('.collection-drawer-layout-container');
  observer.observe(targetNode, config)
  appendButton()
}

chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { loaded } = obj;
  if (loaded){
    run()
  }
})
