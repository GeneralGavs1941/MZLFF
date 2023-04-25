let menu = document.querySelector('.header-list')
let menuBtn = document.querySelector('.burger')

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('change')
})