import React from 'react'

const Stock = (props) => {
  return(
    <div>
      {!props.stock.isExist ? <div className="card" >
        <div className="card-body" 
        onClick={()=>props.getStockObj(props)}>
          <h5 className="card-title">{props.stock.name}</h5>
          <p className="card-text">ticker: {props.stock.price}</p>
        </div>
      </div>
      :
      <div className="card" >
        <div className="card-body" 
        onClick={()=>props.removeStockObj(props)}>
          <h5 className="card-title">{props.stock.name}</h5>
          <p className="card-text">ticker: {props.stock.price}</p>
        </div>
      </div>
      }
    </div>
  )
}

export default Stock
