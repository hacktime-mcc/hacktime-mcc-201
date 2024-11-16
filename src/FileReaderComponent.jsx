import React, { useState } from 'react';

const FileReaderComponent = () => {
  const [fileContent, setFileContent] = useState('');
  const [fileName, setFileName] = useState('');

  // Handle file selection and read the file contents
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file && file.type === 'text/plain') {
      setFileName(file.name); // Set file name
      const reader = new FileReader();
      
      // On load, read the file content
      reader.onload = (event) => {
        setFileContent(event.target.result); // Set the file content into the state
      };

      // Read the file as text
      reader.readAsText(file);
    } else {
      alert('Please select a valid text file.');
    }
  };

  return (
    <div>
      <h1>Upload and Display Text File</h1>
      
      {/* File input */}
      <input type="file" accept=".txt" onChange={handleFileChange} />
      
      {/* Display selected file name */}
      {fileName && <p><strong>Selected File:</strong> {fileName}</p>}
      
      {/* Display file content */}
      {fileContent && (
        <div style={{ marginTop: '20px' }}>
          <h3>File Content:</h3>
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            {fileContent}
          </pre>
        </div>
      )}
    </div>
  );
};

export default FileReaderComponent;
