import React, { useState } from "react";
import ShowPage from "./rent/ShowPage";

import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: "93.1vh"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

const RightPane = ({ rents, path }) => {
  const classes = useStyles();

  const defineCity = (rents, path) => {
    let cityRent;
    if (path === "/lem") {
      cityRent = rents.filter(rent => rent.city === "LEM");
    } else if (path === "/barreiras") {
      cityRent = rents.filter(rent => rent.city === "Barreiras");
    }
    return cityRent;
  };

  const cityRents = defineCity(rents, path);

  //Show page config
  const [open, setOpen] = useState(false);

  const [rentID, setRentID] = useState("");

  function handleClose() {
    setOpen(false);
  }

  const handlePopup = rentId => {
    setOpen(true);
    setRentID(rentId);
  };
  // Show page config end

  return (
    <>
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList} cols={1}>
          <GridListTile key="Subheader" cols={1} style={{ height: "auto" }}>
            <ListSubheader component="div">Destaques</ListSubheader>
          </GridListTile>
          {cityRents.map(rent => (
            <GridListTile key={rent._id}>
              <img src={rent.image} alt={rent.type} />
              <GridListTileBar
                title={rent.type}
                subtitle={<span>R$ {rent.price}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${rent.type}`}
                    className={classes.icon}
                    onClick={() => handlePopup(rent._id)}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <ShowPage handleClose={handleClose} open={open} rentID={rentID} />
    </>
  );
};

export default RightPane;
