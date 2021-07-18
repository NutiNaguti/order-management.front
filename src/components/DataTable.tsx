import Grid from "@material-ui/core/Grid";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import React from "react";
import { makeStyles, Theme } from "@material-ui/core";

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

const testRows = [
  {
    id: 1,
    date: "01.01.2000",
    firstName: "John",
    lastName: "Seena",
    price: 9999.99,
    description: "test row",
  },
  {
    id: 2,
    date: "01.01.2000",
    firstName: "John",
    lastName: "Seena",
    price: 9999.99,
    description: "test row",
  },
  {
    id: 3,
    date: "01.01.2000",
    firstName: "John",
    lastName: "Seena",
    price: 9999.99,
    description: "test row",
  },
  {
    id: 4,
    date: "01.01.2000",
    firstName: "John",
    lastName: "Seena",
    price: 9999.99,
    description: "test row",
  },
  {
    id: 5,
    date: "01.01.2000",
    firstName: "John",
    lastName: "Seena",
    price: 9999.99,
    description: "test row",
  },
  {
    id: 6,
    date: "01.01.2000",
    firstName: "John",
    lastName: "Seena",
    price: 9999.99,
    description: "test row",
  },
  {
    id: 7,
    date: "01.01.2000",
    firstName: "John",
    lastName: "Seena",
    price: 9999.99,
    description: "test row",
  },
  {
    id: 8,
    date: "01.01.2000",
    firstName: "John",
    lastName: "Seena",
    price: 9999.99,
    description: "test row",
  },
  {
    id: 9,
    date: "01.01.2000",
    firstName: "John",
    lastName: "Seena",
    price: 9999.99,
    description: "test row",
  },
  {
    id: 10,
    date: "01.01.2000",
    firstName: "John",
    lastName: "Seena",
    price: 9999.99,
    description: "test row",
  },
  {
    id: 11,
    date: "01.01.2000",
    firstName: "John",
    lastName: "Seena",
    price: 9999.99,
    description: "test row",
  },
  {
    id: 12,
    date: "01.01.2000",
    firstName: "John",
    lastName: "Seena",
    price: 9999.99,
    description: "test row",
  },
  {
    id: 13,
    date: "01.01.2000",
    firstName: "John",
    lastName: "Seena",
    price: 9999.99,
    description: "test row",
  },
  {
    id: 14,
    date: "01.01.2000",
    firstName: "John",
    lastName: "Seena",
    price: 9999.99,
    description: "test row",
  },
  {
    id: 15,
    date: "01.01.2000",
    firstName: "John",
    lastName: "Seena",
    price: 9999.99,
    description: "test row",
  },
  {
    id: 16,
    date: "01.01.2000",
    firstName: "John",
    lastName: "Seena",
    price: 9999.99,
    description: "test row",
  },
  {
    id: 17,
    date: "01.01.2000",
    firstName: "John",
    lastName: "Seena",
    price: 9999.99,
    description: "test row",
  },
  {
    id: 18,
    date: "01.01.2000",
    firstName: "John",
    lastName: "Seena",
    price: 9999.99,
    description: "test row",
  },
];

export default function DataTable() {
  const classes = useStyles();
  return (
    <Grid style={{ height: 420, width: "100%" }} className={classes.table}>
      <DataGrid columns={columns} rows={testRows} pageSize={5} />
    </Grid>
  );
}
