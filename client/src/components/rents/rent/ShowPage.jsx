import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../../layouts/Spinner";
import RentHeader from "./RentHeader";
import RentBody from "./RentBody";
import { getRentById } from "../../../actions/rent";

import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

// Dialog config
const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  img: {
    maxHeight: "55vh",
    maxWidth: 800,
    overflow: "hidden",
    display: "block",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Component
const ShowPage = ({
  handleClose,
  open,
  rentID,
  getRentById,
  rent: { rent, loading },
  auth
}) => {
  const classes = useStyles();

  useEffect(() => {
    getRentById(rentID);
  }, [getRentById, rentID]);

  return loading || rent === null ? (
    <Spinner />
  ) : (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <RentHeader
        handleClose={handleClose}
        classes={classes}
        auth={auth}
        rent={rent}
        rentID={rentID}
      />
      <RentBody classes={classes} rent={rent} />
    </Dialog>
  );
};

ShowPage.propTypes = {
  getRentById: PropTypes.func.isRequired,
  rent: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  rent: state.rent,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getRentById }
)(ShowPage);
