import React from 'react';
// {changeOptions}, {currentOpts} 
const SearchBar = ({currentOpts, changeOptions}) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" name='sort' checked={currentOpts.sort === 'Alphabetically'} onChange={changeOptions}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" name='sort' checked={currentOpts.sort === 'Price'} onChange={changeOptions}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select name='filter' onChange={changeOptions}>
          <option value="All">Show All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
