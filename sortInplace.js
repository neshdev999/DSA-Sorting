function swap(index1, index2, array) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return;
}

function shuffle(array) {
    for (let i = 0; i < array.length; i++) {
        let randomIndex = Math.floor(Math.random() * array.length);
        swap(i, randomIndex, array);
    }
    return array;
}
shuffle([1, 2, 3, 4, 5])