import Grid from "@material-ui/core/Grid";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import React, { useEffect, useState } from "react";
import { Button, makeStyles, Theme } from "@material-ui/core";
import axios from "axios";
import {Props} from "../interfaces/DataTableProps";
import {Order} from "../interfaces/Order";

const useStyles = makeStyles((theme: Theme) => ({
  table: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up(600 + theme.spacing(3) + 2)]: {
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
    },
  },
  button: {
    marginLeft: theme.spacing(2),
    display: "flex",
    justifyContent: "flexEnd",
    marginTop: theme.spacing(3),
    width: 100,
  },
}));

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "date", headerName: "Дата", width: 200 },
  { field: "firstName", headerName: "Имя", width: 200 },
  { field: "lastName", headerName: "Фамилия", width: 200 },
  { field: "price", headerName: "Стоимость", width: 160 },
  { field: "description", headerName: "Описание", width: 540 },
];

export default function DataTable(props: Props) {
  const emptyStringArray: string[] = [];
  const emptyOrderList: Order[] = [];

  const classes = useStyles();
  const [deleted, setDeleted] = useState(emptyStringArray);
  const [rows, updateRows] = useState(emptyOrderList);

  const detailsRows = rows.map((row) => {
    return {
      id: row.id,
      date: row.dateTime,
      firstName: row.fio.split(" ")[0],
      lastName: row.fio.split(" ")[1],
      price: parseFloat(row.cost),
      description: row.description,
    };
  });

  const updateTable = () => {
    axios({
      method: "GET",
      url: "http://localhost:5000/api/OrderManagement",
    })
      .then((response) => {
        if (response.data.length !== 0) updateRows(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteRows = () => {
    console.log(deleted);
    axios({
      method: "DELETE",
      url: "http://localhost:5000/api/OrderManagement/delete",
      data: {
        deleted,
      },
    })
      .then((response) => {
        setDeleted([]);
        console.log(response);
        // updateTable();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(props)
    if (props.orders !== null) {
      updateRows(props.orders);
    }
    else {
      updateTable();
    }
  }, [props]);

  return (
    <Grid style={{ height: 420, width: "100%" }}>
      <Grid container>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => {
            deleteRows();
          }}
          className={classes.button}
        >
          Удалить
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            updateTable();
          }}
          className={classes.button}
        >
          Обновить
        </Button>
      </Grid>
      <Grid style={{ height: "100%" }} className={classes.table}>
        <DataGrid
          onRowSelected={(e) => {
            setDeleted(deleted.concat(e.data.id));
          }}
          columns={columns}
          rows={detailsRows}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      </Grid>
    </Grid>
  );
}
