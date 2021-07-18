import {
  Button,
  makeStyles,
  Paper,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";

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

  function handleChange() {}

  function sendRequest() {}

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
