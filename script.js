let listOfDollars = document.getElementsByClassName('dollar');
let dollarsArr = [...listOfDollars]
let gameboard = document.getElementById('gameBoard');

//Helper Functions
let deleteDom = function(parent, child){
    parent.removeChild(child);
    dollarsArr = [...document.getElementsByClassName('dollar')];
    console.log('list after delete', dollarsArr)
}


let chooseRandom = function(domElemArr) {
    let len = domElemArr.length
    let chosen = domElemArr[Math.floor(Math.random() * len)]

    // Give chosen box chosen id
    chosen.id = 'chosen';
}

//Make all dollars id = notchosen
dollarsArr.forEach(dollar => {
    dollar.id = 'notchosen'
    console.log('dollarid', dollar.id)
})


let createBox =  function(func) {
    //Make all boxes not chosen
    dollarsArr.forEach(dollar => {
        dollar.id = 'notchosen'
    })

    ///Create new box
    let newBox = document.createElement('div');
    newBox.style.cssText = `top: ${Math.floor(Math.random() * 680)}px; left: ${Math.floor(Math.random() * 980)}px`;
    newBox.className = 'dollar'
    gameboard.appendChild(newBox)
    console.log('new box', newBox)
    dollarsArr = [...document.getElementsByClassName('dollar')]

    func(createBox)

    ///Give one box createBox functionality
    chooseRandom(dollarsArr)
    console.log('dollars array after new', dollarsArr)

}

///Give all boxes conditional event listener
let addClick = function () {
    dollarsArr.forEach(dollar => {
        dollar.addEventListener('click', function () {
            if (dollar.id === 'notchosen') {
                deleteDom(gameboard, dollar)
            } else if (dollar.id === 'chosen') {
                createBox(addClick)
            }
        })
    })
}; 

//Code Begins
chooseRandom(dollarsArr);
addClick();

