import React from "react";
import Recipe from "./recipe";
import RecipeDetail from "./recipeDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RecipesTable from "./Table";
import "./App.css";
import { Button } from "@mui/material";


const App = () => {
  
  

  return (
    
    <BrowserRouter>
    <Routes>
     <Route exact path="/" element={<Recipe/>} />
      <Route path="/recipedetail" element={<RecipeDetail />} />
      <Route path="/recipetable" element={<RecipesTable />} />
    </Routes>
  </BrowserRouter>
  
    
  );
};
export default App;