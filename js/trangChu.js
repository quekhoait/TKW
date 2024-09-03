


//Khi click vào menu
let menuMain = document.querySelectorAll('ul.menu>li>a');
for(let i=0; i<menuMain.length; i++){
    menuMain[i].addEventListener('click', function(){
        menuMain[i].style.color = "blue !important";
    })
}



//Chức năng chuyển đổi ảnh trong header
let imgAside = document.querySelector('aside img.img_offical');
let imageHidden = document.querySelector('aside .image');
let imgBus = document.querySelector('aside .image img:last-child');

function imgHead(){
    setTimeout(function(){
        imgAside.style.transform = 'translateY(-100%)';
         imgAside.style.visibility = 'hidden'
        setTimeout(function(){
            imageHidden.style.transform = 'translateY(-100%)'
        },500)
        setTimeout(function(){
            imgBus.style.left = '30%'
        },600)        
        setTimeout(function(){
            document.querySelector('aside .img_aside').style.overflow = 'unset'
        }, 1200)
        setTimeout(imgAfter, 8000);
    },2000) 
}


function imgAfter(){
    setTimeout(function(){
         imgBus.style.left = '-500px';
         setTimeout(function(){
             document.querySelector('aside .img_aside').style.overflow = 'hidden';
         },600)
         setTimeout(function(){
             imageHidden.style.transform = 'translateY(0)'
        },1200)
        setTimeout(function(){
            imgAside.style.visibility = 'unset'
            imgAside.style.transform = 'translateY(0)';
       },1800)       
       setTimeout(imgHead, 8000);
    },2000) 
}

imgHead();

//Phân button trong 
let ticketType = document.querySelectorAll('main .form__find-head ul li p.ticketType');

let oneWay = document.querySelector('ul.one_way')
let twoWay = document.querySelector('ul.two_way')
console.log(ticketType)

function btnTypeTicket(){
    for(let i=0; i<ticketType.length; i++){
        ticketType[i].addEventListener('click', ()=>{
            oneWay.classList.remove('hidden');
            twoWay.classList.remove('hidden');
            ticketType[i].parentNode.querySelector('input').checked = true;
            if(i===0){
                twoWay.classList.add('hidden');
            }else{
                oneWay.classList.add('hidden');
            }
        })
    }
}

btnTypeTicket()


let oneWayBtn = document.querySelector('.form__find-head ul li:first-child input');
let twoWayBtn = document.querySelector('.form__find-head ul li:nth-child(2) input');

function checkWay(){
    oneWay.classList.remove('hidden');
    twoWay.classList.remove('hidden');
    if(oneWayBtn.checked){
       twoWay.classList.add('hidden');
    }else if(twoWayBtn.checked){
        oneWay.classList.add('hidden');
    }
}
oneWayBtn.addEventListener('change', checkWay);
twoWayBtn.addEventListener('change', checkWay);



//phàn xem tỉnh thành
let inputProvince = document.querySelectorAll('.form__find-information>ul.input-province .input_point')
let provinceModel = document.querySelectorAll('.form__find-information > ul.input-province ul.province')



function clickInputProvince(){
    for(let i=0; i<inputProvince.length; i++){
         inputProvince[i].onclick = function(){
        provinceModel[i].style.display = 'block';
        }
    }   
}

document.addEventListener('click', function(event) {
    for(let i=0; i<inputProvince.length; i++){
        if (!inputProvince[i].contains(event.target) ) {
            provinceModel[i].style.display = 'none';
        }
    }
})

clickInputProvince();

; 

//Dổi gí tri các ô

function changeValueProvince(provinceModel, inputPro){
    let iconChange = document.querySelector('.form__find-information ul .icon_change');
    iconChange.onclick = function(){
        let tmp = inputProvince[0].querySelector('p').textContent;
        inputProvince[0].querySelector('p').textContent = inputProvince[1].querySelector('p').textContent
        inputProvince[1].querySelector('p').textContent = tmp;
    }

    let provinceList = provinceModel.querySelectorAll('li');
    for(let i=0; i<provinceList.length; i++){
        provinceList[i].addEventListener('click', ()=>{
            inputPro.querySelector('p').textContent =  provinceList[i].textContent;
        })
    }
}



changeValueProvince(provinceModel[0], inputProvince[0] );
changeValueProvince(provinceModel[1], inputProvince[1] );


//Xem lịch
let inputPoint = document.querySelector('.input_point.time');
let dateBody1 = document.querySelector('.form__date-body');
inputPoint.onclick = function(){   
    dateBody1.style.display = 'block';    
}

document.addEventListener('click', function(event) {
    if (!inputPoint.contains(event.target)) {
        dateBody1.style.display = 'none';
    }
});

