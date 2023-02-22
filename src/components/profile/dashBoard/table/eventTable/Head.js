import React from "react";
import TableRow from "@material-ui/core/TableRow";
import {withStyles} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

export default function Head(props) {
    return (
        <TableRow>
            <StyledTableCell>{props.user ? "Username" : "Event Name"}</StyledTableCell>
            <StyledTableCell align="center">{props.user ? "Name" : "Begin Date"}</StyledTableCell>
            <StyledTableCell align="center">{props.user ? "Surname" : "End Date"}</StyledTableCell>
            <StyledTableCell align="center">{props.user ? "E-mail" : "Reserved"}</StyledTableCell>
            <StyledTableCell align="center">{props.user ? "TC Kimlik No" : "Capacity"}</StyledTableCell>
            <StyledTableCell align="right">{props.user ? <CloseOutlinedIcon onClick={props.handleCloseUser}/> : null}</StyledTableCell>
        </TableRow>
    )
}