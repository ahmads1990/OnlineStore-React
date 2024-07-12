import "./ProductDetails.css";
import DetailsAccordion from "./DetailsAccordion.jsx";
import QuantitySelector from "./QuantitySelector.jsx";
import useFetchProducts from "../../hooks/useFetchProducts.js";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const { data: productData, isLoading, error } = useFetchProducts(id);

    const [productQuantity, setProductQuantity] = useState(0);

    const incQuantity = () => {
        setProductQuantity(productQuantity + 1);
    };
    const decQuantity = () => {
        setProductQuantity(productQuantity - 1);
    };
    return (
        <div className="container-fluid bg-body-secondary">
            {isLoading && (
                // Loading spinner
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
            {error && <div className="text-danger">{error}</div>}

            {productData && (
                <div className="product-details row">
                    <div className="image-gallery col-5 bg-body-tertiary">
                        <img className="w-100" src={`/${productData.MainImage}`} alt="" />
                    </div>
                    <div className="product-info col">
                        <h3>{productData.Title}</h3>
                        {/* Ratings */}
                        <div className="ratings">
                            <div className="rating-stars">star star</div>
                            <h5 className="rating-count">12 Reviews</h5>
                        </div>
                        {/* Price */}
                        <span>${productData.Price}</span>
                        <ul>
                            <li>
                                <span>In stock, ready to ship</span>
                            </li>
                        </ul>
                        <QuantitySelector quantity={productQuantity} addOne={incQuantity} removeOne={decQuantity} />
                        <button>Add to cart</button>

                        <div className="product-info-desc">{productData.Description}</div>
                        <DetailsAccordion itemId={productData.Id} details={productData.Details} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
