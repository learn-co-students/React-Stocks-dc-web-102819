import React from 'react'

const Stock = (props) => {
  // console.log(props.stock)
  const {id, ticker, name, type, price} = props.stock
  return (
    <div>

      <div className="card" data-id={id}
        onClick={props.handleClick}
        data-name={name}
        data-price={price}
        data-type={type}
      >
        <div className="card-body">
          <h5 className="card-title">{
              name
            }</h5>
          <p className="card-text">
              {ticker}: {price}
            </p>
        </div>
      </div>


    </div>
  )
}

export default Stock
