import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

// import './features/books/pages/AllBooks';
import AllBooks from './features/books/pages/AllBooks';
// import EditBook from './features/books/components/EditBook';
import AddBook from './features/books/pages/AddBook';


function App() {
  let selectedBookToEdit = useSelector(state => state.bookSlice.selectedBookToEdit)
  return (<>
    {/* <AllBooks /> */}
    {/* {selectedBookToEdit&&<EditBook/>} */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllBooks />} />
        <Route path='/addBook' element={<AddBook/>}/>
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;
