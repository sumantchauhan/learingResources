const mergeTwoSortedArraay = (rightArr, leftArr) => {
  let mergedAr = [],
    sizeOfMergedArray = rightArr.length + leftArr.length,
    r = 0,
    l = 0;
  for (let i = 0; i < sizeOfMergedArray; ++i) {
    if (rightArr[r] >= leftArr[l] || r >= rightArr.length) {
      mergedAr[i] = leftArr[l];
      l++;
    } else {
      mergedAr[i] = rightArr[r];
      r++;
    }
  }
  return mergedAr;
};

// console.log(
//   "Sorted Array",
//   mergeTwoSortedArraay([0, 3, 4, 7, 8, 9], [0, 4, 5, 6, 9])
// );

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

let result = mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);
console.log("Result", result);
