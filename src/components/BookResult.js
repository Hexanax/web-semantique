import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

function BookResult(index, data) {
  return (
    <Grid item key={index}>
      <Card sx={{ height: 430, width: 195 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={data.img}
            alt="miniature"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.author} - {data.releaseDate}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default BookResult;
