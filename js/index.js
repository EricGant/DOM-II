// Your code goes here
const header = document.querySelector('.logo-heading')
const nav = document.querySelectorAll('.nav-link')
const imgh = document.querySelector('.intro')
const imgn = imgh.querySelector('img')

header.addEventListener('mouseover', (event) => {
    event.target.style.color = "purple" 
})
nav[0].addEventListener('click', event => {
    event.target.style.color = "red"
    event.target.style.borderBottom="2px solid black"
})
nav[1].addEventListener('click', event => {
    event.target.style.color = "orange"
    event.target.style.borderBottom="2px solid black"
})
nav[2].addEventListener('click', event => {
    event.target.style.color = "green"
    event.target.style.borderBottom="2px solid black"
})
nav[3].addEventListener('click', event => {
    event.target.style.color = "blue"
    event.target.style.borderBottom="2px solid black"
})
nav[3].addEventListener('keydown', esKey)

document.addEventListener('dblclick', event => {
    event.target.style.color = "blue"
}
)
imgn.addEventListener('click', event =>{
    event.target.style.height = "100px"
})
document.addEventListener('focus', event =>{
    event.target.style.backgroundColor="grey"
})
function esKey(event){
    if (event.keyCode === 27) {
        event.target.style.display="none"
        console.log('done')
    }
}
