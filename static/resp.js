burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.ull')

burger.addEventListener('click',()=>{
    navList.classList.toggle('v-class-resp');
    navList.classList.toggle('h-nav-resp');
    navbar.classList.toggle('h-nav-resp');
    

})