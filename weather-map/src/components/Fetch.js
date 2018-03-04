import React from 'react';
import LocalWeather from './LocalWeather';
import Icon from './Icon';

class Fetch extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.selectHandler = this.selectHandler.bind(this);
  }
  async componentDidMount(){
    console.log(this.props.lat);
    if(this.props.lat && this.props.lon){
      const res = await fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${this.props.lat}&lon=${this.props.lon}`);
      const data = await res.json();
      const temp =  data.main['temp'] ;
      const icon = data.weather[0].icon ;
      this.setState({temp:temp,icon:icon})
      console.log(this.state);
    }
    else {
      this.setState({temp:'',icon:''});
      console.log('nothing');
    }
  }
  selectHandler(temp){
    this.setState({temp:temp})
  }
  render(){
    return(
      <div>
      {this.state.temp && <LocalWeather temp={this.state.temp} on_click={this.selectHandler} />}
      {this.state.icon && <img src={this.state.icon} />}
      </div>
    )
  }
}

export default Fetch;
