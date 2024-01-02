import { useSelector } from 'react-redux';
const BookDetails = () => {
    const bookToshow = useSelector(state => state.selectedBook)
    return (<>
        <p>{bookToshow.name}</p>
        <p>{bookToshow.author}</p>
        <p>{bookToshow.price}</p>
    </>
    );
}

export default BookDetails;