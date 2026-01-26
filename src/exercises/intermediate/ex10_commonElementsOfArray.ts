function commonElements(arr1: number[], arr2: number[]): number[] {
    return arr1.filter(item => arr2.includes(item));
}


//Test

function run4() {
    const array1 = [1, 2, 3, 4, 5, 6, 7, 12, 90, 91, 105, 43, 56, 85, 93, 496, 723, 687, 999];
    const array2 = [3, 12, 91, 105, 85, 496, 99, 55, 32, 567];
    const result = commonElements(array1, array2);
    console.log(`Common elements:`, result);
}

run4();

