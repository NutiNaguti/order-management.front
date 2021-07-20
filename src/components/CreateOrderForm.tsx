import {
  Button,
  makeStyles,
  Paper,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { ChangeEvent, useState } from "react";
import axios from "axios";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(6),
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  button: {
    display: "flex",
    justifyContent: "flexEnd",
    marginTop: theme.spacing(3),
    width: 100,
    top: "10%",
    position: "relative",
  },
  typography: {
    // marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export default function CreateOrderForm() {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [price, setPrice] = useState(0.0);

  const sendRequest = async () => {
    await axios({
      method: "POST",
      url: "http://localhost:5000/api/OrderManagement",
      data: {
        fio: `${firstName} ${secondName}`,
        description: shortDescription,
        price: price,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "firstName":
        setFirstName(event.target.value);
        break;

      case "secondName":
        setSecondName(event.target.value);
        break;

      case "shortDescription":
        setShortDescription(event.target.value);
        break;

      case "price":
        setPrice(Math.abs(parseFloat(event.target.value)));
        break;
    }
  };

  return (
    <Paper className={classes.paper} style={{ width: "48%" }}>
      <Typography className={classes.typography}>Форма заказа</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            value={firstName}
            onChange={handleChange}
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={secondName}
            onChange={handleChange}
            required
            id="secondName"
            name="secondName"
            label="Second name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={shortDescription}
            onChange={handleChange}
            required
            id="shortDescription"
            name="shortDescription"
            label="Short description"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={price}
            onChange={handleChange}
            required
            type="number"
            id="price"
            name="price"
            label="Price"
            fullWidth
          />
        </Grid>
      </Grid>
      <Button
        onClick={sendRequest}
        className={classes.button}
        variant="outlined"
      >
        Создать
      </Button>
    </Paper>
  );
}
