import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import ReactPlayer from "react-player/lazy";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const Details = (props) => {
  const { strYoutube, strMeal, strArea, strTags } = props.detail;

  return (
    <div>
      <Card sx={{ maxWidth: 440 }}>
        <Box
          marginLeft="25px"
          marginTop="20px"
          width="380px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ReactPlayer url={strYoutube} />
        </Box>

        <CardHeader sx={{ height: 10 }} title={strMeal} />
        <CardContent>
          <Typography variant="body2">
            Meal Area: {strArea}
            Meal Type: {strTags}
          </Typography>
        </CardContent>

        <CardActions>
          <Box
            marginLeft="30px"
            marginTop="20px"
            width="380px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <IconButton color="error" aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton color="primary" aria-label="share">
              <ShareIcon />
            </IconButton>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
};

export default Details;
