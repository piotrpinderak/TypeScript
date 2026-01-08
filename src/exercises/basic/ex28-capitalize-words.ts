function capitalizeWords(sentence: string): string {
    const words = sentence.split(" ");

    const capitalized = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    });

    return capitalized.join(" ");
}

console.log(capitalizeWords("hello world again in a2026"));