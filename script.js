let button = document.getElementById('myButton')

let createBox =  function() {
    let newBox = document.createElement('div');
    newBox.style.cssText = `top: ${Math.floor(Math.random() * 680)}px; left: ${Math.floor(Math.random() * 980)}px`;
    newBox.className = 'dollar'
    newBox.addEventListener('click', function() {
        console.log('I was clicked!');
        createBox();
    })
    let gameboard = document.getElementById('gameBoard');
    gameboard.appendChild(newBox)
}

let listOfDollars = document.getElementsByClassName('dollar');

listOfDollars[0].addEventListener('click', function() {
        createBox();
    })
