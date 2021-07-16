import React from "react";
import {
    AppBar,
    createStyles,
    CssBaseline,
    Grid,
    makeStyles,
    Paper,
    Theme,
    Toolbar,
    Typography, withStyles
} from "@material-ui/core";
import './Form';
import Form from "./Form";

const useStyles = makeStyles((theme?: any) => ({
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
                    <Form/>
                </Paper>
            </main >
        </React.Fragment>
    )
}