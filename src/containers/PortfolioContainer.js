import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          { this.props.portfolio.map(stock => 
              <Stock 
                stock={stock} 
                key={stock.ticker}
                stockTransaction={this.props.stockTransaction}
              />
          )}
      </div>
    );
  }

}

export default PortfolioContainer;
