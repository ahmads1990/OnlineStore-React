import { Cart, Person, Search, ShopWindow } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-secondary mb-4">
            <div className="container-fluid d-flex">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Link to="/" className="navbar-brand d-flex align-items-center px-6 mx-auto">
                    <ShopWindow className="me-1" />
                    Online Store
                </Link>

                <div className="d-flex align-items-center order-lg-1 ml-auto px-2 pr-2">
                    <Link className="nav-link text-capitalize me-2" to="/">
                        <Search className="fs-4 text-primary" />
                    </Link>
                    <Link className="nav-link text-capitalize me-2" to="/">
                        <Person className="fs-2 text-primary" />
                    </Link>
                    <Link className="nav-link text-capitalize me-2" to="/">
                        <Cart className="fs-4 text-primary" />
                    </Link>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ms-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-capitalize" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-capitalize" to="/">
                                Best Collection
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-capitalize" to="/">
                                Shop All Snacks
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-capitalize" to="/">
                                Sale!
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-capitalize" to="add">
                                Add Snack
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
