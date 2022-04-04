/* You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

 Array can contain numbers or strings. X can be either.

 Return true if the array contains the value, false if not.
 */

//Parameters(p): Given array A, and rand val is X. Want to see if A has X in it. A can be num or string. Same for X. Is it empty? undefined? special char?
//R: True if X is in a, false if X is not. (boolean)
//E: Given [1,2,3] as A and 4 as X, should return FALSE
//   [7,6,3,2] ==> if X is 6, should return TRUE
//  Given [] as A and 4 as X, should return FALSE
//P: Make function that takes in two parameters: an array and random num
function numInArray(arr,num) {
    //look through array and see if its there

    return arr.includes(num)

}

numInArray([3,5,2,9], 2)  //should return true
numInArray([], 4)       //should return false
numInArray([1,4,2,5], 7)   //should return false