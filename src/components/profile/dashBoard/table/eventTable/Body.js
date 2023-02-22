import React from "react";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import {orange, purple} from "@material-ui/core/colors";
import BarChartRoundedIcon from "@material-ui/icons/BarChartRounded";
import TableRow from "@material-ui/core/TableRow";
import Aux from "../../../hoc/Aux/Aux";

export default function Body(props) {
    function closing(eventName) {
        props.setPage(0);
        props.handleOpenUser(eventName);
    }
    return (
        <Aux>
            {!props.user &&
            <TableRow key={props.row.eventName}>
                <TableCell component="th" scope="props.row">
                    {props.row.eventName}
                </TableCell>
                <TableCell style={{width: 120}} align="center">
                    {props.row.beginDate}
                </TableCell>
                <TableCell style={{width: 120}} align="center">
                    {props.row.endDate}
                </TableCell>
                <TableCell style={{width: 80}} align="center">
                    {props.row.reserved}
                </TableCell>
                <TableCell style={{width: 80}} align="center">
                    {props.row.capacity}
                </TableCell>
                <TableCell style={{width: 140}} align="right">
                    <IconButton aria-label="participants" onClick={() => closing(props.row.eventName)}>
                        <PeopleAltRoundedIcon style={{color: purple[500]}}/>
                    </IconButton>
                    <IconButton aria-label="BarChart" onClick={() => props.handleOpenChart(props.row.eventName)}>
                        <BarChartRoundedIcon style={{color: orange[500]}}/>
                    </IconButton>
                </TableCell>
            </TableRow>
            }
            {props.user &&
            <TableRow key={props.row.username}>
                <TableCell component="th" scope="props.row">
                    {props.row.username}
                </TableCell>
                <TableCell style={{width: 120}} align="center">
                    {props.row.name}
                </TableCell>
                <TableCell style={{width: 120}} align="center">
                    {props.row.surname}
                </TableCell>
                <TableCell style={{width: 80}} align="center">
                    {props.row.email}
                </TableCell>
                <TableCell style={{width: 80}} align="center">
                    {props.row.tc}
                </TableCell>
            </TableRow>
            }
        </Aux>
    )
}