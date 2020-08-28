import React from "react";
// material-ui components
import {Card, CardHeader, Grid, CardContent} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";
import MyCard from "./MyCard";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        paddingLeft: "40px",
        paddingRight: "40px",
        width: '80%',
        margin: '0 auto'
    },
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

export default function Cards(props) {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container spacing={4} className={classes.gridContainer}>
                {props.events.map((event) => {
                    return (
                        <Grid item xs={12} sm={6} md={3}>
                            <MyCard event={event}/>
                        </Grid>
                    );
                })}
            </Grid>
        </main>
    );
}
