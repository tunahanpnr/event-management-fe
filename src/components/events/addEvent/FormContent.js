import {Grid} from "@material-ui/core";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import React, {useEffect, useState} from "react";
import IconButton from "@material-ui/core/IconButton";
import EditLocationIcon from '@material-ui/icons/EditLocation';
import MapDialog from "../../GoogleMap/MapDialog";
import Aux from "../../hoc/Aux/Aux";

export default function FormContent(props) {
    const [openMap, setOpenMap] = useState(false);

    const [position, setPosition] = useState([])

    function handleOpenMap() {
        setOpenMap(true);
    }

    const handleCloseMap = () => {
        console.log("Map closing ...");
        console.log(position);
        setOpenMap(false);
        props.setNewEvent({...props.newEvent, lat: position.lat, lng: position.lng});
    };


    return (
        <Aux>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <DialogContentText>
                        Event name must be unique. Also all fields are required.
                    </DialogContentText>
                </Grid>
                <Grid item xs={9}>
                    <TextField
                        autoFocus
                        variant="outlined"
                        margin="dense"
                        id="username"
                        label="username"
                        value={props.username}
                        disabled
                        type="text"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        autoFocus
                        variant="outlined"
                        margin="dense"
                        id="eventName"
                        label="Event Name"
                        type="text"
                        value={props.newEvent.eventName}
                        onChange={e => props.setNewEvent({...props.newEvent, eventName: e.target.value})}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            disablePast
                            id="beginDate"
                            variant="inline"
                            inputVariant="outlined"
                            format="dd/MM/yyyy"
                            label="Begin Date"
                            value={props.newEvent.beginDate}
                            onChange={date => props.setNewEvent({...props.newEvent, beginDate: date})}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={6}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            disablePast
                            id="endDate"
                            variant="inline"
                            inputVariant="outlined"
                            format="dd/MM/yyyy"
                            label="End Date"
                            value={props.newEvent.endDate}
                            onChange={date => props.setNewEvent({...props.newEvent, endDate: date})}
                            minDate={props.newEvent.beginDate}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        autoFocus
                        variant="outlined"
                        margin="dense"
                        id="info"
                        label="Details"
                        type="text"
                        value={props.newEvent.info}
                        onChange={e => props.setNewEvent({...props.newEvent, info: e.target.value})}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        id="capacity"
                        label="Capacity"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        value={props.newEvent.capacity}
                        onChange={e => props.setNewEvent({...props.newEvent, capacity: e.target.value})}
                    />
                </Grid>
                <Grid item xs={3}>
                    <IconButton aria-label="map" onClick={handleOpenMap}>
                        <EditLocationIcon/>
                    </IconButton>
                </Grid>
            </Grid>
            <MapDialog open={openMap} handleClose={handleCloseMap} setPosition={setPosition} editable={true}/>
        </Aux>

    )
}