import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      IPFS React Demo
      <header className="App-header">
        Upload a file to IPFS storage
      </header>
    <div>
      <p>Click on the "Choose File" button to upload a file:</p>
      <input type="file" id="myFile" name="filename">
      <input type="button" value="Upload" onclick="uploadToIPFS">
      </br>
      </br>
      <input type="button" value="Get file back from IPFS" onclick="getFromIPFS">
    </div>
   </div>
  );
}

export default App;
