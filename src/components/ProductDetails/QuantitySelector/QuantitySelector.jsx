const QuantitySelector = ({ quantity, addOne, removeOne }) => {
    return (
        <div className="quantity-selector my-2">
            <div className="btn-group">
                <button type="button" className="btn btn-light" onClick={removeOne}>
                    -
                </button>
                <button type="button" disabled={true} className="btn btn-light" onClick={addOne}>
                    {quantity}
                </button>
                <button type="button" className="btn btn-light" onClick={addOne}>
                    +
                </button>
            </div>
        </div>
    );
};

export default QuantitySelector;
