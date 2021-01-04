export const Book = props => {

    const deleteHandler = () => {
        props.deleteFunc(props.id);
    }

    return (
        <div className="">
            <h2 className="">{ props.name }</h2>
            <p className="">{ props.year }</p>
            <p className="">{ props.price }</p>
            <button onClick={ deleteHandler }>DELETE</button>
        </div>
    )
};

export default Book;
