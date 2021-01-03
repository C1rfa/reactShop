
export const Book = props => {
    return (
        <div className="">
            <h2 className="">{ props.name }</h2>
            <p className="">{ props.year }</p>
            <p className="">{ props.price }</p>
        </div>
    )
};

export default Book;
