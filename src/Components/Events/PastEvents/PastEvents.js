import React, {useEffect, useState} from "react";
import axios from "axios";
import EventTable from "../../EventCards/EventTable";



export default function AllEvents(){
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get("/past-events")
            .then(response => {
                console.log(response);
                setEvents(response.data);
            })
    }, [])

    return(
        <EventTable events={events}/>
    )

}