import Chart from "react-google-charts";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";
import authHeader from "../../../services/data/authHeader";
import AuthService from "../../../services/auth/AuthService";

const useStyles = makeStyles((theme) => ({
    table: {
        minHeight: 760,
        height: "100%"
    },
}));

export default function BarChart() {
    const classes = useStyles();
    const user = AuthService.getCurrentUser();
    const [data, setData] = useState([
        ["Event Name", "Participants", {role: "style"}]
    ]);

    useEffect(() => {
        axios.get("/" + user.username + "/my-events", {headers: authHeader()})
            .then(response => {
                response.data.map((event) => setData(
                    prevData => [...prevData, [event.eventName, 1, "color: blue"]]
                    )
                );
            })
    }, [])

    return (
        <Chart
            className={classes.table}
            chartType="BarChart"
            width="100%"
            data={data}
            loader={<div>Loading Chart</div>}
            options={{
                title: 'Participants of All Events',
                chartArea: {width: '50%'},
                isStacked: true,
                hAxis: {
                    title: 'Participants',
                    minValue: 0,
                },
                vAxis: {
                    title: 'Event Name',
                },
                animation: {
                    startup: true,
                    easing: 'linear',
                    duration: 1000,
                },
            }}
        />
    )
}

