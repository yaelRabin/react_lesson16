import { createSlice } from "@reduxjs/toolkit"
// import { selectBookToEdit } from "../../store/actions/book";

const initialState = {
    arr: [
        { id: 100, name: "דודי ואודי 8", price: 20, author: "שרה ליאון", imgUrl: "../../pic/dudiUdi.jpeg" },
        { id: 101, name: "מפי הטף 1", price: 32, author: "מירי", imgUrl: "../../pic/mepiHataf.gif" },
        { id: 102, name: "שיקופיצקי 2", price: 45, author: "שפרה גליק", imgUrl: "../../pic/shikupizki.jpeg" },
        { id: 103, name: "פצצה מתקתקת 22", price: 15, author: "מ.בראט", imgUrl: "../../pic/pzaza.jpg" },
    ],
    selectedBook: null,
    selectedBookToEdit: null
}
export const bookSlice = createSlice({
    name: "book",
    initialState: initialState,
    reducers: {
        addBook: (state, action) => {
            action.payload.id = state.arr[state.arr.length - 1] + 1;
            state.arr.push(action.payload);
        },
        deleteBook: (state, action) => {
            state.arr=state.arr.filter(item => item.id !== action.payload)
        },
        showBook: (state, action) => {
            state.selectedBook = action.payload;
        },
        editBook: (state, action) => {
            state.selectedBookToEdit = action.payload;
        },
        saveEditedBook: (state, action) => {
            let newArr = state.arr.map(item => {
                if (item.id === action.payload.id)
                    return action.payload;
                return item;
            });
            let newSelectedBook;
            if (state.selectedBook.id === action.payload.id)
                newSelectedBook = action.payload;
            else
                newSelectedBook = state.selectedBook;

            state.selectedBook = newSelectedBook;
            state.selectedBookToEdit = null;
            state.arr = newArr;
        }
    }
})
export const { addBook, showBook, deleteBook, editBook, saveEditedBook } = bookSlice.actions;
export default bookSlice.reducer;