import React, { useState, useEffect } from "react";

function useGiphy(query) {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}=${query}&limit=30&offset=0&rating=G&lang=en`
        );
        const json = await response.json();

        setResults(
          json.data.map((item) => {
            return item.images.preview.mp4;
          })
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [query]);

  return [results, isLoading];
}

export default function SerachPage() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [results, isLoading] = useGiphy(query);

  return (
    <div>
      <h1>Search for gifs!</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault(); //prevents refresh
          setQuery(search);
        }}
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for Gifs!"
        />
        <button type="submit">Search</button>
      </form>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        results.map((item) => <video autoPlay loop key={item} src={item} />)
      )}
    </div>
  );
}
