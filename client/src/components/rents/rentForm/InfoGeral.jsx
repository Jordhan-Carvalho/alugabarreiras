import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const InfoGeral = ({
  onChange,
  formData: { price, district, type, city, number, street, state, email, tel }
}) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Informações Gerais
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="type-simple">Tipo *</InputLabel>
            <Select
              required
              value={type}
              onChange={e => onChange(e)}
              inputProps={{
                name: "type",
                id: "type-simple"
              }}
            >
              <MenuItem value="">
                <em />
              </MenuItem>
              <MenuItem value="Apartamento">Apartamento</MenuItem>
              <MenuItem value="Casa">Casa</MenuItem>
              <MenuItem value="Galpão">Galpão</MenuItem>
              <MenuItem value="Comercial">Comercial</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="price"
            name="price"
            label="Preço"
            value={price}
            onChange={e => onChange(e)}
            helperText="Número Inteiro ex:1500"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="street"
            name="street"
            label="Rua"
            fullWidth
            autoComplete="billing address-line1"
            value={street}
            onChange={e => onChange(e)}
          />
        </Grid>

        <Grid item xs={8} sm={7}>
          <TextField
            required
            id="district"
            name="district"
            label="Bairro"
            fullWidth
            autoComplete="billing postal-code"
            value={district}
            onChange={e => onChange(e)}
          />
        </Grid>
        <Grid item xs={4} sm={5}>
          <TextField
            required
            id="number"
            name="number"
            label="Número"
            fullWidth
            autoComplete="billing number"
            value={number}
            onChange={e => onChange(e)}
          />
        </Grid>
        <Grid item xs={7} sm={7}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="city-simple">Cidade *</InputLabel>
            <Select
              required
              value={city}
              onChange={e => onChange(e)}
              inputProps={{
                name: "city",
                id: "city-simple"
              }}
            >
              <MenuItem value="">
                <em />
              </MenuItem>
              <MenuItem value="Barreiras">Barreiras</MenuItem>
              <MenuItem value="LEM">LEM</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={5} sm={5}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="state-required">Estado *</InputLabel>
            <Select
              required
              value={state}
              onChange={e => onChange(e)}
              inputProps={{
                name: "state",
                id: "state-required"
              }}
            >
              <MenuItem value="">
                <em />
              </MenuItem>
              <MenuItem value="BA">BA</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={7} sm={7}>
          <TextField
            id="email"
            name="email"
            label="E-mail"
            fullWidth
            value={email}
            onChange={e => onChange(e)}
          />
        </Grid>
        <Grid item xs={5} sm={5}>
          <TextField
            id="tel"
            name="tel"
            label="Telefone"
            fullWidth
            value={tel}
            onChange={e => onChange(e)}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default InfoGeral;
