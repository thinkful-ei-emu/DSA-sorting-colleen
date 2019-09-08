/* 1. Understanding merge sort
Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
16 
What is the resulting list that will be sorted after 3 recursive calls to mergesort? 1 21 26 45
What is the resulting list that will be sorted after 16 recursive calls to mergesort? the sorted list
What are the first 2 lists to be merged? 1 21
Which two lists would be merged on the 7th merge? */


function mergeSort(array) {
  if (array.length <= 1) {
      return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle); //0-7  21 1 26 45 29 28 2 9 #1
  let right = array.slice(middle, array.length); //7-15 9 16 49 39 27 43 34 46 40 #1

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
};
//left #2 21 1 26 45
// #2 29 28 2 9
//right: #2 left 9 16 49 39 ...right #2 43 34 46 40
//left #3 left 21 1 right 26 45
//right #3 left 9 16, right 49 39, and left  43 34, right 46 40
/* [34, 40, 43, 46]
[1 21 26 45]
[1 21 26 34 40 43 45 46] */
//
//2
//
function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          array[outputIndex++] = left[leftIndex++];
      }
      else {
          array[outputIndex++] = right[rightIndex++];
      }
  }

  for (let i = leftIndex; i < left.length; i++) {
      array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
      array[outputIndex++] = right[i];
  }
  return array;
};

/* 
1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: . Which of the following statements is correct about the partition step? Explain your answer.

The pivot could have been 17, but could not have been 14
The pivot could have been either 14 or 17: Because the numbers to the left are all smaller and 14 and 17 are next to eachother, either could have been.
Neither 14 nor 17 could have been the pivot
The pivot could have been 14, but could not have been 17

2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.

When using the last item on the list as a pivot
    i               j
1. 14  17 13 15 19 14 3 16 9 12
pivot: 12

10 3 9 15 19 14 17 16 13 12


When using the first item on the list as a pivot */
/* first- 3 12 9 14 17 13 15 19 10 16
second -3 12 9 10 16 13 14 17 15 19 */

function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};


//3:

let arrayTest  = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]

//console.log(quickSort(arrayTest))

//4. 
//console.log(mergeSort(arrayTest))

//6. bucket sort

function insertionSort(array) {
    //helper function to sort the buckets
    var length = array.length;
    
    for(var i = 1; i < length; i++) {
      var temp = array[i];
      for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
        array[j+1] = array[j];
      }
      array[j+1] = temp;
    }
    
    return array;
  }
let arraySmall = [5, 2, 3, 4, 1]


function sortingBucket(arr, min, max){
    let mid = Math.floor(max-min/2)
console.log(mid)
    let tmparrsm = []
    let tmparrbig = []
    for (let i=0; i < arr.length; i++){
        if(arr[i]<mid){
            tmparrsm.push(arr[i])
        }
        if(arr[i]>=mid){
            tmparrbig.push(arr[i])
        }
    }
  arr.length = 0;
    insertionSort(tmparrbig)
    insertionSort(tmparrsm)
   
   tmparrsm.forEach(item =>{
       arr.push(item)
   })
   tmparrbig.forEach(item => {
       arr.push(item)
   })
    console.log(arr)
    return arr
    
}

sortingBucket(arraySmall, 1, 5)
sortingBucket(arrayTest, 1, 98)

/* 7. Sort in place
Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).
 */
function shuffle(arr){

}
 /* 
8. Sorting books
Imagine that I gave you 20 books to sort in alphabetical order. Express this as an algorithm and them implement your algorithm. */