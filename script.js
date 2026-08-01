var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.nav')

btnExp.addEventListener('click', function() {
    menuSide.classList.toggle('expand')
})