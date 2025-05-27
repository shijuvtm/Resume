import React from 'react';

const Searchbar = ({ searchTerm, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      className="border p-2 rounded w-full"
    />
  );
};

export default Searchbar;
