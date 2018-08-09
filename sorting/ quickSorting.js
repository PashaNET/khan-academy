function quickSort(unsortedArray){
    let arrayLength = unsortedArray.length;
    if(arrayLength <= 1){
        return unsortedArray;
    }
    let middleIndex = Math.round(arrayLength/2);
    let basicElement = unsortedArray[middleIndex];
    let elLessThanBasic = [],
        elMoreThanBasic = [];

    unsortedArray.forEach((item, index) => {
        if(item <= basicElement) {
            elLessThanBasic.push(item);
        } else if(item > basicElement) {
            elMoreThanBasic.push(item);
        }
    });

    return quickSort(elLessThanBasic).concat([basicElement], quickSort(elMoreThanBasic));
} 

let test = [1, 5, 3, 2, 6, 4];
console.log(quickSort(test));