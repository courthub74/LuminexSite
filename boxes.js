// query button with unique id
// make the corresponding text appear 
// based on the hovering of each button

// each button
let button_one = document.getElementById('button_one');

// each paragraph
let box_one = document.getElementById('box_one_words');

// add event listener to the button
// to mouseover hover
button_one.addEventListener('mouseover', () => {
    // change the style of the words
    box_one.classList.add('appear');
});

// to mouseout take mouse away
button_one.addEventListener('mouseout', () => {
    box_one.classList.remove('appear');
})