interface Book {
    title: string;
    author: string;
    year: number;
}

function displayBookDetails(book: Book): void {
    console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`);
}

const myBook: Book = {
    title: "Basketball",
    author: "Ktoś",
    year: 1999
};

displayBookDetails(myBook);