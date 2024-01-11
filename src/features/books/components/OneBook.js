import { useDispatch } from 'react-redux';
// import { deleteBook, selectBookToEdit, selectBookToShow } from '../../../store/actions/book';
import { addBook, showBook, deleteBook, editBook, saveEditedBook } from '../bookSlice';
import { useSelector } from 'react-redux';
import BookDetails from './BookDetails';


const OneBook = ({ one }) => {
    let dispatch = useDispatch();
    const selectedBook = useSelector(state => state.bookSlice.selectedBook)

    return (
        <div style={{flex:'1',textAlign:'center',border:'black 2px solid'}}>
            <img src={one.imgUrl} alt={one.name} style={{height:'250px'}} /><br/>
            <input type="button" value="הצג פרטים" onClick={() => dispatch(showBook(one))} />
            <input type="button" value="מחק" onClick={() => dispatch(deleteBook(one.id))} />
            <input type="button" value="ערוך" onClick={() => dispatch(editBook(one))} />
            {selectedBook&&selectedBook.id===one.id&&<BookDetails/> }
        </div>
    );
}

export default OneBook;