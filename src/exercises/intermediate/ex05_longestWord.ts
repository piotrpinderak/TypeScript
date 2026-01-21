function longestWord(text: string): string {
    const words = text.split(" ");

    //Find the longest word
    let longest = "";
    for(const word of words) {
        if(word.length > longest.length) {
            longest = word;
        }
    }

    return longest
}

//Test
function run(){
    const input = "Raz dwa trzy cztery pięc szesnaście sześć siedem osiem dziewięć dziesięć"
    const result = longestWord(input);
    console.log(result);

}

run();