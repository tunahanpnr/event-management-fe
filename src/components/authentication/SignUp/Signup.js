import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import icon from "./sign-up.png"
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import axios from "axios";
import ResAlert from "../../../Services/Alert/ResAlert";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    signUp: {
        backgroundColor: "#00897b",
        '&:hover': {
            background: "#4db6ac",
        },
        margin: theme.spacing(3, 0, 2),
    },
    signIn: {
        backgroundColor: "#7b1fa2",
        '&:hover': {
            background: "#ab47bc",
        },
    }
}));

export default function Signup() {
    const [newUser, setNewUser] = useState({
        name: "",
        surname: "",
        username: "",
        email: "",
        password: "",
        role: ""
    });

    const [message, setMessage] = useState([])

    const handleChange = (event) => {
        setNewUser({...newUser, role: event.target.value});
    };

    const classes = useStyles();

    const postSignupRequest = () => {
        const data = newUser;
        axios.post("/signup", data)
            .then(response => {
                setMessage(response.data);
            })
            .catch((e) => {
                setMessage(e.response.data);
            });
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <img src={icon}/>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <form className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={newUser.name}
                        onChange={e => setNewUser({...newUser, name: e.target.value})}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="surname"
                        label="Surname"
                        name="surname"
                        autoComplete="surname"
                        autoFocus
                        value={newUser.surname}
                        onChange={e => setNewUser({...newUser, surname: e.target.value})}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={newUser.username}
                        onChange={e => setNewUser({...newUser, username: e.target.value})}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={newUser.email}
                        onChange={e => setNewUser({...newUser, email: e.target.value})}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={newUser.password}
                        onChange={e => setNewUser({...newUser, password: e.target.value})}
                    />
                    <RadioGroup aria-label="gender" name="gender1" value={newUser.role} onChange={handleChange}>
                        <FormControlLabel value="MANAGER" control={<Radio/>} label="Manager"/>
                        <FormControlLabel value="USER" control={<Radio/>} label="Participant"/>
                    </RadioGroup>

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.signUp}
                        onClick={postSignupRequest}
                    >
                        Sign Up
                    </Button>
                    <Button
                        href="/signin"
                        fullWidth
                        variant="contained"
                        className={classes.signIn}
                    >
                        Sign In
                    </Button>
                </form>
            </div>
            <ResAlert message={message}/>
        </Container>
    )
}