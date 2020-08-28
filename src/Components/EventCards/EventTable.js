import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHeader from "./TableHeader";
import TableContent from "./TableContent";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: '0 auto'
    },
    container: {
        maxHeight: 440,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


export default function EventTable(props) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const columns = [
        {id: 'eventName', label: 'Event Name', minWidth: 190},
        {id: 'beginDate', label: 'Begin Date', minWidth: 120},
        {id: 'endDate', label: 'End Date', minWidth: 120, align: "right"},
        {id: 'reserved', label: 'Reserved', minWidth: 50, align: "right"},
        {id: 'capacity', label: 'Capacity', minWidth: 50, align: "right"},
        {id: 'info', label: 'Information', minWidth: 190, align: "right"},
        {id: '', label: '', minWidth: 170, align: 'right'},
    ];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHeader columns={columns}/>
                        <TableContent columns={columns} rows={props.events} page={page} rowsPerPage={rowsPerPage}/>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={props.events.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </main>
    );
}
