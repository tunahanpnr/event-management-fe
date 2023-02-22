import React, {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import MapContainer from "./MapContainer";


export default function MapDialog(props) {
    return (
        <Dialog
            PaperProps={{
                style: {
                    minHeight: '75vh',
                    minWidth: '75vh',
                },
            }}
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="max-width-dialog-title"
        >
            <MapContainer setPosition={props.setPosition} editable={props.editable} position={props.position}/>
        </Dialog>

    );
}
