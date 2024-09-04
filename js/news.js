
let focusItem = document.querySelectorAll('.focus-item');

function focusMove() {
    let index = 0;
    setInterval(function () {
        if(window.innerWidth < 750){
            index+=1;
        }else if(window.innerWidth > 750 && window.innerWidth<880){
            index+=2;
        }else{
            index+=3; 

        }
        for (let i = 0; i < focusItem.length; i++) { //Duyệt gắn thuộc tính
            focusItem[i].style.transition = 'transform 0.5s ease';
            focusItem[i].style.transform = `translateX(${-100 * index}%)`;
        }
        if (index >=  focusItem.length-3) {
            setTimeout(function(){
               for (let i = 0; i < focusItem.length; i++) {
                 focusItem[i].style.transition = 'none';
                 focusItem[i].style.transform = 'translateX(0%)';                
            }
            index = 0;
            }, 500)
        }
    }, 5000); 
}

 focusMove(); 


//  
let pagination = document.querySelectorAll('ul.pagination li');

function removeShow(){
    let allNewList = document.querySelectorAll('.all__news-list');
    for(let i=0; i<allNewList.length; i++){
        allNewList[i].classList.remove('show-flex');
        pagination[i].classList.remove('pagination-bgr')
    }
}

function changeNews(){
    for(let i = 0; i < 3; i++){
        pagination[i].addEventListener('click', function(){
            removeShow();
            let allNewList = document.querySelectorAll('.all__news-list');
            allNewList[i].classList.add('show-flex');
            this.classList.add('pagination-bgr')
        
        });
    }
}

changeNews();