import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    console.log()
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.getStockObj.map(stock => 
            <Stock key={stock.id} 
            stock={stock}
            removeStockObj={this.props.removeStockObj}
            />)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
