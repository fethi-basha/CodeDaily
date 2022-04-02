/* Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]   */

//P: Is it always going to be int? Are we going to be given any special characters? An empty arr ever?
//R: Return a new arr with each value doubled
//E: [2,3,4] ==> [4,6,8]
//   [4,5,6] ==> [8,10,12]
//   [2,22]  ==> [4,44]
//P: 
//Make a function that takes in array
function doubled(arr) {
    if(arr === undefined || arr.length === 0) {
        console.log('Array is invalid')
    } else {
        return arr.map(val => val *2)
    }
    
}
//map through the array and multiply each element by 2. Then return 
doubled([1,2,3])
console.log(doubled[2,3,4],[4,6,8])


