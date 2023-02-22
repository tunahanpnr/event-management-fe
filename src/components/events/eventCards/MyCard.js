import React, {useState} from "react";
import {Card, Divider} from "@material-ui/core";
import {CardContent, CardHeader, CardActions} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import {ListItemIcon, ListItemText, ListItem, List} from "@material-ui/core";
import DateRangeIcon from '@material-ui/icons/DateRange';
import InfoIcon from '@material-ui/icons/Info';
import {orange, teal, green, blue} from "@material-ui/core/colors";
import CardButtons from "./CardButtons";
import ResAlert from "../../alert/ResAlert";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 200,
    },
    divider: {
        borderColor: "coral"
    },
    header: {
        textAlign: "center"
    },
    content: {
        textAlign: "center",
    },
    leftButton: {
        margin: 'auto',
    },

}));

export default function MyCard(props) {
    const classes = useStyles();
    const [alert, setAlert] = useState();
    const [showAlert, setShowAlert] = useState(false);
    const [showProgress, setShowProgress] = useState(false);
    return (
        <Card className={classes.root} variant="outlined" style={{background: teal[50]}}>
            <CardHeader className={classes.header} title={props.event.eventName}/>
            <Divider/>
            <CardContent>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <DateRangeIcon style={{color: blue[500]}}/>
                        </ListItemIcon>
                        <ListItemText
                            primary={props.event.beginDate + ' / ' + props.event.endDate}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <EventAvailableIcon style={{color: green[500]}}/>
                        </ListItemIcon>
                        <ListItemText
                            primary={'Remaining: ' + props.event.reserved + " from " + props.event.capacity}
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
                <CardButtons setShowProgress={setShowProgress} eventName={props.event.eventName} url={props.url} newEvent={props.event} setAlert={setAlert} setShowAlert={setShowAlert}/>
            </CardActions>
            {showProgress && <CircularProgress/>}
            {showAlert && <ResAlert message={alert}/>}
        </Card>
    )
}
