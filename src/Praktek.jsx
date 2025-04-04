import React from 'react';
import './App.css';
import ChangeBgColour from './praktek/ChangeBgColour';
import OnlineStatus from './praktek/OnlineStatus';
import ProductList from './praktek/ProductList';

function Praktek() {
  return (
    <div>
      <h2>Ini Halaman Praktek</h2>
      <p>Berisi latihan reactJs</p>
      <ChangeBgColour />
      <OnlineStatus />
      <ProductList />
    </div>
  );
}

export default Praktek;
