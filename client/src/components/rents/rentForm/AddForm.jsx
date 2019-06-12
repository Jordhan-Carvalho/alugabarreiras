import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addRent } from "../../../actions/rent";
import InfoGeral from "./InfoGeral";
import Carac from "./Carac";
import MapForm from "./MapForm";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

const steps = ["Info Geral", "Carac", "Localização"];

const AddForm = ({ addRent, history }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    type: "",
    city: "",
    state: "",
    image: "",
    price: "",
    street: "",
    district: "",
    description: "",
    petFriendly: "Não",
    number: "",
    tel: "",
    email: "",
    bedroom: "",
    bathroom: "",
    area: "",
    garage: ""
  });

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    addRent(formData, history);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <InfoGeral onChange={onChange} formData={formData} />;
      case 1:
        return (
          <Carac
            setFormData={setFormData}
            onChange={onChange}
            formData={formData}
          />
        );
      case 2:
        return (
          <Box height="57.7vh">
            <MapForm setFormData={setFormData} formData={formData} />
          </Box>
        );
      default:
        throw new Error("Unknown step");
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Novo aluguel
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <></>
            ) : (
              <>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Voltar
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={
                      activeStep === steps.length - 1 ? onSubmit : handleNext
                    }
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Criar" : "Próximo"}
                  </Button>
                </div>
              </>
            )}
          </>
        </Paper>
      </main>
    </>
  );
};

AddForm.propTypes = {
  addRent: PropTypes.func.isRequired
};

export default connect(
  null,
  { addRent }
)(withRouter(AddForm));
