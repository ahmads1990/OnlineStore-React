import { Link } from "react-router-dom";
import "./ProductItem.css";

const ProductItem = ({ productData }) => {
    const priceFraction = (productData.Price % 1) * 100;

    return (
        <div className="product col-3">
            <div className="card text-bg-light border-0">
                <Link to={`/product/${productData.Id}`}>
                    <img className="card-img-top img-fluid" src={`./${productData.MainImage}`} alt="" />
                </Link>

                <div className="card-body">
                    <div className="card-title">{productData.Title}</div>
                    <strong className="card-text">
                        ${Math.floor(productData.Price)}
                        <sup>{priceFraction.toString().padStart(2, "0")}</sup>
                    </strong>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
