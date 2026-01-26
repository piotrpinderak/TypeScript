function oneArray(arr: any[]): any[] {
    const result: any[] = [];

    for(const item of arr) {
        if (Array.isArray(item)) {
            result.push(...oneArray(item));
        } else {
            result.push(item);
        }
    }

    return result;
}


//Test
function run1() { 
    const input = [1, [2, 3, [772, 66, 7700, [5687, 999]]], 72345612345, [1111, 909090]];
    const output = oneArray(input);
    console.log(output);

}

run1();