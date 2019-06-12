import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteRent } from "../../../actions/rent";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

const RentHeader = ({
  handleClose,
  classes,
  auth,
  rent,
  rentID,
  deleteRent
}) => {
  const deleteRentById = async () => {
    await deleteRent(rentID);
    window.location.reload();
  };

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="Close"
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {rent.type}
        </Typography>
        {auth.isAuthenticated &&
        auth.loading === false &&
        auth.user._id === rent.author ? (
          <Button
            variant="contained"
            style={{ backgroundColor: "#d32f2f" }}
            color="inherit"
            className={classes.button}
            onClick={deleteRentById}
          >
            Deletar
            <DeleteIcon className={classes.rightIcon} />
          </Button>
        ) : (
          <></>
        )}
      </Toolbar>
    </AppBar>
  );
};

RentHeader.propTypes = {
  deleteRent: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteRent }
)(RentHeader);
