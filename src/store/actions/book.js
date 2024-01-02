export function addBook(book) {
    return{
        type:"ADD_BOOK",
        payload:book

    };
}
export function deleteBook(bookId) {
    return{
        type:"DELETE_BOOK",
        payload:bookId

    };
}
export function selectBookToEdit(book) {
    return{
        type:"SELECT_BOOK_TO_EDIT",
        payload:book
    };
}
export function saveEditedBook(book) {
    return{
        type:"SAVE_EDITED_BOOK",
        payload:book
    };
}
export function selectBookToShow(book) {
    return{
        type:"SELECT_BOOK_TO_SHOW",
        payload:book
    };
}





