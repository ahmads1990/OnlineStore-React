import { useState } from "react";

const ImageGallery = ({ ImagesList }) => {
    const [selectedImage, setSelectedImage] = useState(0);

    const changeSelectedImage = (selectedImageIndex) => {
        setSelectedImage(selectedImageIndex);
    };
    const selectedBorder = "2px solid black";
    return (
        <div className="image-gallery col-5 bg-body-tertiary d-flex">
            {/* Side Images */}
            {ImagesList.length > 1 && (
                <div className="sub d-flex flex-column mx-3">
                    {ImagesList.map((sideImg, index) => (
                        <img
                            key={sideImg}
                            src={`/${sideImg}`}
                            style={{
                                width: "50px",
                                marginBottom: "1rem",
                                border: index === selectedImage ? selectedBorder : "",
                            }}
                            alt={index === selectedImage ? "selected Image" : "gallery image"}
                            onClick={() => changeSelectedImage(index)}
                        />
                    ))}
                </div>
            )}
            {/* Main image */}
            {ImagesList && <img className="w-100" src={`/${ImagesList[selectedImage]}`} alt="" />}
        </div>
    );
};

export default ImageGallery;
