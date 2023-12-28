import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (searchTerm) {
      fetchSearchResults();
    }
  }, [searchTerm]);

  return (
    <div className="search-section">
      <p>Search for your favorite shows</p>
      <div className="search-input">
        <input
          className="search-box"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn-search">Search</button>
      </div>

      <div className="search-results">
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
  );
}

export default Search;
