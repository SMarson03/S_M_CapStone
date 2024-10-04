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