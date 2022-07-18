const arr = [1, 1, 2, 3, 2, 4, 5, 6, 2, 4, 3];

// getArrOfUniqueField(arr) => [1, 2, 3, 4, 5, 6];

function getArrOfUniqueField(arr) {
    return arr.filter((item, index) =>
        arr.indexOf(item) === index);
}

console.log(getArrOfUniqueField(arr));
