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

const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        position: 'relative'
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        // [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        //     width: 550,
        //     marginLeft: 'auto',
        //     marginRight: 'auto',
        // },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    table: {
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up(600 + theme.spacing(3) + 2)]: {
            marginBottom: theme.spacing(3),
            padding: theme.spacing(3),

        }
    },
    button: {
        display: 'flex',
        justifyContent: 'flexEnd',
        marginTop: theme.spacing(3),
    }
}));

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 100},
    {field: 'date', headerName: 'Дата', width: 200},
    {field: 'firstName', headerName: 'Имя', width: 200},
    {field: 'lastName', headerName: 'Фамилия', width: 200},
    {field: 'price', headerName: 'Стоимость', width: 160},
    {field: 'description', headerName: 'Описание', width: 540}
]

const testRows = [
    {id: 1, date: '01.01.2000', firstName: 'John', lastName: 'Seena', price: 9999.99, description: 'test row'},
    {id: 2, date: '01.01.2000', firstName: 'John', lastName: 'Seena', price: 9999.99, description: 'test row'},
    {id: 3, date: '01.01.2000', firstName: 'John', lastName: 'Seena', price: 9999.99, description: 'test row'},
    {id: 4, date: '01.01.2000', firstName: 'John', lastName: 'Seena', price: 9999.99, description: 'test row'},
    {id: 5, date: '01.01.2000', firstName: 'John', lastName: 'Seena', price: 9999.99, description: 'test row'},
    {id: 6, date: '01.01.2000', firstName: 'John', lastName: 'Seena', price: 9999.99, description: 'test row'},
    {id: 7, date: '01.01.2000', firstName: 'John', lastName: 'Seena', price: 9999.99, description: 'test row'},
    {id: 8, date: '01.01.2000', firstName: 'John', lastName: 'Seena', price: 9999.99, description: 'test row'},
    {id: 9, date: '01.01.2000', firstName: 'John', lastName: 'Seena', price: 9999.99, description: 'test row'},
    {id: 10, date: '01.01.2000', firstName: 'John', lastName: 'Seena', price: 9999.99, description: 'test row'},
    {id: 11, date: '01.01.2000', firstName: 'John', lastName: 'Seena', price: 9999.99, description: 'test row'},
    {id: 12, date: '01.01.2000', firstName: 'John', lastName: 'Seena', price: 9999.99, description: 'test row'},
    {id: 13, date: '01.01.2000', firstName: 'John', lastName: 'Seena', price: 9999.99, description: 'test row'},
    {id: 14, date: '01.01.2000', firstName: 'John', lastName: 'Seena', price: 9999.99, description: 'test row'},
    {id: 15, date: '01.01.2000', firstName: 'John', lastName: 'Seena', price: 9999.99, description: 'test row'},
    {id: 16, date: '01.01.2000', firstName: 'John', lastName: 'Seena', price: 9999.99, description: 'test row'},
    {id: 17, date: '01.01.2000', firstName: 'John', lastName: 'Seena', price: 9999.99, description: 'test row'},
    {id: 18, date: '01.01.2000', firstName: 'John', lastName: 'Seena', price: 9999.99, description: 'test row'},
]

export default function OrderForm() {
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
                    <Paper className={classes.paper} style={{width: '48%'}}>
                        <div>

                        <Typography>
                            Поиск записей по имени и фамилии
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
                        </Grid>
                            <Button onClick={sendRequest}
                                    className={classes.button}>
                                Искать
                            </Button>
                        </div>
                    </Paper>
                </Grid>
                <Grid style={{height: 420, width: '100%'}} className={classes.table}>
                        <DataGrid columns={columns} rows={testRows} pageSize={5}/>
                </Grid>
        </main >
        </React.Fragment>
    )
}
