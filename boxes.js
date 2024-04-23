// query button with unique id
// make the corresponding text appear 
// based on the hovering of each button

// each button
let button_one = document.getElementById('button_one');
let button_two = document.getElementById('button_two');
let button_three = document.getElementById('button_three');
let button_four = document.getElementById('button_four');

// each paragraph
let box_one = document.getElementById('box_one_words');
let box_two = document.getElementById('box_two_words');
let box_three = document.getElementById('box_three_words');
let box_four = document.getElementById('box_four_words');

// add event listener to the button

// One
// to mouseover hover
button_one.addEventListener('mouseover', () => {
    // change the style of the words
    box_one.classList.add('appear');
});

// to mouseout take mouse away
button_one.addEventListener('mouseout', () => {
    box_one.classList.remove('appear');
});

// Two
// to mouseover hover
button_two.addEventListener('mouseover', () => {
    // change the style of the words
    box_two.classList.add('appear');
});

// to mouseout take mouse away
button_two.addEventListener('mouseout', () => {
    box_two.classList.remove('appear');
});

// Three
// to mouseover hover
button_three.addEventListener('mouseover', () => {
    // change the style of the words
    box_three.classList.add('appear');
});

// to mouseout take mouse away
button_three.addEventListener('mouseout', () => {
    box_three.classList.remove('appear');
});

// Four
// to mouseover hover
button_four.addEventListener('mouseover', () => {
    // change the style of the words
    box_four.classList.add('appear');
});

// to mouseout take mouse away
button_four.addEventListener('mouseout', () => {
    box_four.classList.remove('appear');
});