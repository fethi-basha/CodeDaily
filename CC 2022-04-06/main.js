/*
Write a function findNeedle() that takes an array full of junk but containing one "needle"
After function finds "needle" return the position of needle with a quick statement 

Eg: findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']) ==> 5
*/

//Parameters: Go through array, until an array containing "needle" is found

//Return: once the parameter is true, return arr positon. If false, keep going through array

//Example: 
//findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']) ==> 5 
//findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'bottle', 'randomJunk']) ==> Nothing exists

//Pseudocode
//with findIndex
function findNeedle(hay) {
    let findN = (placeHolder) => placeHolder == 'noodle'
    return `found the noodle at position ` + hay.findIndex(findN)
}

findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false])   //found the needle at position 3

//with indexOf 
function findNeedle2(hay2) {

    return 'found the noodle at position ' + hay2.indexOf('needle')
}

findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false])   //found the needle at position 3