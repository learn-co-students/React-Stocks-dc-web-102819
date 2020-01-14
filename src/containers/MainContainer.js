import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
const URL = 'http://localhost:3000/stocks'
class MainContainer extends Component {
  state = {
    originalStocks: [],
    stocksAll: [],
    userStocks:[],
    // sort: ''
  }
  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(originalStocks => this.setState({originalStocks, stocksAll: originalStocks}))
    .catch(err => console.warn(err.message))
  }

  handleBuy = e => {
    console.log('going to buy some Stocks')
    const targetID = Number(e.currentTarget.dataset.id)
    const stockBought = this.state.stocksAll.find(stock => stock.id === targetID)
    this.setState({userStocks: [...this.state.userStocks, stockBought]})
  }

  handleSell = e => {
    const targetID = Number(e.currentTarget.dataset.id)
    const newStock = this.state.userStocks.filter(stock => stock.id !== targetID)
    this.setState({userStocks: newStock})
  }

  sortStock = e => {
    const sortBy = e.currentTarget.value
    const filterStock = this.state.stocksAll
    if(sortBy === 'price'){
      console.log('need to sort by price');
      this.setState({stocksAll: filterStock.sort((a, b) => a.price - b.price)})
    }else {
      console.log('sort by name');
      this.setState({stocksAll: filterStock.sort((a, b) => {
          if (a.ticker < b.ticker) return -1
          if (a.ticker > b.ticker) return 1
          return 0
        })
      })
    }
  }

  filterStock = e => {
    const filterBy = e.currentTarget.value
    console.log('filter by', filterBy)
    switch (filterBy) {
      case 'Sportswear':
        this.setState({stocksAll: this.state.originalStocks.filter(s => s.type === filterBy)})
        break
      case 'Tech':
        this.setState({stocksAll: this.state.originalStocks.filter(s => s.type === filterBy)})
        break
      case 'Finance':
        this.setState({stocksAll: this.state.originalStocks.filter(s => s.type === filterBy)})
        break
      default:
        this.setState({stocksAll: this.state.originalStocks})
        break
    }
  }

  render() {
    return (
      <div>
        <SearchBar sortStock={this.sortStock} filterStock={this.filterStock}/>
          <div className="row">
            <div className="col-8">
              <StockContainer stocks={this.state.stocksAll}
                handleClick={this.handleBuy}
              />
            </div>
            <div className="col-4">

              <PortfolioContainer userStocks={this.state.userStocks}
                handleClick={this.handleSell}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
