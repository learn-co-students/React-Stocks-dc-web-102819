import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super()
    this.state ={
      filteredStocks: [],
      selectedStocks: []
    }
  }

  getCategory = (event) => {
    
    let filteredStocks = this.props.stocks.filter((stock) => 
    stock.type === event.target.value
  )
    this.setState({
      filteredStocks: filteredStocks
    })
 
  }

  selectStock = (e) => {

  let stck = ' '

  debugger
    this.state.filteredStocks.forEach((stock) => {
      if(stock.name === e.currentTarget.id)
    {
      stck = stock
      return stck
    }
    }
  )
    this.setState({
      selectedStocks:  [...this.state.selectedStocks, stck]
    })
  
  }

  sellStock = (e) =>{
     
    let stck = this.state.selectedStocks.filter(stock => {
       return stock.name !== e.currentTarget.id })
    
    this.setState({
      selectedStocks: stck
    })
  }

  render() {
    return (
     
      <div>
        <SearchBar getCategory= {this.getCategory}/>

          <div className="row">
            <div className="col-8">

              <StockContainer selectStock={this.selectStock} stocks={this.state.filteredStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.selectedStocks} selectStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
