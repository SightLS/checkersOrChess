
// document.body.style  = "cursor: pointer";
const dragndrop = () => {

    const  testPos = document.querySelectorAll('.test-pos');
    let test ='<img src="img/bluechecker.png" alt="white-cheker" class="checker test draggable="true"">';
    testPos[1].insertAdjacentHTML('beforeend', test);
    let testOnDrop = document.querySelector('.test');
    console.log(testOnDrop);


    const dragstart = function () {
        console.log('dsads');
        setTimeout(() => {this.classList.add('hide');}, 0);
    };  // момент перетаскивания

    testOnDrop.addEventListener('dragstart', dragstart);

    const dragend = function () {
        setTimeout(() => {this.classList.remove('hide');}, 0);
    };  

    testOnDrop.addEventListener('dragend', dragend);

    const dragover = function(event) {
        event.preventDefault();
    };
    const dragenter = function() {
        console.log('enter');
        this.classList.add('hovered');
    };
    const dragleave = function() {
        console.log('leave');
        this.classList.remove('hovered');
    };
    const drop = function() {
        console.log('drop');
        this.append(testOnDrop);
        this.classList.remove('hovered');
    };

    testPos.forEach(element => {
        console.log(testPos);
        element.addEventListener('dragover', dragover);
        element.addEventListener('dragenter', dragenter);
        element.addEventListener('dragleave', dragleave);
        element.addEventListener('drop', drop);
    });


};

dragndrop();


// testPos.ondragover = allowDrop;
// testOldPos.ondragover = allowDrop;



// // document.body.style  = "cursor: pointer";
// testOnDrop.style ="cursor: grab";

// function allowDrop(event) {
//     event.preventDefault();
//     test.style ="cursor: default";
    
// }


// test.ondragstart = drag;

// function drag(event){
//     event.dataTransfer.setData('dsda', test);
// }


// testPos.ondrop = drop;
// testOldPos.ondrop = drop;

// function drop(event) {
//     event.currentTarget.append(testOnDrop);
//     test.style ="cursor: pointer";
// }





//      все оказалось на много проще, просто задаем в блоке html draggable ="true"
//       и оно становится переносимым(код ниже старого непонятно кода из learn js)

// let  test = document.querySelector('.test');
// // про это посоветоваться с опытным фронтендером!!!


//     test.onmousedown = function (event) {
//         test.style.position = 'absolute';
//         test.style.zIndex = 1000;
//         moveAt(event.pageX, event.pageY);
//         function moveAt(pageX, pageY) {
//             test.style.left = pageX - test.offsetWidth / 2 + 'px';
//             test.style.top = pageY - test.offsetHeight / 2 + 'px';
//         }
//               // перемещать по экрану    
//         function onMouseMove(event) {
//             moveAt(event.pageX, event.pageY);
//         }
        
//         document.addEventListener('mousemove', onMouseMove);
        
//           // положить мяч, удалить более ненужные обработчики событий

//         test.onmouseup = function(event) {
//             if (condition) {
                
//             }
//             document.removeEventListener('mousemove', onMouseMove);
//             testPos.insertAdjacentHTML("beforeend", test2);
//             test.remove();
//         };
//     };
//             //Выключить Drag’n’Drop у браузера
//     test.ondragstart = function() {
//         return false;
//     };
    

// test.onclick = function () {
//     testPos.insertAdjacentHTML("beforeend", test2);
//     test.remove()
// };


// document.removeEventListener('mousemove', onMouseMove);
// if (event.relatedTarget.test === event.relatedTarget.testPos) {
//     testPos.insertAdjacentHTML("beforeend", test2);
//     test.remove();
// }
// else{
//     testOldPos.insertAdjacentHTML("beforeend", test2);
//     test.remove();              
// }
