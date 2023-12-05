export default function mergeSort(array: any[], compareFn: Function): any {
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  if (array.length <= 1) {
    return array;
  }
  return merge(
    mergeSort(left, compareFn),
    mergeSort(right, compareFn),
    compareFn
  );
}

function merge(left: any[], right: any[], compareFn: Function) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (compareFn(left[leftIndex], right[rightIndex]) === true) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
