//Global Variables
let dollarsArr = [...document.getElementsByClassName('dollar')]
let gameboard = document.getElementById('gameBoard');
let stats = document.getElementById('stats')

//Winning function
let didYouWin = function() {
    if (stats.innerHTML === '1/738') {
        return window.open('https://www.youtube.com/watch?v=SakjVgrK4ug&feature=youtu.be', window)
        //Play Fetty Wap!
    }
}


//Choose Random Box Helper Function
let chooseRandom = function(domElemArr) {
    let len = domElemArr.length
    let chosen = domElemArr[Math.floor(Math.random() * len)]

    // Give chosen box chosen id
    chosen.id = 'chosen';
}

//Make New Dollars Function
let makeNew = function(){
    let numDollars = dollarsArr.length;
    let newDollars = []
    //Double the dollars each time chosen box is clicked
    for (let i = 0; i < numDollars; i++) {
        let newBox = document.createElement('div');
        newBox.style.cssText = `top: ${15 + Math.floor(Math.random() * 680)}px; left: ${15 + Math.floor(Math.random() * 960)}px`;
        newBox.className = 'dollar'
        newBox.id = 'notchosen'
        gameboard.appendChild(newBox)
        newDollars.push(newBox)
    }
    //Add event listener to new boxes
    newDollars.forEach(dollar => {
        dollar.addEventListener('click', function() {
            if (dollar.id === 'chosen') {
                makeNew();
                stats.innerHTML = `1/${dollarsArr.length}`
                didYouWin()
            } else if (dollar.id === 'notchosen') {
                gameboard.removeChild(dollar);
                 dollarsArr = [...document.getElementsByClassName('dollar')];
                 stats.innerHTML = `1/${dollarsArr.length}`
                 didYouWin()
            }
        })
    })
    //Ensure all boxes are in dollarsArr
    dollarsArr = [...document.getElementsByClassName('dollar')]

    //Make all dollar ids 'notchosen' so we can choose a new random chosen dollar
    dollarsArr.forEach(dollar => {
        dollar.id = 'notchosen'
    })

    chooseRandom(dollarsArr)
}

//Add event listener to initial dollars
let addClick = function() {
    dollarsArr.forEach(dollar => {
        dollar.addEventListener('click', function() {
            if (dollar.id === 'chosen') {
                makeNew();
                stats.innerHTML = `1/${dollarsArr.length}`
                didYouWin()
            } else if (dollar.id === 'notchosen') {
                gameboard.removeChild(dollar);
                 dollarsArr = [...document.getElementsByClassName('dollar')];
                 stats.innerHTML = `1/${dollarsArr.length}`
                 didYouWin()
            }
        })
    })
}

//Initialize the gameboard
chooseRandom(dollarsArr)
addClick()
