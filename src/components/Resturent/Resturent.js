import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Meals from "../Meals/Meals";
import "./Resturent.css";

const Resturent = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  //Search handle
  const handleSearchField = (event) => {
    const searchTextValue = event.target.value;
    setSearchText(searchTextValue);
  };
  return (
    <div>
      <div className="search-filed">
        <input
          onChange={handleSearchField}
          type="text"
          placeholder="Searh Your Meal"
        />
      </div>
      <div className="container">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {meals.map((meal) => (
            <Meals meal={meal} key={meal.idMeal}></Meals>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Resturent;
