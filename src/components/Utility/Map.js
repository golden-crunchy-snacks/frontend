// Packages
import { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  margin: "0 auto",
  maxWidth: "400px",
  height: "400px",
};

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        containerStyle={containerStyle}
        initialCenter={{
          lat: -0.6445569,
          lng: 51.5258861,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBtxxvXw4SJsBTvlAoysFfIxTmZMRccKyU",
})(MapContainer);
