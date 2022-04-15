const content = document.querySelector('.content');
const headingH3 = document.querySelector('.heading');
const text = document.querySelector('.text');

setTimeout(function() {
    text.classList.add('color-green');
}, 3000);

// const content = document.querySelector('.content');
// const headingH3 = document.querySelector('.heading');
// console.log(headingH3.className);
// // headingH3.className = 'super-heading';
// console.log(headingH3.classList);
// headingH3.classList.add('heading_sale-js');
// headingH3.classList.remove('heading_mini');
// headingH3.classList.toggle('tac');
// headingH3.classList.toggle('supe-sale');
// console.log(headingH3.classList.contains('heading'));

// const text = document.querySelector('p');
// console.log(text);
// text.setAttribute('class', 'text-p');
// console.log(text.attributes);

// console.log(text.dataset);
// text.dataset.hello = '555';
// text.dataset.lang = 'en';


// после 5.3 html
// const text = document.querySelector('.text');
// text.append('Последняя часть');
// text.prepend('Первая часть');
// text.after('После');
// text.before('До');

// const headingH1 = document.querySelector('.title');
// console.log(headingH1.innerText);
// console.log(headingH1.textContent);
// console.log(headingH1.innerHTML);
// headingH1.innerHTML = `
//     <div>
//         Информация о <u>крутом</u> программисте
//     </div>
// `

// const about = document.querySelector('.about');
// const aboutContent = about.children;
// console.log(aboutContent);
// const aboutContentNodes = about.childNodes;
// console.log(aboutContentNodes);


// const allAboutText = document.querySelectorAll('.about__text:nth-child(2n)');

// for (let i = 0; i < allAboutText.length; i++) {
//     const element = allAboutText[i];
//     console.log(element);
// }