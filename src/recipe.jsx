import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { ErrorBoundary } from "react-error-boundary";


import RecipesTable from "./Table";
const Recipe = () => {
   
  const APP_ID = "78300083";
  const APP_KEY = "b54994ea906951e5e57e0132341b1af3";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(localStorage.getItem('search')?localStorage.getItem('search'):"chicken");
  const [loading, isloading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = () =>
    axios
      .get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then((response) => {
        isloading(false);
        console.log(response.data);
        setRecipes(response.data.hits);
      
      })
      .catch((error) => {
        isloading(false);
        console.log(error);
        setError(error.message);
      });

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    if (search.trim().length > 0) {
      setQuery(search);
      localStorage.setItem('search', JSON.stringify(search));
      setSearch("");
    }
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        <ErrorBoundary fallback={<h1>Loading...</h1>}>
          {loading ? (
            <h1>Loading.....</h1>
          ) : (
            error!==""? <h1>{error}</h1>
           : <Suspense fallback={<h1>Loading...</h1>}>
             
              <RecipesTable recipes={recipes} />
            </Suspense>
                )}
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Recipe;

