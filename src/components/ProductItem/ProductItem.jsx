import "./ProductItem.css";

const ProductItem = ({ productData }) => {
    return (
        <div className="product col-3 mb-4">
            <div className="card">
                <img className="card-img-top" src={`./${productData.MainImage}`} alt="" />

                <div className="card-body">
                    <h6 className="card-title">{productData.Title}</h6>
                    <p className="card-text">${productData.Price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
