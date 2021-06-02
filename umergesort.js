// Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

// What is the resulting list that will be sorted after 3 recursive calls to mergesort?

//     [ 21, 1, 26, 45 ]

// What is the resulting list that will be sorted after 16 recursive calls to mergesort?

//     [ 9 ], although it will simply return at that point. The next version of the list that will be passed into MergeSort is [ 16, 49, 39, 27, 43, 34, 46, 40 ]

// What are the first 2 lists to be merged?

//     [ 21 ] [ 1 ], and the first two lists with more than one element are [ 1, 21 ] [ 26, 45 ]

// Which two lists would be merged on the 7th merge?

//     [ 1, 21, 26, 45 ] [ 2, 9, 28, 29 ]