import {
  Button,
  makeStyles,
  Paper,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, {ChangeEvent, useState} from "react";
import axios from "axios";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  button: {
    display: "flex",
    justifyContent: "flexEnd",
    marginTop: theme.spacing(3),
  },
}));

export default function FindOrdersForm() {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "firstName":
        setFirstName(event.target.value);
        console.log(firstName);
        break;

      case "secondName":
        setSecondName(event.target.value);
        console.log(secondName);
        break;
    }
  }

  const sendRequest = async () => {
    const response = await axios({
      method: "GET",
      url: "http://localhost:5000/api/OrderManagement",
    });
    console.log(response.data);
  };

  return (
    <Paper className={classes.paper} style={{ width: "48%" }}>
      <div>
        <Typography>Поиск записей по имени и фамилии</Typography>
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
        </Grid>
        <Button onClick={sendRequest} className={classes.button}>
          Искать
        </Button>
      </div>
    </Paper>
  );
}
