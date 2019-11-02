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

//Event 5 - Keydown: (any key is pressed)
document.addEventListener('keydown', logKey);

function logKey(keyDown) {
  log.textContent += ` ${keyDown.code}`;
  console.log(logKey.log.textContent);
};

//Event 6 - Click: (signup button click)
let signUpButton = document.querySelectorAll('.btn');

signUpButton.forEach(buttonClick => {
    buttonClick.addEventListener('click', (event) => {
    event.textContent = 'Welcome to Fun Bus!!!'
    })
});

//Event 7 - Mouse over: (scale size of all images on hover)
let contentImages = document.querySelectorAll('img'); 
// This handler will be executed only once when the cursor moves over the unordered list
contentImages.forEach(mouseOver => {
    mouseOver.addEventListener('mouseenter', (event) => {   
        // highlight the mouseenter target
        event.target.style.transform = 'scale(1.2)'
    })
});

//Event 8 - Mouse select text: (change color of text)
//<input value="Try selecting some text in this element.">
//<p id="log"></p>

// function logSelection(event) {
//   const log = document.getElementById('log');
//   const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//   log.textContent = `You selected: ${selection}`;
// }

// const input = document.querySelector('input');
// input.addEventListener('select', logSelection);

//Event 9 - Network online: (scale size of cta bus image)
window.addEventListener('online', (event) => {
    console.log("You are now connected to the network.");
});
    //You can test this by going to the network tab of your console ... select offline and then select online!
    //console.log(window); to see all of the events you can add
    //ononline version is an alternative code solution
    // window.ononline = (event) => {
    //   console.log("You are now connected to the network.");
    // };

//Event 10 - Clipboard copy: (copy text and transform)
let text = document.querySelectorAll('p');

text.forEach(e => {
    e.addEventListener('copy', (event) => {
        let selection = document.getSelection();
        event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
        event.preventDefault();
        console.log(event.clipboardData.getData('text/plain'));
    })
    
});