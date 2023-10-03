/*
let answer = prompt('What is your name?');

if(typeof(answer) === 'string'){
    var answerHeading = document.createElement('h1');
    answerHeading.textContent = answer;
    document.body.appendChild(answerHeading);
}
*/

var head1 = document.createElement('h1');
head1.textContent = "Type below to change the Text";

var inputArea = document.createElement('input');
inputArea.setAttribute('type', 'text');

document.body.innerText = "";
document.body.appendChild(head1);
document.body.appendChild(inputArea);

inputArea.addEventListener('change', updateText = () => {
    console.log(inputArea.value);
    head1.textContent = inputArea.value;
})

const jsonStr = '{"greetings":"hello"}';
console.log(`This is JSON ${jsonStr}`);

const jsObj = JSON.parse(jsonStr);
jsObj.greetings = "Hey!!";

console.log(`This is JS Object ${jsObj}`);


