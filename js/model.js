//Loadding
window.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(()=>{
        $(".loading").fadeOut(800)
    },800)
});
//Lấy nút sign  in của layout_regis
let btnLayoutRegis = document.querySelector('.form__layout-content.layout_regis .btn button');
//Lấy nut sign  up của layout_regis
let btnLayoutLogin = document.querySelector('.form__layout-content.layout_login .btn button');


//Lấy element di chuyển bgrlayout
let modelLayout = document.querySelector('.model_layout');

//Di chuyển form regis
let formRegis = document.querySelector('.form__regis-login.form_regis');
//Form login
let formLogin = document.querySelector('.form__regis-login.form_login')

//formLayoutRegis
let layoutRegis = document.querySelector('.form__layout-content.layout_regis')
//formLayoutLogin
let layoutLogin = document.querySelector('.form__layout-content.layout_login')
//FormLayout First
let formLayout_1 = document.querySelector('.form__layout:first-child');
//Pasword retype
let passwordRetype = document.querySelector('.password_retype');
//Hàm login
let titleLogin = document.querySelector('.form__regis_login-title');

//Hàm messenger_error
let messenger_error = document.querySelectorAll('.mgs_error')

function resetMessenger(){
    for(let i=0; i<messenger_error.length; i++){
        messenger_error[i].innerText = '';
    }
 
}

//Xử lý con mắt
let btnEye = document.querySelectorAll('.password_element .eye');

let inputPass = document.querySelectorAll('.password_element input');
for(let i=0; i<btnEye.length; i++){
    btnEye[i].addEventListener('click', function(){
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash')
        if(this.classList.contains('fa-eye')){            
            this.parentNode.querySelector('input').type = 'password'
        }else{
             this.parentNode.querySelector('input').type = 'text'
        }
    })
}


//Xử lý form Login
function eventLogin(){
    modelLayout.classList.add('reverse_layout');
    modelLayout.classList.remove('border__rightlo-radius');
    modelLayout.classList.add('border__leftlo-radius');
    formRegis.classList.add('reverse__form-regis');
    layoutRegis.classList.add('reverse__form-layout_regis');
    layoutLogin.classList.add('reverse__form-layout_login');
    layoutLogin.parentNode.style.zIndex = 3; 
    document.querySelector('.myform').reset();
    resetMessenger();
    for(let i=0; i<btnEye.length; i++){
        btnEye[i].classList.remove('fa-eye-slash')
       btnEye[i].classList.add('fa-eye');
       btnEye[i].parentNode.querySelector('input').type = 'password'      
    }
}


btnLayoutRegis.addEventListener('click', function(){     
        eventLogin();
        setTimeout(function(){        
            passwordRetype.style.display = 'none';
            titleLogin.innerText = 'Sign In';
            formRegis.querySelector('.btn button').innerText = 'Sign In'
        },250)     
})



let btnLogin = document.querySelectorAll('header ul.head_right li:nth-child(2)');
//Lấy model menu
let modelMenu = document.querySelector('.model_menu');

function loginForm(){
    for(let i=0; i<btnLogin.length; i++){
        btnLogin[i].onclick = function(){
            eventLogin();
            passwordRetype.style.display = 'none';
            titleLogin.innerText = 'Sign Up';
            formRegis.querySelector('.btn button').innerText = 'Sign In'
            modelHome.style.display = 'flex';
            modelMenu.style.display = 'none';
        }
    }
}

loginForm()

//xử lý form Regis
let btnRegis = document.querySelectorAll('header ul.head_right li:nth-child(3)');
let modelHome = document.querySelector('.model_home');

function resetForm(){
    document.querySelectorAll('.myform')[0].reset();
    document.querySelectorAll('.myform')[1].reset();
    resetMessenger();
    for(let i=0; i<btnEye.length; i++){
        btnEye[i].classList.remove('fa-eye-slash')
       btnEye[i].classList.add('fa-eye');
       btnEye[i].parentNode.querySelector('input').type = 'password'      
    }  
}


