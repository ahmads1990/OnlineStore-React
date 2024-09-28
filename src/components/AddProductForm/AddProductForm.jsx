import { useEffect, useState } from "react";
import SelectANum from "./SelectANum";

const AddProductForm = () => {
    const [images, setImages] = useState([]);
    const [imageOrderOptions, setImageOrderOptions] = useState([]);

    const onImagesUpload = (e) => {
        let startIndex = images.length;
        console.log(e);
        const files = Array.from(e.target.files);
        const uploadedImages = files.map((file) => {
            startIndex += 1;
            return { order: startIndex, file: file, previewFile: URL.createObjectURL(file) };
        });
        const newImages = [...images, ...uploadedImages];
        console.log(newImages);

        setImages(newImages);
    };
    const changeImageOrder = (currentOrder, newOrder) => {
        const updatedImages = images;
        const movedImage = updatedImages.splice(currentOrder - 1, 1)[0];
        updatedImages.splice(newOrder - 1, 0, movedImage);
        const sortedImages = updatedImages.map((img, index) => ({
            ...img,
            order: index + 1,
        }));
        console.log(sortedImages);

        setImages(sortedImages);
    };
    const removeImage = (orderToRemove) => {
        const filteredImages = images.filter((img) => img.order != orderToRemove);
        const sortedImages = filteredImages.map((img, index) => ({
            ...img,
            order: index + 1,
        }));
        setImages(sortedImages);
    };
    useEffect(() => {
        return () => images.forEach((img) => URL.revokeObjectURL(img.previewFile));
    }, []);
    useEffect(() => {
        setImageOrderOptions(Array.from({ length: images.length }, (_, i) => i + 1));
    }, [images]);
    return (
        <div>
            <form action="">
                {/* Product Title */}
                <div className="mb-3">
                    <label htmlFor="InputProductTitle" className="form-label">
                        Product Title
                    </label>
                    <input type="text" className="form-control" id="InputProductTitle" placeholder="product" />
                </div>
                {/* Description */}
                <div className="mb-3">
                    <label htmlFor="InputDescription" className="form-label">
                        Description
                    </label>
                    <input type="text" className="form-control" id="InputDescription" placeholder="Description" />
                </div>
                {/* Price */}
                <div className="mb-3">
                    <label htmlFor="InputPrice" className="form-label">
                        Price
                    </label>
                    <input type="number" className="form-control" id="InputPrice" placeholder="0" />
                </div>
                {/* Images */}
                <div className="mb-3">
                    <label className="form-label">Upload more Images</label>
                    <input type="file" className="form-control" multiple onChange={onImagesUpload} />
                    <table className="table table-hover ">
                        <thead className="table-dark">
                            <tr>
                                <th>Order</th>
                                <th>File Name</th>
                                <th>Image</th>
                                <th>Remove Image</th>
                            </tr>
                        </thead>

                        <tbody>
                            {images.map((img) => (
                                <tr key={img.previewFile}>
                                    <td>
                                        <SelectANum
                                            options={imageOrderOptions}
                                            value={img.order}
                                            onSelect={changeImageOrder}
                                        />
                                    </td>
                                    <td> {img.file.name}</td>
                                    <td>
                                        <img
                                            src={img.previewFile}
                                            style={{
                                                height: "60px",
                                                marginBottom: "1rem",
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => removeImage(img.order)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    );
};

export default AddProductForm;
