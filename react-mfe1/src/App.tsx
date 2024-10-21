import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { Pages } from './interfaces/Global';
import ProductList from './components/ProductList';

function App() {
  const [page, setPage] = useState<Pages>("Products")
  return (
    <div className="App">
      <Navbar setCurrentPage={setPage}/>
      <Dashboard page={page}><ProductList/></Dashboard>
    </div>
  );
}

export default App;
