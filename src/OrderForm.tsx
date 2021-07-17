import React, { useState } from "react";
import {
    AppBar,
    CssBaseline,
    makeStyles,
    Paper,
    Button,
    Toolbar,
    Typography, Theme, TextField
} from "@material-ui/core";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        position: 'relative'
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto'
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) + 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flexEnd',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1)
    }
}));

export default function OrderForm() {
    const classes = useStyles();
    const [data, setData] = useState({
        firstNameValue: "", secondNameValue: "", shortDescriptionValue: "", priceValue: 0
    });

    const getData = () => {
        // TODO поменять вызов на POST запрос
        return axios('http://localhost:5000/api/HealthCheck');
    }

    return(
        <React.Fragment>
            <CssBaseline/>
            <AppBar position={"absolute"} color={"default"} className={classes.appBar}>
                <Toolbar>
                    <Typography variant={"h6"} color='inherit' noWrap>
                        Order manager
                    </Typography>
                </Toolbar>
            </AppBar>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography>
                        Форма заказа
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField required id="firstName" name="firstName" label="First name" fullWidth/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required id="lastName" name="lastName" label="Last name" fullWidth/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required id="shortDescription" name="shortDescription" label="Short description" fullWidth/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required id="price" name="price" label="Price" fullWidth/>
                        </Grid>
                    </Grid>
                    <Button onClick={getData} className={classes.button}>
                        Создать заказ
                    </Button>
                </Paper>
            </main >
        </React.Fragment>
    )
}
