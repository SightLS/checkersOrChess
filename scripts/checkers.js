"use strict";

// создаем доску
const loadBoard = function () {
    
    const board = document.querySelector('.board');
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

const createchecker = function () {
    const checkersAll = {
        white: [],
        black: [],
    };
    
    
    
    const checkerWhite = 
        '<img src="img/bluechecker.png" alt="white-cheker" class="checker checker__white">';
    const checkerBlack = 
        '<img src="img/blackchecker.png" alt="black-checker" class="checker checker__black">';
    
    const square = document.querySelectorAll('.square');
    
    
    for (let i = 0; i < square.length; i++) {
    
        const checkSquareARow = square[i].classList.contains('a-row') === true && 
            square[i].classList.contains('square__black')  === true;
    
        const checkSquareBRow =  square[i].classList.contains('b-row') === true && 
            square[i].classList.contains('square__black')  === true;
    
        const checkSquareCRow =  square[i].classList.contains('c-row') === true && 
            square[i].classList.contains('square__black')  === true; 


            // проверка ряда с черными квадратами
    
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
            square[i].classList.contains('square__black')  === true; 
            
            // проверка ряда с черными квадратами
    
            if (checkSquareHRow || checkSquareGRow || checkSquareFRow) {
                square[i].insertAdjacentHTML("beforeend", checkerBlack);
                checkersAll.black.push(checkerBlack);
            }
    }
    console.log(checkersAll);
        
};

createchecker();





// передвижение объектов
// изучаю событие drug and drop чтобы передвигать объекты

//думаю драгНдроп подключить для черных и белых шашек по отделбности, чтоб когда белые походили функция выключаласи
// и включалась функция у черных и наоборот


const startGame = function () {

    let flag = false;

    async function moveWhite() {
        await new Promise((resolve) => {
            const  square = document.querySelectorAll('.square__black');
            let checker = document.querySelectorAll('.checker__white');
            let idStartMove;

            console.log(square[1].parentElement);

            const dragstart = function () {
                setTimeout(() => {this.classList.add('hide');}, 0);
                idStartMove = this.parentElement.id;
            };

        const dragend = function () {
                setTimeout(() => {this.classList.remove('hide');}, 0);
            };  

            checker.forEach(element => {
                element.setAttribute('draggable', 'true');
                element.addEventListener('dragstart', dragstart);
                element.addEventListener('dragend', dragend);

            });

            const dragover = function(event) {
                event.preventDefault();
            };
        
            const drop = function() {
                console.log('drop');
                checker.forEach(element => {
                    if (element.classList.contains('hide') === true &&
                    this.id.codePointAt(0) - idStartMove.codePointAt(0) === 1 &&
                    (this.id.codePointAt(1) - idStartMove.codePointAt(1) === -1 ||
                    this.id.codePointAt(1) - idStartMove.codePointAt(1) === 1) &&
                    this.firstChild == null) {

                        this.prepend(element);
                        resolve(flag = true);
                        setTimeout(() => {
                            checker.forEach(element => {
                                element.removeEventListener('dragstart', dragstart);
                                element.removeAttribute('draggable');
                                element.removeEventListener('dragend', dragend);
                            });
                            square.forEach(element => {
                                element.removeEventListener('dragover', dragover);
                                element.removeEventListener('drop', drop);
                            });
                        }, 0);
                    }

                });
                this.classList.remove('hovered');
            };
            square.forEach(element => {
                element.addEventListener('dragover', dragover);
                element.addEventListener('drop', drop);
            });

        });
        if (flag === true) {
            console.log('flag ' + flag + ' ход черных');
            moveBlack();
            return;
        }
    }

    async function moveBlack() {
        await new Promise((resolve) => {
            let idMove;
            const  square = document.querySelectorAll('.square__black');
            const checker = document.querySelectorAll('.checker__black');

            const dragstart = function () {
                setTimeout(() => {this.classList.add('hide');}, 0);
                idMove = this.parentElement.id;
            };

        const dragend = function () {
                setTimeout(() => {this.classList.remove('hide');}, 0);
            };  

            checker.forEach(element => {
                element.setAttribute('draggable', 'true');
                element.addEventListener('dragstart', dragstart);
                element.addEventListener('dragend', dragend);

            });

            const dragover = function(event) {
                event.preventDefault();
            };
        
            const drop = function() {
                console.log('drop');
                checker.forEach(element => {
                    if (element.classList.contains('hide') === true &&
                    this.id.codePointAt(0) - idMove.codePointAt(0) === -1 &&
                    (this.id.codePointAt(1) - idMove.codePointAt(1) === -1 ||
                    this.id.codePointAt(1) - idMove.codePointAt(1) === 1 &&
                    this.firstChild == null) 
                    ) {
                        this.prepend(element);
                        resolve(flag = false);
                        setTimeout(() => {
                            checker.forEach(element => {
                                element.removeEventListener('dragstart', dragstart);
                                element.removeAttribute('draggable');
                                element.removeEventListener('dragend', dragend);
                            });
                            square.forEach(element => {
                                element.removeEventListener('dragover', dragover);
                                element.removeEventListener('drop', drop);
                            });
                        }, 0);
                    }

                });
                this.classList.remove('hovered');
            };
            square.forEach(element => {
                element.addEventListener('dragover', dragover);
                element.addEventListener('drop', drop);
            });

        });
        if (flag === false) {
            console.log('flag ' + flag + ' ход белых');
            moveWhite();
            return;
        }
    }
    hitWhite();
    async function hitWhite() {
        await new Promise((resolve) => {
            const  square = document.querySelectorAll('.square__black');
            let checker = document.querySelectorAll('.checker__white');
            let enemyChecker = document.querySelectorAll('.checker__black');
            let idStartMove;

            // console.log(square[1].parentElement);

            const dragstart = function () {
                setTimeout(() => {this.classList.add('hide');}, 0);
                idStartMove = this.parentElement.id;
            };

        const dragend = function () {
                setTimeout(() => {this.classList.remove('hide');}, 0);
            };  

            checker.forEach(element => {
                element.setAttribute('draggable', 'true');
                element.addEventListener('dragstart', dragstart);
                element.addEventListener('dragend', dragend);

            });

            const dragover = function(event) {
                event.preventDefault();
            };
        
            const drop = function() {
                console.log('drop');
                checker.forEach(element => {
                    if (element.classList.contains('hide') === true &&
                    (this.id.codePointAt(0) - idStartMove.codePointAt(0) === 2 ||
                    this.id.codePointAt(0) - idStartMove.codePointAt(0) === -2) &&
                    (this.id.codePointAt(1) - idStartMove.codePointAt(1) === -2 ||
                    this.id.codePointAt(1) - idStartMove.codePointAt(1) === 2)//&&
                    /*this.firstChild == null*/) {

                        this.prepend(element);

                        //отчищаем блок через который шагнула шашка
                        if (this.id.codePointAt(0) - idStartMove.codePointAt(0) === 2 &
                         this.id.codePointAt(1) - idStartMove.codePointAt(1) === -2) {
                            console.log(2 + ' letft');
                            let clear = this.id.codePointAt(0) - 1;
                            let clear2 = this.id.codePointAt(1) + 1;
                            // console.log(clear);
                            square.forEach(element => {
                                if (element.id.codePointAt(0)  === clear && element.id.codePointAt(1) === clear2) {
                                    element.innerHTML = '';
                                }
                               
                            });

                        }
                        if (this.id.codePointAt(0) - idStartMove.codePointAt(0) === 2 &
                         this.id.codePointAt(1) - idStartMove.codePointAt(1) === 2) {
                            console.log(2 + ' right');
                            let clear = this.id.codePointAt(0) - 1;
                            let clear2 = this.id.codePointAt(1) - 1;
                            // console.log(clear);
                            square.forEach(element => {
                                if (element.id.codePointAt(0)  === clear && element.id.codePointAt(1) === clear2) {
                                    element.innerHTML = '';
                                }
                               
                            });

                        }
                        if (this.id.codePointAt(0) - idStartMove.codePointAt(0) === -2 &
                         this.id.codePointAt(1) - idStartMove.codePointAt(1) === -2) {
                            console.log(-2 + ' left');
                            let clear = this.id.codePointAt(0) + 1;
                            let clear2 = this.id.codePointAt(1) + 1;
                            // console.log(clear);
                            square.forEach(element => {
                                if (element.id.codePointAt(0)  === clear && element.id.codePointAt(1) === clear2) {
                                    element.innerHTML = '';
                                }
                               
                            });

                        }
                        if (this.id.codePointAt(0) - idStartMove.codePointAt(0) === -2 &
                         this.id.codePointAt(1) - idStartMove.codePointAt(1) === 2) {
                            console.log(-2 + ' right');
                            let clear = this.id.codePointAt(0) + 1;
                            let clear2 = this.id.codePointAt(1) - 1;
                            // console.log(clear);
                            square.forEach(element => {
                                if (element.id.codePointAt(0)  === clear && element.id.codePointAt(1) === clear2) {
                                    element.innerHTML = '';
                                }
                               
                            });

                        }



                        resolve(flag = true);
                        setTimeout(() => {
                            checker.forEach(element => {
                                element.removeEventListener('dragstart', dragstart);
                                element.removeAttribute('draggable');
                                element.removeEventListener('dragend', dragend);
                            });
                            square.forEach(element => {
                                element.removeEventListener('dragover', dragover);
                                element.removeEventListener('drop', drop);
                            });
                        }, 0);
                    }

                });
                this.classList.remove('hovered');
            };
            square.forEach(element => {
                element.addEventListener('dragover', dragover);
                element.addEventListener('drop', drop);
            });

        });
        if (flag === true) {
            // console.log('flag ' + flag + ' ход черных');
            hitWhite();
            return;
        }
    }
    async function hitBlack() {
        await new Promise((resolve) => {
            const  square = document.querySelectorAll('.square__black');
            let checker = document.querySelectorAll('.checker__black');
            let enemyChecker = document.querySelectorAll('.checker__black');
            let idStartMove;

            // console.log(square[1].parentElement);

            const dragstart = function () {
                setTimeout(() => {this.classList.add('hide');}, 0);
                idStartMove = this.parentElement.id;
            };

        const dragend = function () {
                setTimeout(() => {this.classList.remove('hide');}, 0);
            };  

            checker.forEach(element => {
                element.setAttribute('draggable', 'true');
                element.addEventListener('dragstart', dragstart);
                element.addEventListener('dragend', dragend);

            });

            const dragover = function(event) {
                event.preventDefault();
            };
        
            const drop = function() {
                console.log('drop');
                checker.forEach(element => {
                    if (element.classList.contains('hide') === true &&
                    (this.id.codePointAt(0) - idStartMove.codePointAt(0) === 2 ||
                    this.id.codePointAt(0) - idStartMove.codePointAt(0) === -2) &&
                    (this.id.codePointAt(1) - idStartMove.codePointAt(1) === -2 ||
                    this.id.codePointAt(1) - idStartMove.codePointAt(1) === 2)//&&
                    /*this.firstChild == null*/) {

                        this.prepend(element);

                        //отчищаем блок через который шагнула шашка
                        if (this.id.codePointAt(0) - idStartMove.codePointAt(0) === 2 &
                         this.id.codePointAt(1) - idStartMove.codePointAt(1) === -2) {
                            console.log(2 + ' letft');
                            let clear = this.id.codePointAt(0) - 1;
                            let clear2 = this.id.codePointAt(1) + 1;
                            // console.log(clear);
                            square.forEach(element => {
                                if (element.id.codePointAt(0)  === clear && element.id.codePointAt(1) === clear2) {
                                    element.innerHTML = '';
                                }
                               
                            });

                        }
                        if (this.id.codePointAt(0) - idStartMove.codePointAt(0) === 2 &
                         this.id.codePointAt(1) - idStartMove.codePointAt(1) === 2) {
                            console.log(2 + ' right');
                            let clear = this.id.codePointAt(0) - 1;
                            let clear2 = this.id.codePointAt(1) - 1;
                            // console.log(clear);
                            square.forEach(element => {
                                if (element.id.codePointAt(0)  === clear && element.id.codePointAt(1) === clear2) {
                                    element.innerHTML = '';
                                }
                               
                            });

                        }
                        if (this.id.codePointAt(0) - idStartMove.codePointAt(0) === -2 &
                         this.id.codePointAt(1) - idStartMove.codePointAt(1) === -2) {
                            console.log(-2 + ' left');
                            let clear = this.id.codePointAt(0) + 1;
                            let clear2 = this.id.codePointAt(1) + 1;
                            // console.log(clear);
                            square.forEach(element => {
                                if (element.id.codePointAt(0)  === clear && element.id.codePointAt(1) === clear2) {
                                    element.innerHTML = '';
                                }
                               
                            });

                        }
                        if (this.id.codePointAt(0) - idStartMove.codePointAt(0) === -2 &
                         this.id.codePointAt(1) - idStartMove.codePointAt(1) === 2) {
                            console.log(-2 + ' right');
                            let clear = this.id.codePointAt(0) + 1;
                            let clear2 = this.id.codePointAt(1) - 1;
                            // console.log(clear);
                            square.forEach(element => {
                                if (element.id.codePointAt(0)  === clear && element.id.codePointAt(1) === clear2) {
                                    element.innerHTML = '';
                                }
                               
                            });

                        }



                        resolve(flag = true);
                        setTimeout(() => {
                            checker.forEach(element => {
                                element.removeEventListener('dragstart', dragstart);
                                element.removeAttribute('draggable');
                                element.removeEventListener('dragend', dragend);
                            });
                            square.forEach(element => {
                                element.removeEventListener('dragover', dragover);
                                element.removeEventListener('drop', drop);
                            });
                        }, 0);
                    }

                });
                this.classList.remove('hovered');
            };
            square.forEach(element => {
                element.addEventListener('dragover', dragover);
                element.addEventListener('drop', drop);
            });

        });
        if (flag === true) {
            // console.log('flag ' + flag + ' ход черных');
            hitBlack();
            return;
        }
    }
};


startGame();




