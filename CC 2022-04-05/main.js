/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Eg:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
*/


//P: Given an array, want to go through it and take out the next one after the first...
//Return:  true if 2nd element is removed, false if 2nd element present
//Example: given ['Hello', 'Goodbye', 'Hello Again'] ==> ['Hello', 'Hello Again']
//    Given [1, 2, 3, 4, 5] ==> [1, 3, 5]
//PseudoCode: 
//function that takes in array
function removeEveryOther(arr) {
    return arr.filter((x, idx) => idx % 2 === 0)

    //more visible way to write it
    // return arr.filter(function(x, idx) {
    //     return index % 2 === 0
    // })
    //using filter to pass through module and find all even #s
}

removeEveryOther([1, 2, 3, 4, 5]) //true