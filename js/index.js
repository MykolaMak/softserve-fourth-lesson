const greetings = 'Hello JavaScript!';
alert(greetings);

let userName;  //ми створили пусту змінну, там underfiend
userName = prompt("Enter your name");
alert('Hello, ' + userName + '!');

const userAge = parseFloat(prompt('Enter your age:'));
alert('Your age is ' + userAge);

const nextAge = addOne(userAge);
alert('bla bla' + nextAge);

if (Number.isNun(userAge)) {
    alert('Wrong age!')
} else if (userAge >= 18) {
    alert('You are adult!');
} else {
    alert('You are too young');
}

function addOne(inpute) {
    const result = inpute + 1;
    return result;
}