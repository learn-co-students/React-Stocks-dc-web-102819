import React, { Component } from 'react';
import StockContainer from './StockContainer'

import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor() {
    super()
    this.state = {
      allStocks: [],
      myStocks: [],
      filter: '',
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        allStocks: data
      })
    })

  }

  addToPortfolio = (stock) => {
    if (!this.state.myStocks.includes(stock)){
      this.setState({
        myStocks: [...this.state.myStocks, stock]
      })
    } else {
      alert('Already added')
    }
  }

  removeStock = (stock) => {
    this.setState({
      myStocks: this.state.myStocks.filter(s => s !== stock)
    })
  }

  addFilter = (event) => {
    console.log('jfwitj')
    this.setState({
      filter: event.currentTarget.value
    })
  }

  filterStocks = () => {
    if (this.state.filter) {
      return this.state.allStocks.filter(s => s.type === this.state.filter)
    } else {
      return this.state.allStocks
    }

  }



  sortStocks = (event) => {
    if (event.target.value === "Alphabetically") {
      this.setState({
        allStocks:[...this.state.allStocks].sort( (a, b) => {
          if(a.ticker > b.ticker) {
            return 1
          }
          if (a.ticker < b.ticker) {
            return -1
          }
          return 0
        })
      })
    } else if (event.target.value === "Price") {
      this.setState({
        allStocks: [...this.state.allStocks].sort((a,b) => a.price - b.price)
      })
    }
  }

  render() {
    return (
      <div>
        <SearchBar addFilter={this.addFilter} sortStocks={this.sortStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.filterStocks()} title='Stocks' handleClick={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <StockContainer stocks={this.state.myStocks} title='My Portfolio' handleClick={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
