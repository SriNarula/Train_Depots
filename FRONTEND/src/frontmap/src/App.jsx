import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from './Map';
import DepotDetail from './DepotDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/depot/:id" element={<DepotDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
