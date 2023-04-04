import React from 'react';
import default_stock from '../../assets/images/default_stock.jpeg';

function StockImg() {
  return (
    <div className="stock-img">
      <img src={default_stock} alt="mountains" id="default_stock" />
    </div>
  );
}

export default StockImg;
