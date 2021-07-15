import { AppBar, CssBaseline, makeStyles, Paper, Theme, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import Form from './Form'

const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));

export default function OrderForm() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position='absolute' color='default' className={classes.appBar}>
                <Toolbar>
                    <Typography variant='h6' color='inherit' noWrap>
                        Order manager
                    </Typography>
                </Toolbar>
            </AppBar>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component='h1' variant='h4' align='center'>
                        Форма заказа
                    </Typography>
                    <React.Fragment>
                        <div className={classes.buttons}>
                            <Form/>
                        </div>
                    </React.Fragment>
                </Paper>
            </main>
        </React.Fragment>
    )
}