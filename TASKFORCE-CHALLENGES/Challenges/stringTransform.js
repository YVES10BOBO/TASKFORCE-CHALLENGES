function transformString(mystring){
    const length = mystring.length;
    let answer = '';

    if(length % 15 === 0) { // condition when length is divisible by both 3 and 5
        answer = mystring.split('').reverse().join('');
        answer = answer.split('').map(char=> char.charCodeAt(0)).join(' ');

    } else if (length % 3 === 0) { // condition when length is divisible by 3
        answer  = mystring.split('').reverse().join('');

    } else if (length % 5 === 0) { // condition when length is divisible by 5 
        answer  = mystring.split('').map(char =>char.charCodeAt(0)).join(' ');
    }else { // condition when length is not divisible by 3 or 5
         
        answer = mystring;
    }

   return answer;
}

// test the result cases
console.log(transformString("Hamburger")); // Expected output: "regrubmaH"
console.log(transformString("Pizza"));// Expected output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie").replace(/ /g, "")); //Expected outputFile: "eikooCpihCetalocohC"