btnLayoutLogin.addEventListener('click', function(){
    modelLayout.classList.remove('reverse_layout');
    modelLayout.classList.add('border__rightlo-radius');
    modelLayout.classList.remove('border__leftlo-radius');
    formRegis.classList.remove('reverse__form-regis');
    layoutRegis.classList.remove('reverse__form-layout_regis');
    layoutLogin.classList.remove('reverse__form-layout_login');
    setTimeout(function(){
        layoutLogin.parentNode.style.zIndex = -1;
    },500);
    setTimeout(function(){    
        passwordRetype.style.display = 'block';
        titleLogin.innerText = 'Create Account';
        formRegis.querySelector('.btn button').innerText = 'SigUp'
    },250)
   resetForm();
})


function regisForm(){
    for(let i=0; i<btnRegis.length; i++){
        btnRegis[i].onclick = function(){
            modelHome.style.display = 'flex';
            modelMenu.style.display = 'none';
          resetForm();
        }
    }
}

regisForm()

let auth_form = document.querySelector('.auth__form-regisLogin');

//Kiểm tra thông tin đăng nhập

//Láy input username
let inputUsername = document.querySelector('.model_home .input_username input');
let messengerUsername = document.querySelector('.model_home .msg__error-username');
//Lấy input password
let inputPassword = document.querySelectorAll('.model_home .password_element input');

function checkInput(input, messenger, size, msg_err){
    if(input.value.trim() === ''){
        messenger.innerText = '*Chưa nhập trường này!'
    }else if(input.value.trim().length < size && input !== inputPassword[1]){
        messenger.innerText = msg_err ? msg_err : `*Tên đăng nhập ít nhất ${size} kí tự!`
    }else if(input === inputPassword[1] && input.value!== inputPassword[0].value){
         messenger.innerText = msg_err ? msg_err : `*Tên đăng nhập ít nhất ${size} kí tự!`
    }
    else{
        messenger.innerText = '';
    }
}
inputUsername.addEventListener('blur', function(){
    checkInput(inputUsername, messengerUsername, 6)
})


inputPassword[0].addEventListener('blur', function(){
    let messenger = document.querySelector('.msg__error-password');
    checkInput(inputPassword[0], messenger, 6, '*Mật khẩu ít nhất 6 ký tự')
})

inputPassword[1].addEventListener('blur', function(){
    let messenger = document.querySelector('.msg__error-passwordRetype');
    checkInput(inputPassword[1], messenger, 6, "*Mật khẩu nhập lại chưa đúng")
})

document.addEventListener('click', function(e){
    if(modelHome.contains(e.target) && !auth_form.contains(e.target)){
    modelHome.style.display = 'none';
    }
})


// Xử lý form đăng ký đăng nhập trên điện thoại


let modelMobileParent = document.querySelector(".model__mobile-parent.mobile-item");
let modelMobileLayout = document.querySelector(".model__mobile-layout.mobile-item")

let btnLoginMobile = document.querySelector(".form__footer-mobile .form-footer .content.btn-login a");

// Chuyển thành form Login

let retypePaswordMobile = document.querySelector('.model__home-mobile .password_retype');

function formLoginMobile(){
    document.querySelector('.model__home-mobile .form__regis_login-title').innerText = 'Login';
    retypePaswordMobile.style.display = 'none';
    document.querySelector('.model__home-mobile .btn button').innerText  = 'SigIn'
    document.querySelector('.model__home-mobile .head-crossbar p').innerText = 'Đăng nhập';
    document.querySelector('.form__footer-mobile .form-footer .content p').innerHTML =  ' Bạn chưa có tài khoản?'
    document.querySelector('.form__footer-mobile .form-footer .content a').innerHTML =  'Đăng ký'
}

function formRegisMobile(){
    document.querySelector('.model__home-mobile .form__regis_login-title').innerText = 'Create Account';
    retypePaswordMobile.style.display = 'block';
    document.querySelector('.model__home-mobile .btn button').innerText  = 'Sig Up'
    document.querySelector('.model__home-mobile .head-crossbar p').innerText = 'Đăng Ký';
    document.querySelector('.form__footer-mobile .form-footer .content p').innerHTML =  ' Bạn đã có tài khoản?'
    document.querySelector('.form__footer-mobile .form-footer .content a').innerHTML =  'Đăng nhập'
}

 
//xử lý lỗi cho form đăng nhập mobile
let inputUsernameMobile= document.querySelector('.model__home-mobile .input_username input');
let msgUsernameMobile= document.querySelector('.model__home-mobile .msg__error-username');



inputUsernameMobile.addEventListener('blur', function(){
    checkInput(inputUsernameMobile, msgUsernameMobile, 6)
})


