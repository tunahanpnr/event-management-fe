import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import AuthService from "../../services/auth/AuthService";
import QrCode from "./QrCode";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        paddingLeft: "40px",
        paddingRight: "40px",
        width: '80%',
        margin: '0 auto'
    },
    paper: {
        padding: "20px",
        marginTop: "10px",
        marginBottom: "10px",
    },
}));

export default function QrCodeModal(props) {
    const classes = useStyles();
    const user = AuthService.getCurrentUser();
    return (
        <Dialog
            PaperProps={{
                style: {
                    minHeight: '50vh',
                    minWidth: '80vh',
                },
            }}
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="max-width-dialog-title"
        >
            <DialogContent>

                <Grid container spacing={4} className={classes.gridContainer}>
                    <Grid sm={8}>
                        <Grid sm={6}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                value={user.name}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid sm={6}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="surname"
                                label="Surname"
                                name="surname"
                                value={user.surname}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid sm={6}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="tc"
                                label="TC Kimlik No"
                                name="tc"
                                value={user.tc}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid sm={6}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="eventName"
                                label="Event Name"
                                name="eventName"
                                value={props.eventName}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid sm={4}>
                        <QrCode name={user.name} surname={user.surname} tc={user.tc} eventName={props.eventName} qrCode={props.qrCode}/>
                    </Grid>
                </Grid>
                <Paper className={classes.paper}>
                    <Button
                        onClick={props.handleClose}
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        OKAY
                    </Button>
                </Paper>
            </DialogContent>
        </Dialog>

    );
}
