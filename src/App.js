import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
	constructor(){
		super()
		this.state = {
			stocks: [],
			portfolio: [],
			filter: "all-stocks",
			sort: null
		}
	}

  componentDidMount() {
  	fetch('http://localhost:3000/stocks')
  		.then(res => res.json())
  		.then(stocks => this.setState({ stocks: stocks }))
  }

  stockTransaction = (stock) => {
  	const status = this.state.portfolio.includes(stock) ? 'sell' : 'buy'

  	if (status === "sell") {
	    console.log('selling ' + stock.ticker + ' for ' + stock.price)
	    const newPortfolio = this.state.portfolio.filter(selling => stock.name !== selling.name)
	    this.setState({ portfolio: newPortfolio})
  	} else {
	    console.log('buying ' + stock.ticker + ' for ' + stock.price)
	    this.setState({ portfolio: [...this.state.portfolio, stock]})
  	}

  }

  handleFilter = (event) =>{
  	this.setState({ filter: event.target.value})
  }

  filteredStocks(){
  	const stockList = this.state.stocks.filter(stock => !this.state.portfolio.includes(stock))
  	
  	if (this.state.filter !== "all-stocks") {
	  	return stockList.filter(stock => stock.type === this.state.filter)
  	} else {
	  	return stockList	
  	}
  }

  handleSort = (event) => {
  	console.log("handle sort")
  	this.setState({ sort: event.target.value })
  }

  sortedStocks(){
  	if (this.state.sort === "Alphabetically") {
		console.log("sorting Alphabetically")
	  	return this.filteredStocks().sort((stocka, stockb) => (stocka.name > stockb.name) ? 1 : -1)
  	} else if (this.state.sort === "Price") {
		console.log("sorting Price")  		
	  	return this.filteredStocks().sort((stocka, stockb) => (stocka.price > stockb.price) ? 1 : -1)
  	} else {
  		console.log("not sorted")
  		return this.filteredStocks()
  	}
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer
        	stocks={ this.sortedStocks() }
        	portfolio={ this.state.portfolio }
        	stockTransaction={this.stockTransaction}
        	handleFilter={this.handleFilter}
        	handleSort={this.handleSort}
    	/>
      </div>
    );
  }
}

export default App;
