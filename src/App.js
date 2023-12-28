import React, { useState, useEffect } from 'react';
import Header from "./Components/Header";
import Search from "./Components/Search";
import MovieCard from "./Components/MovieCard";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  // Function to update search results when triggered by the Search component
  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Search onSearchResults={handleSearchResults} />
        <div className="movies-section">
          {searchResults.map((result) => (
            <MovieCard
              key={result.show.id}
              title={result.show.name}
              image={result.show.image?.medium || 'default-image-url'}
              rating={result.show.rating?.average || 'N/A'}
              genres={result.show.genres || []}
              officialWebsite={result.show.officialSite || '#'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
