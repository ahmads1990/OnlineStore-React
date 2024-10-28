import ProductItem from "../ProductItem/ProductItem.jsx";
import useFetchProducts from "../../hooks/useFetchProducts.js";
import { SquareFill } from "react-bootstrap-icons";

const ProductList = () => {
    const { data: productData, isLoading, error } = useFetchProducts();

    return (
        <div className="container-fluid px-5">
            <div className="row">
                <hr />
                <div className="col-2">
                    <div>By Price</div>
                    <div>By Giftee</div>
                    <div>By Occasion</div>
                    <div>By Flavor</div>
                    <div>By Diet</div>
                </div>
                <div className="col">
                    <div className="row px-3 mb-3">
                        <div className="d-flex justify-content-between align-content-center">
                            <div>{productData.length} Products</div>

                            <div className="d-flex align-content-center">
                                <select
                                    className="form-select form-select-sm py-0"
                                    aria-label="Small select example"
                                    style={{ height: "2rem" }}
                                >
                                    <option selected>Featured</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <div className="d-flex">
                                    <SquareFill />
                                    <SquareFill />
                                    <SquareFill />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-3">
                        {isLoading && (
                            // Loading spinner
                            <div className="spinner-border text-danger" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        )}
                        {error && <div className="text-danger">{error}</div>}

                        {productData &&
                            productData.map((product) => <ProductItem key={product.Id} productData={product} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
