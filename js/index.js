// Your code goes here
//variables
const container = document.querySelector('.container');
const footer = document.querySelector('footer');
const images = document.querySelectorAll('img');
const paragraphs = document.querySelectorAll('p');
const btns = document.querySelectorAll('.btn');
const navContainer = document.querySelector('.nav-container');
const h1 = document.querySelector('h1');
const body = document.querySelector('body');
const destination = document.querySelector('.destination');

//events
footer.addEventListener('mouseover', (event) => {
    alert("Oh, Hai");
    event.stopPropagation();
});
images.forEach(element => {
    element.addEventListener('mouseenter', (event) => {
        event.target.classList.add('big')
        event.stopPropagation();
    });
    element.addEventListener('mouseleave', (event) =>{
        event.target.classList.remove('big');
        event.stopPropagation();
    })
    element.addEventListener
});


paragraphs.forEach(element => {
    element.addEventListener('contextmenu', (event) => {
        event.target.style.color = 'green';
        console.log('hello');
    });
});

btns.forEach(element =>{
    element.addEventListener('dblclick',(event)=>{
        event.target.style.fontFamily = 'Comic Sans';
    })
})

h1.addEventListener('mouseup', (event) => {
    navContainer.style.backgroundColor = 'red';
    event.stopPropagation();
})
destination.addEventListener('click', (event) => {
    event.target.style.display = 'none';
});
window.addEventListener('resize', (event) => {
    body.style.backgroundColor = 'blue';
})

// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`