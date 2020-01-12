import React from 'react'

const Stock = ({stock, clickAction}) => (
  
  <div>
    <div className="card">
      <div className="card-body" onClick={(e) => clickAction(e, stock)} >
        <h5 className="card-title">{stock.name}</h5>
        <p className="card-text">{stock.price}</p>
      </div>
    </div>


  </div>
);

export default Stock
