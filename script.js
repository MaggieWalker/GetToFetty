let listOfDollars = document.getElementsByClassName('dollar');
let dollarsArr = [...listOfDollars]
let gameboard = document.getElementById('gameBoard');
let testDollar = document.getElementById('test')

//Helper Functions
let chooseRandom = function(domElemArr, func) {
    let len = domElemArr.length
    let chosen = domElemArr[Math.floor(Math.random() * len)]
    chosen.addEventListener('click', function() {
        func();
    })
    console.log("chosen random box", chosen)
}

let deleteDom = function(parent, child){
    return function(){
        parent.removeChild(child)
    }
}

let createBox =  function() {
    ///Create new box
    let newBox = document.createElement('div');
    newBox.style.cssText = `top: ${Math.floor(Math.random() * 680)}px; left: ${Math.floor(Math.random() * 980)}px`;
    newBox.className = 'dollar'
    gameboard.appendChild(newBox)
    console.log('new box', newBox)
    dollarsArr = [...dollarsArr, newBox]
    console.log('dollars array', dollarsArr)


    ///Give all boxes delete event listener
    // dollarsArr.forEach(dollar => {
    //     dollar.addEventListener('click', function(){
    //         deleteDom(gameboard, dollar)
    //     })
    // }); 

    dollarsArr.forEach(dollar => {
        dollar.addEventListener('click', deleteDom(gameboard, dollar))
    }); 


    ///Give one box createBox event listener
    chooseRandom(dollarsArr, createBox)
}

chooseRandom(dollarsArr, createBox);

// testDollar.addEventListener('click', function() {
//     deleteDom(gameboard, testDollar)
// })
