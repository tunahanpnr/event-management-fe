import React, {useEffect, useState} from "react";
import axios from "axios";
import EventTable from "../../EventCards/EventTable";
import Cards from "../../EventCards/Cards/Cards";



export default function AllEvents(){
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get("/events")
            .then(response => {
                console.log(response);
                setEvents(response.data);
            })
    }, [])

    return(
        <Cards events={events}/>
    )

}