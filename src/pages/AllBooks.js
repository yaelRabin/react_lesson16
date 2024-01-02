import { useSelector } from 'react-redux';
import { Outlet, Link } from "react-router-dom";
import OneBook from '../components/OneBook'
import EditBook from '../components/EditBook';

const AllBooks = () => {
    let arr = useSelector(st => st.arr);
    let selectedBookToEdit=useSelector(st=>st.selectedBookToEdit)
    return (<>
    
        <div style={{display:'flex',width:'95%',margin:'auto'}}>
            {arr.map(item => <OneBook one={item} key={item.id} />
            )}
        </div>
        <Link to='/addBook'>הוסף ספר חדש</Link>
    {selectedBookToEdit&&<EditBook/>}

    </>);
}

export default AllBooks;