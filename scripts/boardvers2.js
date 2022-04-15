"use strict";
const board = document.querySelector('.board');

let idNumber = 1,
    idLetter = 'a';


const squareWhite = `<div class = "square square__white" id ="${idLetter}${idNumber}"></div>`,
      squareBlack = `<div class = "square square__black" id ="${idLetter}${idNumber}"></div>`;

const boardDisplay = [];

for (let i = 0; i < 8; i++) {
    
    if (i % 2 === 0 ) {
        idNumber = i;
        boardDisplay.push(squareWhite);
    }else{
        idNumber = i;
        boardDisplay.push(squareBlack);
    }
}



for (let i = 0; i < boardDisplay.length; i++) {
    if (i === 0) {
        boardDisplay.forEach((element) => {
            board.insertAdjacentHTML("beforeend", element);
        });
    } else{
        boardDisplay.reverse().forEach(element => {
            board.insertAdjacentHTML("beforeend", element);
        });
    }
    
}



console.log(boardDisplay);

for (let i = 0; i < boardDisplay.length; i++) {
    idNumber = i;
    
}

