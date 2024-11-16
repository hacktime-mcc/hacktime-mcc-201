import { useState } from "react";
import React from "react";
import DragAndDrop from "./DragAndDrop";
import "./App.css";
import FileReaderComponent from "./FileReaderComponent";
import GLTFViewer from "./GLTFViewer";

function App() {
  return (
    <div className="App">
      <h1>React File Drag and Drop</h1>
      <DragAndDrop />
      <h1>File reader</h1>
      <FileReaderComponent />
      <div className="App">
        <h1>React 3D Viewer with glTF</h1>
        {/* Provide the URL to the glTF model - in the public folder */}
        {/*<GLTFViewer modelUrl="/AnimatedCube.gltf" />*/}
        <GLTFViewer modelUrl="/Duck.gltf" />
      </div>
    </div>
  );
}

export default App;
