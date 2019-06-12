import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AddIcon from "@material-ui/icons/Add";

const Header = ({ logout, auth: { isAuthenticated, loading } }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const guestLinks = (
    <Tooltip title="Adicionar Aluguel" aria-label="Adicionar Aluguel">
      <Link to="/login" style={{ color: "white" }}>
        <IconButton
          aria-label="Add rent"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <AddIcon />
        </IconButton>
      </Link>
    </Tooltip>
  );
  const authLinks = (
    <Tooltip title="Adicionar Aluguel" aria-label="Adicionar Aluguel">
      <Link to="/new" style={{ color: "white" }}>
        <IconButton
          aria-label="Add rent"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <AddIcon />
        </IconButton>
      </Link>
    </Tooltip>
  );

  const guestUserLinks = (
    <>
      <MenuItem>
        <Link style={{ color: "black", textDecoration: "none" }} to="/register">
          Registrar
        </Link>
      </MenuItem>
      <MenuItem>
        <Link style={{ color: "black", textDecoration: "none" }} to="/login">
          Entrar
        </Link>
      </MenuItem>
    </>
  );

  const authUserLinks = <MenuItem onClick={logout}>Sair</MenuItem>;

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClickCity(event) {
    setAnchorEl2(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
    setAnchorEl2(null);
  }

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    link: {
      color: "black",
      textDecoration: "none"
    },
    linkTo: { color: "white", textDecoration: "none" }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.linkTo}>
              Aluga Brasil
            </Link>
          </Typography>

          {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}

          <Button
            aria-controls="simple-menu2"
            aria-haspopup="true"
            onClick={handleClickCity}
            color="inherit"
          >
            Cidades
          </Button>
          <Menu
            id="simple-menu2"
            anchorEl={anchorEl2}
            keepMounted
            open={Boolean(anchorEl2)}
            onClose={handleClose}
          >
            <MenuItem>
              <a href="/barreiras" className={classes.link}>
                Barreiras
              </a>
            </MenuItem>
            <MenuItem>
              <a href="/lem" className={classes.link}>
                LEM
              </a>
            </MenuItem>
          </Menu>

          <Tooltip title="Usuario" aria-label="Usuario">
            <IconButton
              aria-label="Account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Tooltip>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {!loading && (
              <>{isAuthenticated ? authUserLinks : guestUserLinks}</>
            )}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Header);
