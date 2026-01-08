//IndexOf()

function findIndex(arr: number[], value: number): number {
    return arr.indexOf(value);
}

const array = [5, 10, 15, 20];
const valueToFindA = 15;
const valueToFindB = 20;

console.log("Index of 15:", findIndex(array, valueToFindA));

//for()

function findIndexFor(arr: number[], value: number): number {
    for(let  i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
    }
    return "NOPE"
}

console.log("Indef of 20:", findIndexFor(array, valueToFindB))