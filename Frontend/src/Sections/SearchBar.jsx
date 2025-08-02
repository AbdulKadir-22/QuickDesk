import React from 'react';
import '../Styles/SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" />
      <button className="ask-button">Ask</button>
    </div>
  );
};

export default SearchBar;