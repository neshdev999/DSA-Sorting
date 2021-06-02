// The basic idea is to make 'buckets' in position in an array to throw the integers into, then merge the buckets

function bucketSort(array) {
    let bucket = [];

    for (let i = 0; i < array.length; i++) {
        if (!bucket[array[i]]) {
            bucket[array[i]] = [array[i]];
        } else {
            bucket[array[i]].push(array[i])
        }
    }

    let result = [];
    bucket.forEach(arr => {
        if (arr) {
            console.log(arr)
            result = result.concat(arr)
        }
    })

    return result;
}
bucketSort([1, 6, 6, 3, 2, 4, 24])

// This is a very crude implementation that clearly doesn't take advantage of knowing the lowest and highest values to define a range for our buckets