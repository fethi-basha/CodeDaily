/*
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

*/

//Parameter: Given array with nums, if num is able to square root, then do it. Else square the num. 
//Return: an array with results
//Example: 
//[4,3,9,7,2,1] -> [2,9,3,49,4,1]
//PsuedoCode:
//function that takes arr and return
function squareOrSqrRoot(arr) {
    for (i = 0; i < array.length; i++){
        if (Number.isInteger(Math.sqrt(array[i]))) {
          array[i] = Math.sqrt(array[i])
        } 
        else {
          array[i] = Math.pow(array[i], 2) 
        }
    } return array  
}

//Loop works to solve challenge. Although map might be efficient 

