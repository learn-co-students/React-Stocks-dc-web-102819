import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  
  render() {
    const {stocks, stockClick, display} = this.props
    return (
      <div>
        <h2>Stocks</h2>
        {display.sortOpt(display.filterOpt(stocks)).map(stock => <Stock key={stock.id} stock={stock} clickAction={stockClick} />)}
      </div>
    );
  }

}

export default StockContainer;
