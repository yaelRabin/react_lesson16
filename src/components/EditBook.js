import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveEditedBook } from "../store/actions/book";
const EditBook = () => {
    const dispatch=useDispatch();
    let forEdit = useSelector(state => state.selectedBookToEdit);
    const [editedBook, setEditedBook] = useState({ ...forEdit });
    function change(e) {
        setEditedBook({ ...editedBook, [e.target.name]: e.target.value });
    }
    function save(e) {
        e.preventDefault();
        dispatch(saveEditedBook(editedBook))
        
    }
    return (
        <form onSubmit={save} style={{width:'50%',direction:'rtl'}}>
            <h3>עריכת ספר</h3>
            <label>שם הספר :  </label>
            <input type="text" name="name" value={editedBook.name} onChange={change} /><br/><br/>
            <label>שם הסופר : </label>
            <input type="text" name="author" value={editedBook.author} onChange={change} /><br/><br/>
            <label>מחיר : </label>
            <input type="text" name="price" value={editedBook.price} onChange={change} /><br/><br/>
            <input type="button" value="שמור שינויים" onClick={save}/>

        </form>);
}

export default EditBook;