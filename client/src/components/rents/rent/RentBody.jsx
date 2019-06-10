import React from "react";
import { Carousel } from "react-responsive-carousel";
import RentBodyCarac from "./RentBodyCarac";
import Chips from "./Chips";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

const RentBody = ({ classes, rent }) => {
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box>
            <Paper className={classes.paper}>
              <Carousel className={classes.img} showThumbs={false}>
                <div>
                  <img src={rent.image} alt="rent" />
                </div>
                <div>
                  <img
                    src={rent.image2 ? rent.image2 : rent.image}
                    alt="rent"
                  />
                </div>
                <div>
                  <img
                    src={rent.image3 ? rent.image3 : rent.image}
                    alt="rent"
                  />
                </div>
              </Carousel>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>{rent.type}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>R$ {rent.price}</Paper>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Chips rent={rent} />
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <RentBodyCarac rent={rent} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default RentBody;
