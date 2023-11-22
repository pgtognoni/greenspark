import React, { useState, useEffect } from 'react';
import { getData } from './apiCalls';
import ProductList from './components/card/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

function App() {

  const [ data, setData ] = useState([]);
  const [ selected, setSelected ] = useState(null);

  const apiCall = async () => { 
    const data = await getData();
    if (data) {
      setData(data);
    }
  }

  useEffect(() => {
    apiCall();
  },[])

  return (
    <div className="App d-flex justify-content-center align-items-start">
      <ProductList data={data} setSelected={setSelected} selected={selected} />
    </div>
  );
}

export default App;
