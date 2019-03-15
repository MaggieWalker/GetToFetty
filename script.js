let dollarsArr = [...document.getElementsByClassName('dollar')]
let gameboard = document.getElementById('gameBoard');

let chooseRandom = function(domElemArr) {
    let len = domElemArr.length
    let chosen = domElemArr[Math.floor(Math.random() * len)]

    // Give chosen box chosen id
    chosen.id = 'chosen';
}

let makeNew = function(){
    let numBoxes = dollarsArr.length;
    let newBoxes = []
    for (let i = 0; i < numBoxes; i++) {
        let newBox = document.createElement('div');
        newBox.style.cssText = `top: ${Math.floor(Math.random() * 680)}px; left: ${Math.floor(Math.random() * 980)}px`;
        newBox.className = 'dollar'
        newBox.id = 'notchosen'
        gameboard.appendChild(newBox)
        newBoxes.push(newBox)
    }

    newBoxes.forEach(dollar => {
        dollar.addEventListener('click', function() {
            if (dollar.id === 'chosen') {
                makeNew();
                console.log('dollarsArr', dollarsArr)
            } else if (dollar.id === 'notchosen') {
                gameboard.removeChild(dollar);
                 dollarsArr = [...document.getElementsByClassName('dollar')];
                 console.log('dollarsArr after delete', dollarsArr)
            }
        })
    })

    dollarsArr = [...document.getElementsByClassName('dollar')]
}

let addClick = function() {
    dollarsArr.forEach(dollar => {
        dollar.addEventListener('click', function() {
            if (dollar.id === 'chosen') {
                makeNew();
                console.log('dollarsArr', dollarsArr)
            } else if (dollar.id === 'notchosen') {
                gameboard.removeChild(dollar);
                 dollarsArr = [...document.getElementsByClassName('dollar')];
                 console.log('dollarsArr after delete', dollarsArr)
            }
        })
    })
}

chooseRandom(dollarsArr)
addClick()
