// Your code goes here

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

let h1 = document.querySelector('.logo-heading');

h1.addEventListener('click', event => {
    event.target.style.color = 'blue'
    event.target.style.backgroundColor = 'yellow'
});

let imageScale = document.querySelector('img');

imageScale.addEventListener('dblclick', event => {
    event.target.style.transform = 'scale(1.8)'
});