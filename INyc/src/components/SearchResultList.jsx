import React from 'react';

const SearchResultList = ({ results }) => {
  return (
    <ul className="search-result-list">
      {results.map((result, index) => (
        <li key={index}>{result.location}</li>
      ))}
    </ul>
  );
};

export default SearchResultList;