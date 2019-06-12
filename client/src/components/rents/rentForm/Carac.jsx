import React from "react";
import S3 from "aws-s3";
import { toast } from "react-toastify";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import CircularProgress from "@material-ui/core/CircularProgress";

const config = {
  bucketName: process.env.REACT_APP_AWS_BUCKET_NAME,
  dirName: "photos" /* optional */,
  region: "sa-east-1",
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
};

const S3Client = new S3(config);

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const Carac = ({
  onChange,
  setFormData,
  formData,
  formData: {
    bedroom,
    bathroom,
    garage,
    area,
    petFriendly,
    description,
    image,
    image2,
    imageLoading
  }
}) => {
  const classes = useStyles();

  const uploadImage = async (e, imageNumber) => {
    let imageN;
    if (imageNumber === "2") {
      imageN = "image2";
    } else {
      imageN = "image";
    }
    setFormData({ ...formData, imageLoading: true });
    try {
      const resp = await S3Client.uploadFile(e.target.files[0]);
      setFormData({
        ...formData,
        [imageN]: resp.location,
        imageLoading: false
      });
      toast.success("😄 Upload com sucesso!!");
    } catch (error) {
      console.log(error);
      setFormData({ ...formData, imageLoading: false });
      toast.error("⛔ Upload failed");
    }
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Características do imóvel
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={6} md={6}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="bedroom-simple">Quarto(s) *</InputLabel>
            <Select
              required
              value={bedroom}
              onChange={e => onChange(e)}
              inputProps={{
                name: "bedroom",
                id: "bedroom-simple"
              }}
            >
              <MenuItem value="">
                <em />
              </MenuItem>
              <MenuItem value="0">0</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5 ou mais">5 ou mais</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={6}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="bathroom-simple">Banheiro(s) *</InputLabel>
            <Select
              required
              value={bathroom}
              onChange={e => onChange(e)}
              inputProps={{
                name: "bathroom",
                id: "bathroom-simple"
              }}
            >
              <MenuItem value="">
                <em />
              </MenuItem>
              <MenuItem value="0">0</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5 ou mais">5 ou mais</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={7} md={6}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="garage-simple">Garagem *</InputLabel>
            <Select
              required
              value={garage}
              onChange={e => onChange(e)}
              inputProps={{
                name: "garage",
                id: "garage-simple"
              }}
            >
              <MenuItem value="">
                <em />
              </MenuItem>
              <MenuItem value="0">0</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5 ou mais">5 ou mais</MenuItem>
            </Select>
            <FormHelperText>Número de carros</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={5} md={6}>
          <TextField
            required
            id="area"
            name="area"
            label="Área"
            helperText="Área total, número inteiro (ex: 25)"
            fullWidth
            value={area}
            onChange={e => onChange(e)}
          />
        </Grid>

        {imageLoading ? (
          <Grid item xs={12} md={6}>
            <CircularProgress className={classes.progress} color="secondary" />{" "}
            <p>Por Favor Aguarde...</p>
          </Grid>
        ) : (
          <>
            <Grid item xs={12} md={6}>
              <input
                accept="image/*"
                id="raised-button-file"
                style={{ display: "none" }}
                multiple
                type="file"
                onChange={e => uploadImage(e)}
              />
              <label htmlFor="raised-button-file">
                <Button
                  raised="true"
                  component="span"
                  variant="contained"
                  color={image === "" ? "default" : "primary"}
                  className={classes.button}
                >
                  Faixada *
                  <CloudUploadIcon className={classes.rightIcon} />
                </Button>
              </label>
            </Grid>
            <Grid item xs={12} md={6}>
              <input
                accept="image/*"
                id="raised-button-file1"
                style={{ display: "none" }}
                multiple
                type="file"
                onChange={(e, imageNumber) => uploadImage(e, "2")}
              />
              <label htmlFor="raised-button-file1">
                <Button
                  raised="true"
                  component="span"
                  variant="contained"
                  color={image2 === "" ? "default" : "primary"}
                  className={classes.button}
                >
                  Interior
                  <CloudUploadIcon className={classes.rightIcon} />
                </Button>
              </label>
            </Grid>
          </>
        )}

        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Descrição"
            helperText="Mais informações sobre o imóvel"
            fullWidth
            value={description}
            onChange={e => onChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                id="petFriendly"
                name="petFriendly"
                value="Sim"
                onChange={e => onChange(e)}
              />
            }
            label="Aceita animais de estimação"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Carac;
