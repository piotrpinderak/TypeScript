function mergeAndRemoveDuplicates(arr1: number[], arr2: number[]): number[] {
    const merged = [...arr1, ...arr2];
    const unique = [...new Set(merged)];
    return unique;
}

const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 3, 4, 5, 6, 88, 99];
const array3 = [85, 2, 3, 4, 5, 6, 88, 99, 10001];

console.log(mergeAndRemoveDuplicates(array1, array2));

// for...of + includes

function removeDuplicates(arr: number[]): number[] {
    const result: number[] = [];

    for(const value of arr) {
        if(!result.includes(value)) {
            result.push(value);
        }
    }

    return result;
}

console.log(removeDuplicates([...array2, ...array3]));