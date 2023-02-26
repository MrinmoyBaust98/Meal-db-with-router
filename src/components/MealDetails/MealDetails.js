import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MealDetails.css";
import Details from "../Details/Details";

const MealDetails = () => {
  // id kuje details dekha
  const { idMeal } = useParams();
  const [mealDetails, setMealDetails] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMealDetails(data.meals));
  }, [idMeal]);
  return (
    <div className="details-item">
      {mealDetails.map((detail) => (
        <Details detail={detail} key={detail.idMeal}></Details>
      ))}
    </div>
  );
};

export default MealDetails;
