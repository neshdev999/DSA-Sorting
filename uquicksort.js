/*


    Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.

    The pivot could have been 17, but could not have been 14
    The pivot could have been either 14 or 17
    Neither 14 nor 17 could have been the pivot
    The pivot could have been 14, but could not have been 17

    Could have been either. If either 14 or 17 were swapped with 20, and then we looked at 14 or 17 starting from the right and iterating over the array to the left, we would end up swapping either 14 or 17 with 20 because the number to the left would have been lower than either 14 or 17. To visualize, here they are swapped: [3, 9, 1, 20, 17, 24, 22, 14]
    [3, 9, 1, 14, 20, 24, 22, 17] Just ask, if I start with the number in the last index in the array and look left, at what point do I see a number that is lower? In both above cases, the point is at the number 20.

    Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.

    When using the last item on the list as a pivot

    [3, 9, 10, 12, 19, 14, 17, 16, 13, 15]

    When using the first item on the list as a pivot

    [9, 3, 10, 13, 12, 14, 17, 15, 19, 16]


    */