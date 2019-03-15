// let listOfDollars = document.getElementsByClassName('dollar');
// let dollarsArr = [...listOfDollars]
// let gameboard = document.getElementById('gameBoard');

//Helper Functions
// let deleteDom = function(parent, child){
//     parent.removeChild(child);
//     dollarsArr = [...document.getElementsByClassName('dollar')];
// }


// let chooseRandom = function(domElemArr) {
//     let len = domElemArr.length
//     let chosen = domElemArr[Math.floor(Math.random() * len)]

//     // Give chosen box chosen id
//     chosen.id = 'chosen';
//     console.log('chosen', chosen)
// }



// let createBox =  function(func) {
   
//     ///Create new box
//     let newBox = document.createElement('div');
//     newBox.style.cssText = `top: ${Math.floor(Math.random() * 680)}px; left: ${Math.floor(Math.random() * 980)}px`;
//     newBox.className = 'dollar'
//     gameboard.appendChild(newBox)
//     dollarsArr = [...document.getElementsByClassName('dollar')]

//     //Make all boxes not chosen
//     dollarsArr.forEach(dollar => {
//         dollar.id = 'notchosen'
//     })

//     func() //should not take createBox as func?

//     ///Give one box createBox functionality
//     chooseRandom(dollarsArr)
//     console.log('dollars array after new', dollarsArr)

// }

// ///Give all boxes conditional event listener
// let addClick = function () {
//     dollarsArr = [...document.getElementsByClassName('dollar')]
//     dollarsArr.forEach((dollar, index) => {
//         console.log('all dollars', dollar, index)
//         dollar.addEventListener('click', function () {
//             if (dollar.id === 'notchosen') {
//                 console.log('dollar in if', dollar)
//                 deleteDom(gameboard, dollar)
//             } else if (dollar.id === 'chosen') {
//                 console.log('dollar in if', dollar)
//                 createBox(addClick)
//             }
//         })
//     })
// }; 

// //Code Begins
// chooseRandom(dollarsArr);
// addClick();

////////////////////////////////////////////////////////////////////////////////////
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
