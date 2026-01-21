function removeDuplicates(arr: number[]): number[] {
    return [...new Set(arr)];
}

const result = removeDuplicates([1,1,2,3,4,5,5,6,7,8,1,6,7,9,44,5,6,44]);
console.log(result);