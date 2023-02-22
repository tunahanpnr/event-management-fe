import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import React from "react";
import EventTable from "./EventTable";
import {makeStyles} from "@material-ui/core/styles";

const useStyles2 = makeStyles({
    table: {
        minWidth: 500,
    },
});
export default function TableContainer(props) {
    const classes = useStyles2();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="custom pagination table">
                <EventTable rows={props.data}/>
            </Table>
        </TableContainer>
    )
}