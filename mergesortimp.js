function mSort(array) {
    if (array.length === 1) {
        return array
    }
    // Split Array in into right and left
    let length = array.length;
    let middle = Math.floor(length / 2);

    let left = array.slice(0, middle)
    let right = array.slice(middle, length)
        // console.log('left:', left);
        // console.log('right:', right)

    return merge(
        mSort(left),
        mSort(right)
    )
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Iterate over every element in left and right
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]) // can we increment right on the same line, but after the value has been passed?
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    // console.log(left, right);

    // We concat in case there is a leftover element in the left or right arrays
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}