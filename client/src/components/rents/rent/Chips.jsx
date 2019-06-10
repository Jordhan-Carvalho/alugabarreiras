import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

function Chips({ rent }) {
  const classes = useStyles();

  const renderContact = rent => {
    if (rent.tel && rent.email) {
      return (
        <>
          <Chip
            className={classes.chip}
            avatar={
              <Avatar>
                <i className="fas fa-phone" />
              </Avatar>
            }
            label={`Telefone: ${rent.tel}`}
            color="secondary"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar>
                <i className="far fa-envelope" />
              </Avatar>
            }
            label={`E-mail: ${rent.email}`}
            color="secondary"
          />
        </>
      );
    }
    if (rent.tel) {
      return (
        <Chip
          className={classes.chip}
          avatar={
            <Avatar>
              <i className="fas fa-phone" />
            </Avatar>
          }
          label={`Telefone: ${rent.tel}`}
          color="secondary"
        />
      );
    }
    if (rent.email) {
      return (
        <Chip
          className={classes.chip}
          avatar={
            <Avatar>
              <i className="far fa-envelope" />
            </Avatar>
          }
          label={`E-mail: ${rent.email}`}
          color="secondary"
        />
      );
    }
  };

  return (
    <>
      <Chip
        avatar={
          <Avatar>
            <i className="fas fa-bed" />
          </Avatar>
        }
        label={`Quarto: ${rent.bedroom}`}
        color="primary"
        className={classes.chip}
      />
      <Chip
        className={classes.chip}
        avatar={
          <Avatar>
            <i className="fas fa-bath" />
          </Avatar>
        }
        label={`Banheiro: ${rent.bathroom}`}
        color="primary"
      />
      <Chip
        className={classes.chip}
        avatar={
          <Avatar>
            <i className="fas fa-chart-area" />
          </Avatar>
        }
        label={`Área: ${rent.area} m²`}
        color="primary"
      />
      <Chip
        className={classes.chip}
        avatar={
          <Avatar>
            <i className="fas fa-warehouse" />
          </Avatar>
        }
        label={`Garagem: ${rent.garage}`}
        color="primary"
      />
      <Chip
        className={classes.chip}
        avatar={
          <Avatar>
            <i className="fas fa-paw" />
          </Avatar>
        }
        label={`Animais de estimação: ${rent.petFriendly}`}
        color="primary"
      />
      {renderContact(rent)}
    </>
  );
}

export default Chips;