//Lấy input password
let inputPasswordMobile = document.querySelectorAll('.model__home-mobile .password_element input');

inputPasswordMobile[0].addEventListener('blur', function(){
    let messenger = document.querySelector('.model__home-mobile .msg__error-password');
    checkInput(inputPasswordMobile[0], messenger, 6, '*Mật khẩu ít nhất 6 ký tự')
})

inputPasswordMobile[1].addEventListener('blur', function(){
    let messenger = document.querySelector('.model__home-mobile .msg__error-passwordRetype');
    checkInput(inputPasswordMobile[1], messenger, 6, "*Mật khẩu nhập lại chưa đúng")
})

//Xử lý nút đăng ký đăng nhập trong navbar trên mobile
var indexMobile = 0;
function showMobileFormLogin(){
    let btnRegisMobile= document.querySelector('.model_menu header.mobile .head_right li:last-child a')
    let btnLoginMobile = document.querySelector('.model_menu header.mobile .head_right li:nth-child(2) a')

    btnRegisMobile.onclick = function(){
        indexMobile = 0;
        let modelHomeMobile = document.querySelector('.model__home-mobile');
       if(window.matchMedia("(max-width: 1200px) and (min-width: 750px)").matches){
            modelHome.style.display = 'block';
       }else{
        modelHome.style.display = 'none';
        modelHomeMobile.style.display = 'block';
        modelHomeMobile.style.transform = 'translateX(0%)';
        formRegisMobile();
        resetForm();
       }          
    }

    btnLoginMobile.onclick = function(){
        indexMobile = 1;
        let modelHomeMobile = document.querySelector('.model__home-mobile');
       if(window.matchMedia("(max-width: 1200px) and (min-width: 750px)").matches){
            modelHome.style.display = 'block';
       }else{
        modelHome.style.display = 'none';
        modelHomeMobile.style.display = 'block';
        modelHomeMobile.style.transform = 'translateX(0%)';
        formLoginMobile();
        resetForm();    
       }          
    }
}   

showMobileFormLogin();


function eventModelMobile(){    
    btnLoginMobile.addEventListener('click', function(){
       indexMobile++;
       console.log(indexMobile)
       if(indexMobile %2 != 0){
           modelMobileParent.style.transform = 'translateX(-100%)';
           modelMobileLayout.style.transform = 'translateX(-100%)';
           setTimeout(()=>{
               formLoginMobile();
              resetForm();
           }, 110)
           setTimeout(()=>{
               modelMobileParent.style.transform = 'translateX(0%)';
               modelMobileParent.style.zIndex = '3'
           }, 500)

           setTimeout(()=>{
            modelMobileLayout.style.transform = 'translateX(-200%)';
        }, 700)
       }else{
           modelMobileParent.style.transform = 'translateX(100%)';
           modelMobileLayout.style.transform = 'translateX(-100%)';
           setTimeout(()=>{
               formRegisMobile();
               resetForm();
           }, 110)
           setTimeout(()=>{
               modelMobileParent.style.transform = 'translateX(0%)';
               modelMobileParent.style.zIndex = '3'
           }, 500)
       }
    })
}

eventModelMobile();



//Xử lý nút trở vè
function gotoBackHome(){
    let goToBack= document.querySelector('.model__home-mobile .head-crossbar .icon');
    goToBack.onclick = function(){
       let model =  document.querySelector('.model__home-mobile');
       model.style.transform = 'translateX(-100%)';
       setTimeout(()=>{
         model.style.display = 'none';
       }, 300)    
    }
}



gotoBackHome()

//Xử lý nút lên đầu
let backToTopButton = document.querySelector(".moveUp-btn");
window.onscroll = function() { 
   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 500) {
       backToTopButton.style.display = "block";
   } else {
       backToTopButton.style.display = "none";
   }
};

backToTopButton.onclick = function(){
   window.scrollTo({
       top: 0,
       left: 0,
       behavior: 'smooth'
   });
}


//Khi click vào togle

let navbarMenu = document.querySelector('header .navbar');
navbarMenu.onclick = function(){
    let modelMenuToggle = document.querySelector('.model_menu');
    modelMenuToggle.style.display = 'flex';
}

let cancelMenu = document.querySelector('.model_menu .cancel')
cancelMenu.onclick = function(){
    let modelMenu = document.querySelector('.model_menu');
    modelMenu.style.display = 'none';
}