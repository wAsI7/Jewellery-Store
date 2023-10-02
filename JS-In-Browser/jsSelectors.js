//JS Selectors and Event Handling

var headingText = document.getElementById('myHeadingTag');
console.log(headingText.textContent);

var myButton = document.getElementById('button1');

myButton.addEventListener('click', changeText = () => {
    headingText.textContent = 'Text Changed with Event Handling';
});

//As we did the above during the course let's do something on own
//Let's change the para text

var paraText = document.getElementById('myParaTag');
console.log(paraText.textContent);

var myButton2 = document.getElementById('button2');

myButton2.addEventListener('click', changeParaText = () => {
    paraText.textContent = 'HEY!! Para Text is changed';
})

//PERFECT