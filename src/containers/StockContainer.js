import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    
    return (
      <div>
        <h2>{this.props.title}</h2>
        { this.props.stocks.map( (stock, index) => <Stock key={index} stock={stock} handleClick={this.props.handleClick}/>)
          
        }
      </div>
    );
  }

}

export default StockContainer;
