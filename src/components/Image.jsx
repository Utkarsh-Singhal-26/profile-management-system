import React, { useRef } from "react";

const Image = ({ image, setImage }) => {
  const fileInputRef = useRef(null);

  const handleBoxClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const blob = new Blob([file], { type: file.type });
        setImage(blob);
      };

      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div className="img" onClick={handleBoxClick}>
      <img
        src={image instanceof Blob ? URL.createObjectURL(image) : image}
        alt="Uploaded"
      />
      <p>{image === "./upload.png" && "Click to Upload Image"}</p>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
        ref={fileInputRef}
      />
    </div>
  );
};

export default Image;
