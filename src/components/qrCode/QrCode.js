import React, {useState} from 'react';
import {useQRCode} from 'react-hook-qrcode';
import axios from "axios";
import authHeader from "../../services/data/authHeader";

function QrCode(props) {
    const [text, setText] = useState({
        text: "Name: " + props.name +
            "\nSurname: " + props.surname +
            "\nTC: " + props.tc +
            "\nEvent Name: " + props.eventName,
    })






    console.log("+++++++")
    console.log(props.qrCode)
    return (
        <img src={'data:image/jpeg;base64,'+props.qrCode}/>
    )
}

export default QrCode;