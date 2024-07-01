import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [url, setUrl] = useState('');
  const [data, setData] = useState('');

  const fetchData = async () => {
      const response = await axios.post('http://localhost:3001/fetch-url', { url });
      setData(response.data);
  };


  return (
    <div className="App">
       <h1>SSRF Demo</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <button onClick={fetchData}>Fetch Data</button>
      <pre>{data}</pre>
    </div>
  );
}

export default App;
