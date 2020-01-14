import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    // console.log(this.props.filteredStock)
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.filteredStock.map(stock => <Stock 
        key={stock.id} 
        stock={stock} 
        getStockObj={this.props.getStockObj}
        />)}
      </div>
    );
  }

}

export default StockContainer;
