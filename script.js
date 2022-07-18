console.log("this is google fonts website")

const extension = function () {
  const observerConfig = { childList: true }
  const copyButton = document.createElement('button');
  copyButton.innerText = 'copy';
  
  function onDrawerToggled(mutationList) {
    for(const mutation of mutationList) {
      console.log("mutation")
    }
    // const embedCode = document.querySelector('.embed-code__link')
    // console.log(embedCode);
    // if(embedCode){
    //   const parent = embedCode.parentElement;
    //   console.log("appended button")
    //   parent.append(copyButton);
    // }
  }
  
  function addButton() {
    
  }

  function run () {
    const targetNode = document.querySelector('.collection-drawer-layout-container')
    console.log(targetNode !== null ? 'target found': 'target is null')
    
    const observer = new MutationObserver(onDrawerToggled)
    observer.observe(targetNode, observerConfig);
  }
  
  return {run}
}();

chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { loaded } = obj;
  if (loaded){
    extension.run();
  }
})






// const observer = new MutationObserver(function() {
//   const embedCode = targetNode.querySelector('.embed-code__link');
//   const parent = embedCode.parentElement;
//
//   function copyLink () {
//     navigator.clipboard.writeText(embedCode.innerText).then(() => {
//       console.log("copied!")
//     })
//   }
//
//   const button = document.createElement('button');
//   button.innerText = 'copy';
//   button.addEventListener('click', copyLink);
//
//   parent.append(button);
// })
//
// observer.observe(targetNode, observerConfig)
