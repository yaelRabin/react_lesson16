import { useState } from "react";
import { Dispatch } from "redux";
// import { addBook } from '../../../store/actions/book'
import { addBook } from '../bookSlice';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [bookToAdd, setBookToAdd] = useState({});
    const [error, setError] = useState(false);
    function changeBookToAdd(e) {
        setBookToAdd({ ...bookToAdd,[e.target.name]: e.target.value })
    }
    function saveNewBook() {
        if (!bookToAdd.name || !bookToAdd.price || +bookToAdd.price <= 0 || !bookToAdd.author)
            setError(true)
        else {
            dispatch(addBook(bookToAdd))
            navigate('/')

        }
    }
    
    return (
        <form onSubmit={saveNewBook} style={{ width: '50%', direction: 'rtl' }}>
            <label>שם הספר</label>
            <input type="text" name="name" onChange={changeBookToAdd}></input><br /><br />
            <label>מחבר</label>
            <input type="text" name="author" onChange={changeBookToAdd}></input><br /><br />
            <label>מחיר</label>
            <input type="number" name="price" onChange={changeBookToAdd}></input><br /><br />
            <label>תמונה</label>
            <input type="text" name="imgUrl" onChange={changeBookToAdd}></input><br /><br />
            {error && <p>אחד מהנתונים שהוזנו חסרים או לא תקינים</p>}
            <input type="button" value="שמור ספר חדש" onClick={saveNewBook} />

        </form>
    );
}

export default AddBook;