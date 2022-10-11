import React from "react";

function Search({ search, onSetSearch}) {
  console.log(search, onSetSearch)

  function handleSearch(e){
    onSetSearch(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt"
          value={search}
          onChange={handleSearch} 
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
