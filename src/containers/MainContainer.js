import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const API = 'http://localhost:3000/stocks'
class MainContainer extends Component {

  constructor(){
    super()
    this.state = {
      stocks: [],
      portfolio: [],
      filteredStocks: [],
      sortOption: ''
    }
  }

  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then(stocks => 
      this.setState(
        {
          stocks: stocks,
          filteredStocks: stocks
        }
      )
    )
  }

  buyStock = (stock) => {
    // console.log(stock)
    const updatedPortfolio = [...this.state.portfolio, stock]
    if (!this.state.portfolio.includes(stock)){
      this.setState({portfolio: updatedPortfolio})
    }
    // console.log(this.state.portfolio)
  }

  sellStock = (stock) => {
    let removedStock = stock
    const updatedPortfolio = [...this.state.portfolio].filter(stock => stock !== removedStock)
    this.setState(
      {portfolio: updatedPortfolio}
    )

  }

  handleChange = (event) => {
    event.preventDefault()
    // console.log(event.currentTarget.value)
    let type = event.currentTarget.value
    let filteredStocks = [...this.state.stocks].filter(stock => {return stock.type === type}
    )
    this.setState(
      {filteredStocks: filteredStocks}
    )
  }

  handleSortInput = (event) => {
    let sortType = event.currentTarget.value

    if (sortType === 'Alphabetically'){
      this.setState(
        {sortOption: 'Alphabetically'}
      )
    }
    else {
      this.setState(
        {sortOption: 'Price'}
      )
    }

    this.sortStocks(sortType)
  }

  sortStocks = (sortType) => {
    
    
    let sortedStocks = []

    switch (sortType){
      case 'Alphabetically':
        sortedStocks = this.state.filteredStocks.sort((a,b) => a.name >b.name ? 1 : -1)
        break
      case 'Price':
        sortedStocks = this.state.filteredStocks.sort((a,b) => a.price > b.price ? 1 : -1)
        break
      default: console.log('Woops')
    }
    this.setState(
      {
        filteredStocks: sortedStocks
      }
    )
  }

  render() {
    return (
      <div className ='container'>

       
          <div className="row">
            <div className="col-4">
              <SearchBar 
                handleChange={this.handleChange}
                handleSort={this.handleSortInput}
                sortOption = {this.state.sortOption}
              />
            </div>

            <div className="col-4">
              <StockContainer 
                stocks={this.state.filteredStocks}
                handleClick={this.buyStock}
              />
            </div>

            <div className="col-4">
              <PortfolioContainer 
                stocks={this.state.portfolio}
                handleClick={this.sellStock} 
              />
            </div>

          </div>
      </div>
    );
  }

}

export default MainContainer;
