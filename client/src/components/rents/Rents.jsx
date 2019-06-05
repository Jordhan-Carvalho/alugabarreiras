import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Map from "./Map";
import Spinner from "../layouts/Spinner";
import { getRents } from "../../actions/rent";

const Rents = ({ getRents, rent: { rents, loading } }) => {
  useEffect(() => {
    getRents();
  }, [getRents]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="profile-grid my-1">
            <div className="profile-top bg-primary p-1">
              <div>
                <Map rents={rents} />
              </div>
            </div>
          </div>
          <div className="profile-about bg-light p-2">
            <h2 className="text-primary">Jordhan</h2>
            <p>BIO BIO BIO</p>
            <div className="line" />

            <h2 className="text-primary">Habilidades</h2>
            <div className="skills">
              <div className="p-1">
                <i className="fa fa-check" /> LUL
              </div>
            </div>
          </div>
        </>
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
