function analyzeArray(array){
    array = mergeSort(array);

    const object = {
        average: array.reduce((prev, current) => prev + current, 0) / array.length,
        min: array[0],
        max: array[array.length - 1],
        length: array.length
    }
    return object;
}

function mergeSort(array) {
    if (array.length > 1) {
        let array1 = mergeSort(array.slice(0, Math.ceil(array.length / 2)));
        let array2 = mergeSort(array.slice(Math.ceil(array.length / 2), array.length));
        return merge(array1, array2);
    }
    return array;
}

function merge(array1, array2){
    let i = 0;
    let j = 0;
    let newArray = [];
    while(i < array1.length && j < array2.length){
        if(array1[i] < array2[j]){
            newArray.push(array1[i]);
            i++;
        } else {
            newArray.push(array2[j]);
            j++;
        }
    }
    for(i; i < array1.length; i++){
        newArray.push(array1[i]);
    }
    for(j; j < array2.length; j++){
        newArray.push(array2[j]);
    }
    return newArray;
}
module.exports = analyzeArray;