
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function binarySearch(numberToCheck, minIndex, maxIndex){
    let min = minIndex || 0;
    let max = maxIndex || primes.length;

    if(min > max) return -1;

    let guessIndex = primes[(minIndex + maxIndex)/2];

    if(guessIndex === numberToCheck){
        return guessIndex;
    } else {
        if(guessIndex > numberToCheck){
            
        } else {
            
        }
    }
}