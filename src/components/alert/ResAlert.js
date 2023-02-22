import React from "react";
import Alert from "@material-ui/lab/Alert";

export default function ResAlert(props){
    let alert = null;
    if(props.message.messageType === "ERROR") {
        alert = <Alert severity="error">{props.message.message}</Alert>
    }else if(props.message.messageType === "SUCCESS"){
        alert = <Alert severity="success">{props.message.message}</Alert>
    }
    return(alert)
}