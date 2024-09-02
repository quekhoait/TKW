let elementInsurance = document.querySelectorAll('.insurance-base');

let programMenu = document.getElementById('program');
let coverageMenu = document.getElementById('coverage');
let clauseMenu = document.getElementById('clause');


function insuranceBase(){
    for(let i=0; i<elementInsurance.length; i++){
        elementInsurance[i].classList.remove('show');
    }
}

programMenu.onclick = function(){
    insuranceBase();
    let element = document.querySelector('.insurance-base.program');
    element.classList.add('show');
}
 
coverageMenu.onclick = function(){
    insuranceBase();
    let element = document.querySelector('.insurance-coverage');
    element.classList.add('show');
}

clauseMenu.onclick = function(){
    insuranceBase();
    let element = document.querySelector('.insurance-base.clause');
    element.classList.add('show');
}