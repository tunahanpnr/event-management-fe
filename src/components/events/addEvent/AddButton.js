import AddCircleIcon from "@material-ui/icons/AddCircle";
import {green} from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import EventForm from "./EventForm";

const useStyles = makeStyles((theme) => ({
    icon: {
        width: '60px',
        height: '60px',
    },
    iconButton: {
        position: 'relative',
        float: 'right',
        bottom: 0
    }
}));


export default function AddButton() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton variant="outlined" color="primary" onClick={handleClickOpen} className={classes.iconButton}>
                <AddCircleIcon fontSize="large" style={{color: green[500]}} className={classes.icon}/>
            </IconButton>
            <EventForm open={open} handleClose={handleClose} action={"POST"}/>
        </div>
    )
}
