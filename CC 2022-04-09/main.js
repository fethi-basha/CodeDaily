/*
Consider an array/list of sheep where some sheep may be missing from their place.
We need a function that counts the number of sheep present in the array (true means present).
*/

//Parameter: in the arr, we are looking for boolean that determines place of sheep
//Results: Result passes when location of false is correctly determiend 
//Eg:
//[true,  true,  true,  false] => 3
//PsudoCode

//with loop
function countSheeps(arr) {
    let count = 0
    for(let i=0; i < arr.length; i++) {
      if(arr[i] === true) {
        count++
        
      }
    }
    return count
  }
  
  //or with just a filter
  function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }