let listOfDollars = document.getElementsByClassName('dollar');


//Helper Functions
let chooseRandom = function(domElement, func) {
    let len = domElement.length
    domElement[Math.floor(Math.random() * len)].addEventListener('click', function() {
        func();
    })
}

let deleteDom = function(parent, child) {
    parent.removeChild(child)
}



let createBox =  function() {
    let newBox = document.createElement('div');
    newBox.style.cssText = `top: ${Math.floor(Math.random() * 680)}px; left: ${Math.floor(Math.random() * 980)}px`;
    newBox.className = 'dollar'
    newBox.addEventListener('click', function() {
        chooseRandom(listOfDollars, createBox)
    })
    let gameboard = document.getElementById('gameBoard');
    gameboard.appendChild(newBox)
}

chooseRandom(listOfDollars, createBox);

