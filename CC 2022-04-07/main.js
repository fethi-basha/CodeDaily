/*
Complete the square sum function so that it squares each num passed into it then sums it up
*/

//Parameter: 
//Given array, go through each arr and square it. Take the new 'squared' value and sum together 
//Return: passes if each arr in array is squared then added up
//Example: 
//[1, 2, 2] ==> 9
//breakdown (1*1) + (2*2) + (2*2) = 9
//Psuedocode: 
//function that takes in an array and return 
function squareSum(numbers) {
    let sum = 0
    for(let i=0; i < numbers.length; i++) {
        sum = sum + (numbers[i] * numbers[i])
    }
    return sum

}

squareSum([1, 2, 2])

//Future try to impelement pow
