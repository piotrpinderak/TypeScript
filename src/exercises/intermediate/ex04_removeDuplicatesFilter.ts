function removeDuplicatesFilter(arr: number[]): number[] {
  return arr.filter((value, index) => {
    return arr.indexOf(value) === index;
  });
}

console.log(removeDuplicatesFilter([1, 2, 2, 3, 4, 4, 5]));
