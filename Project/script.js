const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)
const a= document.querySelector('button')
a.addEventListener('click', c)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}
function c(){
    window.open("https://en.wikipedia.org/wiki/Front-end_web_development");
}
