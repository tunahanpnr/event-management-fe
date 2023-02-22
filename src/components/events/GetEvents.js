import React, {useEffect, useState} from "react";
import axios from "axios";
import Cards from "./EventCards/Cards";
import {makeStyles} from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import AddButton from "./AddEvent/AddButton";


const useStyles = makeStyles((theme) => ({
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
    pagi:{
        display: 'flex',
    },
    pagination: {
        margin: '0 auto'
    },
}));

export default function GetEvents(props) {
    const classes = useStyles();
    const [events, setEvents] = useState([]);

    const [page, setPage] = React.useState(1);
    const eventsPerPage = 8;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    useEffect(() => {
        axios.get(props.url)
            .then(response => {
                // console.log(response);
                setEvents(response.data);
            })
    })

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Cards events={events} page={page - 1} eventsPerPage={8} author={props.author} url={props.url}/>
            <div className={classes.toolbar}/>
            <div className={classes.pagi}>
                <Pagination count={Math.ceil(events.length / eventsPerPage)} page={page} onChange={handleChangePage}
                            color="primary" className={classes.pagination}/>
                <AddButton/>
            </div>
        </main>
    )

}