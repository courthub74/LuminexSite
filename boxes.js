// query button with unique id
// make the corresponding text appear 
// based on the hovering of each button

// each button
let button_one = document.getElementById('button_one');
let button_two = document.getElementById('button_two');

// each paragraph
let box_one = document.getElementById('box_one_words');
let box_two = document.getElementById('box_two_words');

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