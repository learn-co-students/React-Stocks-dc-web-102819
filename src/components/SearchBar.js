import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <h2>Search</h2>
      <strong>Sort:</strong>
      <br/>
      <label>
        <input type="radio" value="Alphabetically" name='alphabetically' checked={props.sortOption === 'Alphabetically'} onChange={props.handleSort}/>
        Alphabetically
      </label>
      <br/>
      <label>
        <input type="radio" value="Price" name='price' checked={props.sortOption === 'Price'} onChange={props.handleSort}/>
        By Price
      </label>

      <br/>
      <br/>
    
      <label>
        <strong>Filter:</strong>
      </label>
      <br/>
      <select onChange={props.handleChange}>
        <option value="Tech">Tech</option>
        <option value="Sportswear">Sportswear</option>
        <option value="Finance">Finance</option>
      </select>


    </div>
  );
}


export default SearchBar;
