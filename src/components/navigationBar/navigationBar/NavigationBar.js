import React, {useState} from 'react';
import clsx from 'clsx';
import {useTheme, Drawer, AppBar, CssBaseline} from '@material-ui/core';
import {Typography, Divider, IconButton, Toolbar} from '@material-ui/core';
import {List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import EventIcon from '@material-ui/icons/Event';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import EventBusyIcon from '@material-ui/icons/EventBusy';
import StarIcon from '@material-ui/icons/Star';
import NavElements from "../NavElements/NavElements";
import Aux from "../../hoc/Aux/Aux";
import {Link} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import {blue, green, orange, purple, red} from "@material-ui/core/colors";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import EventForm from "../../events/AddEvent/EventForm";
import AuthService from "../../../services/auth/AuthService";



export default function NavigationBar(props) {
    const classes = props.style;
    const theme = useTheme();

    const user = AuthService.getCurrentUser();

    const [openDrawer, setOpenDrawer] = useState(false);
    const [addEvent, setAddEvent] = useState(false);

    const handleClickAddEvent = () => {
        setAddEvent(true);
    };

    const handleCloseAddEvent = () => {
        setAddEvent(false);
    };

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };



    return (
        <Aux>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: openDrawer,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: openDrawer,
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Event Manager
                    </Typography>
                    <div className={classes.grow}/>
                    <NavElements/>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: openDrawer,
                    [classes.drawerClose]: !openDrawer,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: openDrawer,
                        [classes.drawerClose]: !openDrawer,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </div>

                <List>
                    <ListItem button component={Link} to="/">
                        <ListItemIcon> <HomeIcon style={{color: blue[500]}}/> </ListItemIcon>
                        <ListItemText primary={'Home'}/>
                    </ListItem>
                    <ListItem button component={Link} to="/events">
                        <ListItemIcon> <EventIcon style={{color: purple[500]}}/> </ListItemIcon>
                        <ListItemText primary={'All Events'}/>
                    </ListItem>
                    <ListItem button component={Link} to="/available-events">
                        <ListItemIcon> <EventAvailableIcon style={{color: green[500]}}/> </ListItemIcon>
                        <ListItemText primary={'Available Events'}/>
                    </ListItem>
                    <ListItem button component={Link} to="/past-events">
                        <ListItemIcon> <EventBusyIcon style={{color: red[500]}}/> </ListItemIcon>
                        <ListItemText primary={'Past Events'}/>
                    </ListItem>
                    <Divider/>
                    <ListItem button component={Link} to="/my-events">
                        <ListItemIcon> <StarIcon style={{color: orange[500]}}/> </ListItemIcon>
                        <ListItemText primary={'My Events'}/>
                    </ListItem>
                    {(user.role === "MANAGER") && <ListItem button onClick={handleClickAddEvent}>
                        <ListItemIcon> <AddCircleIcon style={{color: green[500]}}/> </ListItemIcon>
                        <ListItemText primary={'New Event'}/>
                    </ListItem>}
                </List>
            </Drawer>
            <EventForm open={addEvent} handleClose={handleCloseAddEvent} action={"POST"}/>
        </Aux>
    );
}
