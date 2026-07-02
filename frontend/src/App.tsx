
import { useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const handleCallApi = async () => {
    const response = await axios.get('http://localhost:5001');
    setData(response.data.data);
  }
  return (
    <>
      <h1>Docker Practice</h1>
      <h2>{"This is a docker practice learning project"}</h2>
      <button onClick={handleCallApi}>Call API</button>
      {data && <ul>
        {data.map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>}
    </>
  )
}

export default App
