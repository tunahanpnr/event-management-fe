import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "./Components/NavigationBar/AppBar";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AllEvents from "./Components/Events/AllEvents/AllEvents";
import AvailableEvents from "./Components/Events/AvailableEvents/AvailableEvents";
import PastEvents from "./Components/Events/PastEvents/PastEvents";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
}));

function App() {
    const classes = useStyles();
    return (
        <BrowserRouter>
        <div className={classes.root}>,
            <AppBar/>
            <Switch>
                <Route path={'/events'} component={AllEvents}/>
                <Route path={'/available-events'} component={AvailableEvents}/>
                <Route path={'/past-events'} component={PastEvents}/>
            </Switch>
        </div>
        </BrowserRouter>
    );
}

export default App;
