import React, {Component} from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';


export class MapContainer extends Component {
    state = {
        marker:
            {
                position: {
                    lat: this.props.position ? this.props.position.lat : 39.9255,
                    lng: this.props.position ? this.props.position.lng : 32.8662
                }
            }

    };

    onMarkerDragEnd = (coord) => {
        const {latLng} = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();

        this.setState(prevState => {
            let marker = this.state.marker;
            marker = {...marker, position: {lat, lng}};
            console.log("MapContainer log marker.position ...");
            console.log(marker.position);
            this.props.setPosition(marker.position);
            return {markers: marker};
        });
    };

    render() {
        let myMarker;

        if(this.props.editable){
            myMarker = <Marker
                position={this.state.marker.position}
                draggable={true}
                onDragend={(t, map, coord) => this.onMarkerDragEnd(coord)}
            />
        }else (
            myMarker = <Marker
                    position={this.state.marker.position}
                    draggable={false}
                />
        )

        return (
            <Map
                google={this.props.google}
                style={{
                    width: "100%",
                    height: "100%"
                }}
                zoom={14}
                initialCenter={{lat: this.state.marker.position.lat, lng: this.state.marker.position.lng}}
            >
                {myMarker}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDl3I2zyMS4F6hIyY4QP1qLukCuvOne3JM'
})(MapContainer);