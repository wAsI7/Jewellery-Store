const jsonStr = '{"greetings":"hello"}';
console.log(`This is JSON ${jsonStr}`);

const jsObj = JSON.parse(jsonStr);
jsObj.greetings = "Hey!!";

console.log(`This is JS Object ${jsObj}`);
