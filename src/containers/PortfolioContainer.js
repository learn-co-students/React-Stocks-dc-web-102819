import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    const {portfolio, stockClick, display} = this.props
    return (
      <div>
        <h2>My Portfolio</h2>
          {display.sortOpt(display.filterOpt(portfolio)).map(stock => <Stock key={'portfoilo-' + stock.id} stock={stock} clickAction={stockClick} />)}
      </div>
    );
  }

}

export default PortfolioContainer;
