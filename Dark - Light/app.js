let body = document.querySelector('.body')
let nav = document.querySelector('.navigation')

let button = document.querySelector('.bxs-moon')

let daybutton = document.querySelector('.bxs-sun')
let headerImg = document.querySelector('.headerImg')
let asideImg = document.querySelector('.aside-img')
let footer = document.querySelector('.footer')

button.onclick = function() {
    body.classList.toggle('active')
    nav.classList.toggle('active')
    footer.classList.toggle('active')

    headerImg.classList.toggle('active')

    asideImg.classList.toggle('active')
    button.classList.remove('.bxs-moon')
    button.classList.add('bx-sun')
}

daybutton.onclick = function() {
    body.classList.toggle('active')
    nav.classList.toggle('active')
    footer.classList.toggle('active')

    headerImg.classList.toggle('active')

    button.classList.remove('bx-sun')
    button.classList.add('.bxs-moon')
}

// --------------------------------------------------------------- //