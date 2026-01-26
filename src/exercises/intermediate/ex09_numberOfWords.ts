function countWords(text: string): number {
    const words =  text.trim().split(/\s+/);
    return words.length;
}

//Test

function run3() {
    const input = ` a    B   VBGF  FRFV v   ECVdm`;
    const count = countWords(input);
    console.log("Number of words:", count);
}

run3();