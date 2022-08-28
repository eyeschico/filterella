import { useRef, useState } from "react";
import "./ImageField.css";

const ImageField = () => {
  const uploadInputRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);

  const uploadRefWindow = () => {
    uploadInputRef.current && uploadInputRef.current.click();
  };

  const handleChangeInput = (event) => {
    setImageFile(URL.createObjectURL(event.target.files[0]));
  };

  const renderImage = () => (
    <img style={styledImage} src={imageFile} alt="Current image" />
  );

  const styledImage = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  };

  return (
    <div className="image-container">
      <div className="image-box" onClick={uploadRefWindow}>
        {imageFile ? (
          renderImage()
        ) : (
          <img src="./download-icon.svg" alt="Download Image" />
        )}
      </div>
      <input
        onChange={handleChangeInput}
        ref={uploadInputRef}
        type="file"
        accept="image/*"
        hidden
      />
      <button className={`button ${!imageFile ? "disabled" : ""}`}>
        Downlod Image
      </button>
    </div>
  );
};

export default ImageField;
