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

export function bookReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_BOOK":
            action.payload.id=state.arr[state.arr.length-1]+1
            return {
                selectedBookToEdit: state.selectedBookToEdit,
                selectedBook: state.selectedBook,
                arr: [...state.arr, action.payload]
            }
        case "DELETE_BOOK":
            return {
                selectedBookToEdit: state.selectedBookToEdit,
                selectedBook: state.selectedBook,
                arr: state.arr.filter(item => item.id !== action.payload)
            }
        case "SELECT_BOOK_TO_EDIT":
            return {
                selectedBook: state.selectedBook,
                selectedBookToEdit: action.payload,
                arr: state.arr
            }
        case "SAVE_EDITED_BOOK":
            let copy = state.arr.map(item => {
                if (item.id === action.payload.id)
                    return action.payload;
                return item;
            })
            let newSelectedBook
            if (state.selectedBook.id === action.payload.id)
                newSelectedBook = action.payload
            else
                newSelectedBook = state.selectedBook
            return {
                selectedBook:newSelectedBook,
                selectedBookToEdit: null,
                arr: copy
            }
        case "SELECT_BOOK_TO_SHOW":
            return {
                selectedBook: action.payload,
                selectedBookToEdit: state.selectedBookToEdit,
                arr: state.arr
            }
        default:
            return state;
    }
}

