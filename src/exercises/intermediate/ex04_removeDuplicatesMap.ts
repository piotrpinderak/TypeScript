function removeDuplicatesMap(arr: number[]): number[] {
    const seen =new Map<number, boolean>();
    const result: number[] = [];

    for(const num of arr) {
        if(!seen.has(num)) {
            seen.set(num, true);
            result.push(num);
        }
    }
    return result;
}


console.log(removeDuplicatesMap([1, 2, 2, 3, 4, 4, 5, 1, 3, 8, 22, 55, 77, 22, 55, 88, 3, 55, 8]));