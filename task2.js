let input = prompt('Enter a string: ');

function palindrome(input) {
    for (let i = 0; i < input.length / 2; i++) {
        if (input[i] !== input[input.length - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

let check = palindrome(input);
console.log(check);