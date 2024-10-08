import { useEffect, useState } from "react";
import SelectANum from "./SelectANum";

const AddProductForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: 0,
        images: [],
    });
    const [imageOrderOptions, setImageOrderOptions] = useState([]);

    // add new image
    const onImagesUpload = (e) => {
        const files = Array.from(e.target.files);
        const uploadedImages = files.map((file) => {
            return { file: file, previewFile: URL.createObjectURL(file) };
        });
        // merge already uploaded image with new ones
        const newImages = [...formData.images, ...uploadedImages];
        handleImageDataChange(newImages);
    };
    // change image ordering or delete it
    const updateImageOrder = (currentOrder, newOrder) => {
        const imagesCopy = formData.images;
        // remove image from array
        const movedImage = imagesCopy.splice(currentOrder - 1, 1)[0];
        if (newOrder !== null && newOrder !== undefined)
            // reinsert that image into new index
            imagesCopy.splice(newOrder - 1, 0, movedImage);

        handleImageDataChange(imagesCopy);
    };
    // clean up after comp unmount to remove url created for images
    useEffect(() => {
        return () => formData.images.forEach((img) => URL.revokeObjectURL(img.previewFile));
    }, []);
    useEffect(() => {
        setImageOrderOptions(Array.from({ length: formData.images.length }, (_, i) => i + 1));
    }, [formData.images]);
    // Handle form changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleImageDataChange = (imagesData) =>
        setFormData({
            ...formData,
            images: imagesData,
        });
    // Handle form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={handleFormSubmit} method="post" className="w-50">
                {/* Product Title */}
                <div className="mb-3">
                    <label htmlFor="InputProductTitle" className="form-label">
                        Product Title
                    </label>
                    <input
                        id="InputProductTitle"
                        type="text"
                        className="form-control"
                        name="title"
                        placeholder="product"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                {/* Description */}
                <div className="mb-3">
                    <label htmlFor="InputDescription" className="form-label">
                        Description
                    </label>
                    <textarea
                        id="InputDescription"
                        type="text"
                        className="form-control"
                        name="description"
                        placeholder="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                {/* Price */}
                <div className="mb-3">
                    <label htmlFor="InputPrice" className="form-label">
                        Price
                    </label>
                    <input
                        id="InputPrice"
                        type="number"
                        className="form-control"
                        name="price"
                        placeholder="0"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </div>
                {/* Images */}
                <div className="mb-3">
                    <label className="form-label">Upload more Images</label>
                    <input type="file" className="form-control" multiple onChange={onImagesUpload} />
                    {/* to display uploaded image */}
                    <table className="table table-hover mt-3">
                        <thead className="table-dark">
                            <tr>
                                <th>Order</th>
                                <th>File Name</th>
                                <th>Image</th>
                                <th>Remove Image</th>
                            </tr>
                        </thead>

                        <tbody>
                            {formData.images.map((img, index) => (
                                <tr key={img.previewFile}>
                                    <td>
                                        <SelectANum
                                            options={imageOrderOptions}
                                            value={index + 1}
                                            onSelect={updateImageOrder}
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
                                            onClick={() => updateImageOrder(index + 1)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Submit */}
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddProductForm;
