let answer = prompt('What is your name?');

if(typeof(answer) === 'string'){
    var answerHeading = document.createElement('h1');
    answerHeading.textContent = answer;
    document.body.appendChild(answerHeading);
}