//use insertion sort to solve this problem because the dataset is relatively small
// Insertion sort also works really well on lists which are almost sorted already
function sortBooks(books) {
    if (!books) { throw Error('sortBooks requires an array as an argument') }
    if (!Array.isArray(books)) { throw Error('sortBooks called without an array') }
    if (books.length <= 1) { return books }

    for (let i = 1; i < books.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            console.log(books)
            console.log(books[j][0], books[i][0])
            console.log(books[j][0] > books[i][0])
            if (books[j][0] <= books[i][0]) {
                break;
            } else if (!books[j - 1] || books[i][0] < books[j][0] && books[i][0] >= books[j - 1][0]) {
                books.splice(j, 0, books.splice(i, 1)[0])
                break;
            }
        }
    }

    return books;
}

const books = ["The Fighting 69th", "5 Centimeters per Second (Byôsoku 5 senchimêtoru)", "Rumor Has It...", "Raise the Red Lantern (Da hong deng long gao gao gua)", "Revenge of the Nerds IV: Nerds in Love", "Breakdown", "Haunting of Molly Hartley, The", "Battleship Potemkin", "Original Kings of Comedy, The", "True Confessions", "Food of the Gods II", "Christmas Story, A", "Bikini Beach", "Jerichow", "How the Myth Was Made: A Study of Robert Flaherty's Man of Aran", "Bosko's Parlor Pranks", "Journey to the Center of the Earth", "Goodbye Girl, The", "Prairie Love", "Mesrine: Killer Instinct (L'instinct de mort)"]

sortBooks(books)