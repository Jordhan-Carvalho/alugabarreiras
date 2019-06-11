import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RightPane from "./RightPane";
import Map from "./Map";
import Spinner from "../layouts/Spinner";
import { getRents } from "../../actions/rent";

import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";

const Rents = ({ getRents, rent: { rents, loading }, match: { path } }) => {
  useEffect(() => {
    getRents();
  }, [getRents]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Grid container>
          <Grid item xs={12} sm={10}>
            <Box height="93.2vh">
              <Map rents={rents} path={path} />
            </Box>
          </Grid>

          <Hidden xsDown>
            <Grid item sm={2} style={{ paddingLeft: 1 }}>
              <RightPane rents={rents} path={path} />
            </Grid>
          </Hidden>
        </Grid>
      )}
    </>
  );
};

Rents.propTypes = {
  getRents: PropTypes.func.isRequired,
  rent: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  rent: state.rent
});

export default connect(
  mapStateToProps,
  { getRents }
)(Rents);
