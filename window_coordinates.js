let screenLog = document.querySelector(".box1");

screenLog.addEventListener('click', (e) => {
    screenLog.innerText = console.log(`
    DOMRect${JSON.stringify(document.querySelector('.box1').getBoundingClientRect())}
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}
    `); 
  });