// "use strict";

// let board = document.querySelector('.board');
// const squareRow = '<div class="square-row"></div>';

// for (let i = 0; i < 8; i++) {

//     board.insertAdjacentHTML('afterbegin', squareRow);
// }

// const squareVertically = document.querySelectorAll('.square-row');
// const squareRight = [];
// const squareWhite = '<div class = "square white"></div>';
// const squareBlack = `<div class ="square black"></div>`;
// let number = '';
// const squareNumber = `<div class ="square square__number">${number}</div>`;

// for (let i = 0; i < 8; i++) {
//     if (i%2) {
//         squareRight.push(squareBlack);
//     } else {
//         squareRight.push(squareWhite);
//     }
// }

// for (let i = 0; i < squareVertically.length; i++) {
//     if (i%2) {
//         squareVertically[i].insertAdjacentHTML('beforeend', squareRight.reverse().join(''));
//     } else {
//         squareVertically[i].insertAdjacentHTML('beforeend', squareRight.reverse().join(''));
//     }
    
// }

// let squareNumbers = [];

// for (let i = 0; i < 8; i++) {
//     squareNumbers.push(squareNumber);
    
// }

// document.querySelector('.square-row__numbers').insertAdjacentHTML('beforeend', squareNumbers.join(''));

// for (let i = 0; i < squareNumbers.length; i++) {
//     squareNumbers.insertAdjacentHTML('beforeend', number);
    
// }