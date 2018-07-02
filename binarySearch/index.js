
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function binarySearch(numberToCheck, minIndex = 0, maxIndex = primes.length){
    if (minIndex > maxIndex) return -1;

    let guessedIndex = parseInt((minIndex + maxIndex)/2);
    let guessedNumber = primes[guessedIndex];

    if (guessedNumber === numberToCheck){
        console.log('guessedIndex found', guessedIndex);
        return guessedIndex;
    }
        
    if (guessedNumber > numberToCheck){
        console.log('guessedIndex', guessedIndex);
        binarySearch(numberToCheck, minIndex, guessedIndex - 1);
    } else {
        binarySearch(numberToCheck, guessedIndex + 1, maxIndex);
    }
}

let test1 = binarySearch(2);

console.log(test1);