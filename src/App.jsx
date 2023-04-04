import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header/Header';
import StockImg from './components/Body/StockImg.jsx';
function App() {
  return (
    <div className="App">
      <Header />
      <StockImg />
    </div>
  );
}

export default App;
