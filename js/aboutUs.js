
//About US
let activeContent = document.querySelectorAll('.content_active');
let btnSee = document.querySelector('.btn_aboutUs .btn_see');

let count = 0;
btnSee.onclick = function(){
    count+=1;
    if(count%2 != 0){
        activeContent.forEach((event)=>{
        event.classList.remove('hidden')
        })
        btnSee.innerHTML = `Rút gọn <i class="fa-solid fa-angle-up"></i>`
    }else{
        activeContent.forEach((event)=>{
        event.classList.add('hidden')
        })
        btnSee.innerHTML = `Xem thêm <i class="fa-solid fa-angle-down"></i>`
    }

}