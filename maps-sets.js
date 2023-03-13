// Quick Question #1
// What does the following code return?
new Set([1,1,2,2,3,4]) // [1, 2, 3, 4]

// Quick Question #2
// What does the following code return?
[...new Set("referee")].join("") //well aside from throwing an error, if this worked, you'd get 'ref' back. But it doesn't work... so... Someone should maybe fix that.

// Quick Question #3
//What does the map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); //{[1, 2, 3] => true, [1, 2, 3] => false}

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
function hasDuplicate(arr){
    let noDupes = new Set(arr);
    if (noDupes.size === arr.length){
        return true;
    } else {
        return false;
    }
}

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
function vowelCount(str){
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const vowelCount = new Map();
    let lowerStr = str.toLowerCase();
    for (let char of lowerStr){
        if (vowels.has(char)){
            if (vowelCount.has(char)){
                vowelCount.set(char, vowelCount.get(char) + 1);
            } else {
                vowelCount.set(char, 1);
            }
        }
    }
    return vowelCount;
}