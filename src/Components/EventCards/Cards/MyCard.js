import React from "react";
import {Card, Divider} from "@material-ui/core";
import {CardContent, CardHeader, CardActions, Fab} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import {ListItemIcon, ListItemText, ListItem, List} from "@material-ui/core";
import DateRangeIcon from '@material-ui/icons/DateRange';
import InfoIcon from '@material-ui/icons/Info';
import {orange, teal, green, blue} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 200,
        borderColor: "coral"
    },

    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    divider:{
        borderColor: "coral"
    },
    header: {
        textAlign: "center"
    },
    content: {
        textAlign: "center",
    },
    leftButton:{
        margin: 'auto',
    },

}));

export default function MyCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="rounded" style={{background: teal[50]}}>
            <CardHeader className={classes.header} title={props.event.eventName}/>
            <Divider/>
            <CardContent>
                <List >
                    <ListItem>
                        <ListItemIcon>
                            <DateRangeIcon style={{color: blue[500]}}/>
                        </ListItemIcon>
                        <ListItemText
                            primary={props.event.beginDate + 'to' + props.event.endDate}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <EventAvailableIcon style={{color: green[500]}}/>
                        </ListItemIcon>
                        <ListItemText
                            primary={'Remaining: ' + props.event.reserved + "from" + props.event.capacity}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <InfoIcon style={{color: orange[500]}}/>
                        </ListItemIcon>
                        <ListItemText
                            primary={props.event.info}
                        />
                    </ListItem>
                </List>
            </CardContent>
            <Divider/>
            <CardActions>
                <IconButton className={classes.leftButton}>
                    <Fab
                        variant="extended"
                        size="medium"
                        color="primary"
                        aria-label="Add"
                    >
                        <EventAvailableIcon className={classes.extendedIcon} />
                        Join Event
                    </Fab>
                </IconButton>
            </CardActions>
        </Card>
    )
}
