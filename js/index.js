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
          }, 2000);
       
  }
});

//Event 5 - Keydown: (any key pressed)
//Event 6 - Click: (signup button click)
//Event 7 - Mouse hover: (scale size of all images on hover)
//Event 8 - Mouse select text: (change color of text)

//Event 9 - Network online: (scale size of cta bus image)
window.addEventListener('online', (event) => {
    console.log("You are now connected to the network.");
});

//console.log(window);
//ononline version is another way to do this
// window.ononline = (event) => {
//   console.log("You are now connected to the network.");
// };

//Event 10 - Clipboard copy: (scale size of cta bus image)
let text = document.querySelectorAll('p');


text.forEach(e => {
    e.addEventListener('copy', (event) => {
        let selection = document.getSelection();
        event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
        event.preventDefault();
        console.log(event.clipboardData.getData('text/plain'));
    })
    
});


