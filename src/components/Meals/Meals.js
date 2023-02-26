import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import React from "react";
import "./Meals.css";
import { NavLink } from "react-router-dom";

const Meals = (props) => {
  const { idMeal, strMeal, strMealThumb, strInstructions } = props.meal;
  return (
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="280"
          image={strMealThumb}
          alt="Api Image"
        />
        <CardContent>
          <CardHeader sx={{ height: 10 }} title={strMeal} />
          <Typography variant="body2">
            {strInstructions.slice(0, 175)}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton color="error" aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton color="primary" aria-label="share">
            <ShareIcon />
          </IconButton>
          <Box
            width="100%"
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Button>
              <NavLink className="learn-more" to={`/MealDetails/${idMeal}`}>
                Learn more
              </NavLink>
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Meals;
