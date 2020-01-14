import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super()
    this.state = ({
      stocks : [],
      sort:"",
      filter:"Tech",
      portofolioArray:[]
    })
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(data => {
      this.setState({
        stocks : data
      })
    })
  }

  handleSort=(e)=>{
    this.setState({
      sort : e.target.value
    })
  }

  handleFilter=(e)=>{
    this.setState({
      filter: e.target.value
    })
  }
  
  filteredStock=()=>{
    return this.state.stocks.filter(stock => stock.type === this.state.filter )
  }

  sortedStock=()=>{
    if(this.state.sort === "Alphabetically"){
      return this.state.stocks.sort((a,b) => a.name > b.name ? 1 : -1)
    }else{
      return this.state.stocks.sort((a,b) => a.price > b.price ? 1 : -1)
    }
  }

  getStockObj=(stockObj)=>{
    let newArray = [...this.state.portofolioArray]
    this.state.stocks.map(stock => {
      if(stock.id === stockObj.stock.id){
        if(this.state.portofolioArray.includes(stock)){
          alert("dont..")
        }else{
        newArray.push(stock)
        }
      }
      return newArray
    })
    
    this.setState({
      portofolioArray:newArray
    })
  }

  removeStockObj=(stockObj)=>{
    this.setState({
      portofolioArray : this.state.portofolioArray.filter(stock => stock !== stockObj.stock)
    })
  }

  render() {
    return (
      <div>
        <SearchBar 
        handleSort={this.handleSort}
        handleFilter={this.handleFilter}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer 
              stocks={this.state.stocks}
              filteredStock={this.filteredStock(this.sortedStock())}
              getStockObj={this.getStockObj}
             />

            </div>
            <div className="col-4">
              <PortfolioContainer 
              getStockObj={this.state.portofolioArray}
              removeStockObj={this.removeStockObj}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
