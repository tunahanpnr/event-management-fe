import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormContent from "./FormContent";
import Aux from "../../hoc/Aux/Aux";
import ResAlert from "../../alert/ResAlert";
import AuthService from "../../../services/auth/AuthService";
import authHeader from "../../../services/data/authHeader";


export default function EventForm(props) {
    const user = AuthService.getCurrentUser();
    const eventName = props.eventName;
    const [resMessage, setResMessage] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [newEvent, setNewEvent] = useState({
        username: user.username,
        eventName: "",
        capacity: 1,
        beginDate: new Date(),
        endDate: new Date(),
        info: "",
        lat: 0,
        lng: 0
    })


    const postEventHandler = () => {
        const data = newEvent;
        console.log(data);
        axios.post('/' + newEvent.username + '/add-event', data, { headers: authHeader() })
            .then(response => {
                console.log(response);
                setResMessage(response.data)
                setShowAlert(true)
            })
    }
    const putEventHandler = () => {
        const data = newEvent;
        console.log(data);
        console.log(eventName);
        axios.put('/' + eventName + '/update', data, { headers: authHeader() })
            .then(response => {
                console.log(eventName);
                console.log(response);
                setShowAlert(true)
            })
    }


    return (
        <Aux>
            <div>
                <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">New Event</DialogTitle>
                    <DialogContent>
                        <FormContent username={user.username} newEvent={newEvent} setNewEvent={setNewEvent}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => {
                            props.action === 'POST' ? postEventHandler() : putEventHandler()
                        }} color="primary">
                            Submit
                        </Button>
                        <Button onClick={props.handleClose} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                    {showAlert && <ResAlert message={resMessage} setShowAlert={setShowAlert}/>}
                </Dialog>
            </div>
        </Aux>
    );
}
