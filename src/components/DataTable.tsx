import Grid from "@material-ui/core/Grid";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import React, {useEffect, useState} from "react";
import { makeStyles, Theme } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme: Theme) => ({
  table: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up(600 + theme.spacing(3) + 2)]: {
      marginBottom: theme.spacing(3),
      padding: theme.spacing(3),
    },
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

export default function DataTable() {
  const classes = useStyles();
  const [rows, updateRows] = useState([
    {
      id: "",
      dateTime: "",
      fio: "",
      cost: "",
      description: "",
    },
  ]);

  const sendRequest = async () => {
    const response = await axios({
      method: "GET",
      url: "http://localhost:5000/api/OrderManagement",
    });
    updateRows(response.data);
    console.log(response.data);
  };

  const detailsRows = rows.map((row) => {
     return  {
      id: row.id,
      date: row.dateTime,
      firstName: row.fio.split(" ")[0],
      lastName: row.fio.split(" ")[1],
      price: parseFloat(row.cost),
      description: row.description,
    };
  });

  useEffect(() => {
    const request = axios({
      method: "GET",
      url: "http://localhost:5000/api/OrderManagement",
    }).then( response => {
      updateRows(response.data);
      console.log(response.data);
    }).catch( err => {
      console.log(err);
    })
  }, [])

  return (
    <Grid style={{ height: 420, width: "100%" }} className={classes.table}>
      <DataGrid columns={columns} rows={detailsRows} pageSize={5} />
    </Grid>
  );
}
