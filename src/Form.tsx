import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Button, TextField } from '@material-ui/core';

export default function Form() {
    return(
        <React.Fragment>
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
                <Grid item xs={12}>
                    <Button>
                        Создать заказ
                    </Button>
                </Grid>
           </Grid>
        </React.Fragment>
    );
}
