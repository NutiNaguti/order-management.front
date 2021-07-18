import {Button, makeStyles, Paper, TextField, Theme, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, {ChangeEvent, useState} from "react";
import axios from "axios";

const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        position: "relative",
    },
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
}))

export default function CreateOrderForm() {
    const classes = useStyles();

    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [price, setPrice] = useState(0.0);

    const sendRequest = async () => {
        const response = await axios({
            method: "POST",
            url: "http://localhost:5000/api/OrderManagement",
            data: {
                fio: `${firstName} ${secondName}`,
                description: shortDescription,
                price: price
            }
        });
        console.log(response)
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        switch (event.target.name) {
            case 'firstName':
                setFirstName(event.target.value)
                console.log(firstName)
                break;

            case 'secondName':
                setSecondName(event.target.value)
                console.log(secondName)
                break;

            case 'shortDescription':
                setShortDescription(event.target.value)
                console.log(shortDescription)
                break;

            case 'price':
                setPrice(Math.abs(parseFloat(event.target.value)))
                console.log(price)
                break;
        }
    };

    return (
    <Paper className={classes.paper} style={{width: '48%'}}>
        <Typography>
            Форма заказа
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField value={firstName}
                           onChange={handleChange}
                           required id="firstName"
                           name="firstName"
                           label="First name"
                           fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField value={secondName}
                           onChange={handleChange}
                           required id="secondName"
                           name="secondName"
                           label="Second name"
                           fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField value={shortDescription}
                           onChange={handleChange}
                           required id="shortDescription"
                           name="shortDescription"
                           label="Short description"
                           fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField value={price}
                           onChange={handleChange}
                           required
                           type="number"
                           id="price"
                           name="price"
                           label="Price"
                           fullWidth/>
            </Grid>
        </Grid>
        <Button onClick={sendRequest} className={classes.button}>
            Создать заказ
        </Button>
    </Paper>
    )
}