"use strict";

// создаем доску
const loadBoard = function () {
    
    const board = document.querySelector('.board');

    const squareWhite = `<div class = "square square__white" id =""></div>`,
        squareBlack = `<div class = "square square__black" id =""></div>`;

    const boardDisplay = [];

    for (let i = 0; i < 8; i++) {
        
        if (i % 2 === 0 ) {
            boardDisplay.push(`<div class = "square square__white" " id =""></div>`);
        }else{
            boardDisplay.push(`<div class = "square square__black" id =""></div>`);
        }
    }

    for (let i = 0; i < boardDisplay.length; i++) {
        if (i === 0) {
            boardDisplay.forEach(element => {
                board.insertAdjacentHTML("beforeend", element);
            });
        } else{
            boardDisplay.reverse().forEach(element => {
                board.insertAdjacentHTML("beforeend", element);
            });
        }
    }
    const squareArrId = document.querySelectorAll('.square');

    for (let i = 0; i < squareArrId.length; i++) {
        if (i < 8) {
            squareArrId[i].id = 'h' + (i + 1);
            squareArrId[i].classList.add('h-row');
        } else if(i < 16){

            squareArrId[i].id = 'g' + (i - 8 + 1);
            squareArrId[i].classList.add('g-row');

        } else if(i < 24){

            squareArrId[i].id = 'f' + (i - 16 + 1);
            squareArrId[i].classList.add('f-row');

        } else if(i < 32){

            squareArrId[i].id = 'e' + (i - 24 + 1);
            squareArrId[i].classList.add('e-row');
            

        } else if(i < 40){

            squareArrId[i].id = 'd' + (i - 32 + 1);
            squareArrId[i].classList.add('d-row');

        } else if(i < 48){

            squareArrId[i].id = 'c' + (i - 40 + 1);
            squareArrId[i].classList.add('c-row');

        } else if(i < 56){

            squareArrId[i].id = 'b' + (i - 48 + 1);
            squareArrId[i].classList.add('b-row');

        } else if(i < 64){

            squareArrId[i].id = 'a' + (i - 56 + 1);
            squareArrId[i].classList.add('a-row');

        }
    }


};
loadBoard();

//  начинаю перебор всех ID у всех квадратов



//расскидываю шашки в квадраты. Надо будет закинуть в новый js файл!!!

// думаю стоит закинуть все в функицию, чтоб при вызове она срабатывала

const createCheres = function () {
    const checkersAll = {
        white: [],
        black: [],
    };
    
    
    
    const checkerWhite = 
        '<img src="img/bluechecker.png" alt="white-cheker" class="checker checker__white draggable="true"">';
    const checkerBlack = 
        '<img src="img/redchecker.png" alt="black-checker" class="checker checker__black draggable="true"">';
    
    const square = document.querySelectorAll('.square');
    
    
    for (let i = 0; i < square.length; i++) {
    
        const checkSquareARow = square[i].classList.contains('a-row') === true && 
            square[i].classList.contains('square__black')  === true;
    
        const checkSquareBRow =  square[i].classList.contains('b-row') === true && 
            square[i].classList.contains('square__black')  === true;
    
        const checkSquareCRow =  square[i].classList.contains('c-row') === true && 
            square[i].classList.contains('square__black')  === true; // проверка ряда "с" с черными квадратами
    
            if (checkSquareARow || checkSquareBRow || checkSquareCRow) {
                square[i].insertAdjacentHTML("beforeend", checkerWhite);
                checkersAll.white.push(checkerWhite);
            }
    }
    for (let i = 0; i < square.length; i++) {

        const checkSquareHRow = square[i].classList.contains('h-row') === true && 
            square[i].classList.contains('square__black')  === true;
    
        const checkSquareGRow =  square[i].classList.contains('g-row') === true && 
            square[i].classList.contains('square__black')  === true;
    
        const checkSquareFRow =  square[i].classList.contains('f-row') === true && 
            square[i].classList.contains('square__black')  === true; // проверка ряда "с" с черными квадратами
    
            if (checkSquareHRow || checkSquareGRow || checkSquareFRow) {
                square[i].insertAdjacentHTML("beforeend", checkerBlack);
                checkersAll.black.push(checkerBlack);
            }
    }
        
};

createCheres();





// передвижение объектов
// изучаю событие drug and drop чтобы передвигать объекты




const dragndrop = () => {

    const square = document.querySelectorAll('.square');

    const squareWhite = document.querySelectorAll('.square__white');
    const squareblack = document.querySelectorAll('.square__black');
    const checkers = document.querySelectorAll('.checker');

    
    const dragstart = function () {

        setTimeout(() => {this.classList.add('hide');}, 0);
    };  // момент перетаскивания
    
    const dragend = function () {
        setTimeout(() => {this.classList.remove('hide');}, 0);
    };  

    checkers.forEach((element) => {
        // console.log(element);
        // const checkerStr = element;
        // // console.log(checkerStr);
        element.addEventListener('dragstart', dragstart);
        element.addEventListener('dragend', dragend);
        
    });

    const test = document.querySelector('checker');
    console.log(test);


    const dragover = function(event) {
        event.preventDefault();
    };
    const dragenter = function() {
        this.classList.add('hovered');
    };
    const dragleave = function() {
        this.classList.remove('hovered');
    };
    const drop = function() {
        this.append(checkers);
        this.classList.remove('hovered');
    };

    square.forEach(element => {
        element.addEventListener('dragover', dragover);
        element.addEventListener('dragenter', dragenter);
        element.addEventListener('dragleave', dragleave);
        element.addEventListener('drop', drop);
    });
    

};

dragndrop();
