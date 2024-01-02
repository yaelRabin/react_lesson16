import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

import './pages/AllBooks'
import AllBooks from './pages/AllBooks';
import EditBook from './components/EditBook';
import AddBook from './pages/AddBook';


function App() {
  let selectedBookToEdit = useSelector(state => state.selectedBookToEdit)
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
