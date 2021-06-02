const LinkedList = require('./linkedList');
const listHelpers = require('./listHelpers');

const list = new LinkedList;

list.insertFirst(4)
list.insertFirst(5)
list.insertFirst(2)
list.insertFirst(12)
list.insertFirst(1)
list.insertFirst(5)
list.insertFirst(9)
list.insertFirst(8)
list.insertFirst(3)

listHelpers.display(list)
    // 3 -> 8 -> 9 -> 5 -> 1 -> 12 -> 2 -> 5 -> 4 -> null

function mergeSort(list) {
    // O(n log n), a divide and conquer algorithm

    // Uncomment to watch the recursive splitting happen
    // listHelpers.display(list)

    if (listHelpers.size(list) == 1) { return list }

    const length = listHelpers.size(list);
    const middle = Math.floor(length / 2);

    // We're going to need a new way to generate a sub-list from a linked list
    const left = mergeSort(subList(list, 0, middle));
    const right = mergeSort(subList(list, middle, length));

    return merge(left, right)
}

function merge(left, right) {
    // Mergesort requires a function to merge the recursively split up bits back together again
    const result = new LinkedList;


    let leftNode = left.head;
    let rightNode = right.head;

    // Insert items according to order
    while (leftNode && rightNode) {
        if (leftNode.value < rightNode.value) {
            result.insertLast(leftNode.value);
            leftNode = leftNode.next; // Move to the next node
        } else {
            result.insertLast(rightNode.value);
            rightNode = rightNode.next;
        }
    }
    // console.log(result)

    // Insert anything leftover
    while (leftNode) {
        result.insertLast(leftNode.value);
        leftNode = leftNode.next;
    }
    while (rightNode) {
        result.insertLast(rightNode.value);
        rightNode = rightNode.next;
    }

    return result;
}

function subList(list, start, stop) {
    // We need to create a new list each time
    const result = new LinkedList;

    let counter = start;
    let currentNode = listHelpers.findByIndex(list, start);

    while (counter < stop) {
        if (!currentNode) { throw Error('subList called out of bounds of linked list') }

        result.insertLast(currentNode.value);
        currentNode = currentNode.next;
        counter++;
    }

    return result;
}

// Merge sort doesn't sort in place here, it generates a new linked list and is generally not space efficient
let newList = mergeSort(list)

listHelpers.display(newList)
    // 1 -> 2 -> 3 -> 4 -> 5 -> 5 -> 8 -> 9 -> 12 -> null