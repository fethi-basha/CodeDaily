/*Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]
*/
<<<<<<< HEAD
//P:Are you ever given an empty array? What then? are they always digits?
//R: Whatever the num was given, it is now split up into an array and the order of the numbers is reversed
//E: if we are given 9258 => [8, 5, 2, 9]
//                   4156 => [6,5,1,4]
//                   undefined => not a num
//P: make a function that takes in a num
function reverseArray(num) {
    //make number a string and split #
    let numArr = num.toString().split('').reverse()
    //reverse array 
    return parseInt(numArr)
    //make array integers again & return

}

reverseArray(348597)
console.log(reverseArray(348597), [7,9,5,8,4,3])
//not working, thus trying to use map for next attempt 


=======
>>>>>>> 3f879d9f84309b2bed929eeadefdb19e8b5ed61f

