import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>

        {this.props.stocks.map(stock => {
  
          return  <Stock stock={stock} selectStock={this.props.selectStock}/>
        })
       
        }
      </div>
    );
  }

}

export default PortfolioContainer;
