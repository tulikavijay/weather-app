import React from 'react';

class LocalWeather extends React.Component{
 constructor(props){
   super(props);
   this.state = { scale : true , scaleValue : '°C'};
 }
 toggleScale(){
    this.setState({scale:!scale});
    if(this.state.scale){
      const temp = (this.props.temp - 32) / 1.8 ;
      this.setState({scaleValue : '°F'});
      this.props.on_click(temp);
    }
    else{
      const temp = (this.props.temp * 1.8) + 32;
      this.setState({scaleValue : '°C'});
      this.props.on_click(temp);

    }
 }
 render(){
   return(
     <div>
        <span>{this.props.temp ? this.props.temp : '' }</span>
        <span onClick={()=>this.toggleScale()}>{this.props.temp ? this.state.scaleValue : ''}</span>
     </div>
   )
 }
}
export default LocalWeather
