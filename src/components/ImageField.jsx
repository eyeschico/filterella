import { useContext, useRef, useState } from "react";
import { FilterContext } from "../App";
import "./ImageField.css";
import { styled } from "@mui/system";
import domToImage from "dom-to-image";
import { saveAs } from "file-saver";

const ImageField = () => {
  const uploadInputRef = useRef(null);
  const imgResultRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const { filterClass, customFilter } = useContext(FilterContext);

  //console.log(filterClass);

  const uploadRefWindow = () => {
    uploadInputRef.current && uploadInputRef.current.click();
  };

  const handleChangeInput = (event) => {
    setImageFile(URL.createObjectURL(event.target.files[0]));
  };

  const handleDownloadImage = () => {
    //console.log(imgResultRef);
    domToImage
      .toBlob(imgResultRef.current)
      .then((blob) => {
        saveAs(blob, "filterella.png");
      })
      .catch((error) => {
        console.error("Something went wrong", error);
      });
  };

  const StyledImage = styled("img")((props) => ({
    width: "100%",
    height: "100%",
    objectFit: "contain",
    boxShadow: "0px 0px 10px #000000",
    filter: `contrast(${props.customFilter.contrast}%) brightness(${props.customFilter.brightness}%) saturate(${props.customFilter.saturate}%) sepia(${props.customFilter.sepia}%) grayScale(${props.customFilter.gray}%)`,
  }));

  const renderImage = () => (
    <figure>
      <StyledImage
        customFilter={!filterClass && customFilter}
        className={filterClass}
        src={imageFile}
        ref={imgResultRef}
        alt="Current Image"
      />
    </figure>
  );

  return (
    <div className="image-container">
      <div className="image-box" onClick={uploadRefWindow}>
        {imageFile ? (
          renderImage()
        ) : (
          <div className="circle">
            <img src="./download-icon.svg" alt="Download Image" />
          </div>
        )}
      </div>
      <input
        onChange={handleChangeInput}
        ref={uploadInputRef}
        type="file"
        accept="image/*"
        hidden
      />
      <button
        onClick={handleDownloadImage}
        className={`button ${!imageFile ? "disabled" : ""}`}
      >
        Downlod Image
      </button>
    </div>
  );
};

export default ImageField;
