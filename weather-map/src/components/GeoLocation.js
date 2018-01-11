import React from 'react';
import Fetch from './Fetch';

class GeoLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      lon : null,
      lat : null
    }
  }
  getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
         console.log("Geolocation is not supported by this browser.");
    }
   }
  showPosition(position) {
    this.setState({lon:position.coords.latitude,lat:position.coords.longitude})
   }
   render(){
     return <Fetch lon={this.state.lon} lat={this.state.lat} />
   }
}
export default GeoLocation;
