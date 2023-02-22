import Dialog from "@material-ui/core/Dialog";
import React from "react";
import Signup from "../authentication/SignUp/Signup";

export default function ProfileModal(props) {
    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
            <Signup isManager={true}/>
        </Dialog>
    )
}
