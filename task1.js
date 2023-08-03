let num;
// num = prompt("Enter a Number: ");

function Sum(num) {
  var sum = 0;
  if (num > 0) {
    for (let i = 3; i < num; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        sum = sum + i;

      } else if (i % 3 == 0 || i % 5 == 0) {
        sum = sum + i;
      } else {
        sum = sum;
      }
    }
    return sum;
  } else {
    return 0;
  }
};

let check = Sum(10);
console.log("Sum is", check); 