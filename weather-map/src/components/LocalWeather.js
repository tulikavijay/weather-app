import React from 'react';
import '../layouts/index.css'

class LocalWeather extends React.Component{
 constructor(props){
   super(props);
   this.state = { scale : true , scaleValue : '°C'};
 }
 toggleScale(){
  this.setState(function(state, props) {
      scale: !state.scale;
    });
    if(this.state.scaleValue === '°C'){
      console.log(this.state.scaleValue);
      const temp = (this.props.temp - 32) / 1.8 ;
      var factor = Math.pow(10, 2);
      var temperature= Math.round(temp * factor) / factor;
      this.setState({scaleValue : '°F'});
      this.props.on_click(temperature);
    }
    else if(this.state.scaleValue === '°F'){
      console.log(this.state.scaleValue);
      const temp = (this.props.temp * 1.8) + 32;
      var factor = Math.pow(10, 2);
      var temperature= Math.round(temp * factor) / factor;
      this.setState({scaleValue : '°C'});
      this.props.on_click(temperature);
    }
    else{

    }
 }
 render(){
   return(
     <div>
        <span>{this.props.temp ? this.props.temp : '' }</span>
        <span  className='toggleScale' onClick={()=>this.toggleScale()}>{this.props.temp ? this.state.scaleValue : ''}</span>
     </div>
   )
 }
}
export default LocalWeather
