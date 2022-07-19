
let alreadyLoaded = false;

function copyText() {
  navigator.clipboard
    .writeText(document.querySelector('[class*="embed-code"]').innerText)
    .then(() => {
    console.log("copied!")
  })
}

function createButton() {
  const embedCodeNode = document.querySelector('[class*="embed-code"]')
  // const embedCodeNode = document.querySelector('.embed-code__link')
  if(embedCodeNode){
    const button = document.createElement('button');
    button.id = "copy-font-link-button";
    button.innerText = 'copy';

    button.addEventListener('click', copyText)
    embedCodeNode.parentElement.append(button)
  }
}

function run(){
  alreadyLoaded = true;
  
  const shoppingBagButton = document.querySelector('gf-shopping-bag')
  shoppingBagButton.addEventListener('click', () => {
    createButton()
  })
  createButton();
}

chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { loaded } = obj;
  if (loaded && !alreadyLoaded){
    run()
  }
})

