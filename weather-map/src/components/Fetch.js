import React from 'react';
import LocalWeather from './LocalWeather';
import Icon from './Icon';

class Fetch extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.selectHandler = this.selectHandler.bind(this);
  }
  setStateAsync(){
    return new Promise((resolve)=>{
      this.setState(this.state,resolve)
    })
  }
  async componentDidMount(){
    if(this.props.lat && this.props.lon){
      const res = await fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${this.props.lat}&lon=${this.props.lon}`);
      const {data} = await res.json();
      const temp =  data.main['temp'] ;
      const icon = data.weather[0].icon ;
      await this.setStateAsync({temp:temp,icon:icon});
    }
    else {
      this.setStateAsync({temp:'',icon:''});
    }
  }
  selectHandler(temp){
    this.setState({temp:temp})
  }
  render(){
    return(
      <div>
      <LocalWeather temp={this.state.temp} on_click={this.selectHandler} />
      <Icon src={this.state.icon ? this.state.icon : ''} />
      </div>
    )
  }
}

export default Fetch;
