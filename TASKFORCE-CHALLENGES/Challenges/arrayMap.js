
function SubarrayWithSum(array, targetValue)// create a function called subarrayWithsum
{
    if(array.length === 0) {   // check the condition of array length 
        return false;                                                     

    }
    let ThecurrentSum = array[0];
    let startValue = 0;

for(let endValue =1; endValue < array.length; endValue++) {
    while (ThecurrentSum >targetValue && startValue < endValue - 1){
        ThecurrentSum -= array[startValue];
        startValue++;

    }
    if (ThecurrentSum === targetValue) {
        return true;
    }
     ThecurrentSum += array[endValue];
}

return ThecurrentSum === targetValue;
}

//let us test the function above with the array that are provided on task
const array = [4,2,7,1,9,5];
const targetValue =17;
console.log(SubarrayWithSum(array,targetValue)); // the out put will be true
