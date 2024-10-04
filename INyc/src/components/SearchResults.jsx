import React from "react";

function SearchResults({ result }){
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {/* {result} */}
    </div>
  );
};

export default SearchResults;

///My search and search results are still in progress but we are almost there.