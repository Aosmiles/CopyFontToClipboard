
let alreadyLoaded = false;

function createButton() {
  const embedCodeNode = document.querySelector('.embed-code__link')
  if(embedCodeNode){
    const button = document.createElement('button');
    button.innerText = 'copy';
    button.style.marginTop = '10px'
    button.addEventListener('click', () => {
      navigator.clipboard.writeText(embedCodeNode.innerText).then(() => {
        console.log("copied!")
      })
    })
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
