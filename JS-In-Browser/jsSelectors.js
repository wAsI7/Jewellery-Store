//JS Selectors and Event Handling

var headingText = document.getElementById('myHeadingTag');
console.log(headingText.textContent);

var paraText = document.getElementsByClassName('myParaTag');
console.log(paraText.textContent);

var myButton = document.getElementById('button1');

myButton.addEventListener('click', changeText = () => {
    headingText.textContent = 'Text Changed with Event Handling';
});



