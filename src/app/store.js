import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "../features/books/bookSlice";

const store= configureStore({
    reducer:{bookSlice:bookSlice},
})
export default store;