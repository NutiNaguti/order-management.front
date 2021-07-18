import React, {ChangeEvent, useState} from "react";
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
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import DataTable from "./DataTable";
import FindOrdersForm from "./FindOrdersForm";
import CreateOrderForm from "./CreateOrderForm";

const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        position: "relative",
    },
    layout: {
        width: "auto",
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        // [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        //     width: 550,
        //     marginLeft: 'auto',
        //     marginRight: 'auto',
        // },
    },
}));

export default function OrderManager() {
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
            <main>
                <Grid container className={classes.layout}>
                    <CreateOrderForm/>
                    <FindOrdersForm/>
                    <DataTable/>
                </Grid>
        </main >
        </React.Fragment>
    )
}


