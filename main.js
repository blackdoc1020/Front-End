let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[1]);

const hello = function(){};
hello();

const name = true;
if(true){}

const boxEl = document.querySelector('.box');
console.log(boxEl.textContent);

boxEl.addEventListener('click',function(){
    console.log('Hello~');
})

const boxEl = document.querySelectorAll('.box');

boxEl.classList.add('hello');

const divEls = document.querySelectorAll('div');
divEls.forEach(function(divEl){
    divEl.classList.add('hello');

})

const boxEl = document.querySelector('.box');
 if(boxEl.classList.contains('active')){
     console.log('포함됨!');
 }