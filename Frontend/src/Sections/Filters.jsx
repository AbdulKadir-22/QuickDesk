// src/components/Filters.jsx
import React from 'react';
import '../Styles/Filters.css';

const Filters = () => {
  return (
    <div className="filters">
      <h2>Filters</h2>
      <div className="filter-options">
        <label className="toggle">
          Show Open Only
          <input type="checkbox" defaultChecked />
        </label>
        <select>
          <option>Categories</option>
        </select>
        <select>
          <option>Status</option>
        </select>
        <div className="sort-by">
          <label><input type="radio" name="sort" defaultChecked /> most upvoted</label>
          <label><input type="radio" name="sort" /> most commented</label>
        </div>
      </div>
    </div>
  );
};

export default Filters;