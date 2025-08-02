// src/components/Filters.jsx
import React from 'react';
import '../Styles/Filters.css';

const Filters = () => {
  return (
    <div className="filters">
      <h2>Filters</h2>
      <div className="filter-row">
        <div className="toggle">
          <span>Show Open Only</span>
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider round"></span>
          </label>
        </div>
        <select className="dropdown">
          <option>Categories</option>
        </select>
        <select className="dropdown">
          <option>Status</option>
        </select>
        <div className="sort-by">
          <span>Sort By</span>
          <label><input type="radio" name="sort" /> most upvoted</label>
          <label><input type="radio" name="sort" defaultChecked /> most commented</label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
