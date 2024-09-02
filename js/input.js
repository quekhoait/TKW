let btnMoon = document.querySelector('.buttonScreen .moon i');
let btnSun = document.querySelector('.buttonScreen .sun i');
let btnCicle = document.querySelector('.buttonScreen .cicle');

let sun = document.querySelector('.sun i');
let moon = document.querySelector('.moon i')

let btnScreen = document.querySelector('.buttonScreen')

btnMoon.onclick = function(){
   //  btnScreen.style.zIndex = '0';
    btnCicle.style.left = "32px";
    setTimeout(()=>{
         sun.style.top = '0px';
    sun.style.left = '0px';
    moon.style.top = '-27px';
    moon.style.right = '-27px';
    }, 200)
   btnScreen.style.background = 'lightblue'
}

btnSun.onclick = function(){
    console.log(1)
   // btnScreen.style.zIndex = '0';
   btnCicle.style.left = "0px";
   setTimeout(()=>{
    sun.style.top = '22px';
   sun.style.left = '-19px';
   moon.style.top = '0px';
   moon.style.right = '0px';
   }, 200)
  btnScreen.style.background = '#333'
}
