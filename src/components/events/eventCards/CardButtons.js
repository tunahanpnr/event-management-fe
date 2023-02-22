import IconButton from "@material-ui/core/IconButton";
import {Fab} from "@material-ui/core";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import EditIcon from "@material-ui/icons/Edit";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import EventForm from "../AddEvent/EventForm";
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios";
import Tooltip from "@material-ui/core/Tooltip";
import RoomIcon from '@material-ui/icons/Room';
import MapDialog from "../../GoogleMap/MapDialog";
import authHeader from "../../../services/data/authHeader";
import AuthService from "../../../services/auth/AuthService";
import Aux from "../../hoc/Aux/Aux";
import QrCodeModal from "../../qrCode/QrCodeModal";

const useStyles = makeStyles((theme) => ({
    leftButton: {
        margin: 'auto',
    },
    sideBySide: {
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
    }
}));

export default function CardButtons(props) {
    const classes = useStyles();
    const user = AuthService.getCurrentUser();
    const [openEdit, setOpenEdit] = useState(false);
    const [openJoin, setOpenJoin] = useState(false);
    const [data, setData] = useState({
        name: user.name,
        surname: user.surname,
        tc: user.tc,
        eventName: props.eventName
    });
    

    const position = {
        lat: props.newEvent.lat,
        lng: props.newEvent.lng
    }

    const handleOpenEdit = () => {
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const handleOpenJoin = () => {
        props.setShowProgress(false);
        setOpenJoin(true);
    };

    const handleCloseJoin = () => {
        setOpenJoin(false);
        props.setShowAlert(true);
    };

    const [qrCode, setQrCode] = useState();


    const sendEmail = () => {
        axios.post('/sendEmail/' + user.email, data, {headers: authHeader()})
            .then(res => {
                console.log(data)
                console.log("-------")
                //console.log(res.data);
                setQrCode(res.data)
                console.log(qrCode)
                handleOpenJoin();
            })
    }


    const [openMap, setOpenMap] = useState(false);

    const handleOpenMap = () => {
        console.log("position ....")
        console.log(position)
        setOpenMap(true);
    };

    const handleCloseMap = () => {
        setOpenMap(false);
    };


    const handleDeleteEvent = () => {
        axios.delete(props.url + "/" + props.eventName + '/delete', {headers: authHeader()})
            .then(response => {
                console.log(response);
            })
    }
    const handleJoinEvent = () => {
        props.setShowProgress(true);
        axios.get("/" + user.username + "/" + props.eventName + '/join', {headers: authHeader()})
            .then(response => {
                console.log(response);
                if (response.data.messageType === "SUCCESS") {
                    sendEmail();
                    props.setAlert(response.data);
                } else {
                    props.setAlert(response.data);
                    props.setShowProgress(false);
                    props.setShowAlert(true);
                }
            })

    }


    let button;
    if (user.role === "MANAGER") {
        button = <Aux>
            <Tooltip title="Update">
                <IconButton aria-label="update" onClick={handleOpenEdit}>
                    <EditIcon/>
                </IconButton>
            </Tooltip>

            <EventForm open={openEdit} handleClose={handleCloseEdit} action={"PUT"} eventName={props.eventName}
                       newEvent={props.newEvent}/>

            <Tooltip title="Delete">
                <IconButton aria-label="delete" onClick={handleDeleteEvent}>
                    <DeleteIcon/>
                </IconButton>
            </Tooltip>
        </Aux>
    } else if (user.role === "USER") {
        button = <IconButton className={classes.leftButton} onClick={handleJoinEvent}>
            <Fab
                variant="extended"
                size="medium"
                color="primary"
                aria-label="Add"
            >
                <EventAvailableIcon/>
                Join Event
            </Fab>
        </IconButton>
    }
    return (
        <Aux>
            <div className={classes.sideBySide}>
                {button}
                <Tooltip title="Show on Map">
                    <IconButton aria-label="Show on Map" onClick={handleOpenMap}>
                        <RoomIcon/>
                    </IconButton>
                </Tooltip>
                <MapDialog open={openMap} handleClose={handleCloseMap} editable={false} position={position}/>
                <QrCodeModal open={openJoin} handleClose={handleCloseJoin} eventName={props.eventName} qrCode={qrCode}/>
            </div>
        </Aux>
    )
}