import React from "react";
import {Grid} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";
import MyCard from "./MyCard";


const useStyles = makeStyles((theme) => ({
    gridContainer: {
        paddingLeft: "40px",
        paddingRight: "40px",
        width: '80%',
        margin: '0 auto'
    },
}));

export default function Cards(props) {
    const classes = useStyles();

    return (
        <Grid container spacing={4} className={classes.gridContainer}>
            {console.log(props.events)}
            {props.events.slice(props.page * props.eventsPerPage, props.page * props.eventsPerPage + props.eventsPerPage).map((event) => {
                return (
                    <Grid key={event.eventName} item xs={12} sm={6} md={3}>
                        <MyCard event={event} url={props.url}/>
                    </Grid>
                );
            })}
        </Grid>
    );
}
