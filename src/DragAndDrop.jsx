import React, { useState } from "react";

const DragAndDrop = () => {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);

  // Handle drag enter event
  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  // Handle drag leave event
  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  // Handle drop event
  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      // Optionally, you can handle the file upload here (e.g., sending the file to a server)
    }
  };

  // Handle file input change (alternative to drag and drop)
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div
      style={{
        border: dragging ? "2px dashed #4CAF50" : "2px dashed #ccc",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
        cursor: "pointer",
      }}
      onDragEnter={handleDragEnter}
      onDragOver={(e) => e.preventDefault()} // Allow the drop
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <h3>
        {dragging
          ? "Drop the file here"
          : "Drag & Drop a file or click to select"}
      </h3>

      {/* File input for non-drag-and-drop option */}
      <input
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="fileInput"
      />

      <button
        onClick={() => document.getElementById("fileInput").click()}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Select File
      </button>

      {/* Show file information if file is selected */}
      {file && (
        <div style={{ marginTop: "20px" }}>
          <strong>Selected File:</strong> <br />
          <span>{file.name}</span>
        </div>
      )}
    </div>
  );
};

export default DragAndDrop;
