// import React, { useState } from "react";



// const SearchBar = ({ setResults }) =>{
//   const [input, setInput] = useState("");

//   const apiURLs = ["http://localhost:8080/INyc/arts",
//     "http://localhost:8080/INyc/restaurants",
//     "http://localhost:8080/INyc/events"
//   ];
//   const fetchData = (value) => {
//     fetch("http://localhost:8080/INyc")
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json); // Log the response to check its structure
//         if (json && typeof json === 'object') {
//             // Extract arrays from the response object
//           const { arts = [], restaurants = [], events = [] } = json;
//            // Combine the arrays into a single array
//           const combinedArray = [...arts, ...restaurants, ...events];
//            // Filter the combined array
//           const results = combinedArray.filter((item) => {
//             return (
//               value &&
//               item &&
//               item.location &&
//               item.location.toLowerCase().includes(value.toLowerCase())
//             );
//           });
//           setResults(results);
//         } else {
//           console.error(json);
//           setResults([]); // Set results to an empty array if the response is not an array
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//         setResults([]); // Set results to an empty array in case of an error
//       });
//   };

//   const handleChange = (event) => {
//     const value = event.target.value;
//     setInput(value);
//     fetchData(value);
//   };

//   return (
//     // <div className="input-wrapper">
//     //   <input
//     //     placeholder="Type to search..."
//     //     value={input}
//     //     onChange={(e) => handleChange(e.target.value)}
//     //   />
//     //   <img src={search_icon} alt="Search Icon" />
//     // </div>
//     <input
//     type="text"
//     value={input}
//     onChange={handleChange}
//     placeholder="Search..."
//     className="search-input"
//   />
//   );
// };

// export default SearchBar;