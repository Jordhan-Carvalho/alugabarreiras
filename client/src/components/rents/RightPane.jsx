import React from "react";

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

const RightPane = ({ rents }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList} cols={1}>
        <GridListTile key="Subheader" cols={1} style={{ height: "auto" }}>
          <ListSubheader component="div">Destaques</ListSubheader>
        </GridListTile>
        {rents.map(rent => (
          <GridListTile key={rent.lat}>
            <img src={rent.image} alt={rent.type} />
            <GridListTileBar
              title={rent.type}
              subtitle={<span>R$ {rent.price}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${rent.type}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default RightPane;
