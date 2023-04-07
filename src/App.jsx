import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header/Header';
import StockImg from './components/Body/StockImg.jsx';
import Content from './components/Body/Content';
import Description from './components/Body/Description';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <StockImg />
        <Content />
        <Description />
      </div>
    </div>
  );
}

export default App;
