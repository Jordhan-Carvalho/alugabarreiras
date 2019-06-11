import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">
            <i className="fas fa-home hometitle" />{" "}
            <span className="hometitle">Aluga Brasil</span>
          </h1>
          <p className="lead">
            Alugue casas, apartamentos, galpões e qualquer outro tipo de imóvel
            na região Oeste da Bahia
          </p>
          <div className="grid-container">
            <div className="card">
              <div className="bg-img">
                <a href="/barreiras">
                  <img
                    src="https://i.imgur.com/JMRijwq.jpg"
                    alt="cidade barreiras"
                    className="image"
                  />
                </a>
              </div>
            </div>
            <div className="card">
              <div className="bg-img">
                <a href="/lem">
                  <img
                    src="https://i.imgur.com/aVRLYrP.jpg"
                    alt="cidade LEM"
                    className="image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
