import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const stockUrl = 'http://localhost:3000/stocks'

class MainContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stocks: [],
      portfolio: [],
      options: {
        sort: 'Alphabetically',
        filter: 'All'
      }
    }
  }

  purchaseStock = (e, stock) => {
    if (!this.state.portfolio.includes(stock)) {
      this.setState({
        portfolio: [...this.state.portfolio, stock]
      })
    }
  }

  sellStock = (e, stock) => {
    this.setState((prevState) => {
      return { portfolio: prevState.portfolio.filter(share => stock !== share) }
    })
  }

  changeOptions = (e) => {
    this.setState({
      options: {
        ...this.state.options,
        [e.target.name]: e.target.value,
      }
    })
  }

  displayFilter = (stocks) => {
    if (this.state.options.filter !== 'All') {
      return stocks.filter(stock => stock.type === this.state.options.filter)
    } else {
      return stocks
    }
  }

  displaySort = (stocks) => {
    if (this.state.options.sort === 'Alphabetically') {
      return stocks.sort((a, b) => a.name > b.name ? 1 : -1)
    } else {
      return stocks.sort((a, b) => a.price > b.price ? 1 : -1)
    }
  }

  displayMethods = {sortOpt: this.displaySort, filterOpt: this.displayFilter}


  componentDidMount() {
    fetch(stockUrl)
    .then(res => res.json())
    .then(data => this.setState({stocks: data}))
  }

  render() {
    return (
      <div>
        <SearchBar currentOpts={this.state.options} changeOptions={this.changeOptions}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} stockClick={this.purchaseStock} display={this.displayMethods}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} stockClick={this.sellStock} display={this.displayMethods} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
