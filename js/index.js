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

//Event 1 - Click: (font color & background color)
let h1 = document.querySelector('.logo-heading');
h1.addEventListener('click', event => {
    event.target.style.color = 'blue'
    event.target.style.backgroundColor = 'yellow'
});

//Event 2 - Double click: (scale size of cta bus image)
let imageScale = document.querySelector('img');
imageScale.addEventListener('dblclick', event => {
    event.target.style.transform = 'scale(1.8)'
});

//Event 3 - Mouse hover: (scale size of content images)
let navlinks = document.querySelectorAll('.nav-link'); 
// This handler will be executed only once when the cursor moves over the unordered list
navlinks.forEach(link => {
    link.addEventListener('mouseenter', event => {   
        // highlight the mouseenter target
          event.target.style.color = 'skyblue'

// reset the color after a short delay
//   setTimeout(function() {
//     event.target.style.color = 'grey'
//   }, 500);
// }, false);
    })
});

//Event 4 - Scroll: (scale size of cta bus image)
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
}
const body = document.querySelector('body');
window.addEventListener('scroll', function(event) {
  last_known_scroll_position = window.scrollY;
  body.style.backgroundColor = 'skyblue'
  if (!ticking) {
    setTimeout(function() {
            body.style.backgroundColor = 'white'
          }, 1000);
       
  }
});