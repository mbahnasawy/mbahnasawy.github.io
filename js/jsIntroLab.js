/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    console.assert(expected === found, "TEST FAILED.  Expected " + expected + " found " + found);
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

/* runs test to see if expected array is equal to value returned by function2test argument */
function myFunctionArrayTest(expected, found) {
    console.assert(JSON.stringify(expected) === JSON.stringify(found), "TEST FAILED.  Expected " + expected + " found " + found);
    if (JSON.stringify(expected) === JSON.stringify(found)) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
    return Math.max(a, b);
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

console.log("Expected output of max(20,10) is 20  " + myFunctionTest(10, max(20, 10)));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));

console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));

/* isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise */
function isVowel(ch) {
    return 'aeiou'.indexOf(ch.toLowerCase()) !== -1;
}

console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel('a')));

console.log("Expected output of isVowel('c') is false  " + myFunctionTest(false, isVowel('c')));

console.log("Expected output of isVowel('c') is false  " + myFunctionTest(true, isVowel('c')));

/* sum() all the numbers in an array of numbers */
function sum(array) {
    var sum = 0;
    for (x in array) {
        sum += array[x];
    }
    return sum;
}

console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1, 2, 3, 4])));

console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(15, sum([1, 2, 3, 4])));

/* multiply() all the numbers in an array of numbers */
function multiply(array) {
    var sum = 1;
    for (x in array) {
        sum *= array[x];
    }
    return sum;
}

console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1, 2, 3, 4])));

console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(26, multiply([1, 2, 3, 4])));

/* reverse() that computes the reversal of a string */
function reverse(str) {
    return str.split('').reverse().join('');
}

console.log("Expected output of reverse('jag testar') is 'ratset gaj'  " + myFunctionTest('ratset gaj', reverse('jag testar')));

console.log("Expected output of reverse('jag testar') is 'ratset gaj'  " + myFunctionTest('ratset jag', reverse('jag testar')));

/* findLongestWord() that takes an array of words and returns the length of the longest one */
function findLongestWord(array) {
    var str = '';
    for (x in array) {
        if (array[x].length > str.length)
            str = array[x];
    }
    return str;
}

console.log("Expected output of findLongestWord(['abc', 'a', 'abcde', 'abcd']) is 'abcde'  " + myFunctionTest('abcde', findLongestWord(['abc', 'a', 'abcde', 'abcd'])));

console.log("Expected output of findLongestWord(['abc', 'a', 'abcde', 'abcd']) is 'abcde'  " + myFunctionTest('abc', findLongestWord(['abc', 'a', 'abcde', 'abcd'])));

/* filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i */
function filterLongWords(array, i) {
    var str = [];
    for (x in array) {
        if (array[x].length > i)
            str.push(array[x]);
    }
    return str;
}

console.log("Expected output of filterLongWords(['abc', 'a', 'abcde', 'abcd'], 3) is ['abcde', 'abcd']  " + myFunctionArrayTest(['abcde', 'abcd'], filterLongWords(['abc', 'a', 'abcde', 'abcd'], 3)));

console.log("Expected output of filterLongWords(['abc', 'a', 'abcde', 'abcd'], 3) is ['abcde', 'abcd']  " + myFunctionArrayTest(['a', 'abcde', 'abcd'], filterLongWords(['abc', 'a', 'abcde', 'abcd'], 3)));

function mapTest(array) {
    return array.map(function (elem) {
        return elem * 10;
    });
}

console.log("Expected output of mapTest([1,3,5,3,3]) is [10,30,50,30,30]  " + myFunctionArrayTest([10,30,50,30,30], mapTest([1,3,5,3,3])));

function filterTest(array) {
    return array.filter(function (elem) {
        return elem === 3;
    });
}

console.log("Expected output of filterTest([1,3,5,3,3]) is [3,3,3]  " + myFunctionArrayTest([3,3,3], filterTest([1,3,5,3,3])));

function reduceTest(array) {
    return array.reduce(function (prevValue, elem) {
        return prevValue * elem;
    });
}

console.log("Expected output of reduceTest([1,3,5,3,3]) is 135 " + myFunctionTest(135, reduceTest([1,3,5,3,3])));
