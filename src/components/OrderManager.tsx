import React, {useState} from "react";
import {
  AppBar,
  CssBaseline,
  makeStyles,
  Toolbar,
  Typography,
  Theme,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import DataTable from "./DataTable";
import FindOrdersForm from "./FindOrdersForm";
import CreateOrderForm from "./CreateOrderForm";
import {Order} from "../interfaces/Order";

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

export default function OrderManager() {
  const classes = useStyles();

  const emptyOrderList: Order[] = [];
  const [orders, setOrders] = useState(emptyOrderList);
  const [needUpdate, setNeedUpdate] = useState(false);

  function getOrderByFio(orders: Order[]) {
    setOrders(orders);
  }

  function needUpdateTable(val: boolean) {
    setNeedUpdate(val);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position={"absolute"}
        color={"default"}
        className={classes.appBar}
      >
        <Toolbar>
          <Typography variant={"h6"} color="inherit" noWrap>
            Order manager
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Grid container className={classes.layout}>
          <CreateOrderForm />
          <FindOrdersForm getOrderByFio={getOrderByFio}/>
          <DataTable orders={orders}/>
        </Grid>
      </main>
    </React.Fragment>
  );
}
