import { ArrowRight } from "react-bootstrap-icons";

const HomePage = () => {
    return (
        <div className="container-flex" style={{ padding: "0px 200px" }}>
            <div className="row gx-3">
                <div className="col-2" style={{ maxHeight: "480px" }}>
                    <div className="card h-100">
                        <img
                            className="card-img h-100"
                            src="https://cdn.builder.io/api/v1/image/assets%2Fc6a076e4ccd94e61bccaa4f09a088079%2F18eac64e01714830a08382684617ef38?width=480"
                            alt=""
                        />
                        <div className="card-img-overlay d-flex flex-column justify-content-start text-white fs-2 fw-bold pt-5 ">
                            <h5 className="card-title">Seasonal Indulgences</h5>
                            <p className="card-text">Gift the essence of Autumn</p>
                            <p className="card-text">
                                <small>
                                    Shop now <ArrowRight />
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-7" style={{ maxHeight: "480px" }}>
                    <div className="card h-100">
                        <img
                            className="card-img h-100"
                            src="https://cdn.builder.io/api/v1/image/assets%2Fc6a076e4ccd94e61bccaa4f09a088079%2Fccfccdfa0bdf442cb64b6c8e4853a9c9?width=1000"
                            alt=""
                        />
                        <div className="card-img-overlay d-flex flex-column justify-content-center text-white fs-2 fw-bold pt-5 ">
                            <h5 className="card-title">2024 Advent Calendars</h5>
                            <p className="card-text">
                                Discover Magic <br /> Everyday
                            </p>
                            <p className="card-text">
                                <a href="#" className="btn btn-dark text-capitalize rounded-pill fs-5 p-1 px-4">
                                    Shop now
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-3" style={{ maxHeight: "480px" }}>
                    <div className="col">
                        <div className="card mb-2">
                            <img
                                className="card-img"
                                src="https://cdn.builder.io/api/v1/image/assets%2Fc6a076e4ccd94e61bccaa4f09a088079%2Fb50776196875405d929554d784b882b5?width=400"
                                alt=""
                                style={{ maxHeight: "250px" }}
                            />
                            <div className="card-img-overlay d-flex flex-column justify-content-center text-white fs-3 fw-bold pt-5 ">
                                <h5 className="card-title">Seasonal Indulgences</h5>
                                <p className="card-text">Gift the essence of Autumn</p>
                                <p className="card-text">
                                    <small>
                                        Shop now <ArrowRight />
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card ">
                            <img
                                className="card-img "
                                src="https://cdn.builder.io/api/v1/image/assets%2Fc6a076e4ccd94e61bccaa4f09a088079%2Fe77aadec4576454ca4492ae659a4ab7f?width=400"
                                alt=""
                                style={{ maxHeight: "215px" }}
                            />
                            <div className="card-img-overlay d-flex flex-column justify-content-center text-white fs-2 fw-bold pt-5 ">
                                <h5 className="card-title">End Summer with a Bang!</h5>
                                <p className="card-text">
                                    <small>
                                        Shop now <ArrowRight />
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