let inputPoint2 = document.querySelector('ul.two_way .input_point.time');
let dateBody2 = document.querySelector('ul.two_way .form__date-body');
inputPoint2.onclick = function(){   
    dateBody2.style.display = 'block';    
}

document.addEventListener('click', function(event) {
    if (!inputPoint2.contains(event.target)) {
        dateBody2.style.display = 'none';
    }
});

//chọn ngày
let day1 = document.querySelectorAll('.form__find-information > ul:nth-child(3) .table_calendar tbody td');
let day2 = document.querySelectorAll('.form__find-information > ul.two_way .table_calendar tbody td');
let selectime1 = document.querySelector('.selected__time-item.one');
let selectime2 = document.querySelector('.selected__time-item.two')

function removeBgrDay(day){
    for(let i=0; i<day.length; i++){
        day[i].style.background = 'white';
    }
}

function chooseDay(day1, input,selectime, daybgr ){
    for(let i=0; i<day1.length; i++){
        day1[i].addEventListener('click', function(){
            removeBgrDay(daybgr);
            if(day1[i].querySelector('p') !== null){
                day1[i].style.background = 'rgb(244, 148, 148)';
            }
            let day =  day1[i].querySelector('p');
            input.querySelector('p').innerText = `${day.innerText}/09/2024`;
            selectime.innerText = `${day.innerText}/09/2024`;
        })
        
    }
}

chooseDay(day1, inputPoint, selectime1,day1);
chooseDay(day2, inputPoint2,selectime2, day2)


//Khi click vào ô số lượng vé
let inputOneway =  document.querySelector('ul.one_way li .input_point'); 
let modelTicketOne = document.querySelector('ul.one_way li:last-child');

inputOneway.addEventListener('click', function(){
    modelTicketOne.style.display = 'block';
 })

 document.addEventListener('click', function(e){
    if(!inputOneway.contains(e.target)){
        modelTicketOne.style.display = 'none'
    }
 })


 let modelTicketTwo = document.querySelector('ul.two_way li:last-child ul');
 let inputTwoway =  document.querySelector('ul.two_way li:last-child .input_point');
 inputTwoway.addEventListener('click', function(){  
    modelTicketTwo.style.display = 'block';
 })

 document.addEventListener('click', function(e){
    if(!inputTwoway.contains(e.target)){
        modelTicketTwo.style.display = 'none'
    }
 })

 let ticketOneway = document.querySelectorAll('.form__find-information ul.one_way >li:last-child ul li');
 let ticketTwoway = document.querySelectorAll('.form__find-information ul.two_way >li:last-child ul li');

 function checkTicket(btns, input){
    for(let i=0; i<btns.length; i++){
        btns[i].onclick =function(){
            let iput = input.querySelector('p:first-child');
           iput.innerText = btns[i].textContent;
        }
    }
 }
 checkTicket(ticketOneway, inputOneway);
 checkTicket(ticketTwoway, inputTwoway);

//Phần khuyến mãi nổi bật

function moveItem(item, index, btnL, btnR){    
     for(let i=0; i<item.length; i++){
        item[i].style.transform = `translateX(${100 * index}%)`;
    }
    if(index === 0){
        btnL.style.display = 'none';
    }else if(index <= 3-item.length){
        btnR.style.display = 'none';
    }else{
        btnL.style.display = 'block';
        btnR.style.display = 'block';
    }
}

function moveRight(){
    let index = 0;
    let btnMoveRight = document.querySelector('.popular-category .icon-right');
    let item = document.querySelectorAll('.product__promotion-item');
    let btnMoveLeft = document.querySelector('.popular-category .icon-left');

    btnMoveRight.onclick = function(){
        index-=1;        
        moveItem(item, index, btnMoveLeft, btnMoveRight);              
    }    
    btnMoveLeft.onclick = function(){
       index+=1;
        moveItem(item, index, btnMoveLeft, btnMoveRight);        
    }
}
moveRight();


//Chất lượng và danh dự

let qualityItem = document.querySelectorAll('.popular-category .quality_item');

function qualityMove() {
    let index = 0; 

    setInterval(function () {
        index++; 
        for (let i = 0; i < qualityItem.length; i++) { //Duyệt gắn thuộc tính
            qualityItem[i].style.transition = 'transform 0.5s ease';
            qualityItem[i].style.transform = `translateX(${-100 * index}%)`;
        }
        if (index >= qualityItem.length-1) {
            setTimeout(function(){
               for (let i = 0; i < qualityItem.length; i++) {
                qualityItem[i].style.transition = 'none';
                qualityItem[i].style.transform = 'translateX(0%)';                
            }
            index = 0;
            }, 500)
        }
    }, 5000); 
}



function checkWindowSize() {
    if (window.matchMedia("(min-width: 750px)").matches) {
        qualityMove();
    } 
}

checkWindowSize();