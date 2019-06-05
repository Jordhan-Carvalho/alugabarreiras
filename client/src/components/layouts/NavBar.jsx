import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const NavBar = ({ logout, auth: { isAuthenticated, loading } }) => {
  const authLinks = (
    <ul>
      <div className="dropdown">
        <span className="dropbtn">Cidades</span>
        <div className="dropdown-content">
          <li>
            <Link to="/dashboard">Barreiras</Link>
          </li>
          <li>
            <Link to="/dashboard">LEM</Link>
          </li>
        </div>
      </div>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{" "}
          <span className="hide-sm">Painel de controle</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="/">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Sair</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <div className="dropdown">
        <span className="dropbtn">Cidades</span>
        <div className="dropdown-content">
          <li>
            <Link to="/dashboard">Barreiras</Link>
          </li>
          <li>
            <Link to="/dashboard">LEM</Link>
          </li>
        </div>
      </div>
      <li>
        <Link to="/register">Registrar</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-home hometitle" />{" "}
          <span className="hometitle">Aluga Barreiras</span>
        </Link>
      </h1>
      {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
    </nav>
  );
};

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(NavBar);
