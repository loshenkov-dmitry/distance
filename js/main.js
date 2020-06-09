var menuBtn = document.querySelector('.m-menu');
var menu = document.querySelector('.menu-sidebar')


menuBtn.addEventListener('click', function() {

    menu.classList.toggle('active')




})

var navLink = document.querySelector('.nav-link');



navLink.onclick = function() {

    navLink.classList.toggle('active-link')




}
