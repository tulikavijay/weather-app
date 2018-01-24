import React from 'react';
import Fetch from './Fetch';

class GeoLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      lon : null,
      lat : null
    }
    this.showPosition = this.showPosition.bind(this);
  }
  componentDidMount(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
         console.log("Geolocation is not supported by this browser.");
    }
  }
  showPosition(position) {
    this.setState({lon:position.coords.latitude,lat:position.coords.longitude});
    console.log(this.state.lon);
   }
   render(){
     return (
       <div>
       <Fetch lon={this.state.lon} lat={this.state.lat} />
       </div>
     )
   }
}
export default GeoLocation;
