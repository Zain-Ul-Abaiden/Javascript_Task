let input = prompt('Enter a string: ');

function isogram(input) {
  for (let i = 0; i < input.length; i++)
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] == input[j]) {
        for (let k = 1; k < input.length; k++){
           if(input[k] == input[k+1]){
          return 'It is not isogram and consectuive or non-consectuive';
         }
      }
        return 'It is not a isogram and non-consectuive';
      }
     
    }
  return 'It is a isogram';
}

let check = isogram(input);
console.log(check);